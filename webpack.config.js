var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

const config = {
	context: path.join(__dirname, "src"),
	devtool: debug ? "inline-sourcemap" : null,
	entry: "./modules/client.js",
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0'],
					plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
				}
			},
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
	},
	output: {
		path: __dirname + "/src/public/",
		filename: "bundle.js"
	},
	plugins: [
		new UglifyJsPlugin({ mangle: false, sourcemap: false }),
        new ExtractTextPlugin({filename: 'styles.css'})
	],
	/*plugins: [
	 new UglifyJsPlugin({
	 sourceMap: true,
	 compress: {
	 warnings: true
	 }
	 }),
	 new webpack.LoaderOptionsPlugin({
	 minimize: true,
	 debug: false,
	 options: {
	 context: __dirname
	 }
	 }),
	 new webpack.BannerPlugin({
	 banner: 'Banner',
	 raw: true,
	 entryOnly: true
	 }),
	 new ExtractTextPlugin({
	 filename: "bundle.css",
	 disable: false,

	 allChunks: true
	 })
	 ],*/
};

if (process.env.NODE_ENV === 'production') {
	config.plugins.push(
		new webpack.optimize.UglifyJsPlugin()
	);
}

module.exports = config;