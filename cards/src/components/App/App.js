import * as React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import AppContext from '../hooks/appContext';
import CardEl from "../CardEl/CardEl";
import Modal from '../Modal/Modal';

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState('');

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
            //to decrease cards to 5, just alter the second param '6' to '5'. Or increase '6' param to add cards.
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
    <AppContext.Provider value={{ showModal, setShowModal, image, setImage }}>
      <div className="container">
        <div className="row">
          {loading && <div>Loading...</div>}
          {(!loading && !showModal) ? (
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
            })) : ( <Modal pic={image} />)}

        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
