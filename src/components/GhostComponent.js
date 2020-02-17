import React from 'react';
import YouTube from 'react-youtube';

const options = {
	width			: 480,
	height			: 270,
	playerVars	: {	// https://developers.google.com/youtube/player_parameters
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
		color			: 'white',
	}
};

class GhostComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			player : null,
			player_state : null,
		};
	}

	remove(){
		this.props.removeItem( this.props.index );
	}
	
	toggle(event) {
		if( this.state.player.getPlayerState() == 1 ){
			this.state.player.pauseVideo();
		}else{
			this.state.player.playVideo();
		}
	}
	
	onReady(event) {
		this.setState({
			player : event.target
		})
		this.state.player.pauseVideo();
	}

	render() {
		return (
			<div className="video">
				<div className="controls">
					<button className="play-button" onClick={this.toggle.bind(this)}>Play/Pause</button>
					<button onClick={this.remove.bind(this)}>Remove</button>
				</div>
				<div className="video-frame">
					<YouTube
						videoId={this.props.id}
						className='iframe'
						containerClassName='iframe-container'
						opts={options}
						onReady={this.onReady.bind(this)}
						//onReady={func}                    // defaults -> noop
						//onPlay={func}                     // defaults -> noop
						//onPause={func}                    // defaults -> noop
						//onEnd={func}                      // defaults -> noop
						//onError={func}                    // defaults -> noop
						//onStateChange={func}                    // defaults -> noop
						//onPlaybackRateChange={func}       // defaults -> noop
						//onPlaybackQualityChange={func}    // defaults -> noop
					/>
				</div>
				<div className='overlay'>
					<p className='title'>{this.props.title}</p>
					<p className='artist'>{this.props.artist}</p>
				</div>
			</div>
		);
	}

}
export default GhostComponent;