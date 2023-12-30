//The useReducer Hook is used to store and update states, just like the useState Hook. 
//It accepts a reducer function as its first parameter and the initial state as the second. 
//useReducer returns an array that holds the current state value and a dispatch function to 
//which you can pass an action and later invoke it.

import { useReducer } from 'react'
const reducer = (data, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return { count: data.count + 1, showText: data.showText }
		case 'toggleShowText':
			return { count: data.count, showText: !data.showText }
		default:
			return data
	}
}

function App() {
	const [data, dispatch] = useReducer(reducer, { count: 0, showText: true })

	return (
		<>
			<div>
				<center>
                count:{data.count}<br/>
					<button
						onClick={() => {
							dispatch({ type: 'INCREMENT' })
							dispatch({ type: 'toggleShowText' })
						}}
					>
						Click Me
					</button><br/>
					{data.showText && <p>This is Text.</p>}<br/>
                    
				</center>
			</div>
		</>
	)
}

export default App
