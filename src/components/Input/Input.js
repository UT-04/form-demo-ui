import React, { useReducer, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { validate } from '../../util/validators';

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
        case 'TOUCH':
            return {
                ...state,
                isTouched: true
            }
        default:
            return state;
    }
}

const Input = (props) => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue || '',
        isTouched: false,
        isValid: props.initialValid || false
    });

    const { id, onInput, invalidateFormOnChange } = props;
    const { value, isValid } = inputState;
    useEffect(() => {
        if (onInput)
            onInput(id, value, isValid, invalidateFormOnChange);
    }, [id, value, isValid, onInput]);

    const changeHandler = event => {
        let val = event.target.value;

        if (event.target.type === 'checkbox')
            val = event.target.checked;

        dispatch({
            type: 'CHANGE',
            val: val,
            validators: props.validators
        });

        if (props.onChange)
            props.onChange(val);
    };

    const touchHandler = () => {
        dispatch({
            type: 'TOUCH'
        });
    };

    const isInputInvalid = !inputState.isValid && inputState.isTouched;

    let element$ = [];
    if (props.element === 'multi-input') {
        for (let i = 0; i < props.noOfInputs; i++) {
            element$.push(i);
        }
    }

    let element;
    switch (props.element) {
        case 'input':
            element = <Form.Group className='mb-4'>
                <Form.Label className={`${isInputInvalid && "text-danger"}`}>{props.label}</Form.Label>
                <Form.Control
                    className={`${isInputInvalid && "invalid border border-danger"}`}
                    type={props.type}
                    placeholder={props.placeholder}
                    onChange={changeHandler}
                    onBlur={touchHandler}
                    value={inputState.value} />
                {!inputState.isValid && inputState.isTouched && (
                    <Form.Text className="text-danger d-block">{props.errorText || 'This field is required.'}</Form.Text>
                )}
                {!!props.extraText && (
                    <Form.Text className="text-muted">{props.extraText}</Form.Text>
                )}
            </Form.Group>
            break;
        case 'textarea':
            element = <Form.Group className='mb-4'>
                <Form.Label className={`${isInputInvalid && "text-danger"}`}>{props.label}</Form.Label>
                <Form.Control
                    className={`${isInputInvalid && "invalid border border-danger"}`}
                    as="textarea"
                    rows={props.rows || 3}
                    type={props.type}
                    placeholder={props.placeholder}
                    onChange={changeHandler}
                    onBlur={touchHandler}
                    value={inputState.value} />
                {!inputState.isValid && inputState.isTouched && (
                    <Form.Text className="text-danger d-block">{props.errorText || 'This field is required.'}</Form.Text>
                )}
                <Form.Text className="text-muted">{props.extraText}</Form.Text>
            </Form.Group>
            break;
    }
    return (
        <React.Fragment>
            {element}
        </React.Fragment>
    );
};

export default Input;

