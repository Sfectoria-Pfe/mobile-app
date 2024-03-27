import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useRef, useState } from "react";
import { onboardingData } from "../slides.js/data";
import NextButton from "./NextButton";

export default function Onboarding({ navigation}) {
  const { width } = useWindowDimensions();

  console.log(width);
const flatListRef = useRef(null)

const scrollToNextItem = (index)=>{
  if(flatListRef.current) {
    flatListRef.current.scrollToIndex({index , Animated:true})
}}

  return (
    <View style={[styles.container, { marginTop: 30 }]}>
      <FlatList
      ref={flatListRef}
        data={onboardingData}
        
        horizontal
        pagingEnabled
        contentContainerStyle={{ paddingRight: 0 }}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 0, width }}>
            <Image source={item.imagePath} style={[styles.image, { width }]} />
            <View
              style={{
                flex: 0.3,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>

            <NextButton
              percentage={(index + 1) * (100 / onboardingData.length)} scrollToNextItem={scrollToNextItem} index={index} lastIndex={onboardingData.length-1}
            />
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontWeight: "600",
    fontSize: 28,
    marginBottom: 10,
    color: "#e91e63",
    textAlign: "center",
  },
  description: {
    fontWeight: "300",
    textAlign: "center",
    color: "black",
    paddingHorizontal: 64,
  },
});
