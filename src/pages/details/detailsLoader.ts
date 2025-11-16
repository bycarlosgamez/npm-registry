import type { Params } from 'react-router-dom';
import { getPackage } from '../../api/queries/getPackage';
import type { PackageDetails } from '../../api/types/packageDetails';

interface DetailsLoaderProps {
  params: Params;
}

export interface DetailsLoaderResult {
  details: PackageDetails;
}

export const detailsLoader = async ({
  params,
}: DetailsLoaderProps): Promise<DetailsLoaderResult> => {
  const { name } = params;

  if (!name) {
    throw new Error('A name must be provided');
  }

  const details = await getPackage(name);

  return {
    details,
  };
};
