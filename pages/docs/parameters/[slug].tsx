import { NextPage, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { getAllCategories, getArticle } from '@/lib/api';
import SideBar from '@/components/sidebar';
import ArticleContainer from '@/components/article-container';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticPaths = () => {
  const categories = getAllCategories();
  const slugs = categories.flatMap(category => {
    return category.pages.map((page) => page.slug);
  })

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
  const fullSlug = `/docs/parameters/${params.slug}`
  const pageContent = await getArticle(`parameters/${params.slug}`);

  return {
    props: { pageContent, allCategories, currentSlug: fullSlug },
  };
}

const ArticleDetailPage: NextPage<Props> = ({ pageContent, allCategories, currentSlug }) => (
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
