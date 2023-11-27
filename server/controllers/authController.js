const UserDAO = require('../DAOs/userDaos')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const signToken = (id, username, role) => {
    return jwt.sign(
        {
            id: id,
            username: username,
            role:role
        },
        process.env.JWT_SECRET,
        { expiresIn:  process.env.JWT_EXPIRED_IN }
    )
}

exports.login = async (req, res) => {
    try {
        const form = req.body;
        // 1. check if form is valid
        if (!form.password || !form.username) {
            return res.status(403).json({
                code: 403,
                msg: `Invalid params`
            });
        }
        // 2. check if user exists
        const user = await UserDAO.getUserbyUserName(form.username);
        if (!user) {
            return res.status(401).json({
                code: 401,
                msg: `Invalid user - ${form.username}`
            });
        }
        // 3. check if password is valid
        const isValidPassword = await bcrypt.compare(form.password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({
                code: 401,
                msg: 'Invalid authentication'
            });
        }
        // 4. get JWT & response to user
        const token = signToken(user.id, user.username, user.roles);
        res.status(200).json({
            code: 200,
            msg: 'OK',
            data: {
                user,
                token,
            },
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({
            code: 500,
            msg: e.toString()
        });
    }
}

exports.signup = async (req, res) => {
    try {
      const form = req.body;
  
      if (form.password !== form.repeatPassword) {
        return res.status(403).json({
          code: 403,
          msg: "Invalid password",
        });
      }
  
      // Hash the user's password before saving it
    //   const saltRounds = 10;
    //   const hashedPassword = await bcrypt.hash(form.password, saltRounds);
    //   form.password = hashedPassword;
  
      await UserDAO.createNewUser(form);
      let user = await UserDAO.getUserbyUserName(form.username);
      res.status(201).json({
        status: "success",
        data: {
          user,
        },
      });
    } catch (e) {
      console.error(e);
      res.status(500).json({
        code: 500,
        msg: e.toString(),
      });
    }
  };

exports.protect = async (req, res, next) => {
    try {
        // 1) Getting token from header "Authorization"
        let token;
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            //Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjcsInVzZXJuYW1lIjoiaGVsbG8iLCJpYXQiOjE2ODE5OTk5NTEsImV4cCI6MTY4MjAyMTU1MX0.oRy1zeztmjsYjR0_qU6niKz2kNXpu50GQked9cvJrTQ
            token = req.headers.authorization.split(' ')[1];
        }
        if (!token) {
            return res.status(401).json({
                code: 401,
                msg: 'You are not logged in! Please log in to get access.'
            });
        }
        // 2) Verification token
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        console.log("payload:", payload);
        // 3) Check if user still exists
        const currentUser = await UserDAO.getUserInfoById(payload.id);
        if (!currentUser) {
            return res.status(401).json({
                code: 401,
                msg: `Invalid authentication`
            });
        }
        req.user = currentUser;
        next();
    } catch (e) {
        console.error(e);
        return res.status(500).json({
            code: 500,
            msg: e.toString()
        });
    }
}

exports.restrictTo = (...roles) => {
    return async (req, res, next) => {
        if (!roles.includes(req.user.roles)) {
            return res.status(403).json({
                code: 403,
                msg: 'You do not have permission to perform this action'
            });
        }
        next();
    }
}
