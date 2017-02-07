module.exports = {
    build: {
        loaders: [
            {
                test: /\.md$/,
                loaders: ['raw-loader', 'markdown-loader']
            },
        ]
    }
}