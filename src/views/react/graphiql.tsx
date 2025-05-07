import React from "react";
import { GraphiQL } from 'graphiql';

import Config from '../../config'

const fetcher = async graphQLParams => {
  const response = await fetch(
    Config.graphqlEndpoint,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(graphQLParams),
      credentials: 'same-origin',
    },
  );
  return response.json();
};

const GraphiQLPage: React.FC = () => <GraphiQL fetcher={fetcher} />;

export default GraphiQLPage;