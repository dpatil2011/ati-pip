import React from 'react';
import { Row, List } from 'antd';
import { AtiList } from 'ati-react-web';
import ListSocialMediaComponent from './list-social-media-component';

class SosmedList extends React.Component {
    render() {
        const { socialMedia } = this.props;
        return (
            <Row type="flex" justify="center" align="middle" className="mt-30">
                <AtiList 
                    grid={{ gutter: 16, column: 4 }}
                    bordered={false}
                    itemLayout="vertical"
                    dataSource={socialMedia}
                    type='custom'
                    events={
                        {
                            renderItem: sosmed => (
                                <List.Item>
                                    <ListSocialMediaComponent
                                        icon={sosmed.icon}
                                        url={sosmed.url}
                                    />
                                </List.Item>
                            )
                        }
                    }
                />
            </Row>
        );
    }
}

export default SosmedList;