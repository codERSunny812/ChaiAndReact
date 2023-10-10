import './App.css'
import Card from './component/Card'

function App() {
  const obj = {
    name:"sunny",
    age:21,
    hobbies:"coding and  football"
  }

  return (
    <>
      <h1 className='bg-stone-800 text-white p-2 rounded-lg'>Tailwind css </h1>
      <Card newProp = {obj} />
      <figure className="  rounded-xl p-8 dark:bg-slate-800 border-black-200">
  <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/17805576/pexels-photo-17805576/free-photo-of-a-beleza.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512" />
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I have ve seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption >
      <div>
        Sarah Dayan
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>

        
    </>
  )
}

export default App
