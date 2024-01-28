import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from "react"

export default function CheckBox({style, text, selected, setSelected}) {

    return (
        <View style={style}>
            <View 
                style={[styles.checkbox, selected ? styles.selected : {}]}
                onStartShouldSetResponder={() => {setSelected(!selected)}}
            >
                {selected && (<FontAwesome name="check" size={20} color="#fff" />)}
            </View>
            <Text style={{fontSize: 18}}>{text}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    checkbox: {
        width: 27,
        height: 27,
        borderWidth: 1.5,
        borderRadius: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    selected: {
        backgroundColor: "#4c1"
    }
})