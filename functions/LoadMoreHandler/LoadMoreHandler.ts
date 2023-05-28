import {
  ApolloQueryResult,
  FetchMoreQueryOptions,
  OperationVariables,
} from "@apollo/client";

export const LoadMoreHandler = async <T extends object>(
  itemsLength: number,
  pageSize: number,
  fetchMore: <TFetchData = T, TFetchVars = OperationVariables>(
    fetchMoreOptions: FetchMoreQueryOptions<TFetchVars, TFetchData> & {
      updateQuery?: (
        previousQueryResult: any,
        options: {
          fetchMoreResult: any;
          variables: any;
        }
      ) => any;
    }
  ) => Promise<ApolloQueryResult<TFetchData>>
) => {
  try {
    await fetchMore({
      variables: {
        start: itemsLength,
        limit: pageSize,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        // get the node for data mapping
        const prevNodeValue: any = Object.keys(prev)[0];

        // If there's no new data, return the previous state
        if (!prevNodeValue) return prev;

        // Get the IDs of the existing items
        const existingIds = prev[prevNodeValue]?.data?.map(
          (item: { id: string }) => item.id
        );

        // Filter out any new items that already exist in the existing data
        const newData = Array.isArray(fetchMoreResult[prevNodeValue]?.data)
          ? fetchMoreResult[prevNodeValue]?.data.filter(
              (item: { id: string }) => !existingIds?.includes(item.id)
            )
          : [];

        return {
          ...prev,
          [prevNodeValue]: {
            ...prev[prevNodeValue],
            data: [...(prev[prevNodeValue]?.data || []), ...(newData || [])],
            meta: fetchMoreResult[prevNodeValue]?.meta ?? {
              pagination: { total: 0 },
            },
          },
        };
      },
    });
  } catch (error) {
    console.log(error);
  }
};
