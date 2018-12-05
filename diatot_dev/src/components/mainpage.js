import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import { NavLink } from 'react-router-dom';
import './App.css';
import Users from './users/Users.js';
import bloodglucose from './img/bloodglucose.png';
import blood_drop from './img/blood_drop.png';
import sensor_icon_50p from './img/sensor_icon_50p.png';
import sensor_icon_dark_50p from './img/sensor_icon_dark_50p.png';


export default class mainpage extends Component {
  /*
  constructor(props){
  super(props);
  this.state = {
  name: "Ola"
  };
  this.calculate = this.calculate.bind(this);
  }

  calculate(){
  console.log("Hej");
  this.setState({name:"Jacob"});
  }
  */

  constructor(){
    super();
    this.state = {
      sensorIcon: sensor_icon_50p
    };

    this.sensorDark = this.sensorDark.bind(this);
  }

  sensorDark(){

    this.setState({
      sensorIcon: sensor_icon_dark_50p
    })
  }


  render() {
    return (
      <div>
        {/* using CommonJS modules*/}
        {/*var Media = require("react-media");*/}
        <div>
          <Layout fixedHeader>
            <Content className="content">
              <div className="bloodgraph"> <img className="graph" src={bloodglucose} alt="bloodglucose" /></div>

              <NavLink to="newlog" style={{textDecoration: 'none'}}>
{/* IKON FÖR + */}                <div className="mainButton">+ New log</div>
              </NavLink>

              {/* {this.state.name} */}
              {/*    <div className="controlGlucose">
                <p>Control Glucose
                </p>
                </div>  */}
                {/*    <Users title="Users List"/>    */}
                <div className="center">
                  <div className="smallButton">CGM <img className="sensor_icon" src={this.state.sensorIcon} alt="sensor_icon" /></div>
{/* SLOPA DENNA TYCKER JAG */} <div className="smallButton">BG <img className ="blood_drop" src={blood_drop} alt="blood_drop" /></div>
                </div>
            </Content>
          </Layout>
        </div>
      </div>
    );
  }
}