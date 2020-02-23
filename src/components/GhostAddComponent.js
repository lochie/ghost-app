import React from 'react';

class GhostAddComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			
		}
	}

	addItem( id ){
		if(id !== '') this.props.addItem( id );
	}
 
	handleChange (e) {
		const value = e.target.value;
		this.addItem( value );
		e.target.value = '';
	}
 
	addClick (e) {
		const value = Math.floor(Math.random()*this.props.data.length);
		this.addItem( value );
	}
	clearClick (e) {
		this.props.clearItems();
	}

	render() {
		return (
			<div className="add-video">
				<select onChange={this.handleChange.bind(this)}>
					<option value="">Pick a Ghost</option>
					{this.props.data.map((item, index) => <option key={index} value={index}>{item.title} by {item.artist}</option>)}
				</select>
				<button onClick={this.addClick.bind(this)}>Random</button>
				<button onClick={this.clearClick.bind(this)}>Clear</button>
			</div>
		);
	}

}
export default GhostAddComponent;