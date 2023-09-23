// import React from "react";

import PropTypes from "prop-types";
import Special from "./Special";

const Cousin = ({ name, asset }) => {
  return (
    <div>
      <h2>Cousin</h2>
      <p>{name}</p>
      {asset && <Special asset={asset}></Special>}
    </div>
  );
};

Cousin.propTypes = {
  name: PropTypes.string,
  asset: PropTypes.string,
};

export default Cousin;
