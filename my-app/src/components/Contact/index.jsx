import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, FastField } from 'formik';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import InputField from '../../CustomField/InputField';
import * as Yup from 'yup'; // for everything

class FormContact extends PureComponent {
    render() {

        const initialValues = {
            Name: '',
            Email: '',
            Phone_number: '',
            Message: '',
        }

        const validationSchema = Yup.object().shape({
            Name: Yup.string().required('Name field is required'),
            //Email: Yup.string().email("Invalid email").required('Email field is required'),
            Phone_number: Yup.number().typeError('Invalid phone number').required('Phone number field is required'),
            Message: Yup.string().required('Message field is required'),
        })

        const handleFormSubmit = (values, formikBag) => {
            console.log('Form submit: ', { values, formikBag });
            alert('Your message has been sent');
          };

        return (
            <>
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleFormSubmit}
            >
                {
                    formikProps =>{
                        const { values , errors, touched} = formikProps;
                        //console.log({values , errors, touched});
                        return(
                            <Form>
                                <FastField
                                    name="Name"
                                    component={InputField}
                                    
                                    label="Name"
                                    placeholder="Name"
                                />

                                <FastField
                                    name="Email"
                                    component={InputField}
                                    
                                    label="Email"
                                    placeholder="Email"
                                />

                                <FastField
                                    name="Phone_number"
                                    component={InputField}
                                    
                                    label="Phone number"
                                    placeholder="Phone number"
                                />

                                <FastField
                                    name="Message"
                                    component={InputField}
                                    
                                    type='textarea'
                                    label="Message"
                                    placeholder="Message"
                                />

                                
                                <FormGroup>
                                    <Button className="red_button message_submit_btn trans_300" type="submit" >SEND MESSAGE</Button>
                                </FormGroup>

                            </Form>
                        )
                    }
                }
            </Formik>
            
            </>
        );
    }
}

FormContact.propTypes = {

};

export default FormContact;