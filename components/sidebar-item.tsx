import Link from "next/link";
import { Category } from "@/lib/api";
import styles from "../styles/sidebar-item.module.scss";

type Props = {
  category: Category;
  currentSlug: string;
};

const SideBarItem = ({ category, currentSlug }: Props) => {
  let classes;

  return (
    <>
      <div className={styles.category}>
        <div className={styles.categoryName}>{category.label}</div>
        <div className={styles.pagesList}>
          {category.pages.map((page) => {
            if (currentSlug === page.fullSlug) {
              classes = `${styles.pagesItem} ${styles.current}`;
            } else {
              classes = styles.pagesItem;
            }

            return (
              <Link href={page.fullSlug} passHref key={page.slug}>
                <a>
                  <div className={classes}>{page.title}</div>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SideBarItem;
