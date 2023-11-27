const express = require('express')
const app = express()
const port = 3001
const connectDB = require('./config/connectDatabase')
const customMiddleware = require('./config/customMiddleware')
const cors =require('cors')
const userRouter = require('./routes/user.route')
const productRouter = require('./routes/product.route')
const categoryRouter = require("./routes/category.route")
const detailRouter = require("./routes/detail.route")
const orderRouter = require('./routes/order.route')
const orderDetailRouter = require("./routes/orderDetail.route")

const detailController = require('./controllers/detailController')
const dotenv = require('dotenv')
dotenv.config({
    path: './.env'
})

app.use(express.json());
app.use(cors())
const db = require('./models')

//custom Middleware
customMiddleware();

//connect database
connectDB();

//routers
app.use('/api-user',userRouter)
app.use('/api-product',productRouter)
app.use('/api-category', categoryRouter)
app.use('/api-detail', detailRouter)
app.use('/api-detailmen', detailRouter.get(detailController.getAllDetailMen))
app.use('/api-detailwomen', detailRouter.get(detailController.getAllDetailWomen))
app.use('/api-order', orderRouter)
app.use('/api-orderDetail', orderDetailRouter)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


