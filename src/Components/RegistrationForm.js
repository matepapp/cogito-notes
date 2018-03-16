import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
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
        <h4 style={{ marginBottom: 0 }}>Teljes név</h4>
        <FormItem style={{ marginBottom: 10 }}>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Kérlek add meg az vezetékneved!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Példa Péter"
            />,
          )}
        </FormItem>
        <h4 style={{ marginBottom: 0 }}>Email cím</h4>
        <FormItem style={{ marginBottom: 10 }}>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Kérlek add meg az e-mail címed!' }],
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="E-mail cím"
            />,
          )}
        </FormItem>
        <h4 style={{ marginBottom: 0 }}>Jelszó</h4>
        <FormItem style={{ marginBottom: 10 }}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Kérlek add meg a jelszavad!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Jelszó"
            />,
          )}
        </FormItem>
        <h4 style={{ marginBottom: 0 }}>Jelszó megismétlése</h4>
        <FormItem>
          {getFieldDecorator('passwordCheck', {
            rules: [{ required: true, message: 'Kérlek add meg a jelszavad!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Jelszó újra"
            />,
          )}
        </FormItem>
        <FormItem style={{ textAlign: 'center' }}>
          <Row>
            <Link to="/">
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{
                  width: '70%',
                  backgroundColor: '#1890FF',
                  borderColor: '#1890FF',
                }}>
                Regisztráció
              </Button>
            </Link>
          </Row>
          <Row>
            <p style={{ fontSize: 10, padding: 0, lineHeight: 1.5 }}>
              A regisztrációra való kattintással elfogadom az{' '}
              <a href="">általános szerződési feltételeket</a> és az{' '}
              <a href="">adatvédelmi nyilatkozatot</a>.
            </p>
          </Row>
          <Row>
            Már van fiókod? <a href="">Jelentkezz be</a>
          </Row>
        </FormItem>
      </Form>
    );
  }
}

const RegistrationForm = Form.create()(NormalLoginForm);

export default RegistrationForm;
