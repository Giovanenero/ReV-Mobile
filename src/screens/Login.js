import { StyleSheet, View, TextInput, Text } from 'react-native';
import CheckBox from '../components/CheckBox';
import { useEffect, useState } from "react"

export default function Login({ navigation: { navigate } }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    
  }, [email, password]);

  return (
    <View style={styles.container}>
      <View style={styles.header}><Text style={{fontSize: 43, textAlign: "center"}}>Bem-vindo</Text></View>
      <View style={styles.inputs}>
        <TextInput
          style={styles.input}
          textContentType="emailAddress"
          maxLength={64}
          keyboardType="email-address"
          placeholder="email@hotmail.com"
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          textContentType="password"
          secureTextEntry={!showPassword}
          maxLength={8}
          placeholder="********"
          onChangeText={setPassword}
        />
        <View style={styles.containerCheckBox}>
          <CheckBox 
            style={styles.checkbox}
            text={"Mostrar senha?"}
            selected={showPassword}
            setSelected={setShowPassword}
          />
        </View>
      </View>
      <View style={styles.buttons}>
        <View
          style={styles.button}
          onStartShouldSetResponder={() => navigate("Home")}
        >
          <Text style={{fontSize: 28, color: "#fff"}}>Entrar</Text>
        </View>
        <View
          style={styles.button}
          onStartShouldSetResponder={() => navigate("Cadastre")}
        >
          <Text style={{fontSize: 28, color: "#fff"}}>Cadastrar</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 50
  },
  header: {
    width: "85%",
    height: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputs: {
    display: "flex",
    flexDirection: "column",
    gap: 25,
    width: "85%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    flexDirection: "column",
  },
  input: {
    fontSize: 20,
    display: "flex",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 7,
    height: 50,
    alignItems: "center",
    paddingLeft: 10,
    width: "100%",
    height: 55,
  },
  containerCheckBox: {
    width: "100%",
    height: 20,
    gap: 10,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  checkbox: {
    width: "100%",
    height: 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "85%",
    gap: 20,
  },
  button: {
    backgroundColor: "orange",
    width: "100%",
    height: 50,
    borderRadius: 7,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
});