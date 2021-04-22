import React from "react";
import PropTypes from "prop-types";

Track.propTypes = {
  item: PropTypes.object,
};

Track.defaultProps = {
  item: null,
};

function Track(props) {
  const { item } = props;

  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 track m-2">
      <h6>{item.name}</h6>
      <audio src={item.preview_url ? item.preview_url : "null"} controls>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default Track;
