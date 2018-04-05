// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Form, Icon, Input, Button } from 'antd';
import { User } from '../types';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component<{}> {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((error, values) => {
      if (!error) {
        const { username, password, email, firstName, lastName } = values;
        const user: User = { username, password, email, firstName, lastName };
        // TODO: Registration
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form
        onSubmit={this.handleSubmit}
        className="login-form"
        style={{ width: '50%', margin: '0 auto' }}>
        <h4 style={{ marginBottom: 0 }}>First name</h4>
        <FormItem style={{ marginBottom: 10 }}>
          {getFieldDecorator('firstname', {
            rules: [{ required: true, message: 'Please fill your first name!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="John"
            />,
          )}
        </FormItem>

        <h4 style={{ marginBottom: 0 }}>Last name</h4>
        <FormItem style={{ marginBottom: 10 }}>
          {getFieldDecorator('lastname', {
            rules: [{ required: true, message: 'Please fill your last name!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Doe"
            />,
          )}
        </FormItem>

        <h4 style={{ marginBottom: 0 }}>Email</h4>
        <FormItem style={{ marginBottom: 10 }}>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please fill in your email address!' }],
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="email@address.com"
            />,
          )}
        </FormItem>

        <h4 style={{ marginBottom: 0 }}>Password</h4>
        <FormItem style={{ marginBottom: 10 }}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please fill in your password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </FormItem>

        <h4 style={{ marginBottom: 0 }}>Repeat password</h4>
        <FormItem>
          {getFieldDecorator('passwordCheck', {
            rules: [{ required: true, message: 'Please fill in your password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password again"
            />,
          )}
        </FormItem>

        <FormItem style={{ textAlign: 'center' }}>
          <Row>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{
                width: '70%',
                backgroundColor: '#1890FF',
                borderColor: '#1890FF',
              }}>
              Registration
            </Button>
          </Row>
        </FormItem>
      </Form>
    );
  }
}

const RegistrationForm = Form.create()(NormalLoginForm);
export default RegistrationForm;
