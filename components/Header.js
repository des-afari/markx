import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/header.module.css'
import logo from '../public/svg/logo.svg'

export default function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href='/'>
                    <a>
                        <Image src={logo} alt='logo' width='40' height='40' />
                    </a>
                </Link>
            </div>
            <div className={styles.nav}>
                <Link href='/login'>
                    <a>LOG IN</a>
                </Link>
            </div>
        </header>
    )
}