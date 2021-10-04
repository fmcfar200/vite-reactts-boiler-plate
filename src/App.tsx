import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NavigationBar from './components/shared/navbar'
import routes from './routes'
import './App.scss'

function App(): JSX.Element {
	return (
		<div className="App">
			<NavigationBar />
			<Switch>
				{routes.map((route, i) => (
					<Route
						key={i}
						exact={route.path === '/'}
						path={route.path}
						component={route.component}
					/>
				))}
			</Switch>
		</div>
	)
}

export default App
