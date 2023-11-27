import "./Datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { orderColums } from "../../datatablesource";
import React, { useEffect, useState } from "react";
import axios from "axios";

const DatabaseOrder = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api-order")
      .then((response) => {
        setData(response.data.data.orders);
      })
      .catch((error) => {
        console.error("Error fetching order:", error);
      });
  }, []);
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/api-order/${id}`)
      .then((response) => {
        setData(data.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting order:", error);
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
      <DataGrid
        className="datagrid"
        rows={data}
        columns={orderColums.concat(actionColumn)}
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

export default DatabaseOrder;
