import { View, Text, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

import logo from "./logo.png";
import Profile from "../Profile";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <View style={styles.actions}>
        <Ionicons name="md-search" size={28} style={styles.icon} />
        <MaterialIcons name="connected-tv" size={28} style={styles.icon} />
        <MaterialCommunityIcons
          name="bell-outline"
          size={28}
          style={styles.icon}
        />

        <Profile letter="A" size={24} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    paddingBottom: 8,
    marginBottom: 8,
  },
  logo: {
    width: 120,
    height: 32,
    resizeMode: "contain",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: 8,
  },
});
