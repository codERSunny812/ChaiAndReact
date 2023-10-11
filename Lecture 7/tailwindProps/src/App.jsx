import './App.css'
import Card from './component/Card'





function App() {

  const myObject = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
  };
  return (
    <>
      <h1 className='bg-stone-800 text-white p-2 rounded-lg'>Tailwind css </h1>
      <Card  myObject={myObject} />
      

        
    </>
  )
}

export default App
