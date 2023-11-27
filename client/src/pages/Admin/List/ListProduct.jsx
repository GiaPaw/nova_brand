import "./ListProduct.scss";
import SidebarAdmin from "../../../components/SidebarAdmin/SidebarAdmin";
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin";
import DatatableProduct from "../../../components/Datatable/DatatableProduct";
import DatatableProductCategory from "../../../components/Datatable/DatatableProductCategory";
import DatatableProductDetail from "../../../components/Datatable/DatatableProductDetail";
import Tab from "../../../components/Tab/Tab";

const ListProduct = () => {
  return (
    <div className="listProduct">
      <SidebarAdmin />
      <div className="listContainer">
        <NavbarAdmin />
        <Tab>
          <DatatableProductDetail lable="Product Detail" />
          <DatatableProduct lable="Product" />
          <DatatableProductCategory lable="Product Category" />
        </Tab>
      </div>
    </div>
  );
};

export default ListProduct;
