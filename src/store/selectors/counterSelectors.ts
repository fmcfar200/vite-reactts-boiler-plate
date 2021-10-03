import { RootState } from '../index'

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value
