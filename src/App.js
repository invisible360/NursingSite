import { RouterProvider } from 'react-router-dom';
import './App.css';
import HistoryCarrierContext from './context/HisotryCarrier';
import { router } from './routes/Routes';

function App() {
  return (
    <div className="font-link">
      <HistoryCarrierContext>
        <RouterProvider router={router} />
      </HistoryCarrierContext>
    </div>
  );
}

export default App;
