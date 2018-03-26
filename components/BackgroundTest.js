import React, {Component} from 'react';
// import dynamic from 'next/dynamic';
let Particles;
class Background extends Component{


  constructor(props) {
    super(props);
    this.state = { showParticles: false };
  }

  componentDidMount() {
    console.log("Gets fired only on the client side");
    Particles = require('particlesjs');
    this.setState({ showParticles: true });
  }

  componentWillMount() {
    console.log("Gets fired on the server side");
    console.log("Gets fired on the client side?");
  }

  render() {
    if(Particles){console.log(Particles);}
    return <div>Test {this.state.showParticles} </div>;
  }

}

export default Background;
