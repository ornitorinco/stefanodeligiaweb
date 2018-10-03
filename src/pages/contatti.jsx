import React from 'react';
import ContattiForm from './contattiForm';
import { Row, Col, Table } from 'antd';

const columns = [
{
  title: 'Giorno',
  dataIndex: 'day',
  key: 'day'
}
, {
  title: 'Mattina',
  dataIndex: 'morning',
  key: 'morning'
}, {
  title: 'Pomeriggio',
  dataIndex: 'afternoon',
  key: 'afternoon'
}];

const data = [{
  key: 'monday',
  day: 'Lunedì',
  morning: '09:00 - 13:00',
  afternoon: '15:00 - 19:00'
}, {
  key: 'tuesday',
  day: 'Martedì',
  morning: '09:00 - 13:00',
  afternoon: '15:00 - 19:00'
  
},{
  key: 'wednesday',
  day: 'Mercoledì',
  morning: '09:00 - 13:00',
  afternoon: '15:00 - 19:00'
},{
  key: 'thursday',
  day: 'Giovedì',
  morning: '09:00 - 13:00',
  afternoon: '15:00 - 19:00'
  
},{
  key: 'friday',
  day: 'Venerdì',
  morning: '09:00 - 13:00',
  afternoon: '15:00 - 19:00'
}];

class Contatti extends React.Component {
	render(){
		return <Row gutter={24}>
					<Row gutter={24}>
						<h1>Contatti</h1>
					</Row>
					<Row gutter={24} justify="center">
						<h2>Dove mi trovate:</h2>
						<Col offset={4}  span={8} >
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d936.5768714655685!2d8.832691929249064!3d40.11832002427608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ddb80bc9e98fcf%3A0x6cfc4bb9fec4cc47!2sVia+Tirso%2C+3%2C+09074+Ghilarza+OR%2C+Italy!5e1!3m2!1sen!2sch!4v1536140610632" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen></iframe>
						
						</Col>
					</Row>
					<Row gutter={24}>
						<h2>Orari di apertura dello studio:</h2>
						<Col span={24} >
							<Table columns={columns} dataSource={data} bordered pagination={false}/>
						</Col>
					</Row>
					<Row gutter={24}>
						<h2>Scrivimi un messaggio:</h2>
						<Col span={24} >
						<ContattiForm/>
						</Col>
					</Row>
				</Row>
	}
}

export default Contatti