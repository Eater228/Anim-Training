import React, {useState} from 'react'
import './App.css';
import { Transition, CSSTransition } from 'react-transition-group';
import { List } from './List';

export default function App() {

  const [toggle, setTogge] = useState(true)
  const [toggle2, setTogge2] = useState(true)
  const [items, setItems] = useState([
    {id:1, titel: 'Item1'},
    {id:2, titel: 'Item2'},
    {id:3, titel: 'Item3'}
  ])

  const removeItem = id => setItems(items.filter(i => i.id !== id))

  const addItem = () => {
    const titel = prompt("Enter Item title")
    const id = Date.now()

    setItems(items.concat([{titel, id}]))
  }

  return (
    <div className='container'>
      <button onClick={() => setTogge(!toggle)}>Toggel</button>
      <button onClick={() => setTogge2(!toggle2)}>Toggel 2</button>
      <button onClick={addItem}>Add Item</button>
      <hr/>
      <div className={'blocks'}>
        <Transition
          in={toggle}
          timeout={{
            enter: 1000,
            exit: 500
          }}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log('onEnter')}
          onEntering={() => console.log('onEntering')}
          onEntered={() => console.log('onEntered')}
          onExit={() => console.log('onExit')}
          onExiting={() => console.log('onExiting')}
          onExited={() => console.log('onExited')}
        >
          {state => <div className={`square blue ${state}`}>{state}</div> }
        </Transition>
          
        <CSSTransition
          in={toggle2}
          timeout={1000}
          classNames='os'
          mountOnEnter
          unmountOnExit
        >  
          <div className='square orange'>
            {toggle2.toString()}
          </div>
        </CSSTransition>

      </div>
      <div className='blocks'>
        <List items={items} onRemove={removeItem}/>
      </div>
    </div>
  );
}


