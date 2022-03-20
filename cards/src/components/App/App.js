import * as React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CardEl from "../CardEl/CardEl";


function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          "https://picsum.photos/v2/list/"
        );
        setData(
          response
            .map((x) => ({ x, r: Math.random() }))
            .sort((a, b) => a.r - b.r)
            .map((a) => a.x)
            .slice(0, 6)
        );
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
      <div className="container">
        <div className="row">
          {loading && <div>Loading...</div>}
          {(!loading && (
            data.map((el) => {
              return (
                <div className="column">
                  <CardEl
                    key={el.id}
                    pic={`${el.download_url}.webp`}
                    author={el.author}
                    url={el.url}
                    id={el.id}
                  />
                </div>
              )
            })))}
        </div>
      </div>
  );
}

export default App;
