import React from 'react'
import logo from '../../logo.svg'
import { Button } from 'react-bootstrap'
import { increment } from '../../store/actions/counterActions'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { selectCount } from '../../store/selectors/counterSelectors'

const Home: React.FC = () => {
	const count = useAppSelector(selectCount)
	const dispatch = useAppDispatch()
	const dispatchIncrement = () => dispatch(increment())

	return (
		<div>
			<div className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Hello Vite + React!</p>
				<p>
					<button type="button" onClick={dispatchIncrement}>
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
			</div>
		</div>
	)
}

export default Home
