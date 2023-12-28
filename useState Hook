import { useState } from 'react'

function App() {
	const [data, setData] = useState('')
	const saver = (e) => {
		const newvalue = e.target.value
		setData(newvalue)
	}
	return (
		<div>
			<center>
				Name: <input type="text" name="name" onChange={saver} />
				<hr />
				Hello {data} !
				<hr />
			</center>
		</div>
	)
}
export default App
