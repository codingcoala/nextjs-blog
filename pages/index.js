import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Alert from '../components/alert';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

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
        <p>Hello, I'm <strong>Adrian</strong>. I've studied business informatics and I'm now working as a product owner at zooplus. You can contact me on <Link href="https://www.instagram.com/adrianhoche" target="_blank" rel='noopener'>Instagram</Link>.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>Bored?</h2>
        <p>Here's some activity from BoredAPI to not let you bored on my page. Try your best ;)!</p>
      </section>
    </Layout>
  );
};