import React from 'react'
import profile from '../../../img/profile.png'
import { Row, Col } from 'antd';

class CvHeader extends React.Component {
  render() {
    return <Row gutter={16}><div className="cvHeaderDiv"><h2>Resume, {this.props.name}</h2><img className="cvHeaderImg" src={profile}/></div>
  <Col span={6} />
</Row>;
  }
}

export default CvHeader;