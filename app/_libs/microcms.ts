import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";

export type Category = {
  name: string;
} & MicroCMSListContent;

export type News = {
  title: string;
  content: string;
  thumbnail?: MicroCMSImage;
  category: Category;
  pickup?: boolean;
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVISE_DOMAIN) {
  throw new Error("MICROCMS_SERVISE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVISE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getNewsList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<News>({
    endpoint: "news",
    queries,
  });
  return listData;
};

export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<News>({
    endpoint: "news",
    contentId,
    queries,
  });
  return detailData;
};

export const getCategoryDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Category>({
    endpoint: "category",
    contentId,
    queries,
  });
  return detailData;
};

export const getCategoryList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Category>({
    endpoint: "category",
    queries,
  });
  return listData;
};

export const getAllNewsList = async () => {
  const listData = await client.getAllContents<News>({
    endpoint: "news",
  });

  return listData;
};

export const getAllCategoryList = async () => {
  const listData = await client.getAllContents<Category>({
    endpoint: "category",
  });

  return listData;
};
