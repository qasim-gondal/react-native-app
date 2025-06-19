import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";

export default function App() {
  const [textField, onChangeText] = useState("Goal...");
  return (
    // <View style = {styles.container}>
    //   {['React','Native','FlexBox','JavaScript','Redux','Api'].map((tag, index) => (
    //     <Text key={index} style={styles.tag}>{tag}</Text>
    //   ))}
    // </View>

    // <View style = {{position: 'relative',height: 200}}>
    //   <View style = {{position: 'absolute',top:10,left: 20 ,backgroundColor: 'red', padding: 10}}>
    //   <Text>I'm floating</Text>
    //   </View>
    // </View>
    // <View style={{ flexDirection: "column", padding: 50 }}>
    //   <View style={{ flexDirection: "row", justifyContent: "space-between",backgroundColor: '#cb5a5a' }}>
    //     <Text>Left</Text>
    //     <Text>Right</Text>
    //   </View>
    //   <Text>Below the row</Text>
    // </View>
    <View
      style={{
        flexDirection: "row",
        padding: 30,
        backgroundColor: "#fff",
        borderRadius: 12,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        margin: 20,
      }}
    >
      <Image
        style={{ width: 70, height: 70, borderRadius: 35 }}
        source={{ uri: "https://i.pravatar.cc/150?img=12" }}
      ></Image>
      <View style={{ marginLeft: 15, flex: 1 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Muhammad Qasim</Text>
        <Text style={{ color: "gray", marginVertical: 4 }}>
          React Native Developer
        </Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Text
            style={{
              backgroundColor: "#007AFF",
              color: "white",
              paddingVertical: 6,
              paddingHorizontal: 12,
              borderRadius: 20,
              overflow: "hidden",
            }}
          >
            Follow
          </Text>
          <Text
            style={{
              backgroundColor: "#007AFF",
              color: "white",
              paddingVertical: 6,
              paddingHorizontal: 12,
              borderRadius: 20,
              overflow: "hidden",
            }}
          >
            Message
          </Text>
        </View>
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     gap: 10,
//     padding: 50,
//   },
//   tag: {
//     backgroundColor: "#007AFF",
//     color: "#fff",
//     paddingVertical: 6,
//     paddingHorizontal: 12,
//     borderRadius: 15,
//   },
// });
