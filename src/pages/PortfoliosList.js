import React, { useState, useEffect } from "react";
import PortfolioDataService from "../api/apiService";
import { Container, SimpleGrid, Heading, Box } from "@chakra-ui/react";

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
      <Container>
        <Heading>Portfolios List</Heading>
        <SimpleGrid columns={2} spacing={10}>
          {portfolios &&
            portfolios.map((portfolio, index) => (
              <Box
                bg="tomato"
                height="80px"
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActivePortfolio(portfolio, index)}
                key={index}
              >
                {portfolio.title} - {portfolio.symbol} - {portfolio.shares}
              </Box>
            ))}
        </SimpleGrid>

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

            <div>
              <label>
                <strong>Start Date: </strong>
              </label>
              {currentPortfolio.dateStart}
            </div>

            <div>
              <label>
                <strong>End Date: </strong>
              </label>
              {currentPortfolio.dateEnd}
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

        <AddPortfolio />
      </Container>
    </>
  );
};

export default PortfoliosList;
