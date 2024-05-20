import React from 'react';
import styles from "./Icon.module.css";

const Icon = (icon) => {
    console.log(icon.icon);
    let data = icon.icon;
    return (
        <svg className={styles.icon} style={{width: data.width}}>
            <use xlinkHref={`/sprite.svg#${data.name}`} />
        </svg>
    );
}

export default Icon;