import React from 'react'
import ReactDOM from 'react-dom'
import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledNavbar = styled.nav`
	position: absolute;
	width: 100%;
	top: 0;
	left: 0;
	height: 20px;
	opacity: 0.8;
	padding: 5px 20px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	background-color: #e0e0e0;
	font-family: 'Space Mono', sans-serif;
	font-weight: 400;
	font-size: 1rem;
	letter-spacing: 4px;
`
interface Props {}

const Navbar: React.FC<Props> = () => {
	return ReactDOM.createPortal(
		<StyledNavbar>
			<Link to='/'> Main</Link>
			<Link to='/map'> Map</Link>
			<Link to='/three'> 3D</Link>
		</StyledNavbar>,
		document.querySelector('#portal')!
	)
}

export default Navbar
