import React, { Component } from "react";
import AirplaneIcon from "./AirplaneIcon";
import "./Dashboard.css";
import DashboardCardItem from "./DashboardCardItem";
import RadioIcon from "./RadioIcon";

const subjectList = [
  {
    id: 1,
    name: "Engine",
    description:
      "An engine or motor is a machine designed to convert one form of energy into mechanical energy",
    link: "/interactive-tutorial/engine/overview",
    icon: "bi bi-gear-wide-connected",
  },
  {
    id: 2,
    name: "Airframe",
    description:
      "The mechanical structure of an aircraft is known as the airframe. Includes fuselage, undercarriage, empennage and wings.",
    link: "/interactive-tutorial/airframe/overview",
    iconComp: <AirplaneIcon />,
  },
  {
    id: 3,
    name: "Electric Components",
    description:
      "The electrical systems, in most helicopters, reflect the increased use of sophisticated avionics and other electrical accessories.",
    link: "/interactive-tutorial/electric-components/overview",
    icon: "bi bi-lightning-charge",
  },
  {
    id: 4,
    name: "Instruments",
    description:
      "The first prototype Bell 212 had an instrument flight rules (IFR) instrument kit with a large fin on the roof to change the aircraft’s turning operation.",
    link: "/instoverview",
    icon: "bi bi-sim",
  },
  {
    id: 5,
    name: "Radio",
    description:
      "The instrument flight rules (IFR) avionics system includes twin allied signal KTR 908 720-channel, very-high-frequency transceivers etc.",
    link: "/radoverview",
    iconComp: <RadioIcon />,
  },
];

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0 text-dark">Trades List</h1>
                </div>
                {/* /.col */}
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    {/* <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Dashboard v1</li> */}
                  </ol>
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </div>
          {/* /.content-header */}
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              {/* Small boxes (Stat box) */}
              <div
                style={{
                  display: "grid",
                  gap: "15px",
                  gridTemplateColumns: "repeat(auto-fit, minmax(275px, 1fr))",
                }}
              >
                {subjectList.map((subject, index) => (
                  <DashboardCardItem key={index} subject={subject} />
                ))}
              </div>
              {/*  */}
              {/* 
              <div className="row">
                <div className="col-lg-3 col-6">
                  <div className="small-box bg-info bux">
                    <div className="inner">
                      <Link to="/layout"><h3>Engine</h3>
                        <p>An engine or motor is a machine designed to convert one form of energy into mechanical energy.</p></Link>

                    </div>
                    <div className="icon">

                    </div>
                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="small-box bg-success bux">
                    <div className="inner">
                      <Link to="/layout">   <h3>Airframe</h3>
                        <p>The mechanical structure of an aircraft is known as the airframe. Includes fuselage, undercarriage, empennage and wings.</p></Link>

                    </div>
                    <div className="icon">

                    </div>
                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="small-box bg-warning bux">
                    <div className="inner">
                      <Link to="/layout">   <h3>Electric <br></br> Components</h3>
                        <p>The electrical systems, in most helicopters, reflect the increased use of sophisticated avionics and other electrical accessories.</p></Link>

                    </div>
                    <div className="icon">

                    </div>
                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="small-box bg-danger bux">
                    <div className="inner">
                      <Link to="/layout"><h3>Instruments</h3>
                        <p>The first prototype Bell 212 had an instrument flight rules (IFR) instrument kit with a large fin on the roof to change the aircraft’s turning operation.</p></Link>

                    </div>
                    <div className="icon">

                    </div>
                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="small-box bg-info bux">
                  <div className="inner">
                    <Link to="/layout">   <h3>Radio</h3>
                      <p>The instrument flight rules (IFR) avionics system includes twin allied signal KTR 908 720-channel, very-high-frequency transceivers etc.</p></Link>

                  </div>
                  <div className="icon">

                  </div>
                  <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                </div>
              </div>
              */}
              <div className="row">
                <section className="col-lg-7 connectedSortable"></section>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
