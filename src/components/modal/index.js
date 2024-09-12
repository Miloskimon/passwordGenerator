import { View, Text ,StyleSheet, TouchableOpacity, Pressable } from "react-native";


export function Modalpassword({password, handleClose}){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.password}>Generated Password</Text>

                <Pressable style={styles.InnerPassword}>
                    <Text style={styles.text}>
                        {password}
                </Text>
                </Pressable>

                <View style={styles.ButtonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Back</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSave]}>
                        <Text style={styles.buttonSaveText}>Save Password</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "rgba(24,24,24,0.6)",
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },

    content:{
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
        width: "85%",
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    password:{
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },

    InnerPassword:{
        backgroundColor: "#0e0e0e",
        width: "90%",
        padding: 14,
        borderRadius: 10,
    },
    text:{
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
    },

    ButtonArea:{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        margin: 10,
        width: '90%',
    },

    button:{
        flex:1,
        alignItems: "center",
        marginTop: 14,
        marginBottom: 14,
        padding: 8,

    },

    buttonSave:{
        backgroundColor: "#FFD700",
        borderRadius: 10,
    },

    buttonSaveText:{
        color: "#000",
        fontWeight: "bold",
    },
})