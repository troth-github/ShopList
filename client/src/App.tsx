import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ShopListPage from './shop-list-page/shop-list-page';
import PageHeader from "./page-header/page-header";

function App() {
  return (
    <div className="App">
      <PageHeader />
      <Routes>
        <Route path="/" element={<ShopListPage />}>

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/*<Route path="*" element={<NoMatch />} />*/}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
