import React, { useEffect } from "react";
import { getWebcams, getCategoryWebcams } from "../actions";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";
import WebcamCategories from "./WebcamCategories";

const WebcamsList = props => {
  const category = props.match.params.category;
  const dispatch = useDispatch();
  useEffect(() => {
    if (category) {
      dispatch(getCategoryWebcams(category));
    } else {
      dispatch(getWebcams());
    }
  }, [category, dispatch]);
  const renderList = () => {
    return props.webcams
      .filter(
        webcam =>
          !category || (category && _.mapKeys(webcam.category, "id")[category])
      )
      .map(webcam => {
        return (
          <div className="webcam column eight wide" key={webcam.id}>
            <Link to={`/webcam/${webcam.id}`}>
              <img
                className="ui medium rounded image"
                src={webcam.image.current.preview}
                alt={webcam.title}
              />
              <h4>{webcam.title}</h4>
            </Link>
          </div>
        );
      });
  };
  return (
    <React.Fragment>
      <h1>Webcams all around Ukraine</h1>
      <div className="ui grid">
        <div className="ten wide column">
          <div className="ui grid">{renderList()}</div>
        </div>
        <div className="six wide column">
          <WebcamCategories />
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return { webcams: Object.values(state.webcams) };
};

export default connect(
  mapStateToProps,
  {}
)(WebcamsList);
