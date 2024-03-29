import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const httpLink = createHttpLink({
  uri:
    process.env.NODE_ENV !== "development"
      ? "https://safemode.vercel.app/api/graphql"
      : "http://localhost:3000/api/graphql",
});

const client = new ApolloClient({
  link: httpLink,

  cache: new InMemoryCache({ addTypename: false }),
});

export default client;
