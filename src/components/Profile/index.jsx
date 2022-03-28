import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Profile({ letter, size }) {
  const customStyle = { ...styles.container, ...{ width: size, height: size } };

  return (
    <View style={customStyle}>
      <Text>{letter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
  },
});
