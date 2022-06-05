import styles from '../styles/signup.module.css'
import Image from 'next/image'
import Link from 'next/link'
import astronaut from '../public/svg/astronaut.svg'
import logo from '../public/svg/logo.svg'
import google from '../public/img/google.png'
import apple from '../public/img/apple.png'
import email from '../public/svg/email.svg'
import phone from '../public/svg/phone.svg'
import password from '../public/svg/password.svg'

export default function signup(){
    return(
        <div className={styles.signup}>
          <div>
                <div className={styles.logo}>
                    <Link href='/'>
                        <a>
                          <Image src={logo} alt='logo' width='40' height='40' />
                        </a>
                    </Link>
                </div>
              <Image src={astronaut} alt='astronaut' />
          </div>

          <div className={styles.signupContainer}>
            <h2>Get started.</h2>
            <small className={styles.loginLink}>Already have an account? <Link href='/'><a>Log in</a></Link></small>
            <div className={styles.externalSignupContainer}>
              <div className={styles.externalSignup}>
                <Image src={google} alt='google' width='20' height='20' />
                <p>Sign up with google</p>
              </div>
              <div className={styles.externalSignup}>
                <Image src={apple} alt='apple' width='20' height='20' />
                <p>Sign up with apple</p>
              </div>
            </div>
            <p className={styles.seperation}>—— or sign up with ——</p>
            <form className={styles.form}>
              <div className={styles.formElement}>
                <label>EMAIL</label>
                <div className={styles.inputContainer}>
                  <Image src={email} alt='email' />
                  <input type='text' placeholder='johndoe@email.com' />
                </div>
              </div>

              <div className={styles.formElement}>
                <label>PHONE NUMBER</label>
                <div className={styles.inputContainer}>
                  <Image src={phone} alt='phone' />
                  <input type='number' placeholder='0541234567' />
                </div>
              </div>

              <div className={styles.formElement}>
                <label>PASSWORD</label>
                <div className={styles.inputContainer}>
                  <Image src={password} alt='password' />
                  <input type='password' />
                </div>
              </div>
              <div className={styles.terms}>
                <input type='checkbox' />
                <label>I agree to the <Link href='/'><a>terms and conditions</a></Link> and <Link href='/'><a>privacy policy</a></Link></label>
              </div>
              <button>Register</button>
            </form>
          </div>
        </div>
    )
}