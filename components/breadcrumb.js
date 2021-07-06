import React from "react";
import { Row, Col } from "react-bootstrap";
import { AiFillCaretRight } from "react-icons/ai";

const Breadcrumb = (props) => {
  return (
    <Row className="breadcrumb p-0 mb-5">

      <Col className="d-flex align-items-center justify-content-left">
        <span>{props.section} </span>
        <AiFillCaretRight size=".7em" className="icon mx-2" />
        <span>{props.title} </span>
        <div className="count total d-flex align-items-center justify-content-center mx-2">
        <span>{props.countTotal}</span>
        </div>
      </Col>

      <Col className="d-flex align-items-center justify-content-end">
        <div className="count completed d-flex align-items-center justify-content-center mx-2">
          <span>{props.countCompleted}</span>
        </div>
        <div className="count success d-flex align-items-center justify-content-center mx-2">
        <span>{props.countSuccess}</span>
        </div>
        <div className="count warning d-flex align-items-center justify-content-center mx-2">
        <span>{props.countWarning}</span>
        </div>
        <div className="count danger d-flex align-items-center justify-content-center mx-2">
        <span>{props.countDanger}</span>
        </div>
      </Col>
    </Row>
  );
};

export default Breadcrumb;
