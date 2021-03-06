// @flow
import React from 'react';
import { Row, Form, Icon, Input, Button } from 'antd';
import { connect } from 'react-redux';
import type { Dispatch, RegisterUser } from '../../types';
import type { State } from '../../reducers';
import { authActions } from '../../actions';

const FormItem = Form.Item;

const styles = {
  form: {
    width: '60%',
    margin: '0 auto',
  },
  submitButton: {
    width: '70%',
  },
};

type Props = {
  form?: any,
  loading: boolean,
};

type ActionProps = { register: (user: RegisterUser) => void };

type FormState = {
  passwordsValidationStatus: ?'success' | 'error',
  passwordsValidationMessage: ?string,
};

class RegistrationForm extends React.Component<Props & ActionProps, FormState> {
  state = {
    passwordsValidationStatus: null,
    passwordsValidationMessage: null,
  };

  handleSubmit = event => {
    event.preventDefault();
    const { form, register } = this.props;

    form.validateFields((error, values) => {
      if (values.password2 === values.password1) {
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
        const { password1, password2, email, first_name, last_name } = values;
        register({ password1, password2, email, first_name, last_name });
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
        style={styles.form}>
        <FormItem label="First name">
          {getFieldDecorator('first_name', {
            rules: [{ required: true, message: 'Please fill your first name!' }],
          })(<Input prefix={<Icon type="user" />} placeholder="John" />)}
        </FormItem>

        <FormItem label="Last name">
          {getFieldDecorator('last_name', {
            rules: [{ required: true, message: 'Please fill your last name!' }],
          })(<Input prefix={<Icon type="user" />} placeholder="Doe" />)}
        </FormItem>

        <FormItem label="Email" type="email">
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please fill your email address!' }],
          })(<Input prefix={<Icon type="mail" />} placeholder="email@address.com" />)}
        </FormItem>

        <FormItem label="Password">
          {getFieldDecorator('password1', {
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
          {getFieldDecorator('password2', {
            rules: [{ required: true, message: 'Please fill your password!' }],
          })(
            <Input
              prefix={<Icon type="lock" />}
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
            style={styles.submitButton}>
            Registration
          </Button>
        </Row>
      </Form>
    );
  }
}

const mapStateToProps = (state: State): Props => ({ loading: state.auth.loading });

const mapDispatchToProps = (dispatch: Dispatch): ActionProps => ({
  register: (user: RegisterUser) => dispatch(authActions.register(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  Form.create()(RegistrationForm),
);
