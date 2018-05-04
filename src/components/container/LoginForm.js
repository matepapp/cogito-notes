// @flow
import React from 'react';
import { connect } from 'react-redux';
import { authActions } from '../../actions';
import type { Dispatch, LoginUser } from '../../types';
import type { State } from '../../reducers';
import { Row, Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

const styles = {
  form: {
    width: '60%',
    margin: '0 auto',
  },
  formItem: {
    textAlign: 'center',
  },
  submitButton: {
    width: '70%',
  },
};

type Props = {
  form?: any,
  loading: boolean,
  dispatch?: Dispatch,
};

type ActionProps = { login: (user: LoginUser) => void };

class LoginForm extends React.Component<Props & ActionProps> {
  handleSubmit = e => {
    e.preventDefault();
    const { form, login } = this.props;

    form.validateFields((error, values) => {
      if (!error) {
        const { email, password } = values;
        login({ email, password });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form
        onSubmit={this.handleSubmit}
        className="login-form"
        hideRequiredMark
        layout="vertical"
        style={styles.form}>
        <FormItem label="Email">
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please add your email!' }],
          })(<Input prefix={<Icon type="mail" />} placeholder="email@address.com" />)}
        </FormItem>

        <FormItem label="Password">
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please fill in your password!' }],
          })(
            <Input
              prefix={<Icon type="lock" />}
              type="password"
              placeholder="password"
            />,
          )}
        </FormItem>

        <FormItem style={styles.formItem}>
          <Row>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={this.props.loading}
              style={styles.submitButton}>
              Login
            </Button>
          </Row>
        </FormItem>
      </Form>
    );
  }
}

const mapStateToProps = (state: State): Props => ({ loading: state.auth.loading });

const mapDispatchToProps = (dispatch: Dispatch): ActionProps => {
  return {
    login: (user: LoginUser) => dispatch(authActions.login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(LoginForm));
