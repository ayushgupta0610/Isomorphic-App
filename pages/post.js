import Layout from '../components/MyLayout';
import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch'

class Post extends Component{

  static async getInitialProps(context){
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();
    console.log(`Fetched show: ${show.name}`);
    return { show }
  }

  render(){
    return(
        <Layout>
          <h1>{this.props.show.name}</h1>
          <p>This is the blog post content.</p>
          <img src={this.props.show.image.medium}/>
        </Layout>
    )
  }

}

export default Post;
