import './App.css'
import Row from './Row.js';
import requests from './requests.js';
import Banner from './Banner.js'
import Nav from './Nav.js'

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row
        title='TRENDING NOW'
        fetchUrl={requests.fetchTrending}
      />
      {/* <Row 
        title='TOP RATED MOVIES'
        fetchUrl={requests.fetchTopRatedMovies}
      /> */}
      <Row
        title='DOCUMENTARIES'
        fetchUrl={requests.fetchDocumentaries}
      />
      <Row
        title='ACTION MOVIES'
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title='COMEDY MOVIES'
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        title='ROMANCE'
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        title='HORROR MOVIES'
        fetchUrl={requests.fetchHorrorMovies}
      />
    </div>
  );
}

export default App;
