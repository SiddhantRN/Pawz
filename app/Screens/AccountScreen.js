import React from "react";
import { View, StyleSheet, Text } from "react-native";

function AccountScreen(props) {
  return (
    <View style={styles.container}>
      <Text>This is AccountScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default AccountScreen;
