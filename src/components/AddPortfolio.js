import React, { useState } from "react";
import PortfolioDataService from "../api/apiService";


const AddPortfolio = () => {
  const initialPortfolioState = {
    id: null,
    title: "",
    symbol: "",
    shares: null,
    published: false
  };
  const [portfolio, setPortfolio] = useState(initialPortfolioState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setPortfolio({ ...portfolio, [name]: value });
  };


  const savePortfolio = () => {
    var data = {
      title: portfolio.title,
      symbol: portfolio.symbol,
      shares: portfolio.shares
    };

    PortfolioDataService.create(data)
      .then(response => {
        setPortfolio({
          id: response.data.id,
          title: response.data.title,
          symbol: response.data.symbol,
          shares: response.data.shares,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newPortfolio = () => {
    setPortfolio(initialPortfolioState);
    setSubmitted(false);
  };

  return (
    <>
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newPortfolio}>
            Add Another
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={portfolio.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="symbol">Symbol</label>
            <input
              type="text"
              className="form-control"
              id="symbol"
              required
              value={portfolio.symbol}
              onChange={handleInputChange}
              name="symbol"
            />
          </div>

          <div className="form-group">
            <label htmlFor="shares"># Shares</label>
            <input
              type="text"
              className="form-control"
              id="shares"
              required
              value={portfolio.shares}
              onChange={handleInputChange}
              name="shares"
            />
          </div>

          <button onClick={savePortfolio} className="btn btn-success">
            Submit Portfolio
          </button>
        </div>
      )}
    </div>
    </>
  );
};

export default AddPortfolio;