import React, { useState } from "react";
import SearchInput from "./../../components/SearchInput";

const params = {
  access_key: "2c2501f9fbffce9b23d6181557cea2dc",
};

// http://api.marketstack.com/v1/eod?access_key=2c2501f9fbffce9b23d6181557cea2dc&symbols=aapl

const symbol = "aapl";

const Symbols = () => {
  // axios
  //   .get(`https://api.marketstack.com/v1/tickers/${symbol}/eod`, { params })
  //   .then((response) => {
  //     const apiResponse = response.data;
  //     if (Array.isArray(apiResponse["data"])) {
  //       apiResponse["data"].forEach((stockData) => {
  //         console.log(
  //           `Ticker ${stockData["symbol"]} has a day high of ${stockData["high"]} on ${stockData["date"]}`
  //         );
  //       });
  //     }
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  const [results, setResults] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchResults = (evt) => {
    evt.preventDefault();

    const query = evt.target.query.value;
    setLoading(true);

    const fetchData = async () => {
      const queryResults = await fetch(
        `http://api.marketstack.com/v1/eod?access_key=${params}&symbols=${query}`
      ).then((res) => res.json());
      if (!queryResults.data.length) {
        setResults("No Results Found");
      } else {
        setResults(queryResults.data);
      }
      setLoading(false);
    };
    fetchData();
  };

  return (
    <>
      <SearchInput fetchQuery={fetchResults} />
      {isLoading ? (
        <div className="loading">Searching query...</div>
      ) : (
        <>
          {results.length
            ? results.map((result) => (
                <div className="result-item">
                  <div className="result-content">
                    <div className="result-title">{result.data.open}</div>
                    <div className="result-details">
                     {result.data.high}
                      <div className="result-author">
                        {result.data.volume}
                      </div>
                    </div>
                    {result.data.selftext}
                  </div>
                </div>
              ))
            : "No results found"}
        </>
      )}
    </>
  );
};

export default Symbols;
