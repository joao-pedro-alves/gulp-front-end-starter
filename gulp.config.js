module.exports = {
	// ==================================================
	//		CSS vendor
	// ==================================================
	cssVendorFiles: [
		'node_modules/bootstrap/dist/css/bootstrap.min.css',
		'node_modules/font-awesome/css/font-awesome.min.css',
		'node_modules/owl.carousel/dist/assets/owl.carousel.min.css',
		'node_modules/animate.css/animate.min.css',
	],
	cssVendorOutput: './public/assets/css/',
	cssVendorOutputFile: 'vendor.min.css',

	// ==================================================
	//		JS vendor
	// ==================================================
	jsVendorFiles: [
		'node_modules/angular/angular.min.js',
		'node_modules/jquery/dist/jquery.min.js',
		'node_modules/jquery-migrate/dist/jquery-migrate.min.js',
		'node_modules/waypoints/lib/jquery.waypoints.min.js',
		'node_modules/popper.js/dist/umd/popper.min.js',
		'node_modules/owl.carousel/dist/owl.carousel.min.js',
		'node_modules/bootstrap/dist/js/bootstrap.min.js',
		'node_modules/slideout/dist/slideout.min.js',
	],
	jsVendorOutput: 'public/assets/js/',
	jsVendorOutputFile: 'vendor.min.js',

	// ==================================================
	//		Fonts
	// ==================================================
	fonts: [
		'./node_modules/font-awesome/fonts/*'
	],
	fontsOutput: './public/assets/fonts/',

	// ==================================================
	//		App javascript
	// ==================================================
	jsFiles: [
		'resources/assets/js/*.js',
		'resources/assets/angular/app.js',
		'resources/assets/angular/services/*.js',
		'resources/assets/angular/directives/**/*.js'
	],
	jsOutput: 'public/assets/js/',
	jsOutputFile: 'app.min.js',

	// ==================================================
	//		App Sass
	// ==================================================
	sassStyle: [
		'resources/assets/sass/*.scss',
		'resources/assets/sass/**/*.scss',
		'resources/assets/sass/**/**/*.scss',
		'resources/assets/angular/directives/**/*.scss',
	],
	sassOutput: 'public/assets/css/',
	sassOutputFile: 'app.min.css',

	// ==================================================
	//		Angular directive templates
	// ==================================================
	angularTemplates: 'resources/assets/angular/directives/**/*.html',
}