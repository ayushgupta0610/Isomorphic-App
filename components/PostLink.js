import React, {Component} from 'react';
import Link from 'next/link';

class PostLink extends Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      <li>
        <Link as={`/p/${this.props.id}`} href={`/post?title=${this.props.title}`}>
          <a>{this.props.title}</a>
        </Link>
      </li>
    )
  }
}

export default PostLink;
