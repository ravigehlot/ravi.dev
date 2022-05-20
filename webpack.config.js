const parts = require('./webpack.parts');
const { merge } = require('webpack-merge');

// Final Merged Configurations
module.exports = merge([
    parts.settings(),
    parts.js(),
    parts.css(),
    parts.copy(),
    parts.clean(),
    parts.analyzer()
]);