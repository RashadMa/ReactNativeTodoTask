import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Todo from "./Todo";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Todo />
      </ScrollView>
    </SafeAreaView>
  );
}