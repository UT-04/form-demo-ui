import React from 'react';
import { useHttpClient } from '../../hooks/HttpHook';
import ErrorModal from '../ErrorModal/ErrorModal';
import FormComponent from '../FormComponent/FormComponent';
import FormTitle from '../FormTitle/FormTitle';

const FanSignupForm = () => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const submitForm = async (formData) => {
        sendRequest(
            `${process.env.REACT_APP_BACKEND_URL}/auth/isUsernameAvailable/${formData.username}`,
            'GET',
        )
            .then(res => {
                if (res.isUsernameAvailable)
                    return sendRequest(
                        `${process.env.REACT_APP_BACKEND_URL}/auth/signup`,
                        'POST',
                        JSON.stringify({
                            user_type: 'Fan',
                            ...formData
                        }),
                        {
                            'Content-Type': 'application/json'
                        }
                    )
            })
    }

    return (
        <React.Fragment>
            <ErrorModal show={!!error} error={error} onHide={clearError} />
            <FormTitle
                title="Create Your Fan Account" />
            <FormComponent
                onFormSubmit={submitForm}
                isLoading={isLoading} />
        </React.Fragment>
    );
};

export default FanSignupForm;