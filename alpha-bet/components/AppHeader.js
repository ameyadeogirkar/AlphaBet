import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

class AppHeader extends React.Component {
  render() {
    return (
      <View>
        <LinearGradient
          // Button Linear Gradient
          colors={['cyan','royalblue',]}
          style={{ padding: 15, alignItems: 'center'}}>
          <Text
            style={{
              backgroundColor: 'transparent',
              fontSize: 15,
              color: 'black',
            }}>
            ALPHA-BET
          </Text>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default AppHeader;
