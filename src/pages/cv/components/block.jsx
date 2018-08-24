import React from 'react'
import { Timeline, Row, Col } from 'antd';

class Block extends React.Component {
  render() {
    return <Row className="block">
	    		<Timeline.Item color="green">
				    <Row gutter={24}>
					    <Col span={24} className="dateFromTo">
					    	{this.props.dateFrom} - {this.props.dateTo}
					    </Col>
				    </Row>
				    <Row gutter={24}>
					    <Col span={24} className="blockTitle">
					    	{this.props.title}
					    </Col>
				    </Row>
	    		</Timeline.Item>
	    		<Timeline.Item color="blue">
				    <Row gutter={24} className="blockRow">
				    	<Col span={7} style={{textAlign:"right"}} className="label">
					    	{this.props.descriptionLabel}
					    </Col>
					    <Col span={17} className="description">
					    	{this.props.description}
					    </Col>
				    </Row>
				    <Row gutter={24} className="blockRow">				    
				    	<Col span={7} style={{textAlign:"right"}} className="label">
					    	{this.props.addressLabel}
					    </Col>
					    <Col span={17} className="address">
					    	{this.props.address}
					    </Col>
				    </Row>
				    <Row gutter={24} className="blockRow">
				    	<Col span={7} style={{textAlign:"right"}} className="label">
					    	{this.props.activityLabel}
					    </Col>
					    <Col span={17} className="activity">
					    	{this.props.activity}
					    </Col>
				    </Row>
	    		</Timeline.Item>
    		</Row>
  }
}

export default Block;