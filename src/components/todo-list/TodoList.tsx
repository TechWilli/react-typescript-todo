import React, { useCallback, useEffect } from 'react';
import styles from './TodoList.module.css';

export interface ITodo {
  id: number;
  title: string;
}

interface Props {
  todoList: ITodo[];
  setTodo: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const TodoList = ({ todoList, setTodo }: Props) => {

  useEffect(() => {
    console.log('lista de todos:', todoList);

  }, [todoList])

  // como boa prática, caso o id mude para string ou algo do tipo, eu passo sempre o tipo certo, referenciando ITodo['id']
  const deleteTodo = useCallback((todoId: ITodo['id']) => {
    
    const newTodos = todoList.filter(({ id }) => id !== todoId);

    setTodo(newTodos);

  }, [todoList, setTodo])

  return (
    <div className={styles.container}>
      <ul className={styles.todoListReversed}>
        {!!todoList.length
          ? todoList.map(({ id, title }) => {
            return (
              <li key={id} className={styles.todoItem}>
                <p>{title}</p>
                <button
                  type='button'
                  onClick={() => deleteTodo(id)}
                  className={styles.buttonRemoveTodo}
                >
                  excluir
                </button>
              </li>
            )
          })
          : <span className={styles.emptyMessage}>Não há TODOs cadastradas ainda...😢</span>}
      </ul>
    </div>
  );
};

export default TodoList;
