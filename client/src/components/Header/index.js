import { Row, Col, Button, Input } from "antd";
import { PlusOutlined } from '@ant-design/icons';

import * as S from "./styles";

const {Search} = Input;

const Header = ({ t }) => {
  const isMobile = window.innerWidth <= 768;

  return (
    <S.Header>
      <S.Container>
        <Row type="flex" justify="space-between" gutter={24} align='middle'>
          <Col xl={6} xs={16}>
            <S.LogoContainer to="/" aria-label="homepage">
              <h1>StackResolved</h1>
            </S.LogoContainer>
          </Col>
          <Col xl={10}>
            <Search 
              placeholder='Search StackResolve'
              size='large'
            />
          </Col>
          <Col xl={8} xs={8}>
            <Row gutter={24} justify='end' align='middle'>
              <Col xl={6}>
                <Button type='primary'>Feed</Button>
              </Col>
              <Col xl={8}>
                <Button><PlusOutlined />Add Question</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </S.Container>
    </S.Header>
  );
};

export default Header;
