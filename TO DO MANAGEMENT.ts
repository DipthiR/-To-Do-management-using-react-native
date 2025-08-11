import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Button, TextInput, List, Checkbox } from 'react-native-paper';
export default function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    if (text.trim() !== '') {
      setTodos([...todos, { text, id: Date.now(), completed: false }]);
      setText('');
    }
  };
 const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
