import React from 'react';
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styles from './AuthForm.module.css';
import FanSignupForm from '../FanSignupForm/FanSignupForm';
import TalentSignupForm from '../TalentSignupForm/TalentSignupForm';

const AuthForm = () => {
    return (
        <React.Fragment>
            <Container className={["my-5 justify-content-center", styles.container]} fluid="md">
                <Tabs
                    justify
                    defaultActiveKey="fanSignup"
                    id="uncontrolled-tab-example"
                    className={["mb-3", "justify-content-center", styles.tabs].join(" ")}
                    variant='pills'
                >
                    <Tab eventKey="fanSignup" title="Fan" tabClassName={styles.tab}>
                        <FanSignupForm />
                    </Tab>
                    <Tab eventKey="talentSignup" title="Talent" tabClassName={styles.tab}>
                        <TalentSignupForm />
                    </Tab>
                </Tabs>
            </Container>
        </React.Fragment>
    );
};

export default AuthForm;