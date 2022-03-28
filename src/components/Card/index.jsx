import { View, Text, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

import cover1 from "./cover1.jpg";
import cover2 from "./cover2.jpg";
import Profile from "../Profile";

const covers = [cover1, cover2];

export default function Card({ coverIndex, title, profile, viewsCount }) {
  return (
    <View>
      <Image source={covers[coverIndex]} style={styles.cover} />

      <View style={styles.cardFooter}>
        <Profile letter={profile.letter} size={32} />

        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>
            {profile.channel} - {viewsCount} views.
          </Text>
        </View>

        <MaterialCommunityIcons name="dots-vertical" size={20} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cover: {
    width: "100%",
    height: 160,
    resizeMode: "cover",
  },
  cardFooter: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 8,
    marginBottom: 16,
  },
  title: {
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 12,
    color: "grey",
  },
});
