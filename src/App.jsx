
import React from 'react'
import Profile from './Profile/porfile'
 const App = () => {

  const handleName =({FullName, bio, profession})=>{
    alert(FullName+bio+profession)
  }
  return (
    <div><Profile FullName="koubaib benyedder" bio="men" profession="developer" childreen="image" handleName={handleName}></Profile></div>
  )
}
export default App;
