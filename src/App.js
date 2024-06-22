import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ChampionsPage from './pages/ChampionsPage/ChampionsPage';
import ItemsPage from './pages/ItemsPage/ItemsPage';
import StoriesPage from './pages/StoriesPage/StoriesPage';
import NewsPage from './pages/NewsPage/NewsPage';
import Header from './components/Header/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/champions" element={<ChampionsPage />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </Router>
  );
};

export default App;

