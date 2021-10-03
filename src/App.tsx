import React from 'react'
import { useAppSelector, useAppDispatch } from './store/hooks'
import logo from './logo.svg'
import './App.css'
import { increment } from './store/actions/counterActions'
import { selectCount } from './store/selectors/counterSelectors'

function App(): JSX.Element {
	const count = useAppSelector(selectCount)
	const dispatch = useAppDispatch()

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Hello Vite + React!</p>
				<p>
					<button type="button" onClick={() => dispatch(increment())}>
						count is: {count}
					</button>
				</p>
				<p>
					Edit <code>App.tsx</code> and save to test HMR updates.
				</p>
				<p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
					{' | '}
					<a
						className="App-link"
						href="https://vitejs.dev/guide/features.html"
						target="_blank"
						rel="noopener noreferrer"
					>
						Vite Docs
					</a>
				</p>
			</header>
		</div>
	)
}

export default App
