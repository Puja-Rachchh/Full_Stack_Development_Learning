import Header from "./Header";
// import './hello.css';
import amazon from './amazon.png';
function Home() {
  var name = "John Doe";
  var age = 30;
  var mystyle = {
    color: "white",
    backgroundColor: "green"

  }

  return (
    <div>
        <Header />
      <h1>Home Page</h1>
      <p>This is the home page of my React application.</p>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p style={{ color: "blue" ,backgroundColor:"red"}}>Welcome to the home page!</p>
      <p style={mystyle}> This is using mystle internal styling</p>
      <img src={amazon}/>
    </div>
  );
}

export default Home;
