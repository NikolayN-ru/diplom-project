import logo from './logo.svg';
import './App.css';
// const djangoUrl = process.env.API_URL_DJANGO
const axios = require('axios');

function App() {

  // fetch("URL").then(response => {
  //   setState({
  //     posts
  //   })
  // })

  // axios.get('/api/posts').then(res => {
  axios.get('/testnode/apitest').then(res => {
    console.log(res.data)
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>asd,</code> we are - development
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Learn React */}
        </a>
      </header>
    </div>
  );
}

export default App;
