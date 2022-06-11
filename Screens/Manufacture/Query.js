import React , { useState } from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios';
 import SyncStorage from 'sync-storage';
import Modal from "react-native-modal";

const ByKey = ({navigation}) => {

  const [isModalVisible, setModalVisible] = useState(false);



  





    const [key, onChangeKey] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);


    const toggleModal = () => {
      console.log("enter" , isModalVisible);
      setModalVisible(true);
    };
  
  
    const onPres = async ()=> {
      
    
      const baseUrlll = 'http://192.168.0.163:30000/queryByKey';
      // SyncStorage.get('userName', textt);
      
  
  
      axios.get('http://192.168.0.163:30000/queryByKey', { params: { key: key } })
      .then((response) => {
        console.log(response.data.Record)
        alert(JSON.stringify(response.data.Record))
      //  navigation.navigate('scan')
      })
  
  
  
      
      // axios({
      //   method: 'GET',
      //   url: baseUrlll,
      //   data: { key : key},
      // }).then((response) => {
      //   console.log(response.data);
      //   alert(response);
      // }).catch(function(error)
      // {
      //   throw error;
      // })
  
  
    }
    return (
      <View style={styles.view}>



  
        <TextInput
          style={styles.input}
          onChangeText={onChangeKey}
          value={key}
          placeholder="Add user"
          
        />
         
  
  <Button
    onPress={function(){
      xonsole.log("hi")
    }}
    title="Submit"
    color="#841584"
    accessibilityLabel="Learn more about this purple button"
  />
  

  <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1  , backgroundColor: "white" , borderRadius:70}}>
          <Text>Hello!</Text>

          {/* <Button title="Hide modal" onPress={toggleModal} /> */}
        </View>
      </Modal>
  
      </View>
    );
  };

  export default ByKey;
  
  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      color: 'white',
      backgroundColor: 'black'
  
  
    },
    view: {
      backgroundColor: 'white',
      height: '100%'
  
    },
  });
  
  