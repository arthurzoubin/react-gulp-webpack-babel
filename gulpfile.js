var gulp = require("gulp");
var webpack = require("webpack");
var webpackDevConfig = require("./webpack.config.js");
var webpackProdConfig = require("./webpack.production.config.js");
var WebpackDevServer = require("webpack-dev-server");

gulp.task("default", ["webpack-dev-server"]);

gulp.task("webpack-dev-server", function(callback) {
	// modify some webpack config options
	var devConfig = Object.create(webpackDevConfig);
	devConfig.devtool = "eval";
	devConfig.debug = true;
	devConfig.progress = true;
	devConfig.colors = true;
	devConfig.contentBase = "build";

	// Start a webpack-dev-server
	new WebpackDevServer(webpack(devConfig), {

	}).listen(8888, "localhost", function(err) {
		if(err)
      console.log(err);
	});
});


gulp.task("webpack:build", function(callback) {

  // modify some webpack config options
  var myDevConfig = Object.create(webpackProdConfig);
	myDevConfig.contentBase = "build";

  // create a single instance of the compiler to allow caching
  var devCompiler = webpack(myDevConfig);

	// run webpack
	devCompiler.run(function(err, stats) {
		if(err)
      console.log(err);
		callback();
	});
});
