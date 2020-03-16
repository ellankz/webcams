import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getWebcam } from "../actions";
import WebcamCategories from "./WebcamCategories";

const WebcamSingle = props => {
  const dispatch = useDispatch();
  const webcamId = props.match.params.id;
  useEffect(() => {
    dispatch(getWebcam(webcamId));
  }, [dispatch, webcamId]);

  if (!props.webcam) {
    return <div>Loading...</div>;
  } else {
    const playerUrl = props.webcam.player.live.available
      ? props.webcam.player.live.embed
      : props.webcam.player.day.embed;

    return (
      <React.Fragment>
        <h1>{props.webcam.title}</h1>
        <div className="ui grid">
          <div className="ten wide column">
            <iframe
              src={playerUrl}
              title={props.webcam.title}
              width="700"
              height="450"
              align="left"
              allowFullScreen
            >
              Sorry, your browser doesn't support embedded videos.
            </iframe>
          </div>
          <div className="six wide column">
            <WebcamCategories />
          </div>
        </div>
      </React.Fragment>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return { webcam: state.webcams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  {}
)(WebcamSingle);
