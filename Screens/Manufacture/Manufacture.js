import React from 'react';
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

const manufacturescreen = ({navigation}) => {

    const [text, onChangeText] = React.useState("Useless Text");
   
   const [name, onChangeName] = React.useState("Useless Text");
   const [owner, onChangeOwner] = React.useState("Useless Text");
   
   const [numberr, onChangeNumberr] = React.useState('text');
   const [number, onChangeNumber] = React.useState(null);

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



    // =================data add==========================
    const onPres = async ()=> {
     
     
        const result = SyncStorage.get('userName');
        console.log(result);
        
         const baseUrl = 'http://192.168.43.123:30000/makeEquipment';
            
    
         var formData = {
          manufacturer: text,
          equipmentNumber:numberr ,
          equipmentName: name,
          ownerName: owner 
        }
         // Passing configuration object to axios
         axios({
           method: 'POST',
           url: baseUrl,
           data: formData ,
          
         }).then((response) => {
           console.log(response.config.data);
           alert(response.config.data);
           navigation.navigate('byKey');
         });
    
       }

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Manufacture</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView>
            <Text style={styles.text_footer}>Manufacturer</Text>
            <View style={styles.action}>
                {/* <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                /> */}
                <TextInput 
                    placeholder="Your Username"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={onChangeText}
                  //  onChangeText={(val) => textInputChange(val)}
                />
                {/* {data.check_textInputChange ? 
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


            {/* ============================= */}
            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Equipment Name</Text>
            <View style={styles.action}>
                {/* <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                /> */}
                <TextInput 
                    placeholder="Equipment Name"
                    onChangeText={onChangeName}
                    style={styles.textInput}
                    autoCapitalize="none"
                   // onChangeText={(val) => textInputChange(val)}
                />
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
                : null}
            </View>
            {/* ========================= */}

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Equipment Number</Text>
            <View style={styles.action}>
                {/* <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                /> */}
                <TextInput 
                    placeholder="Equipment Number"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    //onChangeText={(val) => handlePasswordChange(val)}
                    onChangeText={onChangeNumberr}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {/* {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    } */}
                </TouchableOpacity>
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Owner Name</Text>
            <View style={styles.action}>
                {/* <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                /> */}
                <TextInput 
                    placeholder="Owner Name"
                   // secureTextEntry={data.confirm_secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                   // onChangeText={(val) => handleConfirmPasswordChange(val)}
                   onChangeText={onChangeOwner}
                />
                {/* <TouchableOpacity
                    onPress={updateConfirmSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity> */}
            </View>
            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By Adding up  you agree to our
                </Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                <Text style={styles.color_textPrivate}>{" "}and</Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={onPres}
                >
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Submit</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                  //  onPress={() => navigation.goBack()}
                  onPress={onPres}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Sign In</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </Animatable.View>
      </View>
    );
};

export default manufacturescreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
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
        color: 'grey'
    }
  });