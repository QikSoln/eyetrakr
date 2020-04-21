import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { TextInput,Button } from 'react-native-paper';

export default class CreateAccount extends React.Component{
    constructor(props){
        super(props)
        this.state={
            fullName:null,
            email:null,
            age:null,
            phoneNumber:null
        }
    }


    renderHeader(){
        return(
            <View style={styles.headerStyle} >
                <Text style={styles.headerText} >Create an account</Text>
                <Text>Sign up to get started</Text>
            </View>
        )
    }

    renderForm(){
        return(
            <View style={styles.formStyle} >
                <TextInput
                    label='Full name'
                    mode="outlined"
                    value={this.state.fullName}
                    onChangeText={text => this.setState({ fullName:text })}
                    style={styles.formTextInput}
                />
                <TextInput
                    label='Email address'
                    mode="outlined"
                    value={this.state.email}
                    onChangeText={text => this.setState({ email:text })}
                    style={styles.formTextInput}
                />
                <TextInput
                    label='Age'
                    mode="outlined"
                    value={this.state.age}
                    onChangeText={text => this.setState({ age:text })}
                    style={styles.formTextInput}
                />
                <TextInput
                    label='Phone number'
                    mode="outlined"
                    value={this.state.phoneNumber}
                    onChangeText={text => this.setState({ phoneNumber:text })}
                    style={styles.formTextInput}
                />
            </View>
        )
    }

    renderLower(){
        return(
            <View style={styles.lowerStyle}>
                <Button mode="contained" color="#FF9A49" onPress={() => console.log('Pressed')} style={styles.buttonStyle} >
                    Register
                </Button>
                <Text style={{textAlign:"center",marginTop:5}} >Already have an account <Text style={{color:"#FF9A49",fontWeight:"bold"}} >Login</Text></Text>
            </View>
        )
    }

    render(){
        return(
            <View>
                {this.renderHeader()}
                {this.renderForm()}
                {this.renderLower()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerText:{
        fontSize:28,
        fontWeight:"bold"
    },
    headerStyle:{
        marginTop:102,
        marginLeft:20
    },
    formStyle:{
        marginLeft:24,
        marginRight:27
    },
    formTextInput:{
        margin:10
    },
    lowerStyle:{
        marginLeft:34,
        marginRight:37
    },
    buttonStyle:{
        padding:10
    }
})