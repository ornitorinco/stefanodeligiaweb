import React from 'react'
import Block from './block';
import { Timeline } from 'antd';

const workDescriptionLabel = 'Principali attività e responsabilità';
const workAddressLabel = 'Nome e indirizzo del datore di lavoro';
const workActivityLabel = 'Tipo di attività o settore';

class Work extends React.Component {
  render() {
    return <Timeline>
    			<Block 
    				dateFrom="06/2008" 
    				dateTo="oggi" 
    				title="Titolare di P.IVA in qualità di Chinesiologo UNC e Osteopata D.O."
					description = "Rieducazione motoria pre e post chirurgica, ginnastica posturale, kinesiterapia, trattamento di algie
						rachidee, riprogrammazione dell'equilibrio attravesro trattamento manipolativo e/o attraverso l'utilizzo
						di pedana propriocettiva/stabilometrica, trattamento Osteopatico globale" 
					address = "Lavoro in proprio presso studio privato"
					activity = "Benessere e recupero fisico e sanitario"
					descriptionLabel = {workDescriptionLabel}
					addressLabel = {workAddressLabel}
					activityLabel = {workActivityLabel}
						/>
				<Block 
    				dateFrom="01/2018" 
    				dateTo="oggi" 
    				title="Osteopata e supervisore della condizione fisico-atletica e del recupero post-traumatico"
					description = "Mantenimento/Recupero della condizione fisico-atletica" 
					address = "U.S. Ghilarza Calcio"
					activity = "Sportivo Calcistico Campionato Eccellenza 2018-2019"
					descriptionLabel = {workDescriptionLabel}
					addressLabel = {workAddressLabel}
					activityLabel = {workActivityLabel}
						/>
				<Block 
    				dateFrom="07/2008" 
    				dateTo="09/2008" 
    				title="Istruttore di nuoto"
					description = "Controllo e istruzione natanti" 
					address = "Comune di Ardauli"
					activity = "Sport/benessere"
					descriptionLabel = {workDescriptionLabel}
					addressLabel = {workAddressLabel}
					activityLabel = {workActivityLabel}
						/>
				<Block  
    				dateFrom="02/2008" 
    				dateTo="06/2008" 
    				title="Esperto esterno nella formazione delle attività natatorie"
					description = "Istruttore di nuoto" 
					address = "Liceo Scientifico A.Volta Ghilarza"
					activity = "Istruttore e formatore attività acquatiche/natatorie"
					descriptionLabel = {workDescriptionLabel}
					addressLabel = {workAddressLabel}
					activityLabel = {workActivityLabel}
						/>
				<Block 
    				dateFrom="10/2007" 
    				dateTo="04/2008" 
    				title="Massoterapista/supervisore della condizione atletica e del recupero post-traumatico"
					description = "Mantenimento/Recupero della condizione fisico-atletica" 
					address = "U.S. Ghilarza Calcio"
					activity = "Sportivo Calcistico Campionato Eccellenza 2007-2008"
					descriptionLabel = {workDescriptionLabel}
					addressLabel = {workAddressLabel}
					activityLabel = {workActivityLabel}
						/>
				<Block 
    				dateFrom="06/2007" 
    				dateTo="08/2007" 
    				title="Istruttore di nuoto"
					description = "Controllo e istruzione natanti" 
					address = "Comune di Ardauli"
					activity = "Sport/benessere"
					descriptionLabel = {workDescriptionLabel}
					addressLabel = {workAddressLabel}
					activityLabel = {workActivityLabel}
						/>
				<Block 
    				dateFrom="06/2007" 
    				dateTo="07/2007" 
    				title="Istruttore di scuola calcio"
					description = "Educatore/Formatore" 
					address = "Comune di Ghilarza"
					activity = "Ludico/Sportivo"
					descriptionLabel = {workDescriptionLabel}
					addressLabel = {workAddressLabel}
					activityLabel = {workActivityLabel}
						/>
				<Block  
    				dateFrom="11/2006" 
    				dateTo="05/2007" 
    				title="Istruttore di ginnastica dolce/posturale"
					description = "Attività a corpo libero" 
					address = "Comune di Aidomaggiore"
					activity = "Attività psicomotoria"
					descriptionLabel = {workDescriptionLabel}
					addressLabel = {workAddressLabel}
					activityLabel = {workActivityLabel}
						/>
				<Block 
    				dateFrom="06/2006" 
    				dateTo="08/2006" 
    				title="Istruttore di nuoto"
					description = "Controllo e istruzione natanti" 
					address = "Comune di Ardauli"
					activity = "Sport/benessere"
					descriptionLabel = {workDescriptionLabel}
					addressLabel = {workAddressLabel}
					activityLabel = {workActivityLabel}
						/>
				<Block  
    				dateFrom="06/2004" 
    				dateTo="08/2004" 
    				title="Istruttore di nuoto"
					description = "Controllo e istruzione natanti" 
					address = "Comune di Ardauli"
					activity = "Sport/benessere"
					descriptionLabel = {workDescriptionLabel}
					addressLabel = {workAddressLabel}
					activityLabel = {workActivityLabel}
						/>
    		</Timeline>
  }
}

export default Work;