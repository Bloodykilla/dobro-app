import { ApolloClient, InMemoryCache } from "@apollo/client";
import { Api } from "../../constants/ApiUrl";

const cache = new InMemoryCache({
  typePolicies: {
    NeedyPersonEntity: {
      fields: {
        attributes: {
          merge: true,
        },
      },
    },
    UserPaymentEntity: {
      fields: {
        attributes: {
          merge: true,
        },
      },
    },
    PersonsNeedEntity: {
      fields: {
        attributes: {
          merge: true,
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: Api.url + "/graphql",
  name: "react-web-client",
  version: "1.3",
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
  cache: cache,
});

export default client;
