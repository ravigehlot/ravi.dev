module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                // Turns off node_modules/ ?
                modules: false,
            },
        ],
    ],
};