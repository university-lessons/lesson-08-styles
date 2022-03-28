import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

export default function Footer() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="home" size={32} />

      <MaterialIcons name="connected-tv" size={28} />

      <TouchableOpacity onPress={() => console.log("Click!")}>
        <MaterialCommunityIcons name="plus-circle-outline" size={32} />
      </TouchableOpacity>

      <MaterialIcons name="subscriptions" size={28} />

      <MaterialCommunityIcons name="play-box-multiple-outline" size={28} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "lightgrey",
    paddingTop: 8,
    marginTop: 8,
  },
});
