import React, { Component } from 'react';
import { View } from 'native-base';
import { AtiText, AtiCardShowcase, AtiCard, AtiCardItem, AtiTextInput, AtiList, AtiListItem, Left, Right, AtiIcon, AtiSpinner } from 'ati-ui-elements';

class AD extends Component {
    state = {}
    render() {
        return (
            <View>
                <AtiList
                    style={{ backgroundColor: '#45bbc4' }}
                    dataArray={[
                        { name: 'Simon Mignolet', creditNumber: '991016789' },
                        { name: 'Nathaniel Clyne', creditNumber: '991026789' },
                        { name: 'Dejan Lovren', creditNumber: '991036789' },
                        { name: 'Mama Sakho', creditNumber: '991046789' },
                        { name: 'Emre Can', creditNumber: '991056789' },
                    ]} renderRow={
                        (item) =>
                            <AtiListItem
                                // onPress={this.onViewDetail}
                                style={{ backgroundColor: '#f4f9f9' }}>
                                <Left>
                                    <View>
                                        <AtiText style={{ color: '#45bbc4', fontSize: 12, fontStyle: 'italic' }}>{item.creditNumber}</AtiText>
                                        <AtiText style={{ color: '#494c4c', fontSize: 15 }}>{item.name}</AtiText>
                                    </View>
                                </Left>
                                <Right>
                                    <AtiIcon name="arrow-forward" style={{ color: '#494c4c', fontSize: 20 }} />
                                </Right>
                            </AtiListItem>
                    }>
                </AtiList>
            </View>
        );
    }
}

export default AD;