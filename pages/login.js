import styles from '../styles/login.module.css'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/svg/logo.svg'
import loginSitting from '../public/svg/loginSitting.svg'
import loginTyping from '../public/svg/loginTyping.svg'
import googleBlack from '../public/img/googleBlack.png'
import appleBlack from '../public/img/appleBlack.png'

export default function login(){
    let year = new Date().getFullYear()

    return(
        <div className={styles.login}>
            <div className={styles.logo}>
                <Link href='/'>
                    <a>
                      <Image src={logo} alt='logo' width='40' height='40' />
                    </a>
                </Link>
            </div>
            <div className={styles.loginSitting}>
                <Image src={loginSitting} alt='sitting' />
            </div>
            <div className={styles.loginCenter}>
                <div className={styles.formContainer}>
                    <h2>Log into your account</h2>
                    <small className={styles.forgotPassword}>Don&apos;t have an acccount? <Link href='/'><a>Sign up</a></Link></small>
                    <form className={styles.form}>
                        <input placeholder='email/phone number' type='text' />
                        <input placeholder='password' type='password' />
                        <Link href='/'>
                            <a>
                                <small>Reset your password</small>
                            </a>
                        </Link>
                        <button>Log in</button>
                    </form>
                    <p className={styles.seperation}>—— or log in with ——</p>
                    <div className={styles.externalLoginContainer}>
                        <div className={styles.externalLogin}>
                          <Image src={googleBlack} alt='google' width='40' height='40' />
                          <p>Google</p>
                        </div>
                        <div className={styles.externalLogin}>
                          <Image src={appleBlack} alt='apple' width='20' height='20' />
                          <p>Apple ID</p>
                        </div>
                    </div>
                </div>
                <small className={styles.footer}>Copyright &copy;mkmork {year} | <Link href='/'><a>Privacy Policy</a></Link> </small>
            </div>
            <div className={styles.loginTyping}>
                <Image src={loginTyping} alt='typing' />
            </div>
           
        </div>
    )
}