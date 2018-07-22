
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Slider,
  Button,
  TouchableOpacity,
  
} from 'react-native';
import RNListSlider from 'react-native-list-slider';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});





export default class App extends React.Component {

  constructor(Props) {
    super(Props);
    this.state = {
      age: 0,
      age2:1,
      hola:1,
      moon:1,
      como:1.000
    };
    this.hola = 0
  }
  
  calcComo(){ 
    como = Math.floor(this.state.moon)*0.01* Math.pow(10,this.state.age2);
    nudity = (como/5).toFixed(Math.max(0,3-this.state.age2));
    console.log(nudity);
    this.setState({como:nudity});
  }
  onValueChanged = value => {
    this.setState({ moon :value});
    this.calcComo();
}
  render() {
    return (
      <View style={styles.container}>
        <Slider
         style={styles.slider}
         step={1}
         value={this.state.age2}
         minimumValue={0}
         maximumValue={5}
         minimumTrackTintColor={'orange'}
         onValueChange={val => {
           this.setState({age2:val});
           this.calcComo();
          }
        } 
        />
        <Text style={styles.welcome}>
          {"\n"}
          {this.state.como}
        </Text>
        

        <RNListSlider
          value={5}
          decimalPlaces={5}
          multiplicity={1} 
          onValueChange={this.onValueChanged}
          arrayLength={70}
        />
        {/* <Slider
         style={{ width: 250,marginLeft:-100 }}
         step={1}
         value={100}
         minimumValue={0}
         maximumValue={100}
         onValueChange={val => {
           this.setState({age:val});
           this.calcHola();
            }
          } 
        /> */}

      </View>
    );
  }
}




const styles = StyleSheet.create({
  
  slider: {
    marginRight:-300,
    width:250,
    transform: [
      { rotateZ : '-90deg' },
    ],
  },
  slider2: {
    transform: [
      { scaleX : 0.5 },
    ],
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
