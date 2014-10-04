# One Nexus Documentation

For a more complete experience, visit the official [One Nexus documentaion](http://www.onenexusproject.com/documentation/) page.

## Getting Started

If you really don't want to use a CSS pre-processor you can still work directly on the regular, compiled CSS.

One Nexus is built in [SASS](http://sass-lang.com/) (Syntactically Awesome Style Sheets), so to truly make the most from it you will need a way of pre-processing your CSS. Most front end developers are now familiar with pre-processing, so if you are, great! If you're not, check out these resources to learn how to get set up using a pre-processor.

 * [What is pre-processing, and why should I use it?](http://www.onenexusproject.com/tutorials/what-is-pre-processing-and-why-should-i-use-it/)
 * [How do I set up One Nexus with a pre-procesor?](http://www.onenexusproject.com/tutorials/how-do-i-set-up-one-nexus-with-a-pre-processor/)


## Project Architecture

Once you have your copy of One Nexus set up for your new project, open the entire directory with your favourite text editor (we use [Sublime Text](http://www.sublimetext.com/)), and let's take a look at the structure of our files (don't worry if your copy looks slightly different).


```css
/******************************************************************

Site Name: Website name here
Author: Your name/company here

******************************************************************/

/******************************************************************
Skeleton
******************************************************************/

@import "skeleton/normalize";
@import "skeleton/variables";
@import "skeleton/base";
@import "skeleton/grid";
@import "skeleton/helpers";
@import "skeleton/print";

/******************************************************************
Elements
******************************************************************/

@import "elements/2x";
@import "elements/accordions";
@import "elements/alert-boxes";
@import "elements/buttons";
@import "elements/blockquotes";
@import "elements/carousels";
@import "elements/fonts";
@import "elements/forms";
@import "elements/headings";
@import "elements/icons";
@import "elements/images";
@import "elements/links";
@import "elements/lists";
@import "elements/modals";
@import "elements/progress-bars";
@import "elements/tabs";
@import "elements/tables";
@import "elements/tooltips";

/******************************************************************
Modules
******************************************************************/

@import "modules/breadcrumb";
@import "modules/footer";
@import "modules/header";
@import "modules/logo";
@import "modules/main-nav";
@import "modules/off-canvas-nav";
@import "modules/scroll-top";
```

We like to think of websites as being made up of **pages**, which are made up of **modules**, which are made up of **elements**. Each [element](http://www.onenexusproject.com/documentation/elements/) and [module](http://www.onenexusproject.com/documentation/modules/) has its own SASS partial, with the option to easily create a partial for individual pages as well. Click the links below to read more about what they are and how to use them.

## Building Your Website

### Basic HTML Structure

One Nexus comes with a sample **index.html** file which contains a basic example page with a structure similar to the following:


```html
<!doctype html>
<html lang="en" class="no-js">

	<head>
	    <meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	    <title>One Nexus</title>
	    <meta name="description" content="A mobile-first front end solution built in SASS.">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	    <meta name="HandheldFriendly" content="True">
	    <meta name="MobileOptimized" content="320">

	    <!-- Icons & fFvicons -->
	    <link rel="apple-touch-icon" href="assets/images/apple-icon-touch.png">
	    <link rel="icon" href="assets/images/favicon.png">
	    <!--[if IE]>
	        <link rel="shortcut icon" href="assets/images/favicon.ico">
	    <![endif]-->

	    <!-- Stylesheet -->
	    <link rel="stylesheet" href="assets/styles/css/app.css">
	    <!-- Modernizr -->
	    <script src="assets/js/modernizr.min.js"></script>
	</head>

	<body>

    	<div id="site-content"><!-- For Mobile Menu -->

			<!-- Website Header -->
			...

			<!-- Main Content -->
			<div class="container" id="main">
				<div class="row">
					<div class="span-8">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
					</div>
					<div class="span-4">
						<p>Sed sit amet lorem eu nunc semper hendrerit.</p>
					</div>
				</div>
			</div>

			<!-- Website Footer -->
			...

		</div><!-- End #site-content -->

	    <!-- Scroll to top icon-->
	    <a class="fa fa-angle-up scroll-top" href="#site-content"></a> 

	    <!-- Off Canvas Menu -->
	    <nav class="off-canvas-nav">
	        <div id="off-canvas-nav"></div>
	    </nav>

	    <!-- Site Overlay -->
	    <div class="site-overlay"></div>

		<!-- Scripts -->

		<!-- jQuery -->
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.0/jquery.min.js"></script>
		<!--<script src="assets/scripts/jquery.1.10.0.min.js"></script>-->

	    <!-- Interactive elements/Modules -->
	    <script src="assets/js/accordion.js"></script>
	    <script src="assets/js/carousel.js"></script>
	    <script src="assets/js/modal.js"></script>
	    <script src="assets/js/off-canvas-nav.js"></script>
	    <script src="assets/js/tabs.js"></script>
	    <script src="assets/js/tooltip.js"></script>

		<!-- General -->
		<script src="assets/scripts/global.js"></script>

	</body>

</html>
```

## Features

### Responsive Grid system
