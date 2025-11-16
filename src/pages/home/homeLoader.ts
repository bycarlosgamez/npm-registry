import { getFeaturedPackages } from '../../api/queries/getFeaturedPackages';
import type { PackageDetails } from '../../api/types/packageDetails';

export interface HomeLoaderResults {
  featuredPackages: PackageDetails[];
}
export const homeLoader = async (): Promise<HomeLoaderResults> => {
  const featuredPackages = await getFeaturedPackages();

  return {
    featuredPackages,
  };
};
