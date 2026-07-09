import { useState, useEffect, ReactNode } from "react";
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
    fontWeight: "bold",
  },
  cell: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    textAlign: "center",
  },
});

type Receipt = {
  id: number;
  date: string;
  store: string;
  total: number;
};

type Receipts = {
  receipts: Receipt[];
};

function useResponse<T>(uri: string) {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(uri);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    }

    if (uri) {
      fetchData();
    }
  }, [uri]);

  return data;
}

const Cells = ({ receipts }: Receipts) => {
  return (
    <>
      {receipts.map((receipt) => (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            borderWidth: 1,
          }}
          key={receipt.id}
        >
          <Text>{receipt.date}</Text>
          <Text>{receipt.store}</Text>
          <Text>{receipt.total}</Text>
        </View>
      ))}
    </>
  );
};

export default function Table() {
  const responseData = useResponse<Receipt[]>(
    "http://10.0.0.120:8080/receipts",
  );
  return (
    <View style={styles.table}>
      <View style={styles.row}>
        <Text style={styles.header}>Date</Text>
        <Text style={styles.header}>Store</Text>
        <Text style={styles.header}>Total</Text>
      </View>
      <Cells receipts={responseData ?? []} />
    </View>
  );
}
