import React from "react";
import "./HomeAdmin.scss"
import SidebarAdmin from "../../../components/SidebarAdmin/SidebarAdmin";
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin";
import Widget from "../../../components/Widgets/Widget";
import Featured from "../../../components/Featured/Featured";
import Chart from "../../../components/Chart/Chart";
import Table from "../../../components/Table/Table";


const HomeAdmin = () => {
  return (
    <div className="homeAdmin">
        <SidebarAdmin/>
        <div className="homeContainer">
          <NavbarAdmin/>
          <div className="widgets">
            <Widget type= "user"/>
            <Widget type= "order"/>
            <Widget type= "erarning"/>
            <Widget type= "balance"/>

          </div>
          <div className="charts">
            <Featured/>
            <Chart/>
          </div>
          <div className="listContainer">
            <div className="listTitke">
              Latest Transactions
            </div>
            <Table/>
          </div>
        </div>
    </div>
  );
};

export default HomeAdmin;
