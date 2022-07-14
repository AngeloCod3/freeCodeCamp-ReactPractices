
import './App.css';
import Testimonios from './components/testimonies'

function App() {
  return (
    <div className='App'>
      <div className="container">
      <h1>Here is what our alumni say about freeCodeCamp:</h1>

      <Testimonios 
      imagen='Shawn'
      alternative='Shawn Engineer'
      name='Shawn Wang'
      country='Singapure'
      carreer='Software Engineer'
      company='Amazon'
      testimony="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
      />

      <Testimonios 
      imagen='Sarah'
      alternative='Sarah Engineer'
      name='Sarah Chima'
      country='Nigeria'
      carreer='Software Engineer'
      company='ChatDesk'
      testimony="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
      />

      <Testimonios 
      imagen='Emma'
      alternative='Emma Engineer'
      name='Emma Bostian'
      country='Swedish'
      carreer='Software Engineer'
      company='Spotify'
      testimony="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
      />
      </div>
    </div>
  );
}

export default App;
