
import "./NavbarAdmin.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';  
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const NavbarAdmin = () => {
  const {dispatch} = useContext(DarkModeContext)
  return (
      <div className="navbarAdmin">
        <div className="wrapper">
        <div className="search">
            <input type="text" placeholder="Search..."/>
            <SearchOutlinedIcon className="icon"/>
          </div>
          <div className="items">
            <div className="item">
              <LanguageOutlinedIcon className="icon"/>
              English
            </div>
            <div className="item">
              <DarkModeOutlinedIcon className="icon" onClick={()=> dispatch({type:"TOGGLE"})}/>
            
            </div>
            <div className="item">
              <NotificationsNoneOutlinedIcon className="icon"/>
              <div className="counter">1</div>
            </div>
            <div className="item">
              <ChatBubbleOutlineOutlinedIcon className="icon"/>
              <div className="counter">2</div>
            </div>
            <div className="item">
              <ListOutlinedIcon className="icon"/>
            </div>
            <div className="item">
              <img
               src="https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-cute.jpg?resize=560%2C560&ssl=1"
               alt="" 
               className="avatar"/>
            </div>
          </div>
        </div>
          
      </div>
  );
};

export default NavbarAdmin;