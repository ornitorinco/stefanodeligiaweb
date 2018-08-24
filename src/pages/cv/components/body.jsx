import React from 'react'
import PersonalInfo from './personal_info';
import Work from './work';
import Study from './study';
import Languages from './languages';
import { Collapse } from 'antd';

const Panel = Collapse.Panel;
const Lang = [{
	name: "English",
	data: [{
			  key: '1',
			  ascolto: 'Sufficiente',
			  lettura: 'Buono',
			  interazioneOrale: 'Sufficiente',
			  produzioneOrale: 'Sufficiente',
			  scritto: 'Discreto',
			}]
}];

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
    			<Panel header="Capacità e competenze personali" key="4">  
	    			<Languages languageLabel="Madrelingua(e)" languages={Lang}/>
    			</Panel>
    		</Collapse>
  }
}

export default Body;