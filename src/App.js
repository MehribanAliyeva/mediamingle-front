import About from "./components/About";
import AllInOne from "./components/AllInOne";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
// import Search from "./components/Search";
import ForumList from "./components/ForumList";
import Support from "./components/Support";
function App() {
  return (
    <div className="App" >
       <Navbar />
       <Hero />
       <About />
       <Support />
       <AllInOne />
       {/* <Search /> */}
       <ForumList/>
       <Footer />
    </div>
  );
}

export default App;
