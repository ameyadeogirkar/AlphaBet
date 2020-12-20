import * as React from 'react';
import { Text, View, StyleSheet , TouchableOpacity } from 'react-native';
import db from '../Config';

class PresentButtonStudent2 extends React.Component{

  componentDidMount() {}

  isStudent2Present=()=>{
    db.ref("Class/02/").update({
      TODAY: "Present"
    })
  }

  render(){
    return(
      <View>
        <TouchableOpacity style={styles.presentStyles} onPress={this.isStudent2Present}>
          <Text style={styles.buttonText}>PRESENT</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  presentStyles:{
    backgroundColor:"green",
    justifyContent : 'center',
    alignSelf : 'center',
    borderRadius : 7,
    marginTop:-50,
    marginLeft:200,
    width : 75,
    height:50,
  },
  buttonText : {
    textAlign : 'center',
    color : 'white'
  }
})

export default PresentButtonStudent2;