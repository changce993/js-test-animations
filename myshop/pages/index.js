import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  const [ isHovered, setIsHovered ] = useState(null);
  return (
    <div className={styles.container}>
      <motion.h1 layoutId="header">My shop</motion.h1>
      <div className={styles["product-container"]}>
        {["shoe", "headphone", "control"].map(product => (
          <Link href={product} key={product}>
            <a>
              <motion.div
                layoutId={product}
                className={styles.imageContainer}
                onMouseEnter={() => setIsHovered(product)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <img
                  className={styles.image}
                  src={`${product}.jpg`}
                />
                <p className={isHovered === product && styles.productName}>{product}</p>
              </motion.div>
            </a> 
          </Link>
        ))}
      </div>
    </div>
  )
}
