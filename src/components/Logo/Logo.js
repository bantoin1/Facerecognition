import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png'
import './Logo.css'

const Logo = () => {
	return(
		<div className='ma4 mt0 fl w-90 pa2' >
			<Tilt>
				<div className='fl w-10 pa2 Tilt br2 shadow-2 pa3' style={{ height: '150px', width: '150px' }}>
			    	<img style ={{paddingTop:'5px'}}src ={brain} alt="logo" /> 
			    </div>
			</Tilt>
		</div>
	);
}

export default Logo;