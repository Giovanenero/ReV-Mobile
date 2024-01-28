import { StyleSheet, View, Text, Image } from 'react-native';
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

//const Tab = createBottomTabNavigator();

export default function Start({ navigation: { navigate } }) {

  return (
    <View style={styles.container}>
        <View style={styles.content}>
            <View style={styles.header}>
                <Image style={styles.img} source={require("../../assets/logo.jpg")}/>
                <Text style={{fontSize: 30, color: "#282828"}}>R&V Mobile</Text>
            </View>
            <View 
                style={styles.button}
                onStartShouldSetResponder={() => navigate("Login")}
            >
                <Text style={styles.buttonText}>Iniciar</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor:  "transparent"
  },
  content: {
    width: "100%",
    height: "60%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    width: "75%",
    height: "45%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 75
  },
  button: {
    backgroundColor: "orange",
    width: "75%",
    height: "12%",
    borderRadius: 7,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 30,
    color: "#fff",
}
});