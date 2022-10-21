import React from 'react'
import {useState} from 'react'
const Counter=()=>{
	const [counter, setCounter]=useState(4)
	const inc=()=>{
		setCounter(counter+1)
	}
	const dec=()=>{
		setCounter(counter-1)
	}
	return(
		<div>
			<h1>Counter {counter}</h1>
			<button onClick={inc}>Increase</button>
			<button onClick={dec}>Decrease</button>
		</div>
	)
}
export default Counter
