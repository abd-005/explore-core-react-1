import ToDo from "./Todo";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>
          Explore Core React{" "}
          <span style={{ fontSize: "18px", fontWeight: "600" }}>(Part 1)</span>
        </h1>
      </div>
      <div>
        <ToDo
          taskName="Weak up to reality"
          isDone={true}
          duration="12 days"
        ></ToDo>
        <ToDo taskName="Go to art club" isDone={false} duration="30 min"></ToDo>
        <ToDo
          taskName="Hangout with warner bros"
          isDone={true}
          duration="40 min"
        ></ToDo>

        {/* <Device dType="Laptop" price="$2000"></Device>
        <Device dType="Phone" price="$1000"></Device>
        <Device dType="Bike" price="$5000"></Device>
        <Phone model="iPhone 16 Pro" name="Mustakim" variant="Seagreen"></Phone>
        <Phone model="iPhone 16" name="Abdul Ahad" variant="White"></Phone>
        <Phone
          model="iPhone 17 Air"
          name="Alif Chowdhury"
          variant="Mint"
        ></Phone>
        <Person></Person>
        <Person></Person>
        <Sports></Sports>
        <Person></Person>
        <Person></Person>
        <Pet></Pet> */}
      </div>
    </>
  );
}

function Device({ dType, price }) {
  return (
    <div className="beautify">
      <h3>Device Type : {dType}</h3>
      <p>Price : {price}</p>
    </div>
  );
}

function Phone(propDhoro) {
  const phoneStyle = {
    color: "crimson",
    backgroundColor: "#030303ec",
  };
  return (
    <div className="beautify" style={phoneStyle}>
      <h3>Phone: {propDhoro.model}</h3>
      <p
        style={{
          color: "white",
        }}
      >
        User: {propDhoro.name}
      </p>
      <p style={{ color: "salmon" }}>Color: {propDhoro.variant}</p>
    </div>
  );
}

function Pet() {
  return (
    <div
      className="beautify"
      style={{
        backgroundColor: "salmon",
        color: "whitesmoke",
      }}
    >
      <h3>Mikasoo</h3>
      <p>My lovely pet</p>
    </div>
  );
}

function Sports() {
  return (
    <div className="beautify">
      <h3>Cricket</h3>
      <ul>
        <li>kola</li>
        <li>komola</li>
      </ul>
    </div>
  );
}

function Person() {
  const age = 17;
  const name = "jolil";

  const presonStyle = {
    color: "red",
    backgroundColor: "lightGreen",
  };
  return (
    <p className="beautify" style={presonStyle}>
      I am a Person: {name} {age}
    </p>
  );
}

export default App;
