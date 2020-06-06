import React,{Component} from 'react';
import Show from './Show.js'
import Searche from './Searche.js'
class Admin extends Component {
	constructor(props){
		super(props);
		this.state = {
			showUsers:false,
			users:[],
			returned:false
		}
	}
	render(){
		return(
			<div>
			<Searche/>
			<Show/>
			
	  </div>
		);
	}
}
export default Admin