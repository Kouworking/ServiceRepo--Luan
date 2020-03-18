const path = require('path');
module.exports = {
  mode: 'development',
  entry: {
    main: path.join(__dirname, 'client/src/index.js'),
    style: path.join(__dirname, 'client/src/styles.css')
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/dist')
  },
  module: {
    rules: [
      {
        test: /.js$|.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        },
      }, {
        test: /\.css$/i,
        loader: 'style-loader'
      }, {
        test: /\.css$/i,
        loader: 'css-loader',
        query: {
          modules: true
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css']
  }
}