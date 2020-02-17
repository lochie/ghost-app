import React from 'react';

import data from '../data.json';
import GhostComponent from './GhostComponent.js';
import GhostAddComponent from './GhostAddComponent.js';

const DEFAULT_AMOUNT = 0;

class Ghost extends React.Component {
	
	constructor() {
		super();
		this.state = {
			videos	: []
		};

		for(var i=0;i<DEFAULT_AMOUNT;i++){
			this.state.videos.push({
				id 		: data[i].ID,
				title 	: data[i].title,
				artist 	: data[i].artist,
			});
		}
		
		this.initYouTubeAPI();
	}

	// YouTube API
	initYouTubeAPI(){
		var tag = document.createElement('script');
		tag.src = "https://www.youtube.com/player_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	}

	handleAddItem(id){
		this.setState({
			videos: this.state.videos.concat({
				id 		: data[id].ID,
				title 	: data[id].title,
				artist 	: data[id].artist,
			})
		})
	}

	// TODO
	handleRemoveItem(item){
		/*
		console.log(item);
		console.log(this.state.videos);
		this.setState({
			videos: this.state.videos
		})
		*/
	}

	render(){
		return (
			<div className="ghost-app">
				{this.state.videos.map((video, index) => 
					<GhostComponent
						key={index}
						id={video.id}
						title={video.title}
						artist={video.artist}
						removeItem={this.handleRemoveItem.bind(this)}
					/>
				)}
				<GhostAddComponent data={data} addItem={this.handleAddItem.bind(this)} />
			</div>
		);
	}
}
export default Ghost;