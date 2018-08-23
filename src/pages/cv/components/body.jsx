import React from 'react'
import PersonalInfo from './personal_info';
import Section from './section';

class Body extends React.Component {
  render() {
    return  <div>
    		<PersonalInfo />
    		<Section />
    </div>
  }
}

export default Body;