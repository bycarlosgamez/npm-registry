export interface PackageDetails {
  name: string;
  description: string;
  readme: string;
  author: {
    email: string;
    name: string;
  };
  mantainers: {
    email: string;
    name: string;
  }[];
  license: string;
}
