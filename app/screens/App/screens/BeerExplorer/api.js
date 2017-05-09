import axios from "axios";

import { breweryDBApiKey } from "../../../../secrets";

module.exports = {
  searchBeers: () => {
    return axios
      .get("http://api.brewerydb.com/v2/search", { params: {
        key: breweryDBApiKey,
        type: "beer",
        q: "heineken"
      }})
      .then(res => {
        return res.data;
      })
      .catch(res => {
        return "Error getting beers";
      });
  }
};
