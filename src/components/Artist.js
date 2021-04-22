import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
Artist.propTypes = {
  artist: PropTypes.object,
  index: PropTypes.number,
};
Artist.defaultProps = {
  artist: null,
  index: null,
};

function Artist(props) {
  const { artist, index } = props;
  // console.log(index);
  // console.log(artist);
  return (
    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      <div className="thumbnail">
        <img
          src={
            artist.images.length > 0
              ? artist.images[1].url
              : "https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/039_girl_avatar_profile_woman_headband-512.png"
          }
          alt={artist.name}
        />
        <div className="caption">
          <h3>
            <Link to={`/artist/${artist.id}`}>{artist.name}</Link>
          </h3>
          <p>
            {artist.genres.length > 0 ? (
              artist.genres.map((item, index) => {
                return (
                  <span
                    key={index}
                    className="label label-warning"
                    style={{ marginRight: 5 }}
                  >
                    {item}
                  </span>
                );
              })
            ) : (
              <span className="label label-warning" style={{ marginRight: 5 }}>
                Chưa xác định
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Artist;
