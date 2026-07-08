import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CameraView, Camera } from "expo-camera";
import { StatusBar } from "expo-status-bar";

const styles = StyleSheet.create({
  table: {
    backgroundColor: "white",
  },

  row: {
    flexDirection: "row",
  },
  header: {
    flex: 1,
    borderWidth: 1,
    textAlign: "center",
  },
  cell: {
    flex: 1,
    padding: 20,
    borderWidth: 1,
    textAlign: "center",
  },
});

const Cells = ({ props }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.cell}></Text>
      <Text style={styles.cell}></Text>
      <Text style={styles.cell}></Text>
    </View>
  );
};

export default function Table({ children }) {
  return (
    <View style={styles.table}>
      <View style={styles.row}>
        <Text style={styles.header}>Date</Text>
        <Text style={styles.header}>Store</Text>
        <Text style={styles.header}>Total</Text>
      </View>
      <Cells />
    </View>
  );
}
