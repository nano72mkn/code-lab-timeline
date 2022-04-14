export type Url = `https://${string}.${string}`;

export interface GetActivitiesProps {
  urls: GetActivityProps['url'][];
}

export interface GetActivityProps {
  url: Url;
}

export interface ActivityType {
  title: string;
  contentSnippet: string;
  link: string;
  isoDate: string;
}
