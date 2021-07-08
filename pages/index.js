import Head from "next/head";
import Header from "./../components/header";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import styles from "../styles/Home.module.scss";

export default function Home({ countries }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>El Jefe</title>
        <meta name="description" content="Family Office Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.grid}>
          {countries.map((country) => (
            <div key={country.code} className={styles.card}>
              <h3>{country.name}</h3>
              <p>
                {country.code} - {country.emoji}
              </p>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>Doodle</footer>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });

  return {
    props: {
      countries: data.countries.slice(0, 4),
    },
  };
}
