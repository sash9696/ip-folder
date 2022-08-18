import logo from './logo.svg';
import './App.css';

function App() {
  async function getNetworkIP() {
    let found = false;
    let resolve;
    const promise = new Promise((res) => {
    resolve = res;
    });
    const pc = new RTCPeerConnection({ iceServers: [] });
    
    pc.addEventListener("icecandidate", (e) => {
    if (!e.candidate || found) return;
    resolve(e.candidate.address);
    found = true;
    });
    
    pc.createDataChannel("");
    pc.createOffer().then((desc) => pc.setLocalDescription(desc));
    
    return promise;
    }
getNetworkIP().then(a=>console.log(a))  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
