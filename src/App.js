import { Row, Col } from 'antd'

import Header from './components/Header'
import Table from './components/Table'

function App() {
  return ( 
    <>
      <Header />

      <Row>
        <Col xs={24} ms={ {span: 12, offset: 6}}>
            <Table />
        </Col>
      </Row>
    </>
  );
}

export default App;
