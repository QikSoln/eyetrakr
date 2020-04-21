// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateAccount from './src/CreateAccount';
import Home from './src/Home';
import Symptoms from './src/Symptoms';
import RNLocation from 'react-native-location';
import GetLocation from 'react-native-get-location'
RNLocation.configure({
  distanceFilter: 5.0
})

const Stack = createStackNavigator();

export default class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      routeCoordinates: [],
      distanceTravelled: 0,
      prevLatLng: {},
      coordinate: {
       latitude: 0,
       longitude: 0
      }
    };
  }

  componentDidMount() {

  }
  
  /*componentDidMount(){
    RNLocation.requestPermission({
      ios: "whenInUse",
      android: {
        detail: "coarse"
      }
    }).then(granted => {
        if (granted) {
          this.locationSubscription = RNLocation.subscribeToLocationUpdates(locations => {
            if(locations.length>0||locations!=null){
              alert('yaaa')
            }
            else{
              alert('yoooo')
            }
            /* Example location returned
            {
              speed: -1,
              longitude: -0.1337,
              latitude: 51.50998,
              accuracy: 5,
              heading: -1,
              altitude: 0,
              altitudeAccuracy: -1
              floor: 0
              timestamp: 1446007304457.029,
              fromMockProvider: false
            }
            
          })
        }
        else{
          alert('Location permission not granted')
        }
      })
  }*/

  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Symptoms" component={Symptoms} options={{headerShown:false}} />
          <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
          <Stack.Screen name="CreateAccount" component={CreateAccount} options={{headerShown:false}}  />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

