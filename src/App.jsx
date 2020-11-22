import { useEffect, useState } from "react";
import "./App.css";
import { fetchData } from "./CovidComponents/API";
import Cards from "./CovidComponents/Cards";

function App() {
  const [apiData, setApiData] = useState();

  useEffect(() => {
    const APIData = async () => {
      setApiData(await fetchData());
    };
    APIData();
  }, []);

  // console.log(apiData);

  return (
    <div>
      <h1>Hello WOlrd</h1>
      <Cards data={apiData} />
    </div>
  );
}

export default App;
