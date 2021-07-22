import {Col, Row} from 'antd';
import './style.css';

const Fallback = () => (
    <Row justify='center' align='middle' style={{height: '100vh'}}>
        <Col>
            <center>
                Loading...
            </center>
            
        </Col>
    </Row>
);

export default Fallback;