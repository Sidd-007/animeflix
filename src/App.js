import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests'
import Banner from './Banner';
import Nav from './Nav'

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
