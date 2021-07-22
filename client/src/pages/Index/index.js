import React, {useEffect} from 'react';
import {Row, Col} from 'antd';
import GoogleButton from 'react-google-button';
import axios from 'axios';
import config from '../../config';

import * as S from './styled';

const Index = () => {

    useEffect(async () => {
        let r = await axios.get('http://localhost:9000/api/questions', {withCredentials: true});
        console.log(r.data);
    }, []);

    return (
        <S.BannerContainer>
            <S.BannerInnerContainer>
                <Row gutter={24} style={{height: '100%'}}>
                    <Col xl={10} style={{padding: 0}}>
                        <S.BannerSideImage></S.BannerSideImage>
                    </Col>
                    <Col xl={14} style={{padding: '40px 20px 10px'}}>
                        <h2><b>Join the growing community now</b></h2>
                        <br/>
                        <center>
                        <GoogleButton
                            onClick={() => {window.location.replace(`${config.API_URL}/login`)}}
                            style={{width: '70%'}}
                        />
                        </center>
                    </Col>

                </Row>
            </S.BannerInnerContainer>
        </S.BannerContainer>
    );
};

export default Index;
