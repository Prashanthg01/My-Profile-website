import './App.css';
// import Giffy from './images/giffy.gif';
import StaticInfo from './Static-home/main-component';
import Application from './Tab/navigation-bar';

function App() {
  return (
    <div className="App bg">
      {/* <img src={Giffy} alt='space' /> */}
      <div className='main-card'>
        <div className='card-1'>
          <StaticInfo/>
        </div>
        <div className='card-2'>
          <Application/>
        </div>
      </div> 
      
    </div>
  );
}

export default App;
