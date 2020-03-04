import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, ActivityIndicator, Platform ,TouchableOpacity} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import NavigationBar from 'react-native-navbar';
import {Actions} from 'react-native-router-flux';
import {
  AtiTextInput,AtiButton,AtiText,AtiSearchBar,AtiIcon, AtiList,AtiListItem,Left,Right} from 'ati-ui-elements';
import { doctors } from '../doctors';
 
export default class Search extends Component {

  constructor(props) {
    super(props);
    //setting default state
    this.state = { isLoading: true,
      search: '',
      dataSource:[]
    
      };
    this.arrayholder = [];
  }
  state={
    doctor:'',
    field:'',
    dataSource:''
  }

  componentDidMount() {
    return fetch('http://192.168.0.51:5555/doctors')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
          },
          function() {
            this.arrayholder = responseJson;
          }
          
        );
        this.props.navigation.setParams({doc:this.state.dataSource})
      })
      .catch(error => {
        console.error(error);
      });

  }
  search = text => {
    console.log(text);
  };
  clear = () => {
    this.search.clear();
  };
  
    send=(item)=>{
       d=this.state.dataSource
       alert(this.state.doctor);
       
         this.props.navigation.navigate('book',{doct:item})
      }
  

      SearchFilterFunction(text) {
        //passing the inserted text in textinput
        const newData = this.arrayholder.filter(function(item) {
          //applying filter for the inserted text in search bar
          const itemData = item.field ? item.field.toUpperCase() : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
          
        });
        this.setState({
          
          dataSource: newData,
          search:text,
          // doctor:newData.username


        });
      }
    
    
  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: 0.3,
          width: '90%',
          backgroundColor: '#080808',
        }}
      />
    );
  };
  render() {
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    const rightButtonConfig = {
      title: 'Logout',
      handler: () =>Actions.login(),
    };
     
    const titleConfig = {
      title: 'My Profile',
    };
    const leftButtonConfig={
      title:'My Appointments',
      handler:()=>Actions.patient(),
    };

    return (
      //ListView to show with textinput used as search bar
      <View style={styles.viewStyle}>
         <NavigationBar 
        rightButton={rightButtonConfig}
        leftButton={leftButtonConfig}
      /> 
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={text => this.SearchFilterFunction(text)}
          onClear={text => this.SearchFilterFunction('')}
          placeholder="Type Here..."
          value={this.state.search}
          
          />
          {/* <AtiList
          style={{backgroundColor:"blue"}}
          dataArray={[this.state.dataSource]}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          //Item Separator View
          renderRow={({ item }) => (
            // Single Comes here which will be repeatative for the FlatListItem
            <View >
            <AtiText onPress={this.send} Style={styles.textStyle}>{item.username}</AtiText>
            <AtiText style={styles.textStyle}>{item.field}</AtiText>
            
            </View>
          )}
          enableEmptySections={true}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index.toString()}
        /> */}
        <AtiList 
                            style={{backgroundColor:'#45bbc4',borderWidth:1,margin:4,marginTop:6}}
                            dataArray={this.state.dataSource} 
                            renderRow={(item) =>
                                <AtiListItem 
                                // onPress={this.navigateToDetaisScreen}
                                    style={{backgroundColor:'#f4f9f9'}}
                                    //  style={{color: '#fff', backgroundColor:'rgba(0, 0, 0, 0.1)'}}
                                    >
                                      <TouchableOpacity
                                        onPress={()=>{this.send(item)}}>
                                        <Left>
                                            <View style={styles.list}>
                                            
                                                <AtiText style={{color: '#000000', fontSize: 15, fontStyle: 'italic'}}>&nbsp;&nbsp;{item.username}&nbsp;&nbsp;:&nbsp;&nbsp;{item.field}</AtiText>
                                                {/* <AtiText style={{color: '#000000', fontSize: 15}}>{item.location}</AtiText> */}
                                            </View>
                                        </Left> 
                                        <Right>
                                            <AtiIcon name="arrow-forward" style={{color: '#494c4c', fontSize: 20 }} />
                                        </Right>
                        </TouchableOpacity>
                        </AtiListItem>
                     }>
                     </AtiList>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor:'white',
  },
  textStyle: {
    padding: 10,
  },
});