import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import Dashboard2 from './Dashboard2';
import Dashboard3 from './Dashboard3';
import Dashboard4 from './Dashboard4';
import DashNav from './DashNav';
import DashboardTop from './DashboardTop';
import DashboardTop2 from './DashboardTop2';
import DashboardTop3 from './DashboardTop3';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Dashboard extends Component {
	render() {
		const options = {
			animationEnabled: true,
			title: {
				text: "Customer Satisfaction"
			},
			subtitles: [{
				text: "71% Positive",
				verticalAlign: "center",
				fontSize: 24,
				dockInsidePlotArea: true
			}],
			data: [{
				type: "doughnut",
				showInLegend: true,
				indexLabel: "{name}: {y}",
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ name: "Unsatisfied", y: 5 },
					{ name: "Very Unsatisfied", y: 31 },
					{ name: "Very Satisfied", y: 40 },
					{ name: "Satisfied", y: 17 },
					{ name: "Neutral", y: 7 }
				]
			}]
		}
		return (
			<div style={{
				minHeight:"120vh",
			  }}>
				<DashboardTop/>
				<DashboardTop2/>
				<DashboardTop3/>
				<DashNav/>
				<Dashboard2/>
				<Dashboard3/>
				<Dashboard4/>
		<div style={{
			position:"absolute",
			top:"220px",
			width:"35%",
			height:"225px",
			right:"0"}}>
			<CanvasJSChart options = {options}/>
		</div>
		</div>
		);
	}
}
export default Dashboard