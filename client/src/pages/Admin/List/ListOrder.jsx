import "./ListAdmin.scss";
import SidebarAdmin from "../../../components/SidebarAdmin/SidebarAdmin";
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin";
import DatabaseOrder from "../../../components/Datatable/DatabaseOrder";

const ListOrder = () => {
  return (
    <div className="listAdmin">
      <SidebarAdmin />
      <div className="listContainer">
        <NavbarAdmin />
        <DatabaseOrder />
      </div>
    </div>
  );
};

export default ListOrder;
