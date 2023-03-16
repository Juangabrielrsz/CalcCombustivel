import React from 'react';
import {StyleSheet,Text,View,TextInput} from 'react-native';
 
export default props=>{
    return(
        <View style={{marginTop:10}}>
            <Text>Digite o preço do Etanol:</Text>
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
  