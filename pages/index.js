import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

import { getSortedPostsData } from '../lib/posts';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

import useSWR from 'swr'

function getBoredTask() {
  const { data, error, isLoading } = useSWR('https://www.boredapi.com/api/activity?participants=1', fetcher)
  if (error) return "Error";
  if (isLoading) return "Loading";
  return (
  <p className={utilStyles.p} key={data.key}>
    <strong>Activity:</strong> {data.activity}
    <br />
    <strong>Price:</strong> {data.price}
    <br />
    <strong>Type:</strong> {data.type}
</p>);
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello & welcome to my personal website.</p>
        <p>Here you will find soon more about me! Just be patient :)</p>
      </section>
    </Layout>
  );
};