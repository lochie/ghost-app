import React from 'react';
import './App.css';

import data from './data.json';
import Ghost from './components/GhostComponent.js';

function App() {
	let videos = [];
	const DEFAULT_AMOUNT = 4;
	for(var i=0;i<DEFAULT_AMOUNT;i++){
		videos.push({
			id 		: data[i].ID,
			title 	: data[i].title,
			artist 	: data[i].artist,
		});
	}
	return (
		<div className="App">
			{videos.map((video, index) => <Ghost key={index} id={video.id} title={video.title} artist={video.artist}/>)}
		</div>
	);
}



export default App;
