import "./Datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";


const Datatable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api-user")
      .then((response) => {
        setData(response.data.data.users);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const handleDelete = (id) =>{
    axios
      .delete(`http://localhost:3001/api-user/${id}`)
      .then((response) => {
        setData(data.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  }
    const actionColumn = [
        {
            field: "action", 
            headerName: "Action,", 
            width: 200, 
            renderCell:(params) =>{
                return(
                    <div className="cellAction">
                       <Link to={`/users/${params.row.id}`} style={{textDecoration:"none"}}>
                       <div className="viewButton">View</div>
                      </Link>
                        
                        <div className="deleteButton" onClick={() => handleDelete(params.row.id)}> Delete</div>
                    </div>
                )
            }
        }
    ]
    return (
      <div className="datatable">
        <div className="datatableTitle">
          <Link to = "/users/news" className="link">
            Add New User
            </Link>
        </div>
          <DataGrid
          className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
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