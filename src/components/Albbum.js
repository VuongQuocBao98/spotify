import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

Albbum.propTypes = {
  item: PropTypes.object,
};

Albbum.defaultProps = {
  item: null,
};

function Albbum(props) {
  const { item } = props;
  // console.log(item.images[1]);
  return (
    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      <div className="thumbnail">
        <img
          src={
            item.images.length > 0
              ? item.images[1].url
              : "https://i.scdn.co/image/757378d73eedc6a53cff69b49eca173fccc9ad02"
          }
          alt="Giác Quan Thứ, Vol. 6"
          className="img-responsive"
        />
        <div className="caption">
          <h5>
            <Link to={`/album/${item.id}`}>{item.name}</Link>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Albbum;
