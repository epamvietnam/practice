import React, {Component} from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import {Colors} from '../styles/DefaultStyles';
import {Icon} from 'react-native-elements';

export class HomeScreen extends Component {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            marginHorizontal: 20,
            marginTop: 30,
            marginBottom: 10,
          }}>
          <View>
            <Text style={{fontSize: 30}}>Explore</Text>
            <View style={{flexDirection: 'row', marginVertical: 20}}>
              <View
                style={{
                  borderRadius: 5,
                  backgroundColor: '#3263a8',
                  flex: 1,
                  height: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  name="heartbeat"
                  type="font-awesome"
                  color="#fff"
                  size={20}
                />
                <Text style={{color: '#fff'}}>Properties</Text>
              </View>
              <View
                style={{
                  width: 10,
                }}
              />
              <View
                style={{
                  flex: 1,
                  height: 100,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    borderRadius: 5,
                    backgroundColor: '#42a832',
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icon
                    name="heartbeat"
                    type="font-awesome"
                    color="#fff"
                    size={18}
                  />
                  <Text style={{color: '#fff', marginLeft: 5}}>Classified</Text>
                </View>
                <View
                  style={{
                    height: 10,
                  }}
                />
                <View
                  style={{
                    borderRadius: 5,
                    backgroundColor: '#42a832',
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <Icon
                    name="heartbeat"
                    type="font-awesome"
                    color="#fff"
                    size={18}
                  />
                  <Text style={{color: '#fff', marginLeft: 5}}>Motors</Text>
                </View>
              </View>
              <View
                style={{
                  width: 10,
                }}
              />
              <View
                style={{
                  flex: 1,
                  height: 100,
                }}>
                <View
                  style={{
                    borderRadius: 5,
                    backgroundColor: '#6b2473',
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <Icon
                    name="heartbeat"
                    type="font-awesome"
                    color="#fff"
                    size={18}
                  />
                  <Text style={{color: '#fff', marginLeft: 5}}>Services</Text>
                </View>
                <View
                  style={{
                    height: 10,
                  }}
                />
                <View
                  style={{
                    borderRadius: 5,
                    backgroundColor: '#6b2473',
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <Icon
                    name="heartbeat"
                    type="font-awesome"
                    color="#fff"
                    size={18}
                  />
                  <Text style={{color: '#fff', marginLeft: 5}}>Jobs</Text>
                </View>
              </View>
            </View>
          </View>

          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Text style={{fontSize: 20, flex: 1}}>Popular trending</Text>
              <Text style={{color: Colors.primary}}>View all</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 20,
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

          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Text style={{fontSize: 20, flex: 1}}>Featured Ads</Text>
              <Text style={{color: Colors.primary}}>View all</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 20,
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

          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Text style={{fontSize: 20, flex: 1}}>Top Deals</Text>
              <Text style={{color: Colors.primary}}>View all</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 20,
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
      </ScrollView>
    );
  }
}

export default HomeScreen;
