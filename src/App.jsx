import { useState } from 'react'
import './App.css'
import { puppyList } from './data'

function App() {

  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  let featuredPup = puppies.find((pup) => pup.id === featPupId)
  console.log(featuredPup)

  function handleClick() {

  }

  return (
    <>
      <div className='main-cont'>
        <div>
          {featPupId && (
            <div>
              <h2>{featuredPup.name}</h2>
              <ul>
                <li>Age: {featuredPup.age}</li>
                <li>Email: {featuredPup.email}</li>
              </ul>
            </div>
          )}
        </div>
        <div>

          {
            puppies.map((puppy) => {
              return <p className='mapped-puppies' onClick={() => { setFeatPupId(puppy.id) }} key={puppy.id}> {puppy.name}</p >
            })
          }
        </div>

      </div>
    </>
  )
}

export default App
