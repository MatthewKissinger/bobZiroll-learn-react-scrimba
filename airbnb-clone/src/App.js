import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data"

function App() {
  const cardComponents = data.map(item => {
    return (
      <Card 
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="app--container">
      <Navbar />
      <Hero />
      <div className="cards-list">
        {cardComponents}
      </div>
      
    </div>
  );
}

export default App;
