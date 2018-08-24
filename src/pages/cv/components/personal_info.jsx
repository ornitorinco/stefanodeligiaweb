import React from 'react'
import Entry from './entry';
import EmailEntry from './email_entry';


const emails = [{ email: 'stefanodel@hotmail.it', subject: 'Email dal CV di Stefano Deligia', value:'invia_email'}, { email: 'deligiastefano@pec.it', subject: 'Email dal CV di Stefano Deligia' , value:'invia_email' }];

class PersonalInfo extends React.Component {
  render() {
    return 	<div>
		    	<Entry label="Data di nascita" value="30.05.1981" type="calendar" /> 
		    	<Entry label="Luogo di nascita" value="Ghilarza (OR)" type="environment-o" /> 
		    	<Entry label="Indirizzo" value="Vico Cottolengo 9, 09074 Ghilarza (OR)" type="home" /> 
		    	<Entry label="Telefono" value="+39 3289783069" type="phone" /> 
		    	<EmailEntry label="Email" emails={emails} type="mail" /> 
		    	<Entry label="Cittadinanza" value="Italiano" type="global" /> 
		    	<Entry label="Sesso" value="Maschile" type="user" /> 
	    	</div>
  }
}

export default PersonalInfo;