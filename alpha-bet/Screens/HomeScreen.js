import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AppHeader from '../components/AppHeader';
import AbsentButton from '../components/AbsentButton';
import PresentButton from '../components/PresentButton';
import SummaryScreen from './SummaryScreen';
import db from '../Config';
import { LinearGradient } from 'expo-linear-gradient';

export default class HomeScreen extends React.Component {
  goToSummaryScreen = (count) => {
    // db.ref("teams/"+count).update({
    //   enabled:true
    // });
    this.sortAttedence();
  };

  todayDate = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var year = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    return (today = dd + '-' + mm + '-' + year);
  };

  sortAttedence = () => {
    var rolls = [];
    var allAttendence = [];
    db.ref('Class').on('value', (data) => {
      rolls = data.val();
      for (var i in rolls) {
        console.log(
          rolls[i][this.todayDate()],
          rolls[i]['Name'],
          this.todayDate()
        );
        allAttendence.push([rolls[i][this.todayDate()], rolls[i]['Name']]);
      }
      console.log(allAttendence);
      this.props.navigation.navigate('SummaryScreen', {
        allAttendenceList: allAttendence,
      });
    });
  };

  render() {
    return (
      <View>
        <AppHeader />

        <View style={styles.boom}>
          <Text style={styles.studentText}>Aswin </Text>
          <AbsentButton roll="01" />
          <PresentButton roll="01" />

          <Text style={styles.studentText}>Host </Text>
          <AbsentButton roll="02" />
          <PresentButton roll="02" />
        </View>
        <LinearGradient
          // Button Linear Gradient
          colors={['cyan','royalblue']}
          style={{ alignItems: 'center', marginRight: 100, marginLeft: 100,marginTop: 180 ,borderRadius: 7}}>
          <TouchableOpacity
            style={styles.buttonStyles}
            onPress={() => {
              this.goToSummaryScreen('count');
            }}>
            <Text style={styles.submitText}>SUBMIT</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyles: {
    padding: 10,
    textAlign: 'center',
    marginRight: 100,
    marginLeft: 100,
    borderRadius: 7,
  },
  submitText: {
    textAlign: 'center',
    color: 'black',
    fontFamily: 'cursive',
  },
  studentText: {
    color: 'black',
    marginTop: 30,
    marginLeft: 30,
    fontFamily: 'cursive',
  },
  boom: {
    marginTop: 50,
  },
});
