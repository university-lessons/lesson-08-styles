import { StyleSheet, Text, View, ScrollView } from "react-native";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Home() {
  const profile1 = { letter: "B", channel: "Channel B" };
  const profile2 = { letter: "C", channel: "Channel C" };

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView>
        <Card
          coverIndex={0}
          title="Video 1"
          profile={profile1}
          viewsCount={123}
        />
        <Card
          coverIndex={1}
          title="Video 2"
          profile={profile2}
          viewsCount={1490}
        />
        <Card
          coverIndex={0}
          title="Video 3"
          profile={profile1}
          viewsCount={2300}
        />
      </ScrollView>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    padding: 8,
    marginTop: 24,
  },
});
