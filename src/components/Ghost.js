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

	handleRemoveItem(index){
		/*
		console.log('remove item',index)
		let videos = this.state.videos.splice(index,1);
		this.setState({
			videos: videos
		})
		*/
	}

	render(){
		return (
			<div className="ghost-app">
				{this.state.videos.map((video, index) => 
					<GhostComponent
						key={index}
						index={index}
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