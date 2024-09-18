import {
  StyleSheet,
  Modal,
  Image,
  View,
  TextInput,
  Button,
} from "react-native";
import { useState } from "react";
function Input(props) {
  const [goalText, SetGoalText] = useState("");

  function goalHandler(enteredText) {
    SetGoalText(enteredText);
  }

  function buttonHandler() {
    props.button(goalText);
    SetGoalText("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputArea}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          onChangeText={goalHandler}
          style={styles.textInput}
          placeholder="Enter your goa!!!l"
          value={goalText}
        />
        <View style={styles.btn}>
          <View style={styles.button}>
            <Button color="#b180f0" onPress={buttonHandler} title="Add Goal" />
          </View>
          <View style={styles.button}>
            <Button color="#f31282" onPress={props.cancel} title="Cancel" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputArea: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: 10,
    backgroundColor: "#311b6b",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "grey",
    width: "80%",
    padding: 16,
    backgroundColor: "#e4d0ff",
    borderColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 10,
  },

  btn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  button: {
    width: 100,
    margin: 8,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default Input;
