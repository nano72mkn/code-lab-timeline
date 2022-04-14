import Parser from 'rss-parser';
import type { ActivityType, Url } from 'type';

export interface GetActivityProps {
  url: Url;
}

const parser = new Parser();

export const getActivity = async ({
  url,
}: GetActivityProps): Promise<ActivityType[]> => {
  const feed = await parser.parseURL(url);

  if (!feed?.items?.length) return [];

  const activities = feed.items.map(
    ({ title, contentSnippet, link, isoDate }) => ({
      title,
      contentSnippet: contentSnippet?.replace(/\n/g, ''),
      link,
      isoDate,
      year: isoDate?.split('-')[0],
    }),
  );

  return activities.filter(
    ({ title, link, isoDate }) => title && link && isoDate,
  ) as ActivityType[];
};
