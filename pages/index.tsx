import { NextPage, InferGetStaticPropsType } from "next";
import Head from "next/head";

import { getAllCategories, getArticle } from "@/lib/api";
import SideBar from "@/components/sidebar";
import ArticleContainer from "@/components/article-container";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const allCategories = getAllCategories();
  const pageContent = await getArticle("index");

  return {
    props: { pageContent, allCategories },
  };
};

const Home: NextPage<Props> = ({ pageContent, allCategories }) => {
  return (
    <div className="pageContainer">
      <Head>
        <title>{pageContent.title} - Metadocs</title>
        <link rel="icon" href="/microscope.svg" />
      </Head>

      <div className="main-wrapper">
        <div className="page-wrapper">
          <SideBar items={allCategories} />

          <main className="main">
            <ArticleContainer page={pageContent}></ArticleContainer>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
