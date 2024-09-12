import { useEffect, useState } from "react";

// import necessary components from react-navigation
import { useIsFocused } from "@react-navigation/native";
import { FlatList, StyleSheet, Text, View } from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context'
import useStorage from "../../hooks/useStorage";
import { PasswordsItem } from "./components/passwordsitem";




export function Passwords(){

    const [listPassword, setListPassword]= useState([])
    const focused = useIsFocused();

    const {getItem, deleteItem} = useStorage();

    useEffect(()=> {
        async function leadPassword(){
            const passwords = await getItem("@pass");
            setListPassword(passwords);
        }

        leadPassword();

    }, [focused])


    async function handleDeletePassword(item){
        const password = await deleteItem("@pass", item)
        setListPassword(password);
    }


    return(
        <SafeAreaView style={{ flex:1, }}>       
        <View style={style.header}>
            <Text style={style.title}>My Passwords</Text>
        </View>

        <View style={style.content}>
            <FlatList 
            style={{flex:1, padding:14, }} 
            data={listPassword} 
            keyExtractor={ (item) => String(item) } 
            renderItem={({item}) => <PasswordsItem data={item} removePassword={ () => handleDeletePassword(item)} /> }/>
        </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    header: {
        backgroundColor: '#FFD700',
        height: 100,
        padding: '10px',

        alignItems: 'center',
        justifyContent: 'center',
    },

    title:{
        
        fontSize: 20,
    }, 
    content:{
        flex: 1,
        padding: '20',
    }
})