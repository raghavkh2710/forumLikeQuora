import {Card, Avatar, Typography} from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, EllipsisOutlined, CommentOutlined } from '@ant-design/icons';

const { Meta } = Card;
const {Paragraph} = Typography;

let text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
export const QAFeedItem = () => (
    <Card 
      title='What is Lorem Ipsum' 
      style={{width:'100%', margin: '10px 0px'}}
      actions={[
          <ArrowUpOutlined key="setting" />,
          <ArrowDownOutlined key="edit" />,
          <CommentOutlined key='comment' />,
          <EllipsisOutlined  key="ellipsis" />,
      ]}
    >
        <Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title="Andrew NG"
      />
        <Paragraph
          ellipsis={{
            rows: 3,
            expandable: true,
            symbol: 'Continue Reading'
          }}
          title={`${text}`}
        >
          {text}
        </Paragraph>
    </Card>
);
