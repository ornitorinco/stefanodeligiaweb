import React from 'react'
import CvHeader from './CvHeader';

class CV extends React.Component {
  render() {
    return <CvHeader name={this.props.name} />;
  }
}

export default CV;