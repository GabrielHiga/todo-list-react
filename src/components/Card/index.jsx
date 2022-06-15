import React from 'react'
import styles from './styles.module.scss'

export const Card = ({
    title="",   
    subtitle="",
    link="",
    img="",
}) => {
    return (
        <>
            <div className={styles.wrapperCard}>
                <div className={styles.wrapImage}>
                    <img src={img}/>
                </div>
                <div className={styles.wrapContentText}>
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                    {
                        link
                        ?
                        <a href={link} target="_blank">Portifólio</a>
                        :
                        <></>
                    }
                </div>
            </div>
        </>
    );
}