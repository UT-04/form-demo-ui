import React from 'react';
import styles from './FormTitle.module.css';

const FormTitle = ({ title }) => {
    return (
        <React.Fragment>
            <h2 className={[styles.title]}>{title}</h2>
        </React.Fragment>
    );
};

export default FormTitle;