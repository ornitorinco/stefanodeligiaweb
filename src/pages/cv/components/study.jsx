import React from 'react'
import { Row, Col, Timeline } from 'antd';
import Block from './block';

const studyDescriptionLabel = "Principali tematiche/competenze professionali possedute";
const studyAddressLabel = "Nome e tipo d'organizzazione erogatrice dell'istruzione e formazione";
const studyActivityLabel = "Livello nella classificazione nazionale o internazionale";

class Study extends React.Component {
  render() {
    		return <Timeline>
						<Block 
    				dateFrom="10/2011" 
    				dateTo="10/2017" 
    				title="Osteopata D.O."
					description = "Teoria e Tecniche Osteopatiche, Anatomia, Fisiologia, Ortopedia, Traumatologia, Fisiopatologia, Radiologia" 
					address = "IEMO Istituto Europeo per la Medicina Osteopatica
								Autorizzazione n.3926/C18 del 04/07/11 MIUR Ministero dell'Istruzione, dell'Università e della Ricerca"
					activity = "Diploma in Medicina Osteopatica"
					descriptionLabel = {studyDescriptionLabel}
					addressLabel = {studyAddressLabel}
					activityLabel = {studyActivityLabel}
						/>
						<Block 
    				dateFrom="10/2000" 
    				dateTo="10/2006" 
    				title="Laurea in Scienze Motorie"
					description = "Anatomia Umana, Fisiologia, Ortopedia, Reumatologia, Alimentazione, Sport" 
					address = "Universita degli studi di Cagliari dipartimento di Medicina e Chirurgia"
					activity = "Laurea"
					descriptionLabel = {studyDescriptionLabel}
					addressLabel = {studyAddressLabel}
					activityLabel = {studyActivityLabel}
						/>
    		</Timeline>
  }
}

export default Study;