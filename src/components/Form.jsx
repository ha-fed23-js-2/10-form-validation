import { useState } from 'react'
import Joi from 'joi'

const Form = () => {
	// State variables for the form fields
	// const [formData] = useState({ name, email })
	const [name, setName] = useState('')
	const [nameTouched, setNameTouched] = useState(false)
	const [email, setEmail] = useState('')
	const [emailTouched, setEmailTouched] = useState(false)


	// Validate values
	// Name: cannot be empty (string length > 0)
	const nameIsValid = name.length > 0
	const nameErrorMessage = nameIsValid ? '' : 'Please enter your name.'

	const emailSchema = Joi.string().email({ tlds: false })
	const emailResult = emailSchema.validate( email )  // {value, error}
	const emailIsValid = !emailResult.error  // email is valid when there is no error
	const emailErrorMessage = emailResult.error?.message
	// console.log('Joi validate result: ', emailResult.error?.message);

	const formIsValid = nameIsValid && emailIsValid


	// CSS variables
	let nameErrorClass = 'error ', nameClass = ''
	if( !nameTouched ) {
		nameErrorClass += 'hidden'
	} else {
		nameErrorClass += nameIsValid ? 'hidden' : 'invalid'
		nameClass += nameIsValid ? 'valid' : 'invalid'
	}
	let emailErrorClass = 'error ', emailClass = ''
	if( !emailTouched ) {
		emailErrorClass += 'hidden'
	} else {
		emailErrorClass += emailIsValid ? 'hidden' : 'invalid'
		emailClass += emailIsValid ? 'valid' : 'invalid'
	}


	// Events
	const handleSubmit = () => {
		const formData = {
			name,  // samma som "name: name"
			email
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
				<div className={'input-container ' + emailClass}>
				<input
					className={emailClass}
					value={email}
					onChange={event => setEmail(event.target.value)}
					onBlur={() => setEmailTouched(true)}
					type="email"
					/>
				</div>
				<p className={emailErrorClass}> {emailErrorMessage} &nbsp; </p>
			</section>

			<button className="form-btn"
				disabled={!formIsValid}
				onClick={handleSubmit}
				> Register to newsletter </button>

		</div>
	)
}

export default Form
