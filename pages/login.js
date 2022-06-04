import styles from '../styles/login.module.css'
import Image from 'next/image'
import astronaut from '../public/svg/astronaut.svg'

export default function login(){
    return(
        <div className={styles.login}>
            <div>
                <Image src={astronaut} alt='astronaut' />
            </div>
            <div>
                <div className={styles.loginContainer}>
                    <h3>LOG IN</h3> 
                    <div>
                        
                    </div>
                    <div>
                       
                    </div>
                    <form></form>
                    <div></div>
                </div>
            </div>
        </div>
    )
}