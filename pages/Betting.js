import Head from 'next/head';
import Footer from '../components/footer';
import React, { Component } from 'react';
import NavBar from '../components/NavBar';

export class Betting extends Component {
  render() {
    return (
        <Head>
            < NavBar />
      <div>Betting</div>
      < Footer />
      
      </ Head>

    )
  }
}

export default Betting