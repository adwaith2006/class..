import React from 'react';
import { Text, KeyboardAvoidingView,View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import * as firebase from 'firebase'
import db from '../config.js'
 
export default class LoginScreen extends React.Component{
    render(){
        return(
         <KeyboardAvoidingView style={{
             alignItems:"center",
             marginTop:20
         }}>
           <View>
               <Image>
                   
               </Image>
               </View>  
         </KeyboardAvoidingView>
        );
    }
}