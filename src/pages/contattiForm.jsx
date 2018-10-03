import 'antd/dist/antd.css'
import '../layouts/contatti.css'
import React, { Component, Fragment } from 'react'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import Recaptcha from 'react-google-recaptcha';
    
class ContattiForm extends React.Component {
  state = {
    autoCompleteResult: [],
  };

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    document.body.appendChild(script);
  }

  triggerChange = (changedValue) => {
    // Should provide an event to pass value to Form.
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(Object.assign({}, this.state, changedValue));
    }
  }

  handleChange(value) {
    this.triggerChange({value});
  }

	handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    	});
  	}

  handleReCaptcha = (rule, value, callback) => {
    grecaptcha.getResponse().length !== 0 ? callback() : callback("Mettere il segno di spunta per confermare di essere un utente reale.");
 }
	
	render(){
	const { autoCompleteResult } = this.state;
  const { getFieldDecorator } = this.props.form;
  const FormItem = Form.Item;
  var TextArea = Input.TextArea;

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '39',
    })(
      <Select style={{ width: 90 }}>
        <Option value="39">+39</Option>
        <Option value="41">+41</Option>
      </Select>
    );

    const valueFormatter = e => {debugger};
    
    return <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="Email"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'Non hai inserito un\'email valida.',
            }, {
              required: true, message: 'Iserisci il tuo indirizzo email',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              Messaggio&nbsp;
              <Tooltip title="Inserisci qua il testo del messaggio da inviare al Dr. Deligia">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
        >
          {getFieldDecorator('messaggio', {
            rules: [{ required: true, message: 'Scrivi qua il messaggio che mi vuoi inviare', whitespace: true }],
          })(
            <TextArea autosize={{ minRows: 16, maxRows: 26 }}/>
          )}
        </FormItem>        
        <FormItem
          {...formItemLayout}
          label="Telefono"
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Inserisci il tuo numero di telefono' }],
          })(
            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
          )}
        </FormItem>        
        <FormItem
          {...formItemLayout}
          label="Verifica"
          extra="Metti il segno di spunta per verificare che sia un utente reale."
        >
              {getFieldDecorator('captcha', {
                validateTrigger: 'onChange',
                trigger: 'onChange',
                rules: [{ required: true, message: 'Verificare che si tratti di un utente reale'}, {
                  validator: this.handleReCaptcha
            }],
              })(                
            <Recaptcha
              sitekey="6LdJUG4UAAAAAGjtjPP7UfGepGgpLUymPTk1NhTF"
              size="normal"
              render="explicit"
              hl="it"
              onChange= {this.handleChange.bind(this)}
              ref={(r) => this.recaptcha = r, (r) => this.value = undefined}
            />
              )}
        </FormItem>
        
        <FormItem {...tailFormItemLayout}>
          <Button id="submit" icon="mail" size="large" className="submitButton" htmlType="submit">Invia</Button>
        </FormItem>
      </Form>
	}
}

export default Form.create()(ContattiForm);
