import styles from '../styles/article-container.module.scss';
import { Article } from '@/lib/api';

type Props = {
  page: Article;
}

const ArticleContainer = ({ page }: Props) => {
  return (
    <>
      <article>
        <div className={styles.pageContent}>
          <div dangerouslySetInnerHTML={{ __html: page.content }}></div>
        </div>
      </article>
    </>
  )
}

export default ArticleContainer
