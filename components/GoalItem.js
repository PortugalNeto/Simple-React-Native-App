import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <Pressable onPress={props.onPressItem.bind(this, props.id)}>
      <View style={styles.goalContainer}>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
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
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
  },
});
