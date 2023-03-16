import React,{ StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView,StyleSheet,Text} from 'react-native';
import Btn from './components/Btn';
import Etanol from './components/etanol';
import Gasolina from './components/gasolina'
import Result from './components/result';

export default function App() {

  const [gasolina,setGasolina]=useState(0)
  const [etanol,setEtanol]=useState(0)
  const [resultado,setResultado]=useState(0)

  const calcular=()=>{
    if(!gasolina){
      alert('Informe o preço da Gasolina')
      return
    }
  if(!etanol){
    alert('Informe o preço do Etanol')
    return
  }
  let res
  let calc =((etanol/gasolina)*100).toFixed(1)
  if(calc > 70){
    res='Gasolina'
  }else{
    res='Etanol'
  }
  alert('O Etanol está custando ' + calc + '% da Gasolina. É melhor abastercer com ' + res)
  setResultado(res)
  }
  
  const limpar =()=>{
    setResultado('')
  }

  const setarGasolina=(v)=>{
    limpar()
    setGasolina(v)
  }
  const setarEtanol=(v)=>{
    limpar()
    setEtanol(v)
  }


  return (
    <SafeAreaView style={styles.container}>
      <Text>Calculadora de Combustível</Text>
      
      <StatusBar animated={true}
      backgroundColor="#61dafb"
      hidden={true} />
      <Gasolina aoModificar={setarGasolina}/>
      <Etanol  aoModificar={setarEtanol}/>
      <Btn onPress={calcular}/>
      <Result resultado={resultado}/>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:15,
    
  },
});
