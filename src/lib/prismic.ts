import { createClient } from "@prismicio/client";

const repositoryName = process.env.NEXT_PUBLIC_PRISMIC_REPOSITORY || "lamarshalada";
const accessToken = process.env.PRISMIC_ACCESS_TOKEN || "";

export const createPrismicClient = () => {
  return createClient(repositoryName, {
    accessToken,
  });
};
