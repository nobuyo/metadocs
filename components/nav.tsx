import styles from '../styles/nav.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/" passHref>
          <a>
            <div className={styles.title}>
              <div className="logo">
                {Image({ src: "/microscope.svg", width: '32px', height: '32px'})}
              </div>
              <div className={styles.text}>Metadocs</div>
            </div>
          </a>
        </Link>
      </nav>
    </>
  )
}

export default Nav
