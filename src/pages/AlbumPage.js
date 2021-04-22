import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Track from "../components/Track";
import artist from "../api/Spoitfy";

AlbumPage.propTypes = {};

function AlbumPage(props) {
  const { match } = props;

  const [albumInfo, setAlbumInfo] = useState(Object);
  const [track, setTrack] = useState(null);

  useEffect(() => {
    let query = match.params.id;
    artist.queryAlbumInfo(query).then((res) => {
      setAlbumInfo(res);
    });
  }, [match.params.id]);

  useEffect(() => {
    let query = match.params.id;
    artist.queryAlbumTrack(query).then((res) => {
      setTrack(res.items);
    });
  }, [match.params.id]);
  console.log(track);
  return (
    <div className="panel panel-danger">
      <div className="panel-heading">
        <h3 className="panel-title">{albumInfo.name}</h3>
      </div>
      <div className="panel-body">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img
              className="media-object img-thumbnail"
              src={
                albumInfo.images && albumInfo.images.length > 0
                  ? albumInfo.images[1].url
                  : "https://i.scdn.co/image/757378d73eedc6a53cff69b49eca173fccc9ad02"
              }
              alt={albumInfo.artists ? albumInfo.artists[0] : "unknow"}
            />
          </div>
          <div className="col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-warning">
              <div className="panel-heading">
                <h3 className="panel-title">List Tracks</h3>
              </div>
              <div className="panel-body">
                {track && track.length > 0 ? (
                  track.map((item, index) => {
                    return <Track key={index} item={item} />;
                  })
                ) : (
                  <h1>Khong co Track Nao</h1>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumPage;
