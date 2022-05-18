import React from 'react'
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

function Stripe() {
    return (
        <div className={`${styles.Stripe}`}>
            <div className="w-[85%]  flex-row flex justify-between items-center mx-auto py-5">
                <div className="w-25 text-center">
                    <a href="">
                        <i className={`fab fa-twitter ${styles.Stripe__icon}`}></i>
                        <p>Twitter</p>
                    </a>
                </div>
                <div className="w-25 text-center">
                    <a href="">
                        <i className={`fab fa-discord ${styles.Stripe__icon}`}></i>
                        <p>Discord</p>
                    </a>
                </div>
                <div className="w-25 text-center">
                    <a href="">
                        <Image
                            src="/assets/images/icons/open-sea-logo.png"
                            alt="Opesn Sea Logo"
                            width="100%"
                            height="100%"
                            layout="responsive"
                            objectFit="cover"
                        />
                        <p>Discord</p>
                    </a>
                </div>
                <div className="w-25 text-center">
                    <a href="">
                        <i className={`fab fa-discord ${styles.logo}`}></i>
                        <p>Discord</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Stripe
