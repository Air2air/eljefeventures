import React, { useState } from "react";
import StudyDataService from "../api/StudyService";


const AddStudy = () => {
  const initialStudyState = {
    id: null,
    title: "",
    description: "",
    published: false
  };
  const [study, setStudy] = useState(initialStudyState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setStudy({ ...study, [name]: value });
  };

  const saveStudy = () => {
    var data = {
      title: study.title,
      description: study.description
    };

    StudyDataService.create(data)
      .then(response => {
        setStudy({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newStudy = () => {
    setStudy(initialStudyState);
    setSubmitted(false);
  };

  return (
    <>
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newStudy}>
            Add
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
              value={study.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={study.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <button onClick={saveStudy} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
    </>
  );
};

export default AddStudy;