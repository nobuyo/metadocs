import Link from "next/link";
import { Category } from "@/lib/api";
import SideBarItem from "./sidebar-item";
import styles from "../styles/sidebar.module.scss";

type Props = {
  items: Category[];
  currentSlug: string;
};

const SideBar = ({ items, currentSlug }: Props) => {
  const classes = `sidebar ${styles.sidebar}`;
  return (
    <>
      <div className={classes}>
        <div className={styles.sidebarInner}>
          <div className="categories-list">
            {items.map((category) => {
              return (
                <SideBarItem
                  category={category}
                  currentSlug={currentSlug}
                  key={category.slug}
                ></SideBarItem>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
