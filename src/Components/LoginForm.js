// @flow
import React from 'react';
import { connect } from 'react-redux';
import { authActions } from '../actions';
import { Dispatch } from '../types';
import { Row, Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

type Props = {
  form: any,
  dispatch: Dispatch,
};

class NormalLoginForm extends React.Component<Props> {
  handleSubmit = e => {
    e.preventDefault();
    const { form, dispatch } = this.props;

    form.validateFields((error, values) => {
      if (!error) {
        const { email, password } = values;
        dispatch(authActions.login(email, password));
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form
        onSubmit={this.handleSubmit}
        className="login-form"
        style={{ width: '50%', margin: '0 auto', textAlign: 'center' }}>
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
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please fill in your password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="password"
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
              Login
            </Button>
          </Row>
        </FormItem>
      </Form>
    );
  }
}

const LoginForm = connect(null)(Form.create()(NormalLoginForm));
export default LoginForm;
