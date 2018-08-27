import React from 'react'
import profile from '../../../img/profile.png'
import { Row, Col, Avatar } from 'antd';

class CvHeader extends React.Component {
  render() {
    return <Row gutter={24} className="cvHeaderDiv">
	    
			<Col span={12}><h2>{this.props.name}</h2></Col>
			<Col span={4} offset={8}><Avatar size={128} shape="square" src={profile} /></Col>
	      
	</Row>
  }
}

export default CvHeader;