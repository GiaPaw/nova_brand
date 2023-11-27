import "./Single.scss"
import SidebarAdmin from "../../../components/SidebarAdmin/SidebarAdmin"
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin"
import Chart from "../../../components/Chart/Chart"
import List from "../../../components/Table/Table"

const Single = () => {
  return (
    <div className="single">
        <SidebarAdmin/>
        <div className="singleContainer">
          <NavbarAdmin/>
          <div className="top">
            <div className="left">
              <div className="editButton">Edit</div>
              <h1 className="title">Information</h1>
              <div className="item">
                <img 
                src="https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-cute.jpg?resize=560%2C560&ssl=1" 
                alt="" 
                className="itemImg" />
                <div className="details">
                  <h1 className="itemTitle">Van Pham</h1>
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">phamvan2003@gmail.com</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone:</span> 
                    <span className="itemValue">0794259155</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Adress:</span>
                    <span className="itemValue">Binh Thanh</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Birth:</span>
                    <span className="itemValue">22/05/2003</span>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="right">
              <Chart/>
            </div>
          </div>
          <div className="bottom">
            <h1 className="title">Last Transactions</h1>
            <List/>
          </div>
        </div>
    </div>
  );
};

export default Single;