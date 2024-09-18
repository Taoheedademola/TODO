import { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import GoalItems from "./component/goalItem";
import Input from "./component/input";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisibillity, setModalVisibility] = useState(false);

  function buttonHandler(goalText) {
    setCourseGoals((currentCourseGaols) => [
      ...currentCourseGaols,
      { text: goalText, id: Math.random().toString() },
    ]);
    ModalChanger();
  }

  function DeleteHandler(id, goalText) {
    setCourseGoals((currentCourseGaols) => {
      return currentCourseGaols.filter((goal) => goal.id !== id);
    });

    // setCourseGoals(courseGoals.filter((goal) => goal.id !== id));
  }

  function ModalChanger() {
    setModalVisibility(!modalVisibillity);
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button onPress={ModalChanger} title="Add New Goal" color="#a065ec" />
        <Input
          cancel={ModalChanger}
          visible={modalVisibillity}
          button={buttonHandler}
        />
        <View style={styles.goalArea}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItems
                  text={itemData.item.text}
                  delete={DeleteHandler}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalArea: {
    flex: 5,
  },
});
