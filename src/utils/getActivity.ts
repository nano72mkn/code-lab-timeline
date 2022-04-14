import Parser from 'rss-parser';
import type { ActivityType, GetActivityProps } from 'type';

const parser = new Parser();

export const getActivity = async ({
  url,
}: GetActivityProps): Promise<ActivityType[]> => {
  console.log(url);
  const feed = await parser.parseURL(url);

  if (!feed?.items?.length) return [];

  const activities = feed.items.map(
    ({ title, contentSnippet, link, isoDate }) => ({
      title,
      contentSnippet: contentSnippet?.replace(/\n/g, ''),
      link,
      isoDate,
    }),
  );

  return activities.filter(
    ({ title, link, isoDate }) => title && link && isoDate,
  ) as ActivityType[];
};
