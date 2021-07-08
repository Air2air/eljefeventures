import Head from "next/head";
import styles from "../styles/Home.module.scss";
import ClientOnly from "../components/ClientOnly";
import Countries from "../components/Countries";

export default function ClientSide() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <ClientOnly>
          <Countries />
        </ClientOnly>
      </main>

      <footer className={styles.footer}>Doodle</footer>
    </div>
  );
}
