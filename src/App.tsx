import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Three from './views/Three'

function App() {
	return (
		<div>
			<Navbar />
			<Switch>
				<Route path='/' exact component={() => <h1>MAIN</h1>} />
				<Route path='/map' exact component={() => <h1>MAP</h1>} />
				<Route path='/three' exact component={Three} />
			</Switch>
		</div>
	)
}

export default App
