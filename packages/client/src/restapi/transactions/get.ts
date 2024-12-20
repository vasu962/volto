import { apiRequest, type ApiRequestParams } from '../../API';
import type { PloneClientConfig } from '../../validation/config';
import type { GetTransactionsResponse } from '@plone/types';

export type GetTransactionsArgs = {
  config: PloneClientConfig;
};

export const getTransactions = async ({
  config,
}: GetTransactionsArgs): Promise<GetTransactionsResponse> => {
  const options: ApiRequestParams = {
    config,
    params: {},
  };

  return apiRequest('get', '/@transactions', options);
};

export const getTransactionsQuery = ({ config }: GetTransactionsArgs) => ({
  queryKey: ['get', 'transactions'],
  queryFn: () => getTransactions({ config }),
});
