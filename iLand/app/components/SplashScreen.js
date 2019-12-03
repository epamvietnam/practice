import React from 'react';
import {View, Text} from 'react-native';
import AnimatedLinearGradient, {
  presetColors,
} from 'react-native-animated-linear-gradient';

class SplashScreen extends React.Component {
  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 5000),
    );
  };

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('App');
    }
  }

  render() {
    return (
      <View style={styles.viewStyles}>
        <AnimatedLinearGradient
          customColors={presetColors.sunrise}
          speed={1000}
        />
        <Text style={styles.textStyles}>iLand</Text>
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
};

export default SplashScreen;
