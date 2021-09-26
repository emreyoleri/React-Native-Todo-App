import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../Colors";

const TodoList = ({ list }) => {

    const completedCount = list.todos.filter(todo => todo.completed).length;
    const remainingCount = list.todos.length - completedCount

  return (
    <View style={[styles.listContainer, { backgroundColor: list.color }]}>
      <Text style={styles.listTitle} numberOfLines={1}>
        {list.name}
      </Text>

      <View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.count}>{completedCount}</Text>
          <Text style={styles.subtitle}>Remaining</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text style={styles.count}>{remainingCount}</Text>
          <Text style={styles.subtitle}>Completed</Text>
        </View>
      </View>
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginHorizontal: 12,
    alignItems: "center",
    width: 200,
  },
  listTitle: {
    fontSize: 30,
    fontFamily : "Poppins_400Regular",
    color: colors.white,
    marginBottom:-5,
  },
  count: {
      fontFamily : "Poppins_200ExtraLight",
    fontSize: 48,
    marginBottom : -10,
    color: colors.white,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "400",
    color: colors.white,
  },
});
