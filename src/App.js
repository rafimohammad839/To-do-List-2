import React, { useState } from 'react'
import ToDoList from './ToDoList'

const App = () => {
  const [inputList, setInputList] = useState("")
  const [items, setItems] = useState([])

  const itemEvent = (event) => {
     setInputList(event.target.value)
  }

  const addListOfItems = () => {
    setItems((oldItem) => {
      return [...oldItem, inputList]
    })
    setInputList("")
  }
  
  const deleteItems = (id) => {
    console.log('Deleted!');

    setItems((oldItems) => {
      return oldItems.filter((ele, index) => {
        return id !== index;
      })
    })
  }


  return (
    <>
      <div className='main-div'>
        <div className='center-div'>
          <br />
          <h1>To Do List</h1>
          <br />
          <input 
            type='text' 
            placeholder='Add an item' 
            onChange={itemEvent}
            value={inputList}
          />
          <button onClick={addListOfItems}>+</button>

          <ol id='mainList'>
            {
              items.map((itemVal, index) => {
                return <ToDoList 
                  key={index} 
                  text={itemVal} 
                  id={index}
                  onSelect={deleteItems}
                />
              })
            }

          </ol>
        </div>
      </div>
    </>
  )
}

export default App