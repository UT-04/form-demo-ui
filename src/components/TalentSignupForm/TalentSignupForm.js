import React from 'react';
import FormComponent from '../FormComponent/FormComponent';
import FormTitle from '../FormTitle/FormTitle';

const TalentSignupForm = () => {
    return (
        <React.Fragment>
            <FormTitle
                title="Create Your Talent Account" />
            <FormComponent />
        </React.Fragment>
    );
};

export default TalentSignupForm;