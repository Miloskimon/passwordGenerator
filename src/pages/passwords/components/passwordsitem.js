import { Pressable, StyleSheet, Text, View } from "react-native";


export function PasswordsItem({data, removePassword}) {
    return (
        <Pressable onLongPress={removePassword} style={style.container}>
            <Text style={style.Text}>
               {data} 
            </Text>
        </Pressable>
    );
}

const style = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    Text:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    
    }
})