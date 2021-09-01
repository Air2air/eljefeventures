import React, { useState, useEffect } from "react";
import ElJefeAPI from "../../api/elJefeApi";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

const EditFund = (props) => {
  const initialPortfolioEdit = {
    id: props.id,
    fundName: props.fundName,
    fundValue: props.fundValue,
    fundBasis: props.fundBasis,
    fundStart: props.fundStart,
    fundEnd: props.fundEnd,
  };
  const [currentPortfolio, setCurrentPortfolio] =
    useState(initialPortfolioEdit);

  const [submitted, setSubmitted] = useState(false);

  const getPortfolio = (id) => {
    ElJefeAPI.get(id)
      .then((response) => {
        setCurrentPortfolio(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getPortfolio(props.id);
  }, [props.id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentPortfolio({ ...currentPortfolio, [name]: value });
  };

  const updatePortfolio = () => {
    ElJefeAPI.update(currentPortfolio.id, currentPortfolio)
      .then((response) => {
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
        </div>
      ) : (
        <form>
          <FormControl id="fundName">
            <FormLabel>Name</FormLabel>
            <Input
              w={200}
              type="text"
              className="form-control"
              id="fundName"
              required
              value={currentPortfolio.fundName}
              onChange={handleInputChange}
              name="fundName"
            />
          </FormControl>

          <FormControl id="fundValue">
            <FormLabel>$ Value</FormLabel>
            <Input
              type="text"
              className="form-control"
              id="fundValue"
              value={currentPortfolio.fundValue}
              onChange={handleInputChange}
              name="fundValue"
            />
          </FormControl>

          <FormControl id="fundBasis">
            <FormLabel>$ Basis</FormLabel>
            <Input
              type="text"
              className="form-control"
              id="fundBasis"
              required
              value={currentPortfolio.fundBasis}
              onChange={handleInputChange}
              name="fundBasis"
            />
          </FormControl>

          <FormControl id="fundStart">
            <FormLabel>Start Date: </FormLabel>
            <Input
              type="date"
              className="form-control"
              id="fundStart"
              value={currentPortfolio.fundStart}
              onChange={handleInputChange}
              name="fundStart"
            />
          </FormControl>

          <FormControl id="fundEnd">
            <FormLabel>End Date: </FormLabel>
            <Input
              type="date"
              className="form-control"
              id="fundEnd"
              value={currentPortfolio.fundEnd}
              onChange={handleInputChange}
              name="fundEnd"
            />
          </FormControl>
        </form>
      )}

      <Button colorScheme="green" onClick={updatePortfolio}>
        Submit Edits
      </Button>
    </>
  );
};

export default EditFund;

