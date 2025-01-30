// import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
// import { logoutUser, resetTokens, setTokens } from "../store/reducers/authReducer";
// import { RootState } from "../store/store";

// const baseURL = `${import.meta.env.VITE_BE_URL}/graphql/`;

// const httpLink = createHttpLink({
//   uri: baseURL,
//   fetch: fetch,
// });

// const authLink = (token: string | null) => {
//   return token
//     ? (operation: any) => {
//         operation.setContext({
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//       }
//     : (operation: any) => operation;
// };

// const client = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache(),
// });

// export const getApolloClient = (state: RootState) => {
//   const token = state.auth.accessToken;
//   const link = authLink(token);

//   return new ApolloClient({
//     link: link.concat(httpLink),
//     cache: new InMemoryCache(),
//   });
// };

// export default client;
