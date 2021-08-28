import React, { useState } from "react";
import StudyDataService from "../api/StudyService";


const AddStudy = () => {
  const initialStudyState = {
    id: null,
    title: "",
    symbol: "",
    shares: null,
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
      symbol: study.symbol,
      shares: study.shares
    };

    StudyDataService.create(data)
      .then(response => {
        setStudy({
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
              value={study.title}
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
              value={study.symbol}
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
              value={study.shares}
              onChange={handleInputChange}
              name="shares"
            />
          </div>

          <button onClick={saveStudy} className="btn btn-success">
            Submit Study
          </button>
        </div>
      )}
    </div>
    </>
  );
};

export default AddStudy;