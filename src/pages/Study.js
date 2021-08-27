import React, { useState, useEffect } from "react";
import Header from "./../components/Header";
import { Container } from "react-bootstrap";
import StudyDataService from "../api/StudyService";

const Study = props => {
  const initialStudyState = {
    id: null,
    title: "",
    description: "",
    published: false
  };
  const [currentStudy, setCurrentStudy] = useState(initialStudyState);
  const [message, setMessage] = useState("");

  const getStudy = id => {
    StudyDataService.get(id)
      .then(response => {
        setCurrentStudy(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getStudy(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentStudy({ ...currentStudy, [name]: value });
  };

  const updatePublished = status => {
    var data = {
      id: currentStudy.id,
      title: currentStudy.title,
      description: currentStudy.description,
      published: status
    };

    StudyDataService.update(currentStudy.id, data)
      .then(response => {
        setCurrentStudy({ ...currentStudy, published: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateStudy = () => {
    StudyDataService.update(currentStudy.id, currentStudy)
      .then(response => {
        console.log(response.data);
        setMessage("The study was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteStudy = () => {
    StudyDataService.remove(currentStudy.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/studies");
      })
      .catch(e => {
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
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentStudy.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentStudy.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentStudy.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}

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