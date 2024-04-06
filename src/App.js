import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Welcome from './components/Welcome';
import Service from './components/Service';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import News from './components/News';

function App() {
  return (
   <>
   <Navbar/>
   <Slider/>
   <Welcome/>
   <Service/>
   <Stats/>
   <Testimonials/>
   <Clients/>
   <News/>
   </>
  );
}

export default App;
