// @flow
import React from 'react';
import { Row, Form, Icon, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { type Dispatch, type RegisterUser } from '../types';
import { type State } from '../reducers';
import { authActions } from '../actions';

const FormItem = Form.Item;

type Props = {
  form?: any,
  loading: boolean,
};

type ActionProps = { register: (user: RegisterUser) => void };

type FormState = {
  passwordsValidationStatus: ?'success' | 'error',
  passwordsValidationMessage: ?string,
};

class NormalLoginForm extends React.Component<Props & ActionProps, FormState> {
  state = {
    passwordsValidationStatus: null,
    passwordsValidationMessage: null,
  };

  handleSubmit = event => {
    event.preventDefault();
    const { form, register } = this.props;

    form.validateFields((error, values) => {
      if (values.passwordCheck === values.password) {
        this.setState({
          passwordsValidationStatus: 'success',
          passwordsValidationMessage: null,
        });
      } else {
        this.setState({
          passwordsValidationStatus: 'error',
          passwordsValidationMessage: 'The passwords are not the same',
        });
        return;
      }

      if (!error && this.state.passwordsValidationStatus !== 'error') {
        const { password, passwordCheck, email, firstName, lastName } = values;
        register({
          password1: password,
          password2: passwordCheck,
          email,
          firstName,
          lastName,
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form
        onSubmit={this.handleSubmit}
        className="login-form"
        layout="vertical"
        style={{ width: '60%', margin: '0 auto' }}>
        <FormItem style={{ marginBottom: 10 }} label="First name">
          {getFieldDecorator('firstname', {
            rules: [{ required: true, message: 'Please fill your first name!' }],
          })(<Input prefix={<Icon type="user" />} placeholder="John" />)}
        </FormItem>

        <FormItem style={{ marginBottom: 10 }} label="Last name">
          {getFieldDecorator('lastname', {
            rules: [{ required: true, message: 'Please fill your last name!' }],
          })(<Input prefix={<Icon type="user" />} placeholder="Doe" />)}
        </FormItem>

        <FormItem style={{ marginBottom: 10 }} label="Email" type="email">
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please fill your email address!' }],
          })(<Input prefix={<Icon type="mail" />} placeholder="email@address.com" />)}
        </FormItem>

        <FormItem style={{ marginBottom: 10 }} label="Password">
          {getFieldDecorator('password', {
            rules: [
              { required: true, message: 'Please fill your password!' },
              { min: 8, message: 'Tha password should be minimum 8 character' },
            ],
          })(
            <Input
              prefix={<Icon type="lock" />}
              type="password"
              placeholder="Password"
            />,
          )}
        </FormItem>

        <FormItem
          label="Repeat password"
          validateStatus={this.state.passwordsValidationStatus}
          help={this.state.passwordsValidationMessage}>
          {getFieldDecorator('passwordCheck', {
            rules: [{ required: true, message: 'Please fill your password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password again"
            />,
          )}
        </FormItem>

        <Row>
          <Button
            type="primary"
            htmlType="submit"
            loading={this.props.loading}
            className="login-form-button"
            style={{ width: '70%' }}>
            Registration
          </Button>
        </Row>
      </Form>
    );
  }
}

const mapStateToProps = (state: State): Props => {
  return {
    loading: state.auth.loading,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): ActionProps => {
  return {
    register: (user: RegisterUser) => dispatch(authActions.register(user)),
  };
};

export const RegistrationForm = connect(mapStateToProps, mapDispatchToProps)(
  Form.create()(NormalLoginForm),
);
