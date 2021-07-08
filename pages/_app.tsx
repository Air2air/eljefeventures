import React, {FC} from "react";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import "../styles/globals.scss";


interface MyAppProps {
  pageProps?: string;
  Component?: any;
}

const MyApp: FC<MyAppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
export default MyApp;
