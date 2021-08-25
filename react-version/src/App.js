import './App.css';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import TweetForm from './components/TweetForm';
import TweetList from './components/TweetList';

function App() {
	return (
		<div className="App">
			<Navigation />
			<Profile />
			<main className="container">
				<section className="newtweet">
					<TweetForm />
				</section>
				<section className="tweets">
					<TweetList />
				</section>
			</main>
		</div>
	);
}

export default App;
