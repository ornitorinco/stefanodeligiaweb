import React from 'react'
import CvHeader from './CvHeader';
import Body from './body';

class CV extends React.Component {
  render() {
    return  <div >
    <CvHeader name={this.props.name} />
    <Body/>
    </div>
  }
}

export default CV;