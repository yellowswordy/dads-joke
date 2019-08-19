import React, {Component} from 'react';
import './Joke.css'
class Joke extends Component {
    getColor() {
        if (this.props.votes >= 15) {
            return "#4CAF50";
        } else if (this.props.votes >= 12) {
            return "#8BC34A";
        } else if (this.props.votes >= 9) {
            return "#CDDC39";
        } else if (this.props.votes >= 6) {
            return "#FFEB3B";
        } else if (this.props.votes >= 3) {
            return "#FFC107";
        } else if (this.props.votes >= 0) {
            return "#FF9800";
        } else {
            return "#f44336";
        }
    }
    getEmoji() {
        if (this.props.votes >= 15) {
            return "ec ec-rofl";
        } else if (this.props.votes >= 12) {
            return "ec ec-laughing";
        } else if (this.props.votes >= 9) {
            return "ec ec-smile";
        } else if (this.props.votes >= 6) {
            return "ec ec-slightly-smiling-face";
        } else if (this.props.votes >= 3) {
            return "ec ec-neutral-face";
        } else if (this.props.votes >= 0) {
            return "ec ec-confused";
        } else {
            return "ec ec-imp";
        }
    }

    render() {
        return (
            <div className="Joke">
                <div className="Joke-buttons">
                    <i className='fas fa-arrow-up' onClick={this.props.upvote}></i>
                    <span className='Joke-votes' style={{borderColor: this.getColor()}}>{this.props.votes}</span>
                    <i className='fas fa-arrow-down' onClick={this.props.downvote}></i>
                </div>
                <div className="Joke-text">
                    {this.props.text}
                </div>
                <div className="Joke-smiley">
                    <span className={this.getEmoji()}></span>
                </div>
            </div>
        );
    }
}

export default Joke;