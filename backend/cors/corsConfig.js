var corsOptions = {
    origin: [
        "http://localhost:5174",
        "http://localhost:5173",
        "https://shaswarakshageekssquad.netlify.app" // Added deployed frontend URL
    ]
};

module.exports = corsOptions;