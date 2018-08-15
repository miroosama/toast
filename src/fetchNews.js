import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import './style.css'
import {TweenMax, Power1, TimelineLite} from "gsap";
import GSAP from 'react-gsap-enhancer'
import TransitionGroup from 'react-addons-transition-group';
import NewsBubble from "./newsBubble.js"
class Fetch extends React.Component {
state = {
  news: '',
  clicked: false,
  clickedBubble: false,
}

componentDidMount(){
  let ke = "think again dog"
fetch(`https://newsapi.org/v2/top-headlines?sources=vice-news&apiKey=${ke}`)
.then(res => res.json())
.then(json => {
  this.setState({
    news: json
  })
})
}

handleClick = () => {
// console.log(this.state.news)
this.setState({
  clicked:!this.state.clicked
})
}

showNews = () => {
  console.log(this.state.news.articles[0]
  )
  return <div>
  <h3>{this.state.news.articles[0].title}</h3>
  <p>{this.state.news.articles[0].author}</p>
  <p>{this.state.news.articles[0].description}</p>
  </div>

}
  render () {
    let background = {one: "news"}
    console.log("g")
    return(
      <div>
      <TransitionGroup>
      {this.state.clicked && <NewsBubble />}
      </TransitionGroup>
      <div onClick={this.handleClick} className={background.one} ref={c => this.container = c}/>
      {this.state.clicked ? this.showNews() : null}
      </div>
    )
  }
}

export default (Fetch);

// <div onClick={this.handleClick} className={background.one} ref={c => this.container = c}/>
