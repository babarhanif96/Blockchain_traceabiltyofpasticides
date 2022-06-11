

import React, { useEffect, Component, useState } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  Alert,
  View
} from 'react-native';
import Modal from "react-native-modal";
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import axios from 'axios';



import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';






//class ScanScreen extends Component
const ScanScreen = ({navigation}) => {

  
 
  

  const [isModalVisible, setModalVisible] = useState(false);
  const [Responsname, setResponsname] = useState(null);
  const [Responsnumber, setResponsnumber] = useState(null);
  const [Responsmanufacture, setResponsmanufacture] = useState(null);
  const [Responsowner, setResponsowner] = useState(null);
  const [Responspowner, setResponspowner] = useState(null);
  const [Responscdate, setResponscdate] = useState(null);
  const [Responslupdate, setResponslupdate] = useState(null);
  const [Responscowner, setResponscowner] = useState(null);



  const [key, onChangeKey] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  const toggleModal = () => {
    console.log("enter" , isModalVisible);
    setModalVisible(false);
  };
  

  

 // componentDidMount() {



//     const baseUrl = 'http://192.168.0.167:30000/addUser';

// // Passing configuration object to axios
// axios({
//   method: 'post',
//   url: baseUrl  ,
//   data: { userName: 'ali' },
//   // data: { key: '11'},
// }).then((response) => {
//   console.log(response.data);
// }).catch(function(error) {
//     console.log('There has been a problem with your fetch operation: ' + error.message);
//      // ADD THIS THROW error
//        throw error;
//      });

    //  const baseUrll = 'http://192.168.0.167:30000/makeEquipment';

    //  const formData = {
    //   manufacturer: 'babar hanif',
    //   equipmentNumber:'1234',
    //   equipmentName: 'pesticide',
    //   ownerName: 'ali',
    // }

    //  axios({
    //   method: 'post',
    //   url: baseUrll ,
    //   data: formData,
     
    //   // data: { key: '11'},
    // }).then((response) => {
    //   console.log(response);
    // }).catch(function(error) {
    //     console.log('There has been a problem with your fetch operation: ' + error.message);
    //      // ADD THIS THROW error
    //        throw error;
    //      });





        //  const baseUrlll = 'http://192.168.0.167:30000/queryByKey';

         
    
        //  axios({
        //   method: 'get',
        //   url: baseUrlll ,
        //   data: { key: '1234' },
         
        // }).then((response) => {
        //   console.log(response);
        // }).catch(function(error) {
        //     console.log('There has been a problem with your fetch operation: ' + error.message);
        //      // ADD THIS THROW error
        //        throw error;
        //      });











        // const baseUrllll = 'http://192.168.0.167:30001/addUser';

        // // Passing configuration object to axios
        // axios({
        //   method: 'POST',
        //   url: baseUrllll ,
        //   data: { userName: 'abcd' },
        //   // data: { key: '11'},
        // }).then((response) => {
        //   console.log(response.data);
        // })



            


//     //  fetch('https://jsonplaceholder.typicode.com/todos/1')
//     // .then(response => response.json())
//     // .then(json => console.log(json))
//     // .catch(function(error) {
//     //   console.log('There has been a problem with your fetch operation: ' + error.message);
//     //    // ADD THIS THROW error
//     //     throw error;
//     //   });
 // }


 onSuccess =     (e) => {
  
   

    // console.log(e.data);
    // alert(e.data);


    axios.get('http://192.168.43.123:30000/queryByKey', { params: { key: e.data } })
    .then((response) => {

      setResponslupdate(response.data.Record.lastUpdated);
      setResponsname(response.data.Record.equipmentName);
      setResponscowner(response.data.Record.currentOwnerType);
      setResponscdate(response.data.Record.createDateTime);
      
      setResponsmanufacture(response.data.Record.manufacturer);
      setResponsnumber(response.data.Record.equipmentNumber);
      setResponsowner(response.data.Record.ownerName);
      setResponspowner(response.data.Record.previousOwnerType);
      

      
      setModalVisible(!isModalVisible);

      console.log(response.data.Record)
      alert(JSON.stringify(response.data.Record))
    })

    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err)

    // );

    // fetch('http://192.168.0.167:30000/queryByKey' )
    // .then((response) => console.log(response))

    
    // const baseUrl = 'https://reactnative.dev/movies.json';
    
    // // Passing configuration object to axios
    // axios({
    //   method: 'get',
    //   url: baseUrl,
    // }).then((response) => {
    //   console.log(response.data);
    // });

    

  }










//render() {




  return (

    <>






{/* ====================end model =====================/ */}


    
    <QRCodeScanner
      onRead={this.onSuccess}
      flashMode={RNCamera.Constants.FlashMode.off}
      topContent={
        <Text style={styles.centerText}>
          {/* Go to{' '}
          <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
          your computer and scan the QR code. */}
        </Text>
      }
      bottomContent={
        <Text style={styles.centerText}>
        {/* Go to{' '}
        <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
        your computer and scan the QR code. */}
      </Text>
      }

      
    />

    
<Modal  isVisible={isModalVisible}>
        <View style={{ flex: 1  , backgroundColor: "white" , borderRadius:70 , color:"green" , padding:20   }}>
        <View  style={{ top: 20 }}>
          <View style={{  marginVertical: 4, flexDirection: 'row'}} >
          <Text style={{ fontWeight: "bold" ,  fontSize: 20 , color:"#009387"}}>
         Manufacturer :     
          
        </Text>

        <Text style={{left: 12, fontWeight: "bold" , fontSize: 20}}>
            {Responsmanufacture}  
          
        </Text>

          </View>
          <View style={{  marginVertical: 4, flexDirection: 'row'}} >
          <Text style={{ fontWeight: "bold" ,  fontSize: 20 , color:"#009387"}}>
          EquipmentNumber:    
          
        </Text>

        <Text style={{ left: 8, fontWeight: "bold" , fontSize: 20}}>
        {Responsnumber}  
          
        </Text>

          </View>
          <View style={{  marginVertical: 4, flexDirection: 'row'}} >
          <Text style={{ fontWeight: "bold" ,  fontSize: 20 , color:"#009387"}}>
          EquipmentName : 
          
        </Text>

        <Text style={{left: 8, fontWeight: "bold" , fontSize: 20}}>
        {Responsname} 
          
        </Text>

          </View>
          
      
          <View style={{  marginVertical: 4, flexDirection: 'row'}} >
          <Text style={{ fontWeight: "bold" ,  fontSize: 20 , color:"#009387"}}>
          OwnerName:  
          
        </Text>

        <Text style={{ left: 8, fontWeight: "bold" , fontSize: 20}}>
        {Responsowner} 
          
        </Text>

          </View>

          <View style={{  marginVertical: 4, flexDirection: 'row'}} >
          <Text style={{ fontWeight: "bold" ,  fontSize: 20 , color:"#009387"}}>
          PreviousOwner:
          
        </Text>

        <Text style={{  left: 6, fontWeight: "bold" , fontSize: 18}}>
        {Responspowner}
          
        </Text>

          </View>
        
          <View style={{  marginVertical: 4, flexDirection: 'row'}} >
          <Text style={{ fontWeight: "bold" ,  fontSize: 20 , color:"#009387"}}>
          CurrentOwner:
          
        </Text>

        <Text style={{ left: 8, fontWeight: "bold" , fontSize: 18}}>
        {Responscowner}
          
        </Text>

          </View>

          <View style={{  marginVertical: 4, flexDirection: 'column'}} >
          <Text style={{ fontWeight: "bold" ,  fontSize: 20 , color:"#009387"}}>
          CreateDateTime:
          
        </Text>

        <Text style={{  fontWeight: "bold" , fontSize: 18}}>
        {Responscdate}
          
        </Text>

          </View>
      
          <View style={{  marginVertical: 4, flexDirection: 'column'}} >
          <Text style={{ fontWeight: "bold" ,  fontSize: 20 , color:"#009387"}}>
          LastUpdated:
          
        </Text>

        <Text style={{ fontWeight: "bold" , fontSize: 18}}>
        {Responslupdate}
          
        </Text>

          </View>
       
      
       
        
         <View style={{top:150}}>
         {/* <Button title="Hide modal" onPress= /> */}
         <TouchableOpacity
                    style={stylesk.signIn}
                    onPress={toggleModal}
                >
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={stylesk.signIn}
                >
                    <Text style={[stylesk.textSign, {
                        color:'#fff'
                    }]}>Done</Text>
                </LinearGradient>
                </TouchableOpacity>

         </View>
         
          
          </View>
        </View>
      </Modal>
    </>
  );
//}
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
    width:'100%',
    backgroundColor: '#009387'
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16,
    width:'100%',
    backgroundColor: '#009387'
  }
});
const stylesk = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#203354'
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: '#05375a',
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  textInputt: {
     
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      //paddingLeft: 10,
      color: '#05375a',
      top: 20,
      borderColor: "black"
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'center',
      marginTop: 50
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  }
});


export default ScanScreen;