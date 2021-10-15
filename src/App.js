import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import SearchPage from './SearchPage';
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
		// BEM class naming convention
    <div className="App">
			<Router>
				<Header/>
				
				<Switch>
					
					<Route path="/search/:searchTerm">
						<div className="app_page">
							<Sidebar />
							<SearchPage />
						</div>
					</Route>
					<Route exact path="/">
						<div className="app_page">
							<Sidebar />
							<RecommendedVideos />
						</div>
					</Route>
				</Switch>
			</Router>
			
			{/* Header -> <Header /> */}
			{/* Sidebar -> <Sidebar /> */}
			{/* RecommendedVideos */}
    </div>
  );
}

export default App;
