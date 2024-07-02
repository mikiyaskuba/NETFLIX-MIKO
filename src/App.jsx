

// import "./App.css";
// import Row from "./Row";
// import requests from "./requests";
// const API_KEY = "8b8e8f863fcfe9459aa0bcef9154e43f";
// function App() {
// 	return (
// 		<>
// 			<div className="App">
// 				<h1>Netflix clon</h1>
// 				{/* <Row
// 					title="NETFLIX ORIGINALS"
// 					fetchUrl={requests.fetchNetflixOriginals}
// 				/>
// 				<Row title="Terending Now" fetchUrl={requests.fetchTrending}/> */}
// 				{/* <Row
// 					title="Top Rated"
// 					fetchUrl={`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`}
// 				/>
// 				<Row
// 					title="Upcoming"
// 					fetchUrl={`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`}
// 				/> */}

// 			</div>
// 		</>
// 	);
// }

// export default App;
import React from "react";
import "./App.css"
import Row from "./Row";
  // Import the requests object
import Banner from "./Banner";
import Nav from "./Nav";
import requests from "./requests";

const App = () => {
    return (
			<div className="App">
				<Nav />
				<Banner />
				<Row
					title="Trending Now"
					fetchUrl={requests.fetchTrending}
					isLargeRow
				/>
				<Row
					title="Netflix Originals"
					fetchUrl={requests.fetchNetflixOriginals}
				/>
				<Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
				<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
				<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
				<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
				<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
				<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
			</div>
		);
};

export default App;
