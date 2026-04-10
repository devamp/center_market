import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CardCarousel from './components/CardCarousel';
import Location from './components/Location';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="grow">
        <Hero />
        <div className="card-container bg-primary">
          <CardCarousel />
        </div>
        <Location />
      </main>
    </div>
  );
}
