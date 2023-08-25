import Header from "./Header";
import Sidemenu from "./Sidemenu";
import LeftDashboard from "./Sidemenu1";
import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    PieChart,
    Pie,
    LabelList,
    Label
} from "recharts";
import './css/setting.css'


const data = [
    {
        name: "Mon",
        uv: "2",
        pv: "1",
        // amt: 2400
    },
    {
        name: "Tue",
        uv: "2",
        pv: "7",
    },
    {
        name: "Wed",
        uv: "7",
        pv: "5",
    },
    {
        name: "Thu",
        uv: "8",
        pv: "3",
    },
    {
        name: "Fri",
        uv: "4",
        pv: "8",
    },
    {
        name: "Sat",
        uv: "2",
        pv: "5",
        amount: "10"
    },
    {
        name: "Sun",
        uv: "6",
        pv: "2",
        amount: "20"
    }
];
const data01 = [
    {
        "name": "Group A",
        "value": 400,
        "data": "5GB",
        "fill": "#D9D9D9"
    },
    {
        "name": "Group B",
        "value": 300,
        "fill": "#AAA",
        "left1": "100"
    },
];


const Setting = ()=>{
    return(
        <div className="main-container">
        <LeftDashboard/>
        {/* <div className='line'> 
        </div> */}
        <Sidemenu/>
        {/* <div className='line'> 
        </div> */}
        <Header/>


       <div className="main-graph-container">

      <div className="piechart-container">
        <PieChart width={730} height={250} margin={{ top: 200 }}>
                {/* <Tooltip /> */}
                <Legend iconType='line' />
                <Pie endAngle={180} data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={200} innerRadius={160}
                    fill="fill" >

                </Pie>
            </PieChart>
      </div>
        
        <div  className="main-barchart-container">
            <div className="barchart-container">
                <p class="custom-select analytics">Analytics</p>
                <div class="custom-select select-options">
                        <select>
                            <option value="0">This Weeks:</option>
                            <option value="1">Audi</option>
                            <option value="2">BMW</option>
                            <option value="3">Citroen</option>
                            <option value="4">Ford</option>
                            <option value="5">Honda</option>
                            <option value="6">Jaguar</option>
                            <option value="7">Land Rover</option>
                        </select>
                    </div>
            </div>
            <BarChart
                width={600}
                height={350}
                data={data}
                padding={{
                    top: 25,
                    right: 30,
                    left: 30,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="4 0" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis dataKey={"amount"} />
                {/* <Tooltip /> */}
                <Legend layout="vertical" iconType="line" height={50} align="center" verticalAlign="top" />
                <Bar dataKey="pv" stackId="a" fill="white" margin={{top:100}} fill-opacity="0.5"/>
                <Bar dataKey="uv" stackId="a" fill="#AAA" fill-opacity="0.5"/>
            </BarChart>
        </div>
       </div>

        </div>
    )
}
export default Setting;