import React, { useEffect, useState } from 'react';
import styles from './App.module.css'
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Header from './components/header/Header';
import TodoList, { ITodo } from './components/todo-list/TodoList';

const App = () => {

  const [todoList, setTodoList] = useState<ITodo[]>([]);

  useEffect(() => {

  }, [])

  return (
    <div className={styles.App}>
      <Header />
      <main className={styles.main}>
        <Form
          setTodo={setTodoList}
        />
        <TodoList
          todoList={todoList}
          setTodo={setTodoList}
        />
      </main>
      <Footer />
    </div >
  );
}

export default App;
