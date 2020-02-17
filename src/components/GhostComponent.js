import React from 'react';

class GhostComponent extends React.Component {
	constructor() {
		super();
	}

	remove(){
		this.props.removeItem( this );
	}

	render() {
		return (
			<div className="video">
				<div className="controls">
					<button onClick={this.remove.bind(this)}>Remove</button>
				</div>
				<div className="video-frame">
					<YouTubeVideo id={this.props.id}/>
				</div>

				<div className='overlay'>
					<p className='title'>{this.props.title}</p>
					<p className='artist'>{this.props.artist}</p>
				</div>
			</div>
		);
	}

}

class YouTubeVideo extends React.Component {
	constructor() {
		super();
		
		// youtube options and serialization
		const options = {
			enablejsapi 	: 1,
			html5 			: '1js',
			autoplay 		: 0,
			controls 		: 0,
			disablekb 		: 1,
			fs 				: 0,
			loop 			: 1,
			modestbranding	: 1,
			rel				: 0,
			showinfo		: 0,
			color			: 'white'
		};
		let opts = Object.entries(options).map(([key, val]) => `${key}=${val}`).join('&');

		this.state = {
			width	: 480,
			height	: 270,
			src 	: `https://www.youtube.com/embed/${arguments[0].id}?${opts}`
		};
	}
	controls(){
/*
		// https://developers.google.com/youtube/iframe_api_reference

		// global variable for the player
		let player;

		// this function gets called when API is ready to use
		function onYouTubePlayerAPIReady() {
			// create the global player from the specific iframe (#video)
			player = new YT.Player('video', {
				events: {
					// call this function when player is ready to use
							'onReady' : onPlayerReady
				}
			});
		}

		function onPlayerReady(event) {
			
			// bind events
			let playButton = document.getElementById("play-button");
			playButton.addEventListener("click", function() {
				player.playVideo();
			});
			
			let pauseButton = document.getElementById("pause-button");
			pauseButton.addEventListener("click", function() {
				player.pauseVideo();
			});
			
		}
*/
	}
	render(){
		return (
			<div className="youtube">
				<div className="play-button"></div>
				<div className="pauseButton-button"></div>
				<iframe src={this.state.src} width={this.state.width} height={this.state.height}></iframe>
			</div>
		);
	}

}

export default GhostComponent;