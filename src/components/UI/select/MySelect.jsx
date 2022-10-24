import React from 'react'

const MySelect=({options, defaultValue, value, onChange})=>{
	const changeValue=(e)=>{
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
