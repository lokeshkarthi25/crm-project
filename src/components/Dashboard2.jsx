import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class Dashboard2 extends Component {	
	render() {
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", //"light1", "dark1", "dark2"
			title:{
				text: "Sales in (%) Monthwise"
			},
			axisY: {
				includeZero: true
			},
			data: [{
				type: "column", //change type to bar, line, area, pie, etc
				//indexLabel: "{y}", //Shows y value on all Data Points
				indexLabelFontColor: "#5A5757",
				indexLabelPlacement: "outside",
				dataPoints: [
					{ label:"Jan", y: 71 },
					{ label:"Feb", y: 55 },
					{ label:"Mar", y: 50 },
					{ label:"Apr", y: 65 },
					{ label:"May", y: 71 },
					{label:"Jun", y: 68 },
					{ label:"Jul", y: 38 },
					{ label:"Aug", y: 92, indexLabel: "Highest" },
					{ label:"Sep", y: 54 },
					{ label:"Oct", y: 60 },
					{ label:"Nov", y: 21 },
					{ label:"Dec", y: 49 },
					
				]
			}]
		}
		
		return (
		<div style={{
			position:"absolute",
			top:"220px",
			width:"35%",
			height:"225px",
			left:"270px"}}>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
				/* containerProps={{ width: '100%', height: '300px' }} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
 
		</div>
		);
	}
}
export default Dashboard2
                          
