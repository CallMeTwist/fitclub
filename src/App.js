import './App.css';
import Reason from './component/Reasons/Reason';
import Footer from './component/footer/Footer';
import Hero from './component/hero/Hero';
import Join from './component/join/Join';
import Plans from './component/plans/Plans';
import Programs from './component/programs/Programs';
import Testimonial from './component/testimonial/Testimonial';

function App() {
  return (
    <div className="App">
          <Hero />
          <Programs />
          <Reason />
          <Plans />
          <Testimonial />
          <Join />
          <Footer />
    </div>
  );
}

export default App;
