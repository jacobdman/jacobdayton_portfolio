import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from 'components/Navbar';
import { Segment, Header } from 'semantic-ui-react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jacob Dayton</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Segment className={styles.landingTitle} attached>
        <h1>Jacob Dayton</h1>
        <Header as="h2">FullStack Developer</Header>
      </Segment>
      <Navbar />
      <Segment attached tertiary style={{ height: '200vh' }}></Segment>
      {/* <main className={styles.main}></main> */}
    </div>
  );
}
