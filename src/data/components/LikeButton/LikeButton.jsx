import React from 'react';

export default class LikeButton extends React.Component {
    state = {
        likeNum: 0,
        color: ['purple','blue','green','yellow','orange','red']
    }

    likeCount = () => {
        let likeNum = this.state.likeNum + 1;
        this.setState({likeNum: likeNum /* color: this.state.color[+1] */})
    }

    render() {
        return (
            <button /* style={{backgroundColor: this.state.color[0]}} */ onClick={this.likeCount}>{this.state.likeNum} likes</button>
        )
    }
}