import React, { useEffect, useState } from "react";

import Artist from "./Artist";
import { useSelector } from "react-redux";

import artist from "../api/Spoitfy";

function ArtistList() {
  const query = useSelector((state) => state.query);

  const [artists, setArtists] = useState([]);

  useEffect(() => {
    let newQuery = query;

    if (newQuery !== "") {
      artist.queryFetch(newQuery).then((res) => {
        if (res.artists) {
          let arts = res.artists.items;
          setArtists(arts);
        }
      });
    } else {
      setArtists([]);
    }
  }, [query]);

  var showSearch = <h3>Nhap Ten Ca Si Can Tim</h3>;
  var showArtist = "";
  if (artists.length > 0) {
    showArtist = artists.map((artist, index) => {
      return <Artist key={index} index={index} artist={artist} />;
    });
  } else if (query !== "") {
    showArtist = <h3>Khong tim thay ca si</h3>;
  }
  return (
    <div className="panel-body">
      {showArtist !== "" ? showArtist : showSearch}
    </div>
  );
}

export default ArtistList;
