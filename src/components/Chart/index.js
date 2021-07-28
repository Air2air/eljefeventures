import React, { useState } from "react";
import {Button}  from "react-bootstrap";
import ChartBar from "./../ChartBar";
import ChartPie from "./../ChartPie";
import { bardata1, bardata2 } from "../../data/bardata.js";
import "./styles.scss";


const dataSource1 = bardata1;
const dataSource2 = bardata2;

const ChartBarComponent = (props) => {
  const [toggle, setToggle] = useState(0);

  return (
    <>
      <div className="chart-component-wrapper px-4 mb-4">
        <div className="chart-header d-flex align-items-center justify-content-between">
          <h4>{props.title}</h4>
          <div>
            <Button className="btn mr-2" onClick={() => setToggle(1)}>Toggle State</Button>
            <Button className="btn"  onClick={() => setToggle(0)}>Toggle State</Button>
          </div>
        </div>
        {props.chartType === 'bar' && <ChartBar dataSource={toggle === 1 ? dataSource1  : dataSource2 } />}
        {props.chartType === 'pie' && <ChartPie dataSource={toggle === 1 ? dataSource1  : dataSource2 } />}
      </div>
    </>
  );
};

export default ChartBarComponent;
