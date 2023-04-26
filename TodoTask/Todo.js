import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function App() {
  //#region State Variables

  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  //#endregion

  //#region Add Todo

  const addTodo = () => {
    if (text.trim() !== "") {
      setTodos([...todos, text]);
      setText("");
    }
  };

  //#endregion

  //#region Delete Todo

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  //#endregion

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Todo"
        value={text}
        onChangeText={(value) => setText(value)}
      />
      <Button title="Add Todo" onPress={addTodo} />
      {todos.map((todo, index) => (
        <TouchableOpacity key={index} style={styles.todo}>
          <Text style={styles.todoText}>{todo}</Text>
          <Button title="Delete Todo" onPress={() => deleteTodo(index)} />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    marginBottom: 20,
    width: "100%",
  },
  todo: {
    backgroundColor: "#eee",
    borderRadius: 4,
    padding: 10,
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  todoText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
