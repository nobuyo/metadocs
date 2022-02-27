import { NextPage, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { getAllCategories, getArticle } from "@/lib/api";
import SideBar from "@/components/sidebar";
import ArticleContainer from "@/components/article-container";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const CATEGORY_SLUG = 'data-structure';

export const getStaticPaths = () => {
  const categories = getAllCategories();
  const slugs = categories.filter((c) => c.slug === CATEGORY_SLUG).flatMap((category) => {
    return category.pages.map((page) => page.slug);
  });

  return {
    paths: slugs.map((slug) => {
      return {
        params: { slug },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const allCategories = getAllCategories();
  const fullSlug = `/docs/${CATEGORY_SLUG}/${params.slug}`;
  const pageContent = await getArticle(`${CATEGORY_SLUG}/${params.slug}`);

  return {
    props: { pageContent, allCategories, currentSlug: fullSlug },
  };
};

const ArticleDetailPage: NextPage<Props> = ({
  pageContent,
  allCategories,
  currentSlug,
}) => (
  <div className="pageContainer">
    <Head>
      <title>{pageContent.title} - Metadocs</title>
      <link rel="icon" href="/microscope.svg" />
    </Head>

    <div className="main-wrapper">
      <div className="page-wrapper">
        <SideBar items={allCategories} currentSlug={currentSlug} />

        <main className="main">
          <ArticleContainer page={pageContent}></ArticleContainer>
        </main>
      </div>
    </div>
  </div>
);

export default ArticleDetailPage;
