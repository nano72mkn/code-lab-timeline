import { ActivityChronology } from "components/ActivityChronology";
import { Header } from "components/Header";
import { sites } from "config/sites";
import { motion, Variants } from "framer-motion";
import { NextPage } from "next";
import NextHeadSeo from "next-head-seo";
import { getActivities } from "utils/getActivities";
import {
  ActivityChronology as ActivityChronologyType,
  groupByYear,
} from "utils/groupByYear";

export async function getStaticProps() {
  const activityChronologies = groupByYear({
    activities: await getActivities({ urls: sites }),
  });

  return { props: { activityChronologies }, revalidate: 1 };
}

interface Props {
  activityChronologies: ActivityChronologyType[];
}

const Home: NextPage<Props> = ({ activityChronologies }) => {
  const containerVariants: Variants = {
    active: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    disabled: {},
  };
  return (
    <div className="container mx-auto px-5">
      <NextHeadSeo
        title="code lab | Timeline"
        customLinkTags={[
          {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/apple-touch-icon.png",
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/favicon-32x32.png",
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/favicon-16x16.png",
          },
          {
            rel: "shortcut icon",
            href: "/favicon.ico",
          },
          {
            rel: "manifest",
            href: "/site.webmanifest",
          },
          {
            rel: "author",
            href: "http://www.hatena.ne.jp/shota1995m/",
          },
        ]}
      />
      <div className="mb-10">
        <Header />
      </div>
      <h2 className="text-2xl font-bold">Timeline</h2>
      <motion.div
        className="py-10"
        variants={containerVariants}
        initial="disabled"
        animate="active"
      >
        {activityChronologies.map((activityChronology, index) => (
          <ActivityChronology
            key={index}
            activityChronology={activityChronology}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Home;
