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
  newsAJ:'',
  newsG: '',
  newsDN: '',
}

componentDidMount(){
  let ke = 'ha'
  let ytk = 'ha'
  let dn = "ha"
  let d = `ha`


fetch(`https://newsapi.org/v2/top-headlines?sources=vice-news&apiKey=${ke}`)
.then(res => res.json())
.then(json => {
  this.setState({
    news: json
  })
})
fetch(`https://newsapi.org/v2/top-headlines?sources=al-jazeera-english&apiKey=${ke}`)
.then(res => res.json())
.then(json => {
  this.setState({
    newsAJ: json
  })
})

fetch(`https://newsapi.org/v2/top-headlines?sources=the-guardian-uk&apiKey=${ke}`)
.then(res => res.json())
.then(json => {
  this.setState({
    newsG: json
  })
})


//GET https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername=democracynow&key={YOUR_API_KEY}
fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cstatus&playlistId=${d}&key=${ytk}`)
        .then(res => res.json())
        .then(json => {
        this.setState({
          newsDN: json
        })
  })

}
// json.items[0].contentDetails.videoId

handleClick = () => {
// console.log(this.state.news)
this.setState({
  clicked:!this.state.clicked
})
}

showViceNews = () => {
  console.log(this.state.news.articles[0]
  )
  return <div className="article">
  <h5 className="text" >{this.state.news.articles[0].source.name}</h5>
  <img className="img" src={this.state.news.articles[0].urlToImage} height="100%" width="100%" />
  <h5 className="text">{this.state.news.articles[0].title}</h5>
  <a className="text" target="_blank" rel="noopener noreferrer" href={this.state.news.articles[0].url}>Read</a>
  </div>

}

showAJNews = () => {
console.log(this.state.newsAJ)
return <div className="article1">
<h5 className="text" >{this.state.newsAJ.articles[0].source.name}</h5>
<img className="img" src={this.state.newsAJ.articles[0].urlToImage} height="100%" width="100%" />
<h5 className="text">{this.state.newsAJ.articles[0].title}</h5>
<a className="text" target="_blank" rel="noopener noreferrer" href={this.state.newsAJ.articles[0].url}>Read</a>
</div>
}

showGNews = () => {
console.log(this.state.newsG)
return <div className="article2">
<h5 className="text" >{this.state.newsG.articles[0].source.name}</h5>
<img className="img" src={this.state.newsG.articles[0].urlToImage} height="100%" width="100%" />
<h5 className="text">{this.state.newsG.articles[0].title}</h5>
<a className="text" target="_blank" rel="noopener noreferrer" href={this.state.newsG.articles[0].url}>Read</a>
</div>
}

showDNnews = () => {
  console.log(this.state.newsDN.items[0])
  let video = this.state.newsDN.items[0].contentDetails.videoId
  console.log(video)
  return <ReactPlayer className="video" url={`https://www.youtube.com/watch?v=${video}`} playing />
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
      {this.state.clicked ? this.showViceNews() : null}
      {this.state.clicked ? this.showAJNews() : null}
      {this.state.clicked ? this.showGNews() : null}
      {this.state.clicked ? this.showDNnews() : null}
      </div>
    )
  }
}

export default (Fetch);

// <div onClick={this.handleClick} className={background.one} ref={c => this.container = c}/>
