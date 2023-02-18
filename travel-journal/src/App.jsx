import './App.css'
import cardData from '../src/data'
import Header from './components/Header'
import Card from './components/Card'

function App() {
  const cards = cardData.map(item => {
    return (
      <div>
        <Card 
        key={item.id}
        {...item}
      />
      <hr className='card--line--break'></hr>
      </div>
      
    )
  });

  return (
    <div className="app-container">
      <Header />
      <div className='cards--list'>
        {cards}
      </div>
    </div>  
  )
}

export default App
