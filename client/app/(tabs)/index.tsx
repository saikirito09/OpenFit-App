import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.topSection}>
          <View>
            <Text style={styles.helloText}>Hello Sandeep</Text>
            <Text style={styles.goodMorningText}>Good Morning</Text>
          </View>
          <TouchableOpacity style={styles.notificationIcon}>
            <Ionicons name="notifications-outline" size={28} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <View style={styles.horizontalContainer}>
              <MaterialCommunityIcons name="fire" size={28} color="orange" />
              <View style={styles.statTextContainer}>
                <Text style={styles.statValue}>1200</Text>
              </View>
            </View>
          </View>
          <View style={styles.statBox}>
            <View style={styles.horizontalContainer}>
              <Ionicons name="time-outline" size={28} color="blue" />
              <View style={styles.statTextContainer}>
                <Text style={styles.statValue}>45 min</Text>
              </View>
            </View>
          </View>
          <View style={styles.statBox}>
            <View style={styles.horizontalContainer}>
              <Ionicons name="heart-outline" size={28} color="red" />
              <View style={styles.statTextContainer}>
                <Text style={styles.statValue}>75 bpm</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  helloText: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Roboto_700Bold",
  },
  goodMorningText: {
    fontSize: 18,
    color: "#555",
    fontFamily: "Roboto_400Regular",
    marginTop: 4,
  },
  notificationIcon: {
    padding: 8,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },
  statBox: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 12,
    flex: 1,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  horizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  statTextContainer: {
    marginLeft: 8,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Roboto_700Bold",
  },
  statLabel: {
    fontSize: 10,
    color: "#555",
    marginTop: 4,
    fontFamily: "Roboto_400Regular",
  },
});
