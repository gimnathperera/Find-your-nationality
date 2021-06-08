const axios = require('axios');
require('dotenv').config();

const response = require('../configurations/response');
const { ENDPOINTS } = require('../configurations/constant');

const NationalityRoutes = {
  //@route GET /nationality/:name
  //@desc  get nationality by name
  //@access Private
  getNationality: async (req, res) => {
    try {
      const { name } = req.params;
      //get nationality prediction by provided name
      const nationalityResponse = await axios.get(process.env.NATIONALITY_WEB_URL, {
        params: { name }
      });

      if (nationalityResponse.data) {
        let countryList = [];
        const promises = nationalityResponse.data.country.map(async (country) => {
          //get required country data providing country shortCode
          const countryData = await axios.get(
            `${process.env.REST_COUNTRIES_WEB_URL}/${ENDPOINTS.GET_COUNTRY_DATA}/${country.country_id}`
          );

          let _data = {
            code: country.country_id,
            probability: country.probability,
            name: countryData.data.name,
            flag: countryData.data.flag
          };

          countryList.push(_data);
        });

        await Promise.all(promises);

        return response.success(req, res, countryList, 'Data received successfully');
      } else {
        return response.fail(
          req,
          res,
          response.message.server_error,
          null,
          'Internal server error'
        );
      }
    } catch (err) {
      return response.fail(req, res, response.message.server_error, null, err);
    }
  }
};
module.exports = NationalityRoutes;
