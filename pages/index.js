import Head from 'next/head'
//import styles from '../styles/Home.module.css';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>iRecharge</title>
        <link rel="icon" href="/favicon.ico" />
        <Header />
        <NavBar />
        <Body />
        <Footer />
      </Head>
 
    </div>
  )
}