import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Dashboard3 extends Component {
	render() {
		const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "Visitors through SocialMedia"
			},
			axisX: {
				title: "Social Network",
				reversed: true,
			},
			axisY: {
				title: "New Visitors",
				includeZero: true,
				labelFormatter: this.addSymbols
			},
			data: [{
				type: "bar",
				dataPoints: [
					{ y:  20000, label: "Facebook" },
					{ y:  18000, label: "YouTube" },
					{ y:  80000, label: "Instagram" },
					{ y:  56300, label: "Qzone" },
					{ y:  37600, label: "Weibo" },
					{ y:  33600, label: "Twitter" },
					{ y:  33000, label: "Reddit" }
				]
			}]
		}
		return (
		<div style={{
			position:"absolute",
			top:"700px",
			width:"35%",
			height:"225px",
			left:"270px"}}>
			<CanvasJSChart options = {options}/>
		</div>
		);
	}
	addSymbols(e){
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)), 0);
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}
}
export default Dashboard3