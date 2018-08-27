import React from 'react'
import { Row, Col } from 'antd';

class DescriptionRow extends React.Component {
  render() {
    return <Row className="blockRow">
    			<Row gutter={24}>
				   	<Col span={7} style={{textAlign:"right"}} className="label">
				    	{this.props.descriptionLabel}
				    </Col>
				    <Col span={17} className={this.props.descriptionClass}>
				    	{this.props.description}
				    </Col>
				</Row>	    		
    		</Row>
  }
}

export default DescriptionRow;