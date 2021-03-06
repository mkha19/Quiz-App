import React, { Component, useEffect, useState } from "react";
import { View, StyleSheet, Image, ScrollView, Alert } from "react-native";

import firebase from "../config/firebaseConfig";
import AsyncStorage from "@react-native-community/async-storage";

import Screen from "../components/Screen";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Text
} from "native-base";
import AppButton from "../components/AppButton";
//import { AsyncStorage } from '@react-native-community/async-storage';

const MainScreen = (props) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("userData").then((user_data_json) => {
      let userData = JSON.parse(user_data_json);
      setdata(userData);
    });
  });
  //   clearAsyncStorage = async() => {
  //    await  AsyncStorage.getAllKeys().then(AsyncStorage.multiRemove);
  //     console.log("removed")
  // }

  // const signOutUser = async () => {
  //   console.log("data is:" + data);
  //   //  setShowLoading(true);
  //   await AsyncStorage.removeItem("userData").then(() => {
  //     console.log("sigining out");
  //     firebase
  //       .auth()
  //       .signOut()
  //       .then(() => {
  //         props.navigation.navigate("WelcomeScreen");
  //       })
  //       .catch((e) => {
  //         setShowLoading(false);
  //         console.log(e);
  //       });
  //   });
  // };

  return (
    <Container style={styles.container}>
      <View style={styles.container}>
        <AppButton
          title="Classes"
          onPress={() => props.navigation.navigate("AddClassScreen")}
        />

        <AppButton
          title=" Courses"
          onPress={() => props.navigation.navigate("AddCourseScreen")}
        />

        <AppButton
          title=" Quiz"
          onPress={() => props.navigation.navigate("AddQuestionsScreen")}
        />

        <AppButton
          title="Report"
          onPress={() => props.navigation.navigate("ViewReportScreen")}
        />

        {/* <Button style={styles.logout}>
          <Text style={styles.appButtonText1} onPress={signOutUser}>
            sign out
          </Text>
        </Button> */}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: "#465881"
  },
  appButtonContainer: {
    backgroundColor: "#766ec8",
    borderRadius: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignSelf: "center"
  },
  logout: {
    position: "absolute",
    right: 10,
    top: -20,
    width: "35%",
    height: "15%"
  },
  appButtonText: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  appButtonText1: {
    fontSize: 14,
    color: "white",

    alignSelf: "center",
    textTransform: "uppercase"
  },

  btn: {
    marginTop: 20,
    width: "70%",
    padding: "10%",
    alignSelf: "center"
  }
});
export default MainScreen;
