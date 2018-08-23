import React from 'react'
import profile from '../../../img/profile.png'
import { Row, Col, Avatar } from 'antd';

class CvHeader extends React.Component {
  render() {
    return <Row gutter={24} className="cvHeaderDiv">
	    
			<Col span={12}><h2>Resume, {this.props.name}</h2></Col>
			<Col span={4} offset={8}><Avatar size={64} src={profile} /></Col>
	      
	</Row>;
  }
}

export default CvHeader;