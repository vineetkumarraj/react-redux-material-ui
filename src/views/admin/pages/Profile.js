import React, { Component, Fragment } from 'react';
import { Paper } from '@material-ui/core';
import BreadCrumb from '../../../components/BreadCrumb'
import Chart from "react-apexcharts";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }

  render() {
    return (
        <Fragment>
            <BreadCrumb page={[{url: 'Profile', link: '/profile', active: false}, {url: 'View', link: '/profile', active: true}]} />
            <Paper className={this.props.classes.content}>
            <div className="app">
                <div className="row">
                <div className="mixed-chart">
                    <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    width="700px"
                    />
                </div>
                </div>
            </div>
            </Paper>
        </Fragment>
    );
  }
}

export default Profile;