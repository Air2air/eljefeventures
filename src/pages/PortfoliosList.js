import React, { useState, useEffect } from "react";
import PortfolioDataService from "../api/apiService";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import AddPortfolio from "../components/AddPortfolio";

const PortfoliosList = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [currentPortfolio, setCurrentPortfolio] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    retrievePortfolios();
  }, []);

  const retrievePortfolios = () => {
    PortfolioDataService.getAll()
      .then((response) => {
        setPortfolios(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrievePortfolios();
    setCurrentPortfolio(null);
    setCurrentIndex(-1);
  };

  const setActivePortfolio = (portfolio, index) => {
    setCurrentPortfolio(portfolio);
    setCurrentIndex(index);
  };

  const deletePortfolio = () => {
    PortfolioDataService.remove(currentPortfolio.id)
      .then((response) => {
        console.log(response.data);
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <Header authState="LoggedIn" />
      <Container>
        <div className="list row">
          <div className="col-md-6">
            <h4>Portfolios List</h4>

            <ul className="list-group">
              {portfolios &&
                portfolios.map((portfolio, index) => (
                  <li
                    className={
                      "list-group-item " +
                      (index === currentIndex ? "active" : "")
                    }
                    onClick={() => setActivePortfolio(portfolio, index)}
                    key={index}
                  >
                    {portfolio.title} - {portfolio.symbol} - {portfolio.shares}
                  </li>
                ))}
            </ul>
          </div>
          <div className="col-md-6">
            {currentPortfolio ? (
              <div>
                <h4>{currentPortfolio.title}</h4>

                <div>
                  <label>
                    <strong>Symbol:</strong>
                  </label>
                  {currentPortfolio.symbol}
                </div>
                <div>
                  <label>
                    <strong># Shares:</strong>
                  </label>
                  {currentPortfolio.shares}
                </div>

                <button
                  className="badge badge-danger mr-2"
                  onClick={deletePortfolio}
                >
                  Delete
                </button>
              </div>
            ) : (
              <div>
                <br />
                <p>Please click on a Portfolio...</p>
              </div>
            )}
          </div>
        </div>

        <AddPortfolio />
      </Container>
    </>
  );
};

export default PortfoliosList;
