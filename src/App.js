import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {HomePage, Error} from "./pages"
import {Header} from './components';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (

    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Header />
      <Routes>
          <Route path="/" element = {<HomePage />}></Route>
          <Route path="*" element = {<Error />}></Route>
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
