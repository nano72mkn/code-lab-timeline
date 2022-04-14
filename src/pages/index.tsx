import { sites } from 'config/sites';
import { NextPage } from 'next';
import NextHeadSeo from 'next-head-seo';
import { ActivityType } from 'type';
import { getActivities } from 'utils/getActivities';

export async function getSta() {
  const data = await getActivities({ urls: sites });

  return { props: { data } };
}

interface Props {
  activity: ActivityType[];
}

const Home: NextPage<Props> = ({ activity }) => {
  console.log(activity);
  return (
    <>
      <NextHeadSeo title="Home" />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
};

export default Home;
