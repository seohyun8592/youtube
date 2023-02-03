import React from 'react';
import { Outlet } from 'react-router-dom';
// import './App.css';
import HeaderSearch from './components/HeaderSearch';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { YoutubeApiProvider } from './context/YoutubeApiContext';

const queryClient = new QueryClient();

export default function App() {
  // const [list, setList] = useState();
  // const handleSearch = (text) => {
  //   setList(text);
  // };
  return (
    <div className="wrap">
      <HeaderSearch />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </div>
  );
}
