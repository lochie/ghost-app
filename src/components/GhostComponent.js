import React from 'react';
import YouTube from 'react-youtube';

import Draggable from 'react-draggable-elements';

import { Resizable, ResizableBox } from 'react-resizable';

const options = {
	width			: 320,
	height			: 180,
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
			show 			: true,
			class 			: '',
			player 			: null,
			player_state 	: null,
			volume 			: 100
		};
	}

	randomCoordinate(){
		return {
			x : Math.random()*window.innerWidth,
			y : Math.random()*window.innerHeight
		}
	}

	remove(){
		this.setState({
			class : 'hide'
		})
		setTimeout(this.hide.bind(this), 1000);
	}

	hide(){
		this.setState({
			show : false
		})
	}
	play(){
		this.state.player.playVideo();
	}
	pause(){
		this.state.player.pauseVideo();
	}
	setVolume( value ){
		this.setState({
			volume : value
		})
		this.state.player.setVolume( this.state.volume );
	}
	
	toggle(event) {
		if( this.state.player.getPlayerState() === 1 ){
			this.pause();
		}else{
			this.play();
		}
	}
	
	onReady(event) {
		this.setState({
			player : event.target
		})
		if( this.state.player ) this.state.player.pauseVideo();
	}

	render() {
		if(! this.state.show) return null;
		return (
			<Draggable handle=".drag-handle" defaultPosition={this.randomCoordinate()}>
				<div class="ghost-container">
					<ResizableBox
					width={320}
					height={180}
					minConstraints={[240,135]}
					maxConstraints={[640,360]}
					lockAspectRatio={true}
					>
						<div className={ "video "+this.state.class }>
					 		<div className="handle drag-handle"></div>
							<div className="controls">
								<button className="play-button" onClick={this.toggle.bind(this)}>Play/Pause</button>
								<button onClick={this.remove.bind(this)}>Remove</button>
							</div>
							<YouTube
								videoId={this.props.id}
								className='iframe'
								containerClassName='video-frame'
								opts={options}
								onReady={this.onReady.bind(this)}
								//onReady={func}					// defaults -> noop
								//onPlay={func}						// defaults -> noop
								//onPause={func}					// defaults -> noop
								//onEnd={func}						 // defaults -> noop
								//onError={func}					// defaults -> noop
								//onStateChange={func}				// defaults -> noop
								//onPlaybackRateChange={func}		// defaults -> noop
								//onPlaybackQualityChange={func}	// defaults -> noop
							/>
							<div className='overlay'>
								<p className='title'>{this.props.title}</p>
								<p className='artist'>{this.props.artist}</p>
							</div>
						</div>
					</ResizableBox>
				</div>
			</Draggable>
		);
	}

}
export default GhostComponent;