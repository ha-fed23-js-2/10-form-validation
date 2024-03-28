import { useState } from 'react'

const Form = () => {
	// State variables for the form fields
	const [name, setName] = useState('')
	const [nameTouched, setNameTouched] = useState(false)


	// Validate values
	// Name: cannot be empty (string length > 0)
	const nameIsValid = name.length > 0
	const nameErrorMessage = nameIsValid ? '' : 'Please enter your name.'


	// CSS variables
	let nameErrorClass = 'error ', nameClass = ''
	if( !nameTouched ) {
		nameErrorClass += 'hidden'
	} else {
		nameErrorClass += nameIsValid ? 'hidden' : 'invalid'
		nameClass += nameIsValid ? 'valid' : 'invalid'
	}


	return (
		<div className="form">

			<section className="form-item">
				<label> Name </label>
				<input
					className={nameClass}
					value={name}
					onChange={event => setName(event.target.value)}
					onBlur={() => setNameTouched(true)}
					type="text"
					/>
				<p className={nameErrorClass}> {nameErrorMessage} &nbsp; </p>
			</section>

			<section className="form-item">
				<label> E-mail </label>
				<input type="text" />
				<p className="error"> Error message sometimes </p>
			</section>

			<button className="form-btn"> Save </button>

		</div>
	)
}

export default Form
