
import "./ListAdmin.scss"
import SidebarAdmin from "../../../components/SidebarAdmin/SidebarAdmin"
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin"
import Datatable from "../../../components/Datatable/Datatable";

const ListAdmin = () => {
  return (
    <div className="listAdmin">
        <SidebarAdmin/>
        <div className="listContainer">
          <NavbarAdmin/>
          <Datatable/>
        </div>
    </div>
  );
};

export default ListAdmin;