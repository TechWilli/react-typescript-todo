import React, { useCallback, ChangeEvent, FormEvent, useState, useRef, useEffect } from 'react';
import { ITodo } from '../todo-list/TodoList';
import styles from './Form.module.css';

interface Props {
  setTodo: React.Dispatch<React.SetStateAction<ITodo[]>>; // tipagem para prop que recebe um setState
}

const Form = ({ setTodo }: Props) => {

  const [todoItem, setTodoItem] = useState<string>('');
  const [disableSubmitButton, setDisableSubmitButton] = useState<boolean>(false);

  let inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!todoItem) {
      setDisableSubmitButton(true);
    } else {
      setDisableSubmitButton(false);
    }
  }, [todoItem])

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const randomId: number = Math.floor(Math.random() * 10000);

    setTodo(prevState => {
      return [
        ...prevState,
        {
          id: randomId,
          title: todoItem
        }
      ]
    });

    // aqui ele acusa que o current pode ser null, mas como tenho certeza que ele existe, posos usar o !, o ? para optional chaining também resolveria
    inputRef.current!.focus();
    setTodoItem('');

  }, [setTodo, todoItem])

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    // console.log('event.target.value', event.target.value)
    setTodoItem(event.target.value);

  }, [])

  /* IDEIA: Ao clicar no botão Adicionar, subir um emoji de joinha 👍 em algum lugar a deifnir */

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type='text'
            className={styles.inputTodo}
            value={todoItem}
            onChange={handleChange}
            placeholder='✔ Insira um TODO...'
            ref={inputRef}
          />
          <button
            className={styles.buttonSubmit}
            type='submit'
            disabled={disableSubmitButton}
          >
            Adicionar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
