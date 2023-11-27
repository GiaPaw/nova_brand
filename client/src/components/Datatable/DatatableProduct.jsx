import "./Datatable.scss";

import { DataGrid } from "@mui/x-data-grid";
import { productColums } from "../../datatablesource";
import { Link } from "react-router-dom";

import { React, useEffect, useState } from "react";
import axios from "axios";

const Datatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make a GET request to your Express.js backend endpoint to fetch all products
    axios
      .get("http://localhost:3001/api-product")
      .then((response) => {
        setData(response.data.data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/api-product/${id}`)
      .then((response) => {
        // Remove the deleted product from the state
        setData(data.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action,",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              {" "}
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        <Link
          to={{
            pathname: "/productAdmin/news",
          }}
          className="link"
          title="Add new product"
        >
          Add new Product
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={productColums.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
