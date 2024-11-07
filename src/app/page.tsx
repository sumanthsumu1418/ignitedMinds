import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const HomePage: React.FC = () => (
  <main className="min-h-screen bg-gray-50">
    <Navbar/>
    <Home />
    <Footer/>
  </main>
);

export default HomePage;
