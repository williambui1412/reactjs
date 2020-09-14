import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label, FormFeedback } from 'reactstrap';
import { ErrorMessage } from 'formik';

class InputField extends PureComponent {
    render() {
        const {field, form, type, label, placeholder, disabled  } = this.props;
        const {name, value, onChange, onBlur} = field;
        const {errors, touched}  = form;
        const showError = errors[name];
        return (
            <FormGroup>
                {label && <Label for={name} >{label}</Label> }
                
                <Input 
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                    
                //{...field}


                invalid={showError}
                type={type}
                disabled={disabled}
                placeholder={placeholder} />
                {/* { showError && <p>{errors[name]}</p>} */}
                {/* { showError && <FormFeedback>{errors[name]}</FormFeedback>} */}
                <ErrorMessage name={name} component={FormFeedback} />
            </FormGroup>
        );
    }
}

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};
InputField.defaultProps ={
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
}
export default InputField;