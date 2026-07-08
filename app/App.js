import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeLayout from "./layouts/HomeLayout";
import Table from "./components/Table";

const styles = StyleSheet.create({
  textStyle: {},
});

export default function App() {
  return (
    <HomeLayout style={{ color: "white", flex: 1 }} children={<Table />} />
  );
}
