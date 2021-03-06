const {compose} = require('react-app-rewired')

const rewireMobX = require('react-app-rewire-mobx');
const rewireStyledComponents = require('react-app-rewire-styled-components');

module.exports = function override(config, env) {
    const rewires = compose(
        rewireMobX,
        rewireStyledComponents
    )

    return rewires(config, env);
}
