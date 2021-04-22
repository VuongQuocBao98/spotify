import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Albbum from "../components/Albbum";
import artist from "../api/Spoitfy";

ArtistPage.propTypes = {};

function ArtistPage(props) {
  const { match } = props;
  const id = match.params.id;

  const [artistInfo, setArtistInfo] = useState(Object);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    let query = id;
    artist.queryArtistInfo(query).then((res) => {
      setArtistInfo(res);
    });
  }, [id]);

  useEffect(() => {
    let query = id;
    artist.queryAlbums(query).then((res) => {
      setAlbums(res.items);
    });
  }, [id]);
  // console.log(artistInfo);

  return (
    <div className="panel panel-info">
      <div className="panel-heading">
        <h3 className="panel-title">{artistInfo.name}</h3>
      </div>
      <div className="panel-body">
        <div className="panel-body">
          <div className="col-sm-4 col-md-4">
            <img
              src={
                artistInfo.images && artistInfo.images.length > 0
                  ? artistInfo.images[1].url
                  : "https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/039_girl_avatar_profile_woman_headband-512.png"
              }
              alt={artistInfo.name}
              className="img-rounded img-responsive"
            />
            <blockquote style={{ marginTop: 20 }}>
              <p>{artistInfo.name}</p>
            </blockquote>
            <p>
              <i className="glyphicon glyphicon-play-circle" />
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://open.spotify.com/artist/4mzMFxVZNS2uCVNdsVFoj5"
              >
                View Spotify
              </a>
              <br />
              <br />
              <i className="glyphicon glyphicon-play-circle" />
              Genres:
              {artistInfo.genres && artistInfo.genres.length > 0 ? (
                artistInfo.genres.map((item, index) => {
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
                <span
                  className="label label-warning"
                  style={{ marginRight: 5 }}
                >
                  UnKnow
                </span>
              )}
            </p>
          </div>
          <div className="col-sm-8 col-md-8">
            <div className="panel panel-danger">
              <div className="panel-heading">
                <h3 className="panel-title">List Albums</h3>
              </div>
              <div className="panel-body list-albums">
                {albums.length > 0 ? (
                  albums.map((item, index) => {
                    return <Albbum key={index} item={item} />;
                  })
                ) : (
                  <h1>Khong Co Album Nao</h1>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistPage;
