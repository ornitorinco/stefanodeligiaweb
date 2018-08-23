import React from 'react'
import profile from '../../../img/profile.png'
import { Row, Col } from 'antd';

class CvHeader extends React.Component {
  render() {
    return <Row gutter={16} className="cvHeaderDiv">
	    
			<Col span={10}><h2>Resume, {this.props.name}</h2></Col>
			<Col span={6}><img className="cvHeaderImg" src={profile}/></Col>
	      
	</Row>;
  }
}

export default CvHeader;