import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Main from './Main'
import { Provider} from "react-redux";
import { store } from './store';


export default function App() {
  return (
    <Provider store={store}>
      <Main/>
      </Provider>
  )
}

const styles = StyleSheet.create({})