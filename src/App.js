export default function App() {
  return <div className="countainer">
    <Logo />
    <Form />
    <PackingList />
    <Stats />
  </div>

}

function Logo() {
  return <h1 className="logo">🏝 Far Away 🧳</h1>
}

function Form() {
  return <div className="form">
    <h3>What do you need for your 😍 trip?</h3>
  </div>
}


function PackingList() {
  return <div className="list">
    List
  </div>
}

function Stats() {
  return <footer className="footer">
    <em>🧳 You have X items on your list and you already packed X (X%)</em>
  </footer>
}


