import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export class SettingsScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings!</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

export default SettingsScreen;
