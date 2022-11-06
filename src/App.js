import './App.css';

function App() {
  return (
    <div className="bg-black h-screen w-full gap-4 p-4 grid grid-cols-2 grid-rows-4">
      <div className="col-span-1 row-span-2">
        <img src={ require('./images/01.jpg') } className="w-full h-full object-cover" alt="Pessoas na praia"  />
      </div>
      <div className="col-span-1 row-span-1">
        <img src={ require('./images/02.jpg') } className="w-full h-full object-cover" alt="Pessoa de braços abertos no topo do monte" />
      </div>
      <div className="col-span-1 row-span-1">
        <img src={ require('./images/03.jpg') } className="w-full h-full object-cover" alt="Pessoa de braços abertos na mata" />
      </div>
      <div className="col-span-1 row-span-1">
        <img src={ require('./images/04.jpg') } className="w-full h-full object-cover" alt="Pessoa de braços abertos no pôr do sol" />
      </div>
      <div className="col-span-1 row-span-2">
        <img src={ require('./images/05.jpg') } className="w-full h-full object-cover" alt="Pessoa saltando" />
      </div>
      <div className="col-span-1 row-span-1">
        <img src={ require('./images/06.jpg') } className="w-full h-full object-cover" alt="Pessoa de braços abertos no amanhecer" />
      </div>
    </div>
  );
}

export default App;
