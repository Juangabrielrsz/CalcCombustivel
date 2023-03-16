import React from 'expo-status-bar';
import { StyleSheet,Text,View,TextInput} from 'react-native';
 
export default props=>{
    return(
        <View style={{marginTop:10}}>
            <Text>Digite o preço da Gasolina:</Text>
            <TextInput style={styles.txt}
            keyboardType='numeric'
            onChangeText={text=>props.aoModificar(text)}/>
        </View>
    )
};

const styles = StyleSheet.create({
    txt:{
        borderColor:'#000',
        borderWidth:2,
        borderRadius:7,
    }
  });
  