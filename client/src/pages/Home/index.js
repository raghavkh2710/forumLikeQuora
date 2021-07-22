import { Layout, Card } from 'antd';
import SideNav from '../../components/SideNav';
import {QAFeedItem} from '../../components/Feed';

const { Header, Footer, Sider, Content } = Layout;


const Home = () => {
    return (
        <>
            <Layout style={{minHeight: '100vh'}}> 
                <Sider width='260' style={{backgroundColor: 'white'}}>
                    <SideNav />
                </Sider>
                <Content style={{padding: 20}}>
                    <QAFeedItem />
                    <QAFeedItem />
                    <QAFeedItem />
                    <QAFeedItem />
                    <QAFeedItem />
                </Content>
            </Layout>
        </>
    );
};

export default Home;