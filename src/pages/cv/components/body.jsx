import React from 'react'
import PersonalInfo from './personal_info';
import Work from './work';
import Study from './study';
import { Collapse } from 'antd';

const Panel = Collapse.Panel;

class Body extends React.Component {
  render() {
    return  <Collapse defaultActiveKey="1">
    			<Panel header="Informazioni personali" key="1">      
	    			<PersonalInfo />
    			</Panel>
    			<Panel header="Esperienze professionali" key="2">  
	    			<Work />
    			</Panel>
    			<Panel header="Istruzione e Formazione" key="3">  
	    			<Study />
    			</Panel>
    		</Collapse>
  }
}

export default Body;