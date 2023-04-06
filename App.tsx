import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from "react-native";
import { Metrics } from "./metric";
import { CheckBox } from "react-native-elements";
import React, { useState } from "react";
import { Alert } from "react-native";
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headertext}>Para Gönder</Text>
    </View>
  );
};
type TransferProps = {
  checked: boolean;
  onCheck: (check: boolean) => void;
};
const Transfer = (props: TransferProps) => {
  const [text, setText] = useState("");
  const { checked, onCheck } = props;
  return (
    <View style={styles.checkContainer}>
      <CheckBox
        title="Başka Hesaba Havale"
        checked={checked}
        onPress={() => onCheck(!checked)}

      />
      {checked && <TxtInputs text={text} setText={setText} />}
    </View>
  );
};
type TxtInputsProps = {
  text: string;
  setText: (text: string) => void;
};
const TxtInputs = (props: TxtInputsProps) => {
  const { text, setText } = props;
  return (
    <TextInput
      placeholder="Hesap Numarası"
      style={styles.inputContainer}
      value={text}
      onChangeText={(text) => setText(text)}
    />
  );
};
type TxtCostsProps = {
  text: string;
  setText: (text: string) => void;
};
const Cost=(props:TxtCostsProps)=>{
  const {text,setText}=props;
  return(
    <TextInput
    placeholder="Miktar"
    style={styles.costContainer}
    value={text}
    onChangeText={(text) => setText(text)}
  />
  )
}
type SendButtonProps = {
  onPress: () => void;
};
const SendButton = (props:SendButtonProps) => {
  const {onPress}=props;
  return (
    <TouchableOpacity  
    onPress={onPress}
    style={styles.buttonContainer}>
      <Text style={styles.buttonText}>Gönder</Text>
    </TouchableOpacity>
  )}
const App = () => {
  const [checked, setChecked] = useState(false);
const [text,setText]=useState("");
const Send=()=>{
  Alert.alert((checked===true?"Başka Hesaba "+text+" lira gönderildi":"Kendi Hesabına "+text+" lira gönderildi"));
}
  return (
    <View style={styles.container}>
      <Header />
      <Transfer checked={checked} onCheck={setChecked} />
      <Cost text={text} setText={setText}/>
      <SendButton onPress={Send}/>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    width: "100%",
    height: Metrics.measureHeight(80),
    backgroundColor: "red",
    opacity: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  headertext: {
    padding: 20,
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
  checkContainer: {
    top: Metrics.measureHeight(50),
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    top: Metrics.measureHeight(70),
    position: "absolute",
    width: "80%",
    height: Metrics.measureHeight(30),
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
    padding: 10,
  },
  costContainer:{
    top: Metrics.measureHeight(250),
    left:Metrics.measureWidth(28),
    position: "absolute",
    width: "80%",
    height: Metrics.measureHeight(30),
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
    padding: 10,
  },
  buttonContainer:{
    top: Metrics.measureHeight(300),
    left:Metrics.measureWidth(28),
    position: "absolute",
    width: "80%",
    height: Metrics.measureHeight(30),
    backgroundColor: "lightblue",
    borderRadius: 10,
    margin: 10,
    padding: 10,
    justifyContent:"center",
    alignItems:"center"
  },
  buttonText:{
    fontSize:15,
    fontWeight:"bold"
  }

});
