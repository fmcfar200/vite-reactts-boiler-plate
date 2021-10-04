import React, { FC } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../favicon.svg'

const NavigationBar: FC = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="/">
					<img
						alt=""
						src={logo}
						width="30"
						height="30"
						className="d-inline-block align-top"
					/>{' '}
					Vite-React-TS-Redux Boilerplate
				</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link as={Link} to="/">
						Home
					</Nav.Link>
					<Nav.Link as={Link} to="/about">
						About
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	)
}

export default NavigationBar
