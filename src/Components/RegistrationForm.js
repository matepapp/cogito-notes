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
        <FormItem label="">
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Kérlek add meg az vezetékneved!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Példa Péter"
            />,
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Kérlek add meg az e-mail címed!' }],
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="E-mail cím"
            />,
          )}
        </FormItem>
        <FormItem>
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
            <p style={{ fontSize: 10, padding: 0 }}>
              A regisztrációra való kattintással elfogadom az általános szerződési
              feltételeket és az adatvédelmi nyilatkozatot.
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
