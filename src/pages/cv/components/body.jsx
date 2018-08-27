import React from 'react'
import PersonalInfo from './personal_info';
import Work from './work';
import Study from './study';
import Languages from './languages';
import { Collapse } from 'antd';
import DescriptionRow from './description_row';

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

const Keys = ["1","2","3", "4"];

class Body extends React.Component {
  render() {
    return  <Collapse activeKey = {Keys}>
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
	    			<DescriptionRow descriptionLabel="Capacità e competenze sociali" description="Ottima capacità di comunicazione con le persone e propensione per il lavoro in team" descriptionClass="description" />
	    			<DescriptionRow descriptionLabel="Capacità e competenze organizzative" description="Ottime capacità organizzative sul posto di lavoro e privatamente" descriptionClass="description" />
	    			<DescriptionRow descriptionLabel="Capacità e competenze informatiche" description="Buone capacità informatiche relative all'utilizzo del pc" descriptionClass="description" />
	    			<DescriptionRow descriptionLabel="Altre capacità e competenze" description="Capacità di utilizzo di apparecchi elettrici/elettronici in campo riabilitativo" descriptionClass="description" />
    			</Panel>
    			<Panel header="Ulteriori informazioni" key="5">
	    			<DescriptionRow descriptionLabel="" description="Patente B" descriptionClass="description" />
	    			<DescriptionRow descriptionLabel="" description="Tirocini didattici di Fitness - Wellness e di sport per disabili" descriptionClass="description" />
	    			<DescriptionRow descriptionLabel="" description="Corsi di antropometria e tecniche del massaggio" descriptionClass="description" />
	    			<DescriptionRow descriptionLabel="" description="Brevetto di primo livello rilasciato da Apnea Academy" descriptionClass="description" />
	    			<DescriptionRow descriptionLabel="" description="Brevetto MIP rilasciato da FIN in osservanza di Guardia Costiera" descriptionClass="description" />
	    			<DescriptionRow descriptionLabel="" description="Certificato di operatore in tecniche di chiropratica essenziale presso Istituto di Scienze Umane Roma" descriptionClass="description" />
	    			<DescriptionRow descriptionLabel="" description="Certificato Academia Italiana Shiatsu-Do" descriptionClass="description" />
	    			<DescriptionRow descriptionLabel="" description="Certificato di operatore in bendaggio neuro-cinetico progressivo" descriptionClass="description" />
	    			<DescriptionRow descriptionLabel="" description="Corso su approccio del paziente in obesità prescrizione esercio e indivuazione del carico" descriptionClass="description" />
	    			<DescriptionRow descriptionLabel="" description="Certificato di Competenza Tecnica in tecniche di trattamento manipolativo vertebrale ric.MIUR" descriptionClass="description" />
	    			<DescriptionRow descriptionLabel="" description="Corsi di formazione programma BACK SCHOOL 1' e 2' livello" descriptionClass="description" />
	    			<DescriptionRow descriptionLabel="" description="Formazione McKenzie e Mezieres" descriptionClass="description" />
    			</Panel>
    		</Collapse>
  }
}

export default Body;