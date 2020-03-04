import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { AtiGrid, AtiGridItem } from 'ati-react-web';
import PageTitle from './../../../common/layout/component/page-title';
import ContentPage from './../../../common/layout/component/content-page';
import CONSTANTS from './../../../common/utils/Constants';

class DashboardComponent extends Component {
    render() {
        console.log(this.props)
        const {
            layouts,
        } = this.props;
        return (
            <div style={{ minHeight: '360px' }}>
                <div>
                    <Row>
                        <Col>
                            <PageTitle
                                link="dashboard"
                                text="label.breadcrumb.dashboard"
                                subtitle="label.breadcrumb.overview"
                                header="Overview"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <AtiGrid
                                cols={
                                    {
                                        lg: 43, md: 36, sm: 28, xs: 16, xxs: 10,
                                    }
                                }
                                isRessizable
                                isDraggable={false}
                                layouts={layouts}
                                rowHeight={40}
                                preventCollision
                            >
                                <AtiGridItem key="1">

                                </AtiGridItem>
                                <AtiGridItem key="2">

                                </AtiGridItem>
                                <AtiGridItem key="3">

                                </AtiGridItem>
                                <AtiGridItem key="4">

                                </AtiGridItem>
                                <AtiGridItem key="5">

                                </AtiGridItem>
                                <AtiGridItem key="6">

                                </AtiGridItem>
                                <AtiGridItem key="7">

                                </AtiGridItem>
                                <AtiGridItem key="8">
                                    <ContentPage>

                                    </ContentPage>
                                </AtiGridItem>
                                <AtiGridItem key="9">
                                    <ContentPage>

                                    </ContentPage>
                                </AtiGridItem>
                            </AtiGrid>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default DashboardComponent;