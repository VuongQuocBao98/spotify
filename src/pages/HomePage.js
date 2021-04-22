import React from "react";
import PropTypes from "prop-types";
import FormSearch from "../components/FormSearch";
import ArtistList from "../components/ArtistList";

HomePage.propTypes = {};

function HomePage(props) {
  return (
    <div className="row">
      <div className="panel panel-info">
        <FormSearch />
        <ArtistList />
      </div>
    </div>
  );
}

export default HomePage;
