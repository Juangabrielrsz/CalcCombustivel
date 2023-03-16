import React from 'react'
import {StyleSheet, Text, View} from 'react-native';
 
export default props=>{
    return(
        <View style={{marginTop:10}}>
            <Text>Melhor Combustível: {props.resultado}</Text>
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