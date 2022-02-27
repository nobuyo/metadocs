/* eslint-disable @next/next/no-img-element */
import getConfig from "next/config";
import Link from "next/link";

import styles from "../styles/nav.module.scss";

const { publicRuntimeConfig } = getConfig();

const Nav = () => {
  const basePath = publicRuntimeConfig?.basePath ?? '';

  return (
    <>
      <nav className={styles.nav}>
        <Link href="/" passHref>
          <a>
            <div className={styles.title}>
              <div className="logo">
                <img src={`${basePath}/microscope.svg`} width="32px" height="32px" alt="logo"></img>
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
