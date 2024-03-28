

const Form = () => {

	return (
		<div className="form">

			<section className="form-item">
				<label> Name </label>
				<input type="text" />
				<p className="error"> Error message sometimes </p>
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
