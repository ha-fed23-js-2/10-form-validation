import { useState } from 'react'

const Form = () => {
	// State variables for the form fields
	const [name, setName] = useState('')
	const [nameTouched, setNameTouched] = useState(false)


	// Validate values
	// Name: cannot be empty (string length > 0)
	const nameIsValid = name.length > 0
	const nameErrorMessage = nameIsValid ? '' : 'Please enter your name.'

	const formIsValid = nameIsValid // TODO: add email...


	// CSS variables
	let nameErrorClass = 'error ', nameClass = ''
	if( !nameTouched ) {
		nameErrorClass += 'hidden'
	} else {
		nameErrorClass += nameIsValid ? 'hidden' : 'invalid'
		nameClass += nameIsValid ? 'valid' : 'invalid'
	}


	// Events
	const handleSubmit = () => {
		const formData = {
			name,  // samma som "name: name"
		}
		console.log('Data from form: ', formData)
		// Skicka datan dit den ska användas
		// Lifting state, Zustand, eller skicka till ett API
	}


	return (
		<div className="form">

			<section className="form-item">
				<label> Name </label>
				<div className={'input-container ' + nameClass}>
				<input
					className={nameClass}
					value={name}
					onChange={event => setName(event.target.value)}
					onBlur={() => setNameTouched(true)}
					type="text"
					/>
				</div>
				<p className={nameErrorClass}> {nameErrorMessage} &nbsp; </p>
			</section>

			<section className="form-item">
				<label> E-mail </label>
				<input type="text" />
				<p className="error"> Error message sometimes </p>
			</section>

			<button className="form-btn"
				disabled={!formIsValid}
				onClick={handleSubmit}
				> Register to newsletter </button>

		</div>
	)
}

export default Form
