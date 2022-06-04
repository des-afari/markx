import Header from '../components/Header'
import styles from '../styles/index.module.css'
import Image from 'next/image'
import Link from 'next/link'
import milestone from '../public/svg/milestone.svg'

export default function Home() {
  return (
    <div>
      <Header />
      <main className={styles.mainIndex}>
        <div className={styles.frontPage}>
         <div>
            <h1>The <span>fastest</span> and most convenient way to invest in Ghana</h1>
            <p>suitable for your purposes and needs and causing the least difficulty: Our local shop has very convenient opening hours a bikes a very. </p>
            <div className={styles.linkContainer}>
              <Link href='/'>
                <a>Get Started</a>
              </Link>
              <Link href='/'>
                <a>Learn More</a>
              </Link>
            </div>
         </div>
         <div>
           <Image src={milestone} alt='milestone' />
         </div>
        </div>
      </main>
    </div>
  )
}
