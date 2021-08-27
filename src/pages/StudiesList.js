import React, { useState, useEffect } from "react";
import StudyDataService from "../api/StudyService";
import { Container } from "react-bootstrap";
import Header from "./../components/Header";
import AddStudy from "./../components/AddStudy"
import { Link } from "react-router-dom";

const StudiesList = () => {
  const [studies, setStudies] = useState([]);
  const [currentStudy, setCurrentStudy] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveStudies();
  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveStudies = () => {
    StudyDataService.getAll()
      .then(response => {
        setStudies(response.data);
        console.log(response.data);
      })
      .catch(e => {
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

  const findByTitle = () => {
    StudyDataService.findByTitle(searchTitle)
      .then(response => {
        setStudies(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <>
    <Header authState="LoggedIn" />
    <Container>
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByTitle}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Studies List</h4>

        <ul className="list-group">
          {studies &&
            studies.map((study, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveStudy(study, index)}
                key={index}
              >
                {study.title}
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
                <strong>Title:</strong>
              </label>{" "}
              {currentStudy.title}
            </div>
            <div>
              <label>
                <strong>Description:</strong>
              </label>{" "}
              {currentStudy.description}
            </div>
            <div>
              <label>
                <strong>Status:</strong>
              </label>{" "}
              {currentStudy.published ? "Published" : "Pending"}
            </div>

            <Link
              to={"/studies/" + currentStudy.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
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