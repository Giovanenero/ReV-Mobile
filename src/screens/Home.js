import { StyleSheet, View, Text } from 'react-native';
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

//const Tab = createBottomTabNavigator();

export default function Home() {

  return (
    <View style={styles.container}>
        <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});