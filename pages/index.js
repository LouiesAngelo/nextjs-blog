import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
    <ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
        <p>Greetings! I am Louies Angelo Mesia, commonly known as Gelo. the outgoing Vice-President (Internal) of the Student Society of Information Technology Education, outgoing PIO of the UA Central Student Council, and outgoing Features Editor of Regina- the UA Publication. Nonetheless, the incoming President of the Student Society of Information Technology Education, incoming Managing Editor of Regin, and Mr. UA-Scientia 2023.
</p>
        <p>I am a socially inclined person wherein I enjoy interpersonal interaction. From that, I may have the capacity to be flexible and adaptable as with my leadership qualities with natural collaborative attributes. I have the ability to write, technical or creative, as I am a journalist since back then and a student leader who deals with letters, as well as I write poems, stories, and songs. Talking about songs,  I appreciate music as well and I am capable to play instruments such as guitar, piano, ukulele, and some basically. Probably, I got to mention that I do graphic designs, including publication layouts and logo making.</p>
        <p>In my lifestyle, I am a spontaneous person. I like exploring, capturing moments, coffee shop hopping, and socializing with a bunch of people. In sum, in spite of my commitments, I also make space for personal stuff to live my life in harmony. All things matter, and for me everything is favorable.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}