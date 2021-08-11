import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  const { query: { product } } = useRouter();
  return (
    <div className={styles.container}>
      <motion.h1 layoutId="header">{product}</motion.h1>

      <motion.div className={styles.bigImage} layoutId={product}>
        <img
          className={styles.image}
          src={`${product}.jpg`}
        />
        <div className={styles.player}>
          <img src="/play.svg"/>
        </div>
      </motion.div>

      <Link href="/">
        <a className={styles.backToHome}>
          Back to home
        </a>
      </Link>
    </div>
  )
}