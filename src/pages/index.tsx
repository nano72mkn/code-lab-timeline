import { NextPage } from 'next';
import NextHeadSeo from 'next-head-seo';

const Home: NextPage = () => {
  return (
    <>
      <NextHeadSeo title="Home" />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
};

export default Home;
