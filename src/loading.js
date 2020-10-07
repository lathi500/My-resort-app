import React, { Component } from 'react'
import loadingGif from '../src/images/gif/loading-arrow.gif'

export default class Loading extends Component {
    render() {
        return (
            <div className = "loading">
                <h4>loading images.....</h4>
                <img src = {loadingGif} alt = ""/>
            </div>
        )
    }
}
