import React from 'react'
import 'tachyons'
const Card = ({id,name,email,joined,phone,entries,onSelect}) =>{
	return(
		<div onClick={()=>onSelect(id)} className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<div>
				<h2>{id}</h2>
				<h2>{name}</h2>
				<p>Email: {email}</p>
				<p>Date Joined: {joined}</p>
				<p>Phone: {phone}</p>
				<p>Points: {entries}</p>
				<input
                className="b ph3 pv2  input-reset ba b--black black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Select"
              />
			</div>
		</div>
		);
}
export default Card;