import { lazy, Fragment } from "react";
import {Link} from 'react-router-dom';
import { Row, Col, Divider } from "antd";

import * as S from "./styles";

const Container = lazy(() => import("../../common/Container"));

const Footer = ({ t }) => {

  return (
    <Fragment>
        <S.Extra>
          <Container border="true">
            <Row
              type="flex"
              justify="flex-start"
              align="middle"
              style={{ paddingTop: 10}}
              gutter={24}
            >
              <Col xl={6}>
                <S.NavLink to="/">
                  <S.LogoContainer>
                    <h3>StackResolved</h3>
                  </S.LogoContainer>
                </S.NavLink>
              </Col>
              <Col xl={18}>
                <S.FooterDesc>
                  © 2021 StackResolved
                  <Divider style={{margin: '5px 0px'}} />
                  <Row gutter={24}>
                    <Col xl={6} xs={24}>
                      <Link to='/#'>Contact Us</Link>
                    </Col>
                    <Col xl={6} xs={24}>
                      <Link to='/#'>Privacy Policy</Link>
                    </Col>
                    <Col xl={6} xs={24}>
                      <Link to='/#'>Developers</Link>
                    </Col>
                    <Col xl={6} xs={24}>
                      <Link to='/#'>Contribute</Link>
                    </Col>
                  </Row>
                </S.FooterDesc>
              </Col>
            </Row>
          </Container>
        </S.Extra>
    </Fragment>
  );
};

export default Footer;
