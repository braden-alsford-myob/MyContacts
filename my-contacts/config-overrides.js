const TreatPlugin = require("treat/webpack-plugin");


module.exports = function (config, env) {
    config.plugins = [
        new TreatPlugin({
            localIdentName:'_[name]-[local]_[hash:base64:5]',
            themeIdentName:'__[name]-[local]_[hash:base64:4]'
        }),
    ].concat(config.plugins);
    console.log(config.plugins);
    return config;
};