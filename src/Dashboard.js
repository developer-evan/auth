import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import { firebase } from "../config";

const Dashboard = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    firebase
      .firestore()
      .collection("user")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setName(snapshot.data());
        } else {
          console.log("User does not exist");
        }
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome {name.firstName} {name.lastName}</Text>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => {
          firebase.auth().signOut();
        }}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
  },
  logoutButton: {
    marginTop: 20,
    height: 50,
    width: 250,
    backgroundColor: "#00e4d0",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#fff",
  },
});