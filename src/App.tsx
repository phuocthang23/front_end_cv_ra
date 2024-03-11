import 'bootstrap/dist/css/bootstrap.min.css';
import router from './routes';
import './App.css';
import { RouterProvider } from 'react-router-dom';

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;
