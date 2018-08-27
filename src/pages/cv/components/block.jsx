import React from 'react'
import { Timeline, Row, Col } from 'antd';
import DescriptionRow from './description_row';

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
	    			<DescriptionRow descriptionLabel={this.props.descriptionLabel} description={this.props.description} descriptionClass="description" />
	    			<DescriptionRow descriptionLabel={this.props.addressLabel} description={this.props.address} descriptionClass="address" />
	    			<DescriptionRow descriptionLabel={this.props.activityLabel} description={this.props.activity} descriptionClass="activity" />
	    		</Timeline.Item>
    		</Row>
  }
}

export default Block;