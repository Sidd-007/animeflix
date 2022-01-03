import React from 'react';
import './App.css';
import Row from './components/Row/Row';
import requests from './context/requests'
import Banner from './components/Banner/Banner';
import Nav from './components/Nav/Nav'

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="Popular" fetchUrl={requests.fetchPopular} />
      <Row title="Airing" fetchUrl={requests.fetchAiring} />
      <Row title="Upcoming" fetchUrl={requests.fetchUpcoming} />
      <Row title="Manga" fetchUrl={requests.fetchManga} />
    </div>
  );
}

export default App;
