import About from './components/about/about'
import Home from './components/home/home'
import { AppRoute } from './domain'

const routes: AppRoute[] = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/about',
		component: About,
	},
]

export default routes
