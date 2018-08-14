import React, { Component } from 'react';
import ReactPlayer from 'react-player'

class Fetch extends React.Component {


getNews = () =>{
let ke = 0
fetch(`https://newsapi.org/v2/top-headlines?sources=vice-news&apiKey=${ke}`)
.then(res => res.json())
.then(json => {console.log(json)})
}

  render () {
    console.log("g")
    console.log(this.getNews())
    return(
      <div>
      <ReactPlayer url='http://www.democracynow.org/podcast-video.xml' playing />
      </div>
    )
  }
}

export default (Fetch);
