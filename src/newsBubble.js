import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import './style.css'
import {TweenMax, Power1, TimelineLite} from "gsap";
import GSAP from 'react-gsap-enhancer'
import TransitionGroup from 'react-addons-transition-group';

class NewsBubble extends React.Component {

  componentWillEnter (callback) {
  const el = this.container;
  console.log(el)
  TweenMax.fromTo(el, 0.8, {x: -25, opacity: .9, rotation:0}, {x: 50, opacity: .9, rotation:180, onComplete: callback});
}

componentWillLeave (callback) {
  const el = this.container;
  TweenMax.fromTo(el, 0.8, {x: 50, opacity: .9, rotation:-180}, {x: -25, opacity: 0, rotation:0, onComplete: callback});
}


  render () {

    return(
      <div>
      <div className="news1" ref={c => this.container = c}/>
      </div>
    )
  }
}

export default (NewsBubble);
