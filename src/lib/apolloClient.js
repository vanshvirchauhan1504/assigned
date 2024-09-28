"use client"

import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://astralpaints.kwebmakerdigitalagency.com/graphql', // Replace with your endpoint
  cache: new InMemoryCache(),
});

export default client;
