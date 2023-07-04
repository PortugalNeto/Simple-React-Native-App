import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [courseGoals, setCourseGoals] = useState("");

  const handleButtonPress = () => {
    setGoalsList((goalsList) => [
      ...goalsList,
      { text: courseGoals, id: Math.random().toString() },
    ]);
  };

  const handleTextChange = (text) => {
    setCourseGoals(text);
    console.log(text);
  };

  const deleteGoalHandler = (id) => {
    setGoalsList((currentList) => {
      return currentList.filter((item) => item.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleTextChange}
          style={styles.inputElement}
          placeholder="Enter your Goal!"
        />
        <Button
          onPress={handleButtonPress}
          style={styles.buttonElement}
          title="Add Goal"
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={goalsList}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onPressItem={deleteGoalHandler}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 30,
    paddingHorizontal: 15,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    flex: 1,
  },
  inputElement: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  buttonElement: {
    maxHeight: 25,
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center",
  },
  listContainer: {
    width: "100%",
    paddingVertical: 25,
    // marginHorizontal: 10,
    flex: 4,
  },
  itemText: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
  goalContainer: {
    height: 35,
    paddingHorizontal: 15,
    backgroundColor: "purple",
    borderRadius: 10,
  },
});
