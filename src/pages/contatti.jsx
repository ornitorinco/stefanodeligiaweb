import React from 'react';
import ContattiForm from './contattiForm';
import { Row, Col } from 'antd';
class Contatti extends React.Component {
	render(){
		return <Row gutter={24}>
					<Row gutter={24}>
						<h1>Contatti</h1>
					</Row>
					<Row gutter={24}>
						<h2>Dove mi trovate:</h2>
					</Row>
					<Row gutter={24}>
						<h2>Orari di apertura dello studio:</h2>
					</Row>
					<Row gutter={24}>
						<ContattiForm/>
					</Row>
				</Row>
	}
}

export default Contatti