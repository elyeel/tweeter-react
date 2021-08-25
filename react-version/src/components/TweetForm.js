export default function TweetForm() {
	const text = 'What are you humming about....';
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log('Dang!');
	};

	return (
		<section className="newtweet">
			<form
				method="post"
				action="/tweets"
				className="newtweet__form"
				onSubmit={handleSubmit}
			>
				<textarea className="form__textarea" name="text" placeholder={text} />
				<input type="submit" value="Tweet" className="form__input" />
				<span className="form__counter">140</span>
			</form>
		</section>
	);
}
