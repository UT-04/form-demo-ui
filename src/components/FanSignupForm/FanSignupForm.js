import React from 'react';
import FormComponent from '../FormComponent/FormComponent';
import FormTitle from '../FormTitle/FormTitle';

const FanSignupForm = () => {
    return (
        <React.Fragment>
            <FormTitle
                title="Create Your Fan Account" />
            <FormComponent />
        </React.Fragment>
    );
};

export default FanSignupForm;