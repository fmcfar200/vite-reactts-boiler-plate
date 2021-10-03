/* eslint-disable react/react-in-jsx-scope */
import { connect } from 'react-redux'
import { RootState } from '../redux/store'

interface StateProps {
	isOn: boolean
}

interface DispatchProps {
	toggleOn: () => void
}

interface OwnProps {
	backgroundColor: string
}

type Props = StateProps & DispatchProps & OwnProps

const mapState = (state: RootState) => ({
	isOn: state.isOn,
})

const mapDispatch = {
	toggleOn: () => ({ type: 'TOGGLE_IS_ON' }),
}

const MyComponent = (props: Props) => (
	<div style={{ backgroundColor: props.backgroundColor }}>
		<button onClick={props.toggleOn}>
			Toggle is {props.isOn ? 'ON' : 'OFF'}
		</button>
	</div>
)

// Typical usage: `connect` is called after the component is defined
export default connect<StateProps, DispatchProps, OwnProps>(
	mapState,
	mapDispatch
)(MyComponent)
