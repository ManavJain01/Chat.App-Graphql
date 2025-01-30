import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: `${import.meta.env.VITE_BE_URL}/graphql`, // Ensure this matches your backend server
  cache: new InMemoryCache(),
});

export default client;
