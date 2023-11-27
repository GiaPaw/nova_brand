import "./Datatable.scss";

import { DataGrid } from "@mui/x-data-grid";
import { productCategoryColums } from "../../datatablesource";
import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import axios from "axios";

const Datatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make a GET request to your Express.js backend endpoint to fetch all products
    axios
      .get("http://localhost:3001/api-category")
      .then((response) => {
        setData(response.data.data.categories);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/api-category/${id}`)
      .then((response) => {
        // Remove the deleted product from the state
        setData(data.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting product category:", error);
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
            pathname: "/productCategoryAdmin/news",
          }}
          className="link"
          title="Add new product categoty"
        >
          Add new Product Category
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={productCategoryColums.concat(actionColumn)}
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
