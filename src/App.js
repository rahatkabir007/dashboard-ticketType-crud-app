import MainRoutes from "./components/Routes/MainRoutes";
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useState } from "react";
import Loader from './components/Loader/Loader';


function App() {

  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 2000)
  // }, [loading])

  // if (loading) return <>
  //   <div className="flex justify-center items-center h-[100vh]">
  //     <Loader />
  //   </div>
  // </>;
  return (
    <>
      <Router>
        <MainRoutes />
      </Router>
    </>
  );
}

export default App;
