import React, { useState } from 'react'
import { Card } from '../components/Card';
import styles from './tela2.module.scss';    
import { AddCard } from '../components/AddCard';

const Tela2 = () => {
    const [card, setCard] = useState([
        // {
        //     id: "1",
        //     title: "Gabriel Hideki",
        //     subtitle: "Desenvolvedor Front-End",
        //     link: "www.google.com"
        // },
        // {
        //     id: "2",
        //     title: "Ana Harume",
        //     subtitle: "UX/UI Designer",
        //     link: "www.google.com"
        // },
    ]);

    const handleAddNewCard = (cardTitle, cardSubtitle, cardLink) => {
        const newCard = [...card, {
            id: Math.random(10),
            title: cardTitle,
            subtitle: cardSubtitle,
            link: cardLink,
        }];

        setCard(newCard);
    }

    console.log(card)

    return (
        <>
            <AddCard handleAddNewCard={handleAddNewCard}/>
            <div className={styles.wrapCards}>
                {card.map((card) => (
                    <Card title={card.title} subtitle={card.subtitle} link={card.link} img="https://i.pravatar.cc/300"/>
                ))}

            </div>
        </>
    );
}

export default Tela2;