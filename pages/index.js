import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>…</section>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm David Osuchukwu. A newbie programmer and digital-sketch
          artist. This site is my (personal) web portfolio. I will try to
          publish all or most of my work and my interests as I go along. I've
          included external links to some of my other web projects. I'm
          available for hire at
          <a href="https://freelancer.com"> freelancer.com</a>.
        </p>
        <p>
          You can view my artist portfolio at{" "}
          <a href="https://www.artstation.com/obscvrvx">artstation.com</a>. To
          request custom prints or illustration jobs, please contact me via
          email at osuchukwudavid@gmail.com or send me a message on twitter{" "}
          <a href="https://www.twitter.com/brxkenhandle">@brxkenhandle </a>.
          Thanks a lot for taking the time to visit this page. I really
          appreciate it!
        </p>
        <p>
          {" "}
          Please buy me a coffee at{" "}
          <a href="https://www.buymeacoffee.com/dico"> buymeacoffee.com </a> or
          at <a href="https://ko-fi.com/dirtyfaceddave"> ko-fi.com </a>
          to support what I do!
        </p>
      </section>
    </Layout>
  );
}
