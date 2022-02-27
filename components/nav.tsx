/* eslint-disable @next/next/no-img-element */
import styles from "../styles/nav.module.scss";
import Link from "next/link";

const Nav = () => {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/" passHref>
          <a>
            <div className={styles.title}>
              <div className="logo">
                <img src="/microscope.svg" width="32px" height="32px" alt="logo"></img>
              </div>
              <div className={styles.text}>Metadocs</div>
            </div>
          </a>
        </Link>
      </nav>
    </>
  );
};

export default Nav;
