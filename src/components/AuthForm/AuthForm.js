import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styles from './AuthForm.module.css';
import FanSignupForm from '../FanSignupForm/FanSignupForm';
import TalentSignupForm from '../TalentSignupForm/TalentSignupForm';

const AuthForm = () => {
    return (
        <React.Fragment>
            <Tabs
                defaultActiveKey="fanSignup"
                id="uncontrolled-tab-example"
                className={["mb-3", styles.container].join(" ")}
                variant='pills'
            >
                <Tab eventKey="fanSignup" title="Fan Signup">
                    <FanSignupForm />
                </Tab>
                <Tab eventKey="talentSignup" title="Talent Signup">
                    <TalentSignupForm />
                </Tab>
            </Tabs>
        </React.Fragment>
    );
};

export default AuthForm;