import Home from "./component/Home";
import Navbar from "./component/Navbar";

const HomePage: React.FC = () => (
  <main className="min-h-screen bg-gray-50">
    <Navbar/>
    <Home />
    
  </main>
);

export default HomePage;
