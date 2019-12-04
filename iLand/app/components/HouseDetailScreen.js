import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {Colors} from '../styles/DefaultStyles';
import LinearGradient from 'react-native-linear-gradient';
import CheckInIcon from '../images/Check_In_Pin_Icon.svg';
import {Icon} from 'react-native-elements';

export class HouseDetailScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#f2f2f2'}}>
        <View style={{flex: 4}}>
          <Image
            source={require('../images/house.png')}
            style={{
              resizeMode: 'cover',
              width: '100%',
              flex: 1,
            }}
          />
          <LinearGradient
            colors={['transparent', 'rgba(0, 0, 0, 1)']}
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}
          />
        </View>
        <View
          style={{
            flex: 5,
            marginTop: -85,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              color: '#FFFF',
              alignSelf: 'center',
            }}>
            ¥1120000
          </Text>
          <View
            style={{
              alignSelf: 'center',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: 22,
                color: Colors.primary,
              }}>
              House on Mountain
            </Text>
            <CheckInIcon
              style={{
                marginLeft: 10,
              }}
            />
          </View>
          <View
            style={{
              alignSelf: 'center',
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <TouchableOpacity
              style={{
                alignSelf: 'stretch',
                alignItems: 'center',
                justifyContent: 'center',
                height: 40,
                width: 120,
                borderWidth: 0,
                paddingVertical: 5,
                marginRight: 10,
                backgroundColor: '#F29335',
              }}>
              <View
                style={{
                  alignSelf: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: 10,
                }}>
                <Icon
                  name="shopping-cart"
                  type="font-awesome"
                  size={20}
                  color="#FFFFFF"
                />
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: 14,
                    letterSpacing: 0.44,
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    marginHorizontal: 10,
                  }}>
                  Buy
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignSelf: 'stretch',
                alignItems: 'center',
                justifyContent: 'center',
                height: 40,
                width: 120,
                borderWidth: 0,
                paddingVertical: 5,
                backgroundColor: '#106cc8',
              }}>
              <View
                style={{
                  alignSelf: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: 10,
                }}>
                <Icon
                  name="history"
                  type="font-awesome"
                  size={20}
                  color="#FFFFFF"
                />
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: 14,
                    letterSpacing: 0.44,
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    marginHorizontal: 10,
                  }}>
                  History
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* List View */}
          
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 20,
              marginHorizontal: 15,
              width: '90%',
            }}>
            <Image
              source={require('../assets/home.jpg')}
              style={{
                borderRadius: 5,
                flex: 1,
                height: 100,
              }}
            />
            <View
              style={{
                width: 10,
              }}
            />
            <Image
              source={require('../assets/home.jpg')}
              style={{
                borderRadius: 5,
                flex: 1,
                height: 100,
              }}
            />
            <View
              style={{
                width: 10,
              }}
            />
            <Image
              source={require('../assets/home.jpg')}
              style={{
                borderRadius: 5,
                flex: 1,
                height: 100,
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default HouseDetailScreen;
