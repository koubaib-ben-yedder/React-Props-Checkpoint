import Profile from "./Profile/profile";
function App() {

  
  const handleName =({FullName, bio, profession})=>{
    alert(`${FullName} ${bio} ${profession}`)
  }
  
  return (
    <div className="App">

    

      <Profile FullName="khoubaib" bio="men" profession="developer" handleName={handleName} childreen="image"/>
    
    </div>
  );
}

export default App;
