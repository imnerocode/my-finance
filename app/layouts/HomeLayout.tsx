import { View, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { CameraView, Camera } from "expo-camera";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    color: "white",

    borderRadius: 50,
  },

  topBarContainer: {
    backgroundColor: "black",
    flex: 0.2,

    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});

const TopBar = () => {
  return (
    <View style={styles.topBarContainer}>
      <Text style={styles.textContainer}>MyFinances</Text>
    </View>
  );
};

export default function HomeLayout({ children, style }) {
  return (
    <View style={styles.container}>
      <TopBar />
      <View style={style}>{children}</View>
    </View>
  );
}
