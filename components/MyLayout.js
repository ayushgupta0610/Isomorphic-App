import Header from './Header';
import React, {Component} from 'react';

class Layout extends Component{

    constructor(props){
      super(props)

    }

  render(){
    const layoutStyle = {
      margin: 20,
      padding: 20,
      border: '1px solid #DDD'
    };

    return(
      <div style={layoutStyle}>
        <Header />
        {this.props.children}
      </div>
    )
  }

}

export default Layout
