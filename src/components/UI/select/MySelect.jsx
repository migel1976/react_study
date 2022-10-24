import React from 'react'

const MySelect=({options, defaultValue, value, onChange})=>{
	console.log('options',options)
	const changeValue=(e)=>{
		console.log('MySelect onChange is ', e.target.value)
	 onChange(e.target.value)	
	}
	return(
		<select 
			value={value}
			onChange={changeValue}
		>
			<option disabled value=''>{defaultValue}</option>
			{options.map(option=>
				<option key={option.value} value={option.value}>
					{option.name}
				</option>
			)}
		</select>
	)
}
export default MySelect
