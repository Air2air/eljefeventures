import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Container } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react"
import PortfolioDataService from "../api/apiService";

const Portfolio = (props) => {
  const initialPortfolioState = {
    id: null,
    title: "",
    symbol: "",
    shares: null,
    published: false,
  };
  const [currentPortfolio, setCurrentPortfolio] = useState(initialPortfolioState);
  const [message, setMessage] = useState("");

  const getPortfolio = (id) => {
    PortfolioDataService.get(id)
      .then((response) => {
        setCurrentPortfolio(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getPortfolio(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentPortfolio({ ...currentPortfolio, [name]: value });
  };

  const updatePortfolio = () => {
    PortfolioDataService.update(currentPortfolio.id, currentPortfolio)
      .then((response) => {
        console.log(response.data);
        setMessage("The portfolio was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deletePortfolio = () => {
    PortfolioDataService.remove(currentPortfolio.id)
      .then((response) => {
        console.log(response.data);
        props.history.push("/portfolios");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <Header authState="LoggedIn" />
      <Container>
        <div>
          {currentPortfolio ? (
            <div className="edit-form">
              <h4>Portfolio</h4>
              <form>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={currentPortfolio.title}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="symbol">Symbol</label>
                  <input
                    type="text"
                    className="form-control"
                    id="symbol"
                    name="symbol"
                    value={currentPortfolio.symbol}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="symbol"># Shares</label>
                  <input
                    type="text"
                    className="form-control"
                    id="shares"
                    name="shares"
                    value={currentPortfolio.shares}
                    onChange={handleInputChange}
                  />
                </div>
              </form>

              <button className="badge badge-danger mr-2" onClick={deletePortfolio}>
                Delete
              </button>

              <button
                type="submit"
                className="badge badge-success"
                onClick={updatePortfolio}
              >
                Update
              </button>
              <p>{message}</p>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Portfolio...</p>
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default Portfolio;
