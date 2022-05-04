import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import io from "socket.io-client";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

const socket = io("http://localhost:5000");
export default function App() {
  const [message, setmessage] = useState("");
  const [chat, setchat] = useState([]);

  function handleSubmit() {
    socket.emit("chat", { message,username });
    setmessage("");
  }
  useEffect(()=>{
    socket.on("chat",(payload)=>{
      setchat([...chat,payload])
    })
  })
  const username=nanoid(4)
  return (
    <View style={styles.container}>
      <Text>Chat APP</Text>
      {chat.map((payload,index)=>{
        return (<View key={index}>
          <Text>{payload.message}:{payload.username}</Text></View>)

      })}
      <TextInput
        style={{ height: 40 }}
        placeholder="Type here to translate!"
        onChangeText={(newText) => setmessage(newText)}
        value={message}
      />
      <Button onPress={handleSubmit}>SUbmit</Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
