import React from 'react'
import Mailto from 'react-protected-mailto'
import { Row, Col, Icon } from 'antd';

class EmailEntry extends React.Component {
  render() {
	return <Row gutter={24} >
	    		<Col span={11} style={{textAlign:"right"}}>
	    			<p className="label">{this.props.label}</p>
	    		</Col>
	    		<Col span={1} >
	    			<Icon type={this.props.type} />
	    		</Col>
	    		<Col span={12} textAlign="left">
	    		<Row  type="flex" justify="start" >
	    		{
          			this.props.emails.map(function(email) {
            		return <Col span={8}><Mailto key={email.email} email={email.email}
	    		  	headers={{subject:email.subject}} obfuscatedHref={email.value}/></Col>
          				})
        		}
	    		 </Row>
	    		</Col>
    		</Row>
	}
}

export default EmailEntry;