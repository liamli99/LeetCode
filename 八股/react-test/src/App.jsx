import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  // function debounce(fn, delay) {
  //   let timer;
  
  //   return function(...args) {
  //     clearTimeout(timer);
  //     timer = setTimeout(function() {
  //       fn.apply(this, args)
  //     }, delay)
  //   }
  // }

  function throttle(fn, delay) {
    let inThrottle;
  
    return function(...args) {
      if (!inThrottle) {
        fn.apply(this, args);
        inThrottle = true;
  
        setTimeout(function() {
          return inThrottle = false;
        }, delay)
      }
    }
  }

  function handleClick() {
    setCount(curr => curr + 1);
  }

  const newFunc = throttle(handleClick, 3000);

  return (
    <button onClick={newFunc}>
      You clicked {count} times
    </button>
  )
}

export default App
