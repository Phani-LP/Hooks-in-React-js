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
