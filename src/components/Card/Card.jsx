import React from "react";
import styles from "./Card.module.css";
import Icon from "../Icon/Icon";

const Card = (card) => {
    const data = card.card;
    return (
        <div className={styles.card} style={{borderColor: data.borderColor}}>
            <Icon icon={data.icon} />
            <h1 className={styles.title}>{data.title}</h1>
            <ul className={styles.list}>
                {data.services.map((service) => {
                    return (
                        <li key={service} className={styles.service}>{service}</li>
                    )
                })}
            </ul>
            <a href="" className={styles.link}>View More</a>
        </div>
    )
};

export default Card;