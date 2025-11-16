import type { PackageDetails } from '../types/packageDetails';

const FEATURED_PACKAGES = ['react', 'typescript', 'storybook', 'vite'];

export const getFeaturedPackages = async () => {
  const promises = FEATURED_PACKAGES.map(async (name) => {
    const res = await fetch(`https://registry.npmjs.org/${name}`);

    return res.json();
  });

  const data = await Promise.all(promises);

  return data as PackageDetails[];
};
