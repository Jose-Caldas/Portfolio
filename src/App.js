import About from "./components/About";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import Hello from "./components/Hello";
import Portfolio from "./components/Portfolio";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <SideBar />
      <div className="App">
        <Header />
        <Hello />
        <About />
        <Portfolio />
        <GlobalStyle />
      </div>
    </>
  );
}

export default App;
