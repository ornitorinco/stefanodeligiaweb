import React from 'react'
import { Row, Col, Table } from 'antd';

const { Column, ColumnGroup } = Table;

class Languages extends React.Component {
  render() {
    return <Row className="languageRow">
    <Row className="blockRow" gutter={24}>
    			<Col span={7} style={{textAlign:"right"}} className="label">
					{this.props.languageLabel}
				</Col>
				<Col span={17} className="description">
				   	Italiana
				</Col>
				</Row>
	    		{
	    			//let lang = {this.props.languageLabel};
          			this.props.languages.map(function(language) {
            		return <Row ><Row className="blockRow" key={language.name} gutter={24}>
							    <Col span={7} style={{textAlign:"right"}} className="label">
					    			Altra(e) lingua(e)
							    </Col>
							    <Col span={17} className="description">
							    	{language.name}
							    </Col>
						    </Row>
						    <Row gutter={24}>
						    	<Col span={7} style={{textAlign:"right"}} className="label">
					    			Autovalutazione
							    </Col>
							    <Col span={17} className="languageTable">
							    	<Table dataSource={language.data} size="small" bordered pagination={false} >
									    <ColumnGroup title="Comprensione">
									      <Column
									        title="Ascolto"
									        dataIndex="ascolto"
									        key="ascolto"
									      />
									      <Column
									        title="Lettura"
									        dataIndex="lettura"
									        key="lettura"
									      />
									    </ColumnGroup>
									    <ColumnGroup title="Parlato">
									      <Column
									        title="Interazione orale"
									        dataIndex="interazioneOrale"
									        key="interazioneOrale"
									      />
									      <Column
									        title="Produzione orale"
									        dataIndex="produzioneOrale"
									        key="produzioneOrale"
									      />
									    </ColumnGroup>
									    <ColumnGroup title="Scritto">
									      <Column
									        title=""
									        dataIndex="scritto"
									        key="scritto"
									      />
									    </ColumnGroup>
									</Table>
							    </Col>
						    </Row>
						    </Row>
          				})
        		}
	    		 </Row>
  }
}

export default Languages;