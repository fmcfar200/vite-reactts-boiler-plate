import React, { FunctionComponent } from 'react'
import { StaticContext } from 'react-router'
import { RouteComponentProps } from 'react-router-dom'

export type AppRoute = {
	path: string
	component:
		| React.ComponentType<RouteComponentProps<any>>
		| React.ComponentType<any>
}
