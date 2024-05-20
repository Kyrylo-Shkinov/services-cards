import React from "react";
import styles from "./Hero.module.css";
import data from "../../data";
import Card from "../Card/Card";

const Hero = () => {
    return (
        <div className={styles.box}>
            
            {data.map((card) => {
                let key = card.title;
                return (
                    <Card card={card} key={key} />
                );
            })}
        </div>
    );
};

export default Hero;