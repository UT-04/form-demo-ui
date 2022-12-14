import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useForm } from '../../hooks/FormHook';
import Input from '../Input/Input';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../util/validators';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const FormComponent = (props) => {
    const formObj = {
        first_name: {
            formState: {
                value: '',
                isValid: false
            },
            props: {
                element: "input",
                type: "text",
                label: "First Name*",
                validators: [VALIDATOR_REQUIRE()]
            }
        },
        last_name: {
            formState: {
                value: '',
                isValid: false
            },
            props: {
                element: "input",
                type: "text",
                label: "Last Name*",
                validators: [VALIDATOR_REQUIRE()]
            }
        },
        username: {
            formState: {
                value: '',
                isValid: false
            },
            props: {
                element: "input",
                type: "text",
                label: "Username*",
                validators: [VALIDATOR_REQUIRE()]
            }
        },
        email: {
            formState: {
                value: '',
                isValid: false
            },
            props: {
                element: "input",
                type: "email",
                label: "Email*",
                validators: [VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()],
            }
        },
        password: {
            formState: {
                value: '',
                isValid: false
            },
            props: {
                element: "input",
                type: "password",
                label: "Password*",
                validators: [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)],
                extraText: "Password must have at least 6 characters.",
                errorText: "Must have at least 6 characters."
            }
        }
    };

    const [agreeToTermsAndConditions, setAgreeToTermsAndConditions] = useState(false);

    const formStateObj = {};
    for (const key in formObj) {
        if (formObj[key].formState)
            formStateObj[key] = formObj[key].formState;

        formObj[key].props = {
            ...formObj[key].props,
            id: `${key}`
        }
    }

    const [formState, inputHandler] = useForm(formStateObj, props.initialValid);
    return (
        <React.Fragment>
            <Container>
                <Form
                    className="w-75 mx-auto"
                    onSubmit={(e) => {
                        e.preventDefault();
                        props.onFormSubmit({
                            first_name: formState.inputs.first_name.value,
                            last_name: formState.inputs.last_name.value,
                            username: formState.inputs.username.value,
                            email: formState.inputs.email.value,
                            password: formState.inputs.password.value,
                        })
                    }}>
                    {Object.values(formObj).map(inp => {
                        return <Input
                            key={inp.props.id}
                            {...inp.props}
                            initialValue={inp.formState ? inp.formState.value : props.value}
                            initialValid={inp.formState ? inp.formState.isValid : props.valid}
                            onInput={inp.formState ? inputHandler : null} />
                    })}

                    <Form.Check
                        type="checkbox"
                        checked={agreeToTermsAndConditions}
                        label={<span>I agree to the <span className="text-primary fw-bold">Terms and Conditions</span>.</span>}
                        onChange={(e) => setAgreeToTermsAndConditions(e.target.checked)} />

                    <Button
                        type="submit"
                        className="mt-3"
                        disabled={!formState.isValid || !agreeToTermsAndConditions || props.isLoading}>
                        {props.isLoading && <LoadingSpinner />}
                        Sign Up</Button>
                </Form>
            </Container>
        </React.Fragment>
    );
};

export default FormComponent;