import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
}

const SEO = ({ title, description }: SEOProps) => {
  return (
    <Head>
      <title>{`NEXUS -  ${title}`}</title>
      <link rel="shortcut icon" href="/nexus.png" type="image/x-icon" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
    </Head>
  );
};

export default SEO;
