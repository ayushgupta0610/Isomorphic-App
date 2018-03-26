import React, { Component } from 'react';
import Link from 'next/link';
import Layout from '../components/MyLayout';
import PostLink from '../components/PostLink';
import fetch from 'isomorphic-unfetch';
import Background from './../components/BackgroundTest';

class App extends Component{
  static async getInitialProps(){
    const result = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await result.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    return { shows: data };
  }

  render(){
    return(
      <Layout>
      <h1> Batman TV Shows </h1>
        <ul>
          {this.props.shows.map(({show}) => {
            return (
              <li key={show.id}>
                <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                  <a>{show.name}</a>
                </Link>
              </li>
            )
          })}
        </ul>
        <style jsx>{`
            h1, a {
              font-family: "Arial";
            }

            ul {
              padding: 0;
            }

            li {
              list-style: none;
              margin: 5px 0;
            }

            a {
              text-decoration: none;
              color: blue;
            }

            a:hover {
              opacity: 0.6;
            }
          `}
        </style>
      </Layout>
    );
  }

}

export default App;
