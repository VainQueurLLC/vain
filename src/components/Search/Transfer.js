import React,{Component} from 'react';
class Transfer extends Component {
	constructor(){
		super();
		this.state = {
			amount:0
		}
	}
		numberChange = (event) =>{
			this.setState({amount:event.target.value})
		}
		render(){
			const{status,ent,onTransfer} = this.props
			const e = parseInt(ent)
			return(
				<div className="pa3 ba b--near-white bw2">
					<h1 className="white">Transfer Points</h1>
					<input 
						type='tel'
						className='pa3 ml3 ba b--green bg-lightest-blue' 
						placeholder='Enter Amount'
						onInput = {this.numberChange}
						min="0"
					/>
					{
						this.state.amount>0 && this.state.amount<e
					?<input
                		className="b ph3 pv2 ml2 input-reset ba b--white white bg-green grow pointer f4 dib"
                		type="submit"
                		value="Complete Transfer"
                		onClick={()=>onTransfer(this.state.amount)}
              		/>
              		:<div className="f4 white pa3 ">Amount is greater than your current balance or Equal to Zero</div>
              	}
              	{
              		status===true
              		?<div className="f4 white pa3 ">Transaction Completed</div>
              		:<div className="f4 white pa3 ">Transaction Not Completed/Started</div>
              	}
				</div>
				)
			}
		}
	
export default Transfer;