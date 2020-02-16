import React from 'react';

let is_active = false;

class Ghost extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="video">
				<YouTubeVideo id={this.props.id}/>
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

		if(! is_active){
			console.log('Activate Youtube');
			is_active = true;

			// Inject YouTube API script
			var tag = document.createElement('script');
			tag.src = "https://www.youtube.com/player_api";
			var firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		}

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

export default Ghost;