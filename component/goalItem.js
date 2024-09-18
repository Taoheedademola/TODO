import { View, Text, StyleSheet, Modal, Pressable } from "react-native";

function GoalItems(props) {
  return (
    <View style={styles.goalItems}>
      <Pressable
        android_ripple={{ color: "#5e0acc" }}
        onPress={props.delete.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedB}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItems: {
    margin: 8,
    borderRadius: 10,
    borderWidth: 0,
    borderColor: "gray",
    backgroundColor: "#5e0acc",
  },

  goalText: {
    padding: 10,
    fontSize: 16,
    color: "#fff",
  },

  pressedB: {
    opacity: 0.5,
    color: "white",
  },
});

export default GoalItems;
