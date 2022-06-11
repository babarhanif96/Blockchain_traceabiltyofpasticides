/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React  , { useState } from 'react';
import { useTheme } from 'react-native-paper';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Image,
 
  
  TouchableOpacity, 
  Dimensions,
  TextInput,
  Platform,
 
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import manufacturescreen from './Screens/Manufacture/Manufacture';
import Distributerscreen from './Screens/Distributer/Distributer'; 
import Retailerrscreen from './Screens/Retailer/Retailer';
import SignIn from './Screens/Manufacture/Firstnew'; 
import SignInDistributer from './Screens/Distributer/Firstnew';
import SignInRetailer from './Screens/Retailer/Firstnew';
import SignInScreen from './Screens/login'; 
import axios from 'axios';
 import SyncStorage from 'sync-storage';
import ScanScreen from './scanner';
import Icon from 'react-native-vector-icons/FontAwesome';
import scan from './Screens/scan.png'; 
import Organization from './Screens/Organization';
import ModalTester from './Screens/Popup';
import Modal from "react-native-modal";

//===========================================================================================================



import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

import Feather from 'react-native-vector-icons/Feather';
// import AddToWallet from './Screens/AddToWallet';
function HomeScreen({ navigation }) {
  // return (
  //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //   <Text>Home Screen</Text>
  //   <Button
  //     title="Go to Details"
  //     onPress={() => navigation.navigate('Wallet')}
  //   />
  // </View>
  // );


  const [data, setData] = React.useState({
    username: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
});

const textInputChange = (val) => {
    if( val.length !== 0 ) {
        setData({
            ...data,
            username: val,
            check_textInputChange: true
        });
    } else {
        setData({
            ...data,
            username: val,
            check_textInputChange: false
        });
    }
}

const handlePasswordChange = (val) => {
    setData({
        ...data,
        password: val
    });
}

const handleConfirmPasswordChange = (val) => {
    setData({
        ...data,
        confirm_password: val
    });
}

const updateSecureTextEntry = () => {
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry
    });
}

const updateConfirmSecureTextEntry = () => {
    setData({
        ...data,
        confirm_secureTextEntry: !data.confirm_secureTextEntry
    });
}



return (
  <View style={styless.container}>
      <StatusBar backgroundColor='#009387' barStyle="light-content"/>
    <View style={styless.header}>
        <Text style={styless.text_header}>Welcome to Pasticide</Text>
    </View>
    <Animatable.View 
        animation="fadeInUpBig"
        style={styless.footer}
    >
        <ScrollView>
        <Text style={styless.text_footer}>Scan Barcode</Text>
        <View style={styless.action}>
         
{/*            
        {data.check_textInputChange ? 
            <Animatable.View
                animation="bounceIn"
            >
                <Feather 
                    name="check-circle"
                    color="green"
                    size={20}
                />
            </Animatable.View>
            : null} */}
        </View>



        <TouchableOpacity
                
                onPress={() => { navigation.navigate('scan') }}
            >

       <View style={styless.image}>
       <Image source={scan} />
       </View>

       </TouchableOpacity>
     
       
        
        
        <View style={styless.textPrivate}>
            <Text style={styless.color_textPrivate}>
                By Adding up  you agree to our
            </Text>
            <Text style={[styless.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
            <Text style={styless.color_textPrivate}>{" "}and</Text>
            <Text style={[styless.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
        </View>
        <View style={styless.button}>
            <TouchableOpacity
                style={styless.signIn}
                onPress={() => { navigation.navigate('login') }}
            >
            <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={styless.signIn}
            >
                <Text style={[styless.textSign, {
                    color:'#fff'
                }]}>Submit Information</Text>
            </LinearGradient>
            </TouchableOpacity>

        </View>
      
        </ScrollView>
    </Animatable.View>
  </View>
);

}
const styless = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 280
  },
  image:{
    left:50

  },
  footer: {
      flex: Platform.OS === 'ios' ? 3 : 5,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30,
      
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 40,
      top:90,
      marginBottom:-40,
      left:0
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
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
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
  },
  textPrivate: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 20
  },
  color_textPrivate: {
      color: '#009387'
  }
});




const AddToWallet = ({navigation}) => {


  





  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  const onPres = async ()=> {
    
  
    const baseUrl = 'http://192.168.0.163:30000/addUser';
    SyncStorage.set('userName', text);
    


    navigation.navigate('makeEquipment')
    
    axios({
      method: 'POST',
      url: baseUrl,
      data: { userName: text },
    }).then((response) => {
      console.log(response.data);
      alert(response.data);
    });


  }
  return (
    
    <View style={styles.view}>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={number}
        placeholder="Add user"
        
      />
       

<Button
  onPress={onPres}
  title="Submit"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>


    </View>
  );
};

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


// =========================makeEquiment========================\




 
const MakeEquiment = ({navigation}) => {
  const [text, onChangeText] = React.useState("Useless Text");
  
  const [name, onChangeName] = React.useState("Useless Text");
  const [username, onChangeUserName] = React.useState(null);
  const [owner, onChangeOwner] = React.useState("Useless Text");
  
  const [numberr, onChangeNumberr] = React.useState('text');
  const [number, onChangeNumber] = React.useState(null);

  const onPres = async ()=> {
    
    
   const result = SyncStorage.get('userName');
   console.log(result);
   
    const baseUrll = 'http://192.168.0.163:30000/makeEquipment';
       

    const formData = {
     manufacturer: text,
     equipmentNumber:numberr ,
     equipmentName: name,
     ownerName: owner ,
    // manufacturer: 'aaaaaaaaa',
    //  equipmentNumber: '1111111111' ,
    //  equipmentName: 'ddddddddd',
    //  
   }
    // Passing configuration object to axios
    axios({
      method: 'post',
      url: baseUrll,
      data: formData ,
    }).then((response) => {
      console.log(response.config.data);
      alert(response.config.data);
      
    }).catch(function(error)
    {
      throw error;
    })
    navigation.navigate('byKey')

  }
  return (
    <View style={styles.view}>

<TextInput
        style={styles.input}
        onChangeText={onChangeUserName}
        value={number}
        placeholder="user name"
        
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={number}
        placeholder="Manufacturer"
        
      />
       <TextInput
        style={styles.input}
        onChangeText={onChangeNumberr}
        value={number}
        placeholder="Equipment Number"
        
      />
       <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={number}
        placeholder="Equipment Name"
        
      />
       <TextInput
        style={styles.input}
        onChangeText={onChangeOwner}
        value={number}
        placeholder="Owner Name"
        
      />

<Button
  onPress={onPres}
  title="Submit"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
    </View>
  );
};

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     color: 'white',
//     backgroundColor: 'black'


//   },
//   view: {
//     backgroundColor: 'white',
//     height: '100%'

//   },
// });





// ========================end makeEquiment=============================


// ===========================queryByKey=================================


const ByKey = ({navigation}) => {


  



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


  const onPres = async ()=> {
    
  
    const baseUrlll = 'http://192.168.10.9:30000/queryByKey';
    // SyncStorage.get('userName', textt);
    


    axios.get('http://192.168.43.123:30000/queryByKey', { params: { key: key } })
    .then((response) => {
     
     
      //console.log("response " , Respons)
      let aa = JSON.stringify(response.data.Record);
      console.log("ye haihhh", response.data.Record.equipmentName);
      setResponslupdate(response.data.Record.lastUpdated);
      setResponsname(response.data.Record.equipmentName);
      setResponscowner(response.data.Record.currentOwnerType);
      setResponscdate(response.data.Record.createDateTime);
      
      setResponsmanufacture(response.data.Record.manufacturer);
      setResponsnumber(response.data.Record.equipmentNumber);
      setResponsowner(response.data.Record.ownerName);
      setResponspowner(response.data.Record.previousOwnerType);
      

      
      setModalVisible(!isModalVisible);
    

     // navigation.navigate('scan')
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
  const { colors } = useTheme();
  return (

<>


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
    
    <View >
    <TextInput 
                    placeholder="Enter  EquipmentNumber:  "
                    placeholderTextColor="#666666"
                    style={{margin : 10}}
                    onChangeText={onChangeKey}
                    value={key}
                   // autoCapitalize="none"
                   // onChangeText={(val) => textInputChange(val)}
                   // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                />


      {/* <TextInput
        style={styles.input}
        onChangeText={onChangeKey}
        value={key}
        placeholder="Add user"
        
      /> */}
       

{/* <Button
  onPress={onPres}

  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/> */}

<TouchableOpacity
                    style={stylesk.signIn}
                    onPress={onPres}
                >
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={stylesk.signIn}
                >
                    <Text style={[stylesk.textSign, {
                        color:'#fff'
                    }]}>SUBMIT</Text>
                </LinearGradient>
                </TouchableOpacity>


    </View>
    
    </>
  );
};

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     color: 'white',
//     backgroundColor: 'black'


//   },
//   view: {
//     backgroundColor: 'white',
//     height: '100%'

//   },
// });
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





// ==============================end queryBy Key==============================



const Stack = createNativeStackNavigator();

const App = () => {
 

  return (      
    <NavigationContainer>
    <Stack.Navigator>
   
     {/* <Stack.Screen name="popup" component={ModalTester} options={{ headerShown: false }} /> */}
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Wallet" component={SignIn} options={{ headerShown: false }}   />
      {/* <Stack.Screen name="makeEquipment" component={MakeEquiment} /> */}
      <Stack.Screen name="makeEquipment" component={manufacturescreen} options={{ headerShown: false }} />
      <Stack.Screen name="Distributer" component={SignInDistributer} options={{ headerShown: false }}   /> 
      <Stack.Screen name="Retailer" component={SignInRetailer} options={{ headerShown: false }}   />
      <Stack.Screen name="Distributerdata" component={Distributerscreen} options={{ headerShown: false }} />
      <Stack.Screen name="Retaierdata" component={Retailerrscreen} options={{ headerShown: false }} />
      <Stack.Screen name="byKey" component={ByKey}  options={{ headerShown: false }}/>
      {/* <Stack.Screen name="byKey" component={ByKey} /> */}
      <Stack.Screen name="scan" component={ScanScreen}  options={{ headerShown: false }} /> 
      <Stack.Screen name="login" component={SignInScreen}  options={{ headerShown: false }} />
      <Stack.Screen name="organization" component={Organization}  options={{ headerShown: false }} />

    
    </Stack.Navigator>
  </NavigationContainer>
  );
};




export default App;
