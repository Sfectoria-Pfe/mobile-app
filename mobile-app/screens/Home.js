import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from 'react-redux';
import { logout } from "../store/auth";

export default function Home({ navigation }) {
  const dispatch = useDispatch()

  return (
    <SafeAreaView style={styles.container}>

      <Text>Home</Text>
      <Button title="Go to details" onPress={()=>navigation.navigate('details')}/>
      <Button title="logout" onPress={()=>dispatch(logout())}/>
   
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({});
