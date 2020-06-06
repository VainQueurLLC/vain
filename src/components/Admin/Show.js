import React,{Component} from 'react';
import Card from './Card.js'
import Scroll from '../Scroll.js'
class Show extends Component {
	constructor(props){
		super(props);
		this.state = {
			showUsers:false,
			users:[],
			returned:false
		}
	}
	  changeU = () =>{
  	this.setState({showUsers:true})
  }
  onShow = () => {
    fetch('https://boiling-journey-45968.herokuapp.com/showuser', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
      })
    })
      .then(response => response.json())
      .then(user => {
      	this.setState({users:user})
      	this.setState({returned:true})
      	console.log(this.state.users)
      })
      .catch(err => console.log)
  }
  onHide = () =>{
  	this.setState({showUsers:false})
  }
	render(){
				let robots = this.state.users;
		if(this.state.showUsers===true)
		{
		return(
			<div>
		<input
                onClick={this.onShow}
                className="f3 ml2 link dim ph3 pv2 mb2 dib white bg-blue"
                type="submit"
                value="Show All Users"
              />
              <input
                onClick={this.onHide}
                className="f3 ml2 link dim ph3 pv2 mb2 dib white bg-blue"
                type="submit"
                value="Hide All Users"
              />
              <Scroll>
              {  this.state.users.length===0
			?<div className="white v-mid"></div>
            	:(
            	robots.map((user,i) => {
				return (
					<Card 
					key={i} 
					id={robots[i].id} 
					name ={robots[i].name} 
					email={robots[i].email}
					joined={robots[i].joined}
					phone={robots[i].phone}
					entries={robots[i].entries}
					/>
				);
			})
            		)
		}
              </Scroll>
		</div>
		);
	}
	else {
		return  <button class="f3 link dim ph3 pv2 mb2 dib white bg-green" onClick={this.changeU}>Show Users</button>
	}
	}
}
export default Show;