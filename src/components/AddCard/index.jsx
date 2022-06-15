import React, { useState } from 'react'   
import styles from './styles.module.scss'

export const AddCard = ({handleAddNewCard}) => {
    const [cardTitle, setCardTitle] = useState('');
    const [cardSubtitle, setCardSubtitle] = useState('');
    const [cardLink, setCardLink] = useState('');

    const handleInputChangeName = (e) => {
        setCardTitle(e.target.value)
    }
    
    const handleInputChangeSubtitle = (e) => {
        setCardSubtitle(e.target.value)
    }
    
    const handleInputChangeLink = (e) => {
        setCardLink(e.target.value)
    }

    const handleAddCardButton = () => {
        handleAddNewCard(cardTitle, cardSubtitle, cardLink)
        console.log(cardTitle)
    }

    return (
        <>
            <div className={styles.addCardContainer}>
                <h2>Adicionar Card</h2>
                <div className={styles.wrapperItems}>
                    <div className={styles.wrapInput}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            onChange={handleInputChangeName}
                            value={cardTitle}
                        />
                    </div>
                    <div className={styles.wrapInput}>
                        <label htmlFor="profession">Profissão</label>
                        <input
                            type="text"
                            id="profession"
                            onChange={handleInputChangeSubtitle}
                            value={cardSubtitle}
                        />
                    </div>
                    <div className={styles.wrapInput}>
                        <label htmlFor="link">Portifólio</label>
                        <input
                            type="text"
                            id="link"
                            placeholder="www.seuportifolio.com.br"
                            onChange={handleInputChangeLink}
                            value={cardLink}
                        />
                    </div>
                </div>
                <button onClick={handleAddCardButton}>Enviar</button>
            </div>
        </>
    )
}