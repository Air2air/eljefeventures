import React, { useState, useEffect } from "react";
import StudyDataService from "../api/StudyService";
import { Container } from "react-bootstrap";
import Header from "./../components/Header";
import AddStudy from "./../components/AddStudy";
import { Link } from "react-router-dom";

const StudiesList = () => {
  const [studies, setStudies] = useState([]);
  const [currentStudy, setCurrentStudy] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    retrieveStudies();
  }, []);

  const retrieveStudies = () => {
    StudyDataService.getAll()
      .then((response) => {
        setStudies(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveStudies();
    setCurrentStudy(null);
    setCurrentIndex(-1);
  };

  const setActiveStudy = (study, index) => {
    setCurrentStudy(study);
    setCurrentIndex(index);
  };

  const deleteStudy = () => {
    StudyDataService.remove(currentStudy.id)
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
            <h4>Studies List</h4>

            <ul className="list-group">
              {studies &&
                studies.map((study, index) => (
                  <li
                    className={
                      "list-group-item " +
                      (index === currentIndex ? "active" : "")
                    }
                    onClick={() => setActiveStudy(study, index)}
                    key={index}
                  >
                    {study.title} {study.symbol} {study.shares}
                  </li>
                ))}
            </ul>
          </div>
          <div className="col-md-6">
            {currentStudy ? (
              <div>
                <h4>Study</h4>
                <div>
                  <label>
                    <strong>Title: </strong>
                  </label>
                  {currentStudy.title}
                </div>

                <div>
                  <label>
                    <strong>Symbol:</strong>
                  </label>
                  {currentStudy.symbol}
                </div>
                <div>
                  <label>
                    <strong># Shares:</strong>
                  </label>
                  {currentStudy.shares}
                </div>

                <button
                  className="badge badge-danger mr-2"
                  onClick={deleteStudy}
                >
                  Delete
                </button>
              </div>
            ) : (
              <div>
                <br />
                <p>Please click on a Study...</p>
              </div>
            )}
          </div>
        </div>

        <AddStudy />
      </Container>
    </>
  );
};

export default StudiesList;
