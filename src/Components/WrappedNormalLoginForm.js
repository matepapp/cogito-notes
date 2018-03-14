import React from 'react';
// // import RegistrationInputs from '../Components/RegistrationInputs';
// // import RegistrationSubmit from '../Components/RegistrationSubmit';
// import { Form, Icon, Input, Button, Checkbox } from 'antd';

// import { Card } from 'antd';

// const RegistrationCard = () => {
//   return (
//     <Card>
//       <RegistrationInputs />
//       <RegistrationSubmit />
//     </Card>
//   );
// };

// export default RegistrationForm;

import { Row, Divider, Card, Form, Icon, Input, Button, Checkbox } from 'antd';
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
      <Card title="Regisztráció" style={{ textAlign: 'center' }}>
        <Form
          onSubmit={this.handleSubmit}
          className="login-form"
          style={{ width: '50%', margin: '0 auto' }}>
          <FormItem>
            {getFieldDecorator('lastName', {
              rules: [{ required: true, message: 'Kérlek add meg a vezetékneved' }],
            })(<Input placeholder="Vezetéknév" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('firstName', {
              rules: [{ required: true, message: 'Kérlek add meg az keresztneved!' }],
            })(<Input placeholder="Keresztnév" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Kérlek add meg az e-mail címed!' }],
            })(<Input placeholder="E-mail cím" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Kérlek add meg a jelszavad!' }],
            })(<Input type="password" placeholder="Jelszó" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('passwordCheck', {
              rules: [{ required: true, message: 'Kérlek add meg a jelszavad!' }],
            })(<Input type="password" placeholder="Jelszó újra" />)}
          </FormItem>
          <FormItem style={{ textAlign: 'center' }}>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: false,
            })(<Checkbox>ÁSZF elfogadása</Checkbox>)}
            <Divider style={{ width: '100%' }} />
            <Row>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ width: '50%' }}>
                Regisztráció
              </Button>
            </Row>
            <Row>
              Már van fiókod? <a href="">Jelentkezz be</a>
            </Row>
          </FormItem>
        </Form>
      </Card>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;
