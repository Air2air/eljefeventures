import React, { useState, useEffect } from "react";
import Header from "./../components/Header";
import { Container } from "react-bootstrap";
import StudyDataService from "../api/StudyService";

const Study = (props) => {
  const initialStudyState = {
    id: null,
    title: "",
    symbol: "",
    shares: null,
    published: false,
  };
  const [currentStudy, setCurrentStudy] = useState(initialStudyState);
  const [message, setMessage] = useState("");

  const getStudy = (id) => {
    StudyDataService.get(id)
      .then((response) => {
        setCurrentStudy(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getStudy(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentStudy({ ...currentStudy, [name]: value });
  };

  const updateStudy = () => {
    StudyDataService.update(currentStudy.id, currentStudy)
      .then((response) => {
        console.log(response.data);
        setMessage("The study was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteStudy = () => {
    StudyDataService.remove(currentStudy.id)
      .then((response) => {
        console.log(response.data);
        props.history.push("/studies");
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
          {currentStudy ? (
            <div className="edit-form">
              <h4>Study</h4>
              <form>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={currentStudy.title}
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
                    value={currentStudy.symbol}
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
                    value={currentStudy.shares}
                    onChange={handleInputChange}
                  />
                </div>
              </form>

              <button className="badge badge-danger mr-2" onClick={deleteStudy}>
                Delete
              </button>

              <button
                type="submit"
                className="badge badge-success"
                onClick={updateStudy}
              >
                Update
              </button>
              <p>{message}</p>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Study...</p>
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default Study;
