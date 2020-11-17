import { ImageBackground ,StyleSheet, View } from "react-native";
import React ,{useState} from "react";
import * as Yup from "yup";
import { ScrollView,Button, Text } from "react-native";
import  AsyncStorage  from '@react-native-community/async-storage';
import AppButton from "../components/AppButton";
import { AppForm, AppFormField,SubmitButton } from "../components/forms";
//import auth from '@react-native-firebase/auth';
//import {firebase} from '@react-native-firebase/auth'
//import firestore from '@react-native-firebase/firestore'
//import * as firebase1 from "firebase";
import firebase from "../config/firebaseConfig";
import Signup from "./RegisterScreen";

import { Container, Header, Content, ListItem, CheckBox, Body } from 'native-base';





function LoginScreen(props ) {
  
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const handleLogin = () => {
  //  const { email, password } = props;
    console.log('login pressed');
                
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userData) => {
        AsyncStorage.setItem('userData', JSON.stringify(userData));
        props.navigation.navigate(props.route.params.flag==0 ? "teacher":"student")
      })
      .catch((error) => {alert(error)});
  };  
  return (
    <ImageBackground                                                       
    blurRadius={1}
    style={styles.background}
    
  >
    <ScrollView>
     
        <View style={styles.container}>
        <AppForm
          initialValues={{ email: "",  password: "" }}
        
        >  
           <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
            onChangeText={(text) => setEmail( text )}
            value={email}
          />
         <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
            onChangeText={(text) => setPassword (text)}
            value={password}
          />
          <AppButton title="Login"
            onPress={
              handleLogin
            }     
              
            
            
          />
          
         

        </AppForm>
      
        </View>
        <Button style= {styles.btn}
        title="Forget Password"
        onPress={() => props.navigation.navigate('ForgetButtonScreen')}
      />
      <CheckBox checked={true} />
      <View>
          <Text 
            style={styles.loginText}
            onPress={() =>  props.navigation.navigate(props.route.params.flag==0 ? "TeacherReg":"Register")}>
          Don't have account? Click here.
        </Text> 
          </View>
         
      </ScrollView>
      </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor:'#465881'

  },
  loginText:{
    
    textAlignVertical: "center",
    textAlign: "center",
    color:'gray'
     
    
  },
  container: {
    marginBottom:30,
    flex:1,
    justifyContent:"flex-end",
  
  },
});

export default LoginScreen;