import React from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default props=>{
    return(
        <View style={{marginTop:10}}>
            <TouchableHighlight 
            style={styles.btn}
            onPress={props.onPress}
            >
            <Text style={styles.txtBtn}>Calcular</Text>
            </TouchableHighlight>
        </View>
    )
};

const styles = StyleSheet.create({
    btn:{
        backgroundColor:'#800',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:7,
        padding:10,
    },
    txtBtn:{
        textTransform:'uppercase',
        color:'#fff',
    },
  });
  