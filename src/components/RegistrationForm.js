// @flow
import React from 'react';
import { Row, Form, Icon, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { type Dispatch } from '../types';
import { authActions } from '../actions';

const FormItem = Form.Item;

type Props = {
  form: any,
  dispatch: Dispatch,
};

type State = {
  passwordsValidationStatus: ?'success' | 'error',
  passwordsValidationMessage: ?string,
};

class NormalLoginForm extends React.Component<Props, State> {
  state = {
    passwordsValidationStatus: null,
    passwordsValidationMessage: null,
  };

  handleSubmit = event => {
    event.preventDefault();
    const { form, dispatch } = this.props;

    form.validateFields((error, values) => {
      console.log(values.passwordCheck);

      values.passwordCheck == values.password
        ? this.setState({
            passwordsValidationStatus: 'success',
            passwordsValidationMessage: null,
          })
        : this.setState({
            passwordsValidationStatus: 'error',
            passwordsValidationMessage: 'The passwords are not the same',
          });

      if (!error) {
        const { username, password, passwordCheck, email, firstName, lastName } = values;
        dispatch(
          authActions.register({
            username,
            password1: password,
            password2: passwordCheck,
            email,
            firstName,
            lastName,
          }),
        );
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

        <FormItem style={{ marginBottom: 10 }} label="Username">
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please fill your username!' }],
          })(<Input prefix={<Icon type="user" />} placeholder="johndoe" />)}
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
            className="login-form-button"
            style={{ width: '70%' }}>
            Registration
          </Button>
        </Row>
      </Form>
    );
  }
}

export const RegistrationForm = connect(null)(Form.create()(NormalLoginForm));
