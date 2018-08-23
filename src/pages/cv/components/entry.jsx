import React from 'react'
import { Row, Col, Icon } from 'antd';

class Entry extends React.Component {
  render() {
    return <Row gutter={24} >
	    		<Col span={10} style={{textAlign:"right"}}>
	    			<p className="label">{this.props.label}</p>
	    		</Col>
	    		<Col span={2} >
	    			<Icon type={this.props.type} />
	    		</Col>
	    		<Col span={12} textAlign="left">
	    			<p  className="value">{this.props.value}</p>
	    		</Col>
    		</Row> 
  }
}

export default Entry;