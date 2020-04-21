import React from 'react';
import {View,Text,StyleSheet,ScrollView,Image} from 'react-native';
import { Card,IconButton} from 'react-native-paper';

export default class extends React.Component{
    constructor(props){
        super(props)
        this.state={
            casesdata:[
                {
                    state:'Abuja',
                    cases:10,
                    recovered:10,
                    death:0
                },
                {
                    state:'Lagos',
                    cases:10,
                    recovered:10,
                    death:0
                },
                {
                    state:'Ogun',
                    cases:10,
                    recovered:10,
                    death:0
                },
            ]
        }
    }


    renderHeader(){
        return(
            <View style={styles.headerStyle} >
                <Text style={{textAlign:"right"}} >As at<Text style={{color:"#CE6B1B"}} > {new Date().toDateString()}</Text></Text>
                <Text style={{marginLeft:22,fontWeight:"bold",fontSize:20,marginTop:19}} >Nigerian Stats</Text>
            </View>
        )
    }


    renderCasesCard(){
        return(
            <View style={{flexDirection:"row",justifyContent:"space-evenly",marginTop:13}} >
                <Card elevation={3} >
                    <Card.Content>
                    <IconButton
                        icon="square"
                        color={"#1065BB"}
                        size={20}
                        onPress={() => console.log('Pressed')}
                        style={{alignSelf:"center"}}
                    />
                        <Text style={{fontWeight:"bold",textAlign:"center"}} >120</Text>
                        <Text style={{textAlign:"center",fontSize:12}} >Confirmed cases</Text>
                    </Card.Content>
                </Card>

                <Card elevation={3} >
                    <Card.Content>
                    <IconButton
                        icon="square"
                        color={"#2AC940"}
                        size={20}
                        onPress={() => console.log('Pressed')}
                        style={{alignSelf:"center"}}
                    />
                        <Text style={{fontWeight:"bold",textAlign:"center"}} >70</Text>
                        <Text style={{textAlign:"center",fontSize:12}} >Recovered cases</Text>
                    </Card.Content>
                </Card>
            </View>
        )
    }

    renderCasesStats(){
        return(
            <View style={{marginTop:31}} >
                <Text style={{fontSize:16,fontWeight:"bold",marginLeft:25}} >Global Stats</Text>
                <Text style={{marginLeft:37,marginTop:5}} >Confirmed cases <Text style={{fontWeight:"bold"}} >200,000</Text></Text>
                <Text style={{marginLeft:37,marginTop:5}} >Recovered cases <Text style={{fontWeight:"bold"}} >200,000</Text></Text>
            </View>
        )
    }

    renderCasesByState(){
        return(
            <View style={{marginLeft:28,marginRight:28,marginTop:34}} >
                {
                    this.state.casesdata.map((item)=>(
                        <View key={item.state} >
                            {this.renderListItem(item)}
                        </View>
                    ))
                }
                <Text style={{color:'#FF5F58',textAlign:"center",marginBottom:20,marginTop:10}} >Load more</Text>
            </View>
        )
    }

    renderListItem(item){
        return(
            <Card elevation={3} style={{marginTop:5,marginBottom:5}}  >
                <Card.Content>
                    <View>
                        <Text style={{fontWeight:"bold",fontSize:14}}>{item.state}</Text>
                        <View style={{flexDirection:"row",justifyContent:"space-evenly",marginTop:5}}>
                            <Text style={{marginRight:21,fontSize:10}} >Cases:<Text style={{fontSize:10,color:"#39F"}} >{item.cases}</Text></Text>
                            <Text style={{marginRight:21,fontSize:10}}>Recovered:<Text style={{fontSize:10,color:"#2AC940"}} >{item.recovered}</Text></Text>
                            <Text style={{marginRight:21,fontSize:10}}>Deaths:<Text style={{fontSize:10,color:"#F36"}} >{item.death}</Text></Text>
                        </View>
                    </View>
                </Card.Content>
            </Card>
        )
    }

    renderCasesPrevention(){
        return(
            <View style={{flexDirection:"row",justifyContent:"space-evenly",marginLeft:28,marginRight:28}}>
                <Card>
                    <Card.Content>
                        <Image source={require('./images/cough_orange.png')} width={22} height={22} resizeMode="contain"/>
                        <Text style={{fontWeight:"bold",fontSize:14,marginTop:18}} >Symptoms</Text>
                        <Text style={{fontSize:13,flexWrap:"wrap"}}>{"Signs that might\n identify risks\n of infection"}</Text>
                        <View style={{flexDirection:"row"}}>
                            <Text style={{marginTop:10}} >Learn more</Text>
                            <IconButton
                                icon="arrow-right"
                                //color={"#2AC940"}
                                size={20}
                                onPress={() => console.log('Pressed')}
                                style={{alignSelf:"center"}}
                            />
                        </View>
                    </Card.Content>
                </Card>

                <Card>
                    <Card.Content>
                        <Image source={require('./images/protection.png')} width={22} height={22} resizeMode="contain"/>
                        <Text style={{fontWeight:"bold",fontSize:14,marginTop:18}} >Prevention</Text>
                        <Text style={{fontSize:13,flexWrap:"wrap"}}>{"How to avoid \ngetting infected"}</Text>
                        <View style={{flexDirection:"row"}}>
                            <Text style={{marginTop:10}} >Learn more</Text>
                            <IconButton
                                icon="arrow-right"
                                //color={"#2AC940"}
                                size={20}
                                onPress={() => console.log('Pressed')}
                                style={{alignSelf:"center"}}
                            />
                        </View>
                    </Card.Content>
                </Card>

            </View>
        )
    }

    render(){
        return(
            <ScrollView contentContainerStyle={{backgroundColor:"white"}} > 
                {this.renderHeader()}
                {this.renderCasesCard()}
                {this.renderCasesStats()}
                {this.renderCasesPrevention()}
                {this.renderCasesByState()}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    headerStyle:{
        marginTop:66,
        marginRight:15
    },

})