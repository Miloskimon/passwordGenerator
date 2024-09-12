import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
    //search save items
    const getItem = async (key)=>{

        try {
            const passwords = await AsyncStorage.getItem(key);
            //JSON.parse = convert in array to JSON
            return JSON.parse(passwords) || []; 
        } catch (error) {
            console.log("error getting item", error)
            return [];
        }

    }

    //save items
    const saveItem = async (key, value)=>{
        try {
            let passwords = await getItem(key);
            passwords.push(value)
            //JSOn.stringify = convert in array to string
            await AsyncStorage.setItem(key, JSON.stringify(passwords));

        } catch (error) {
            console.log("error saving item", error)
            
        }
    }

    //delete items
    const deleteItem = async (key, item)=>{
        try {
            let passwords = await getItem(key);

            let myPassword = passwords.filter((password) => {
                return (password!== item);
            })

            await AsyncStorage.setItem(key, JSON.stringify(myPassword));
            return myPassword;
        } catch (error) {
            console.log("error deleting item", error)    
        }
    }

    return { getItem, saveItem, deleteItem };
}

export default useStorage;