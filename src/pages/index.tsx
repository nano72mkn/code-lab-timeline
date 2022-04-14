import { sites } from 'config/sites';
import { NextPage } from 'next';
import NextHeadSeo from 'next-head-seo';
import { getActivities } from 'utils/getActivities';
import { ActivityChronology, groupByYear } from 'utils/groupByYear';

export async function getStaticProps() {
  const activityChronologies = groupByYear({
    activities: await getActivities({ urls: sites }),
  });

  return { props: { activityChronologies } };
}

interface Props {
  activityChronologies: ActivityChronology[];
}

const Home: NextPage<Props> = ({ activityChronologies }) => {
  return (
    <>
      <NextHeadSeo title="code lab | Timeline" />
      {activityChronologies &&
        activityChronologies.map(({ year, activities }, index) => (
          <div key={index}>
            <p>{year}</p>
            {activities &&
              activities.map((activity, index) => (
                <p key={index}>{activity.title}</p>
              ))}
          </div>
        ))}
    </>
  );
};

export default Home;
