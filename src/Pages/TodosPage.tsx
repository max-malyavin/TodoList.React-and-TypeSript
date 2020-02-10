import React, { useState, useEffect } from 'react';
import { TodoForm } from '../Components/TodoForm';
import { List } from '../Components/List';
import { ITodo } from '../Interfaces';

export const TodosPage: React.FC = ()=> {


    const [todos, setTodos]= useState<ITodo[]>([]);


    useEffect(()=> {
      const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
      setTodos(saved)
    }, [])
  
  
    useEffect(()=> {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
  

    const addHandler = (title: string) => {
      const newTodo: ITodo ={
        title:title,
        id: Date.now(),
        completed: false
      }
      // setDotos( [newTodo, ...todos] )
      setTodos(prev => [newTodo, ...prev])
      
    }
  
    const toggleHandler = (id: number) => {
      setTodos(prev => prev.map(todo => {
        if(todo.id ===id) {
          todo.completed = !todo.completed
        }
        return todo
      }))
  
    }
    const removeHandler = (id: number) => {
       const shoud = window.confirm('Вы уверены, что хотите удалить элемент?')
       if(shoud) {
        setTodos(prev => prev.filter(todo => todo.id !== id))
       }
  
    }
  
    return (
        <>
          <div className="TodoForm">
            <TodoForm onAdd={addHandler}/>
            <List onRemove={removeHandler} onToggle={toggleHandler} todos={todos}/>
        </div>
        </>
    )
}
