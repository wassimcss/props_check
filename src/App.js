

import Profile from './profile/Profile';

function App() {
  const bio='My name is Wassim Ahmed and I am a Junior Web Developer from GO MY CODE. I am an accomplished coder and programmer, and I enjoy using my skills to contribute to the exciting technological advances .Also, I graduated from the Engineering school of Sfax  in 2018 with a Master Degree in Electromechanical engineering.'
  
  const handleName = (x) => {
    alert(x)
  }

  const styleImg = {border:"3px black solid",marginTop:"100px"}

  return (
    <div className="App">
      <Profile fullName='Wassim AHMED' profession='Junior Web Developer' bio={bio} handleName={handleName}>
        <img style={styleImg} src="https://www.tanitjobs.com/files/pictures/image_1.PNG" alt=""/>
      </Profile>
    </div>
  );
}

export default App;
