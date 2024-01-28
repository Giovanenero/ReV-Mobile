import { StyleSheet, View, ScrollView,Text, TextInput } from "react-native"
import { Feather, FontAwesomeIcon } from "@expo/vector-icons"
import { useState, useEffect } from "react"
import CheckBox from "../components/CheckBox";

export default function Cadastre({ navigation: { navigate } }){

    const [user, setUser] = useState({
        email: "",
        firstName: "",
        lastName: "",
        phone: "",
        password: "",
        passwordAgain: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChangeText = (phoneNumber) => {
        const cleaned = phoneNumber.replace(/\D/g, '');
        const match = cleaned.match(/^(\d{3})(\d{5})(\d{4})$/);
        let phone = phoneNumber;
        if (match) {
            phone  = '(' + match[1] + ') ' + match[2] + '-' + match[3];
        }
        setUser({...user, phone: phone});
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}><Text style={{fontSize: 50, textAlign: "center"}}>Criar uma conta</Text></View>
            <View style={styles.inputs}>
                <ScrollView contentContainerStyle={styles.inputsScroll}>
                    <TextInput
                        style={styles.input}
                        textContentType="emailAddress"
                        maxLength={64}
                        keyboardType="email-address"
                        placeholder="Email"
                        onChangeText={(email) => {setUser({...user, email: email })}}
                    />
                    <TextInput
                        style={styles.input}
                        textContentType="name"
                        maxLength={12}
                        keyboardType="name"
                        placeholder="Nome"
                        onChangeText={(firstName) => {setUser({...user, firstName: firstName })}}
                    />
                    <TextInput
                        style={styles.input}
                        textContentType="name"
                        maxLength={12}
                        keyboardType="name"
                        placeholder="Sobre nome"
                        onChangeText={(lastName) => {setUser({...user, lastName: lastName })}}
                    />
                    <TextInput
                        style={styles.input}
                        textContentType="telephoneNumber"
                        maxLength={12}
                        keyboardType="phone-pad"
                        placeholder="DDD + N° de telefone"
                        onChangeText={(phone) => {handleChangeText(phone)}}
                    />
                    <TextInput
                        style={styles.input}
                        textContentType="password"
                        secureTextEntry={!showPassword}
                        maxLength={8}
                        placeholder="Senha"
                        onChangeText={(password) => {setUser({...user, password: password })}}
                    />
                    <TextInput
                        style={styles.input}
                        textContentType="password"
                        secureTextEntry={!showPassword}
                        maxLength={8}
                        placeholder="Senha novamente"
                        onChangeText={(passwordAgain) => {setUser({...user, passwordAgain: passwordAgain })}}
                    />
                    <View style={styles.containerCheckBox}>
                        <CheckBox 
                            style={styles.checkbox}
                            text={"Mostrar senha?"}
                            selected={showPassword}
                            setSelected={setShowPassword}
                        />
                    </View>
                </ScrollView>
            </View>
            <View
                style={styles.button}
                onStartShouldSetResponder={() => navigate("Login")}
            >
                <Text style={{fontSize: 28, color: "#fff"}}>Criar</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 50
    },
    header: {
        width: "85%",
        height: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    inputs: {
        width: "85%",
        height: "42%",
    },
    inputsScroll:{
        width: "98%",
        display: "flex",
        flexDirection: "column",
        gap: 25,
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
        height: 50,
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
    button: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "85%",
        height: 50,
        borderRadius: 7,
        backgroundColor: "orange",
    }
});