import React from 'react';
import {View,Text,StyleSheet,ScrollView,Image} from 'react-native';
import { Button,List, Card} from 'react-native-paper';
import Accordion from 'react-native-collapsible/Accordion';

export default class Symptoms extends React.Component{
    constructor(props){
        super(props)
        this.state={
            expanded:false
        }
    }

    _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded
    });


    renderHeader(){
        return(
            <View style={{marginTop:59,marginLeft:22}} >
                <Text style={{fontWeight:"bold",fontSize:20}} >Symptoms</Text>
                {this.renderBanner()}
            </View>
        )
    }

    renderBanner(){
        return(
            <View style={{backgroundColor:"#FF9A49",marginTop:23,marginRight:28}} >
                <View style={{padding:10,flexDirection:"row"}}>
                <Image source={require('./images/Pasted_Image.png')} width={132} height={130} resizeMode="contain"/>
                <View style={{marginHorizontal:5}} >
                    <Text style={{fontSize:19,fontWeight:"bold",color:"white"}} >COVID-19</Text>
                    <Text style={{fontSize:19,fontWeight:"bold",color:"white"}} >Screening Test</Text>
                    <Text style={{fontSize:14,color:"white"}}>To test yourself and </Text>
                    <Text style={{fontSize:14,color:"white"}}>know what to do next </Text>
                    <Button mode="contained" color="#FF9A49" onPress={() => console.log('Pressed')}  >
                  TEST NOW
                    </Button>
                </View>
                </View>
            </View>
        )
    }

    renderDropDowns(){
        return(
            <View style={{marginTop:20}}>
                <Card elevation={3} style={{marginRight:23,marginLeft:23,marginTop:10}} >
                    <Card.Content>
                        <List.Accordion
                            title="Fever"
                            // left={props => <List.Icon {...props} icon="folder" />}
                            expanded={this.state.expanded}
                            onPress={this._handlePress}
                        >
                            <View style={{marginRight:33,marginLeft:33}} >
                                <Text>Dummy text virus disease spreads primarily through contact with an infected person when they cough or sneeze. It also spreads when a person touches a, gh contact with an infected person when they cough or sneeze. It also spreads when a person touches a.  jdfmsfwefs</Text>
                            </View>
                        </List.Accordion>
                    </Card.Content>
                </Card>

                <Card elevation={3} style={{marginRight:23,marginLeft:23,marginTop:10}} >
                    <Card.Content>
                        <List.Accordion
                            title="Dry cough"
                            // left={props => <List.Icon {...props} icon="folder" />}
                            expanded={this.state.expanded}
                            onPress={this._handlePress}
                        >
                            <View style={{marginRight:33,marginLeft:33}} >
                                <Text>Dummy text virus disease spreads primarily through contact with an infected person when they cough or sneeze. It also spreads when a person touches a, gh contact with an infected person when they cough or sneeze. It also spreads when a person touches a.  jdfmsfwefs</Text>
                            </View>
                        </List.Accordion>
                    </Card.Content>
                </Card>

                <Card elevation={3} style={{marginRight:23,marginLeft:23,marginTop:10}} >
                    <Card.Content>
                        <List.Accordion
                            title="Breathing difficulty"
                            // left={props => <List.Icon {...props} icon="folder" />}
                            expanded={this.state.expanded}
                            onPress={this._handlePress}
                        >
                            <View style={{marginRight:33,marginLeft:33}} >
                                <Text>Dummy text virus disease spreads primarily through contact with an infected person when they cough or sneeze. It also spreads when a person touches a, gh contact with an infected person when they cough or sneeze. It also spreads when a person touches a.  jdfmsfwefs</Text>
                            </View>
                        </List.Accordion>
                    </Card.Content>
                </Card>

            </View>
        )
    }

    renderHowItSpreads(){
        return(
            <View style={{marginRight:23,marginLeft:23}} >
                <View>
                <Image source={require('./images/doctor_img.png')} width={168} height={169} resizeMode="contain"/>
                    <Text style={{flexWrap:"wrap",marginRight:10,paddingRight:10,fontSize:14}} >
                    Coronavirus disease spreads primarily through contact with an infected person when they cough or sneeze. It also spreads when a person touches a surface or object that has the virus on it, then touches their eyes, nose, or mouth.
                    </Text>
                    
                </View>
            </View>
        )
    }


    render(){
        return(
            <ScrollView style={{backgroundColor:"white",height:"100%"}} > 
                {this.renderHeader()}
                {this.renderDropDowns()}
                {this.renderHowItSpreads()}
            </ScrollView>
        )
    }
}