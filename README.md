# About One Nexus

One Nexus was created by [Edmund Reed](http://edmundreed.co.uk/), a UK based UX designer and front-end developer. It is a library of CSS/Sass and JavaScript/jQuery files, consisting of useful tools for building modern and responive websites such as:

* [Responsive Grid system](https://github.com/esr360/One-Nexus#responsive-grid-system)
* [Elements](https://github.com/esr360/One-Nexus#elements)
* [Modules](https://github.com/esr360/One-Nexus#modules)
* [jQuery & Plugins](https://github.com/esr360/One-Nexus#jquery--plugins)
* [Modernizr](https://github.com/esr360/One-Nexus#html5-boilerplate)
* ...and more

> Visit the [One Nexus homepage](http://www.onenexusproject.com/) for more help and information.


# One Nexus Documentation

For a more complete experience, visit the official [One Nexus documentaion](http://www.onenexusproject.com/documentation/) page.

## Table of Contents

* [Getting Started](https://github.com/esr360/One-Nexus#getting-started)
* [Project Architecture](https://github.com/esr360/One-Nexus#project-architecture)
* [Building Your Website](https://github.com/esr360/One-Nexus#building-your-website)
	* [Basic HTML Structure](https://github.com/esr360/One-Nexus#basic-html-structure)
* [Features](https://github.com/esr360/One-Nexus#features)
	* [Responsive Grid system](https://github.com/esr360/One-Nexus#responsive-grid-system)
    	* [Grid Structure](https://github.com/esr360/One-Nexus#grid-structure)
        * [Example](https://github.com/esr360/One-Nexus#example-using-default-values)
        * [Breakpoints](https://github.com/esr360/One-Nexus#breakpoints)
        * [Column Typese](https://github.com/esr360/One-Nexus#column-types)
        	* [Regular Columns](https://github.com/esr360/One-Nexus#regular-columns)
        	* [Flow Columns](https://github.com/esr360/One-Nexus#flow-columns)
        	* [Magic Columns](https://github.com/esr360/One-Nexus#magic-columns)
        	* [Adaptive Columns](https://github.com/esr360/One-Nexus#adaptive-columns)
            * [Block Columns](https://github.com/esr360/One-Nexus#block-columns)
        * [Custom Column Collapsing](https://github.com/esr360/One-Nexus#custom-column-collapsing)
    * [HTML5 Boilerplate](https://github.com/esr360/One-Nexus#html5-boilerplate)
    * [jQuery & Plugins](https://github.com/esr360/One-Nexus#jquery--plugins)
        * [Elements & Modules](https://github.com/esr360/One-Nexus#interactive-elements--modules)
        * [Global Scripts](https://github.com/esr360/One-Nexus#global-scripts)
        * [Minifying Scripts](https://github.com/esr360/One-Nexus#minifying-scripts)
    * [Google Fonts](https://github.com/esr360/One-Nexus#google-fonts)
* [Skeleton](https://github.com/esr360/One-Nexus#skeleton)
	* [Base](https://github.com/esr360/One-Nexus#base)
	* [Grid](https://github.com/esr360/One-Nexus#grid)
	* [Helpers](https://github.com/esr360/One-Nexus#helpers)
	* [Normalize](https://github.com/esr360/One-Nexus#normalize)
	* [Print Styles](https://github.com/esr360/One-Nexus#print-styles)
	* [Config](https://github.com/esr360/One-Nexus#config)
    	* [Skeleton](https://github.com/esr360/One-Nexus#skeleton-1)
    	* [Breakpoints](https://github.com/esr360/One-Nexus#breakpoints-1)
    	* [Typography](https://github.com/esr360/One-Nexus#typography)
    	* [Color Palette](https://github.com/esr360/One-Nexus#color-palette)
    	* [Theming](https://github.com/esr360/One-Nexus#theming)
* [Elements](https://github.com/esr360/One-Nexus#elements)
	* [General Elements](https://github.com/esr360/One-Nexus#general-elements)
		* [Alert Bars](https://github.com/esr360/One-Nexus#alert-bars)
		* [Buttons](https://github.com/esr360/One-Nexus#buttons)
		* [Forms](https://github.com/esr360/One-Nexus#forms)
		* [Icons](https://github.com/esr360/One-Nexus#icons)
		* [Images](https://github.com/esr360/One-Nexus#images)
		* [Tables](https://github.com/esr360/One-Nexus#tables)
	* [Interactive Elements](https://github.com/esr360/One-Nexus#interactive-elements-1)
		* [Accordions](https://github.com/esr360/One-Nexus#accordions)
		* [Carousels](https://github.com/esr360/One-Nexus#carousels)
		* [Modals](https://github.com/esr360/One-Nexus#modal-windows)
		* [Tabs](https://github.com/esr360/One-Nexus#tabs)
		* [Tooltips](https://github.com/esr360/One-Nexus#tooltips)
	* [Typographic Elements](https://github.com/esr360/One-Nexus#typographic-elements)
		* [Fonts](https://github.com/esr360/One-Nexus#fonts)
		* [Headings](https://github.com/esr360/One-Nexus#headings)
		* [Links](https://github.com/esr360/One-Nexus#links)
		* [Lists](https://github.com/esr360/One-Nexus#lists)
		* [Quotes](https://github.com/esr360/One-Nexus#quotes)
* [Modules](https://github.com/esr360/One-Nexus#modules)
	* [Breadcrumb](https://github.com/esr360/One-Nexus#breadcrumb)
	* [Header](https://github.com/esr360/One-Nexus#header)
	* [Footer](https://github.com/esr360/One-Nexus#footer)
	* [Logo](https://github.com/esr360/One-Nexus#logo)
	* [Main Navigation](https://github.com/esr360/One-Nexus#main-navigation)
	* [Off-Canvas Navigation](https://github.com/esr360/One-Nexus#off-canvas-navigation)
* [Credits](https://github.com/esr360/One-Nexus#credits)
* [Further Support](https://github.com/esr360/One-Nexus#further-support)

## Getting Started

##### Option 1 - Classic Download

Download the latest copy of One Nexus, extract the files to your desired location, and open the folder with your favourite text editor.

>[Download v2.0](https://github.com/esr360/One-Nexus/archive/master.zip)

##### Option 2 - Bower Installation

```html
bower install one-nexus
```

### Built in Sass!

One Nexus is built in [Sass](http://sass-lang.com/) (Syntactically Awesome Style Sheets), so to truly make the most from it you will need a way of pre-processing your CSS from **.scss** files.

### Project Architecture

One Nexus follows OOCSS principles, promoting a sensible CSS architecture out-the-box. All individual **scss** files are controlled by one main file; **app.scss**, which compiles into **app.css**.


```html
assets > styles > scss > app.scss
```


```css
/******************************************************************
Skeleton
******************************************************************/

@import "skeleton/normalize";
@import "skeleton/config";
@import "skeleton/base";
@import "skeleton/grid";
@import "skeleton/helpers";
@import "skeleton/utilities";
@import "skeleton/print";

/******************************************************************
Elements
******************************************************************/

@import "elements/accordions";
@import "elements/alert-bars";
@import "elements/buttons";
@import "elements/blockquotes";
@import "elements/carousels";
@import "elements/fonts";
@import "elements/forms";
@import "elements/headings";
@import "elements/icons";
@import "elements/images";
@import "elements/lists";
@import "elements/modals";
@import "elements/progress-bars";
@import "elements/tables";
@import "elements/tabs";
@import "elements/tooltips";
@import "elements/wells";

/******************************************************************
Modules
******************************************************************/

@import "modules/breadcrumb";
@import "modules/flyout-navigation";
@import "modules/footer";
@import "modules/header";
@import "modules/logo";
@import "modules/navigation";
@import "modules/scroll-top";
```

We like to think of websites as being made up of **pages**, which are made up of **modules**, which are made up of **elements**. Each [element](http://www.onenexusproject.com/documentation/elements/) and [module](http://www.onenexusproject.com/documentation/modules/) has its own SASS partial, with the option to easily create a partial for individual pages as well.

### Building Your Website

One Nexus comes with a sample **index.html** file which contains a basic example page using the One Nexus assets. Feel free to use this as your starting point, or go ahead and create your own page from scratch.

> The below code is just a sample, and not the complete content of the provided **index.html** file.

```html
<!doctype html>
<html lang="en" class="no-js">

	<head>
	    <meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	    <title>One Nexus - Cheatsheet</title>
	    <meta name="description" content="A mobile-first front end solution built in Sass.">
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

		<!-- SITE CONTENT -->

    	<div id="site-content">

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

	    <!-- UI -->

	    <!-- Scroll to top icon-->
	    <a class="fa fa-angle-up scroll-top" href="#site-content"></a> 

	    <!-- Flyout Nav Trigger -->
	    <span class="icon-lrg flyout-trigger max-break-3" id="flyout-trigger">
	        <i class="fa fa-bars nav-open"></i>
	        <i class="fa fa-times nav-close"></i>
	    </span>

	    <!-- Flyout Nav -->
	    <nav class="flyout-container" id="flyout"></nav>

	    <!-- Site Overlay -->
	    <div class="site-overlay" id="site-overlay"></div>

	    <!-- SCRIPTS -->

	    <!-- jQuery -->
	    <!--<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.0/jquery.min.js"></script>-->
	    <script src="assets/js/jquery.min.js"></script>

	    <!-- Interactive Elements/Modules -->
	    <script src="assets/js/accordion.js"></script>
	    <script src="assets/js/carousel.js"></script>
	    <script src="assets/js/modal.js"></script>
	    <script src="assets/js/flyout-navigation.js"></script>
	    <script src="assets/js/tabs.js"></script>
	    <script src="assets/js/tooltip.js"></script>

	    <!-- General -->
	    <script src="assets/js/adaptive-columns.js"></script>
	    <script src="assets/js/global.js"></script>

	</body>

</html>
```

## Features

### Responsive Grid system

One of the key features of One Nexus is the responsive grid system we provide. It's completely dynamic, generated from the settings you enter - our custom Sass function calculates everything for you, and churns out various different types of columns for you to use.

> Unlike most grid systems out there, our columns use **inline-block** display instead of floating them, making them more flexible.

#### Grid Structure

```html
assets > styles > scss > skeleton > _config.scss
```

This is where you set the main structural variables for your project's framework. Change these to any value you desire, or leave them as they are - the default values work well in most cases.

```css
//-----------------------------------------------------------------
// Skeleton
//-----------------------------------------------------------------

$base-width            :   1200px;
$max-width             :   90%;

$columns               :   12;
$gutter                :   2.5%;

//-----------------------------------------------------------------
```

##### Base Width ($base-width)

This is where you set the width for the main site container - pretty self-explanatory. This variable can any numeric value; pixels, percentage, em or rem.

##### Max Width ($max-width)

This variable sets the maximum allowed width for the main site container, and will override the previous **$base-width** variable where applicable. It is recommended you use a high percentage for this value, as this is what stops the page from being too wide on smaller resolutions.

##### Columns ($columns)

This is where you can set the number of columns for your grid. Twelve is popularly accepted as the number to use as it is divisible by 2, 3, 4 and 6, allowing for a more flexible system. Feel free to override this if you know what you're doing, our math will calculate your grid no matter the value you enter here.

##### Gutter ($gutter)

The gutter is the gap between each column. As our grid system uses percentage widths, the value you enter here must be a percentage and will not work if you enter a px value.

#### Example Using Default Values

It is typical to wrap your website's content in a main **container** or wrapper class. The container class uses the width set by the **$base-width** variable.

```html
<div class="container">
	...
</div>
```

Each row of columns needs to be put in its own row class.

```html
<div class="container">
	<div class="row">
		...
	</div>
</div>
```

With the default columns, the total number of column spans should not exceed the value defined by the $columns variable. Using the default example of 12, we have created a row consiting of an 8 column span and a 4 column span, which adds up to our total of 12 columns. See the [Column Types](ALAN, ADD THE URL!) section for more types of columns that come with One Nexus.

```html
<div class="container">
	<div class="row">
		<div class="span-8">
			...
		</div>
		<div class="span-4">
			...
		</div>
	</div>
</div>
```

#### Breakpoints

Breakpoints are what allow you to style your CSS for a specific selection of browser widths. They work by using **CSS media queries**. You can set as many of these as you like and set them to whatever values you think are suitable for your project.

> By default each column expands to 100% width when the resolution is less than the value defined by $breakpoint-3.

```css
//-----------------------------------------------------------------
// Breakpoints
//-----------------------------------------------------------------

$breakpoint-0          :   0px;
$breakpoint-1          :   460px;
$breakpoint-2          :   720px;
$breakpoint-3          :   940px;
$breakpoint-4          :   1200px;
$breakpoint-5          :   1400px;

$col-collapse          :   $breakpoint-3;

$breakpoints: (
	break-1            :   $breakpoint-1,
	break-2            :   $breakpoint-2,
	break-3            :   $breakpoint-3,
	break-4            :   $breakpoint-4,
	break-5            :   $breakpoint-5
);

//-----------------------------------------------------------------
```

The **$breakpoints** Sass map is used in various mixins to generate the different types of columns and rows. The **$col-collapse** variable controls the default width at which the columns vertically stack on top of each other.

#### Column Types

##### Regular Columns

A row of regular columns can contain any number of columns with different span widths so long as the total number doesn't exceed the value defined by the **$columns** variable. By default, this number is set to **12**, so our column-spans should add up to this number.

```html
<div class="row"> 
    <div class="span-4">regular column</div>
    <div class="span-4">regular column</div>
    <div class="span-4">regular column</div>
</div>
<br />
<div class="row"> 
    <div class="span-3">regular column</div>
    <div class="span-3">regular column</div>
    <div class="span-3">regular column</div>
    <div class="span-3">regular column</div>
</div>
```

###### Horizontal Aligning

It is possible to set the horizontal aligning of your columns by changing the **text-align** property of the **row** that contains your columns. Alternatively, you can use one of the following helper classes:

* text-left
* text-center
* text-right

```html
<div class="row text-center">
	<div class="span-6">
		...
	</div>
</div>
```

###### Vertical Aligning

You can also set the vertical aligning of your columns (relative to the tallest column in the row). This is achieved by setting the vertical-align property of each column in your row. This can also be done by adding one of our helper classes to your column:

* va-top
* va-middle
* va-bottom

> By default, the columns have their vertical align set to top.

```html
<div class="row">
	<div class="span-3 va-top">
		...
	</div>
	<div class="span-3 va-middle">
		...
	</div>
	<div class="span-3 va-bottom">
		...
	</div>
	<div class="span-3 va-middle" style="min-height: 175px;">
		...
	</div>
</div>
```

##### Flow Columns

Flow columns work exactly like regular columns except that each row of columns doesn't need to be placed in it's own **row** wrapper - you can wrap all of your columns for every row inside just one main **row** container.

```html
<div class="row flow-columns">
    <div class="span-6">Flow Column</div>
    <div class="span-6">Flow Column</div>
    <div class="span-4">Flow Column</div>
    <div class="span-4">Flow Column</div>
    <div class="span-4">Flow Column</div>
    <div class="span-3">Flow Column</div>
    <div class="span-3">Flow Column</div>
    <div class="span-3">Flow Column</div>
    <div class="span-3">Flow Column</div>
</div>
```

##### Magic Columns

"Magic" columns are so named as each row of magic columns can automatically detect the number of columns within its row, and set the width of each column accordingly (without using any JavaScript!). Each column in a row of magic columns will always be the same width, and will always add up to **100%** width. Perfect for cases where you know each column will always be the same width, or where you need any "[widow](http://en.wikipedia.org/wiki/Widows_and_orphans)" columns to take up any remaining space.

```html
<div class="row">
    <div class="span-m">magic column</div>
    <div class="span-m">magic column</div>
</div>
<br />
<div class="row">
    <div class="span-m">magic column</div>
    <div class="span-m">magic column</div>
    <div class="span-m">magic column</div>
    <div class="span-m">magic column</div>
    <div class="span-m">magic column</div>
</div>
<br />
<div class="row">
    <div class="span-m">magic column</div>
    <div class="span-m">magic column</div>
    <div class="span-m">magic column</div>
    <div class="span-m">magic column</div>
    <div class="span-m">magic column</div>
    <div class="span-m">magic column</div>
    <div class="span-m">magic column</div>
</div>
```

##### Adaptive Columns

Adaptive columns, insteadng of stacking vertically on-top of each other on small resolutions, transform into a carousel when the number of columns in the row exceeds the limit. They work off the [Owl-Carousel](http://www.owlcarousel.owlgraphic.com/) plugin, and are a great way to present your information to users on mobiles, allowing them to swipe horizontally instead of vertically.

```html
<!-- this row will turn into a carousel on mobiles/tablets -->
<div class="row adaptive-columns 4-cols carousel">
    <div class="span">adaptive column</div>
    <div class="span">adaptive column</div>
    <div class="span">adaptive column</div>
    <div class="span">adaptive column</div>
</div>
<!-- this row will turn into a carousel on desktops -->
<div class="row adaptive-columns 3-cols carousel">
    <div class="span">adaptive column</div>
    <div class="span">adaptive column</div>
    <div class="span">adaptive column</div>
    <div class="span">adaptive column</div>
</div>
```

##### Block Columns

Block columns are similar to regular columns except that they have no gutter (no margin) and they are all equal height to each other.

To create a row of block columns, simply add the **block-columns** class to your row which contains the target columns.

```html
<div class="container">
	<div class="row block-columns">
		<div class="span-4">
			...
		</div>
		<div class="span-4">
			...
		</div>
		<div class="span-4">
			...
		</div>
	</div>
</div>
```

#### Custom Column Collapsing

By default the columns collapse to 100% width at **$breakpoint-3** (**$col-collapse**) so that they are stacked vertically. Sometimes you may have a row of colums which you need to collapse at a larger or smaller resolution than others. Setting the width to collapse your row of columns is made simple with One Nexus.

To manually override the default collapsing of **$breakpoint-3** you can use the following classes to choose which breakpoint width you would like the columns to collapse at:

* break-1
* break-2
* break-3
* break-4
* break-5

Simply add your desired class to the main **row** which contains your columns. For example, if you wanted your columns to collapse at the width defined by the **$breakpoint-2** variable, you would add the **break-2** class to your row.


```html
<div class="container">
	<div class="row break-2">
		<div class="span-6">
			...
		</div>
		<div class="span-6">
			...
		</div>
	</div>
	<div class="row break-4">
		<div class="span-6">
			...
		</div>
		<div class="span-6">
			...
		</div>
	</div>
</div>
```

---

### HTML5 Boilerplate

One Nexus is built off the popular [HTML5 Boilerplate](http://html5boilerplate.com/), making it a fast, robust and adaptable solution from the very beginning. Many native features of One Nexus are included as a result of using H5BP as a base template, including:

* [Normalize.css](http://necolas.github.io/normalize.css/) for CSS normalizations and common bug fixes
* [jQuery](http://jquery.com/) via CDN, with a local fallback
* [Modernizr](http://modernizr.com/) build for feature detection
* Useful CSS [Helper Classes](http://www.onenexusproject.com/documentation/skeleton/helpers/)
* Default [print CSS](http://www.onenexusproject.com/documentation/skeleton/print/), performance optimized


---

### jQuery & Plugins

One Nexus comes with with jQuery included out of the box. We use [Google's CDN version](https://developers.google.com/speed/libraries/devguide#jquery), with the ability to easily switch to the included self hosted version instead.

> One Nexus uses jQuery v1.10.0.

```html
<head>
    ...
</head>

<body>

	...

    <!-- SCRIPTS -->

    <!-- jQuery -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.0/jquery.min.js"></script>
    <!--<script src="assets/js/jquery.min.js"></script>-->

    <!-- Interactive Elements/Modules -->
    <script src="assets/js/accordion.js"></script>
    <script src="assets/js/carousel.js"></script>
    <script src="assets/js/modal.js"></script>
    <script src="assets/js/flyout-navigation.js"></script>
    <script src="assets/js/tabs.js"></script>
    <script src="assets/js/tooltip.js"></script>

    <!-- General -->
    <script src="assets/js/adaptive-columns.js"></script>
    <script src="assets/js/global.js"></script>

</body>
```

#### Elements & Modules

Some of the [UI Elements](http://onenexusproject.com/documentation/elements/) and [Modules](http://onenexusproject.com/documentation/modules/) require some additional jQuery code for their functionality. In these instances, there is a separate JavaScript file for each element/module.


* [Accorsions](http://www.onenexusproject.com/documentation/elements/accordions)
* [Carousels](http://www.onenexusproject.com/documentation/elements/carousels/)
* [Flyout Navigation](http://www.onenexusproject.com/documentation/flyout-nav/)
* [Modals](http://www.onenexusproject.com/documentation/elements/modal-windows/)
* [Tabs](http://www.onenexusproject.com/documentation/elements/tabs/)
* [Tooltips](http://www.onenexusproject.com/documentation/elements/tooltips/)

#### Global Scripts

For general UI/UX enhancements, plugin initialisations and scripts that affect global modules we have provided **global.js**.

##### Smooth Scroll

This script creates a "smooth scroll" effect between hyperlinks on the same page. This works out-the-box without the need for any special markup.

```javascript
$("a[href*=#]").click(function() {
    if (location.pathname.replace(/^\//,"") == this.pathname.replace(/^\//,"") 
        || location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) +"]");
           if (target.length) {
             $("html,body").animate({
                 scrollTop: target.offset().top
            }, 1200);
            return false;
        }
    }
});
```

##### Scroll to Top

The below script is the acompanying code for the [Scroll to Top](http://onenexusproject.com/documentation/modules/scroll-to-top/) module. By default, the provided button appears after **350** pixels have been scrolled. Change this value in the below code to also change when the button should appear.

```javascript
$(window).bind("scroll", function() {
    if ($(this).scrollTop() > 350) {
        $(".scroll-top").addClass("active");
    } else {
        $(".scroll-top").stop().removeClass("active");
    }
});
```

The below code is the HTML for the default scroll-to-top button.

```html
<a class="icon-lrg-border-grey scroll-top" href="#site-content">
    <i class="fa fa-angle-up"></i>
</a> 
```

##### Modal Initialisation

This is the **initilization** for the [Modal Window](http://onenexusproject.com/documentation/elements/modal-windows/) elements. It targets all elements which have a **rel** value of **modal**. It then looks for the element wih the **modal-close** class to act as the close button.

```javascript
$("[rel*="modal"]").leanModal({ 
    closeButton: ".modal-close" 
});
```

##### Progress Bars

This is the acompanying JavaScript for the [Progress Bar](http://onenexusproject.com/documentation/elements/progress-bars/) elements. The code grabs the **data-progress** attribute value from the HTML and applies it as an **inline-style** to set the width, keeping your source code clean and inline-style free.

```javascript
$(".progress").each(function() {
    attrProgress = $(this).attr("data-progress");
    $(this).css({ width : attrProgress }); 
});
```

##### Tooltip Initialisation

This is the **initilization** for the [Tooltip](http://onenexusproject.com/documentation/elements/tooltips/) elements. They use the [Tipsy](http://onehackoranother.com/projects/jquery/tipsy/) jQuery plugin, make sure to check out all the available options on their website. By default, we only provide a northward (top/above) tooltip. It targets all elements with a **rel** value of **tooltip**.

```javascript
$(function() {
    $("a[rel*="tooltip"]"").tipsy({
        fade: true, 
        gravity: "s"
    });
});
```

#### Minifying Scripts

Everyone has their own way of doing things, so we don't want to dictate how to organise your project. That's why all of our assets are un-minified by default - so you can have complete control over your project. We do not recommend serving un-minified assets (including both scripts and CSS) to your users as it can have negative impacts on performance. This is why we strongly suggest that you minify all scripts and CSS for production sites, leaving the un-minified assets for development purposes.

> Whilst we strongly recommend minifying your scripts and CSS, it is by no means required if you are not comfortable doing so.

---

### Google Fonts

One Nexus comes ready to use with Google Fonts out of the box, allowing you to quickly and easily manage your website's typography. Your project is by no menas limited to using only Google Fonts, they are only included as a quick starting point, and switching them out for other web fonts or a self hosted soltion is simple.

> [Visit the google fonts homepage](https://www.google.com/fonts#).

## Skeleton

### Config

One of the most useful features of Sass is the ability to pass variables in your CSS. By using variables we can configure our application in many ways. One Nexus contains all of its variables in one convenient location. The config SCSS partial is located in the **skeleton** folder:

```html
assets > styles > scss > skeleton > _config.scss
```

#### Skeleton

The skeleton variables are the variables which control how your project's framework is built. To learn how these variables work with your project, read the [Responsive Grid System](http://www.onenexusproject.com/documentation/features/responsive-grid-system/) help page.

```css
//-----------------------------------------------------------------
// Skeleton
//-----------------------------------------------------------------

$base-width            :   1200px;
$max-width             :   90%;

$columns               :   12;
$gutter                :   2.5%;

//-----------------------------------------------------------------
```

##### Base Width ($base-width)

This is where you set the width for the main site container - pretty self-explanatory. This variable can any numeric value; pixels, percentage, em or rem

##### Max Width ($max-width)

This variable sets the maximum allowed width for the main site container, and will override the previous **$base-width** variable where applicable. It is recommended you use a high percentage for this value, as this is what stops the page from being too wide on smaller resolutions.

##### Columns ($columns)

This is where you can set the number of columns for your grid. Twelve is popularly accepted as the number to use as it is divisible by 2, 3, 4 and 6, allowing for a more flexible system. Feel free to override this if you know what you're doing, our math will calculate your grid no matter the value you enter here.

##### Gutter ($gutter)

The gutter is the gap between each column. As our grid system uses percentage widths, the value you enter here must be a percentage and will not work if you enter a px value.

#### Breakpoints

Breakpoints are what allow you to style your CSS for a specific selection of browser widths. They work by using **CSS media queries**. You can set as many of these as you like and set them to whatever values you think are suitable for your project.

> By default each column expands to 100% width when the resolution is less than **$breakpoint-3**.

```css
//-----------------------------------------------------------------
// Breakpoints
//-----------------------------------------------------------------

$breakpoint-0          :   0px;
$breakpoint-1          :   460px;
$breakpoint-2          :   720px;
$breakpoint-3          :   940px;
$breakpoint-4          :   1200px;
$breakpoint-5          :   1400px;

$col-collapse          :   $breakpoint-3;

$breakpoints: (
	break-1            :   $breakpoint-1,
	break-2            :   $breakpoint-2,
	break-3            :   $breakpoint-3,
	break-4            :   $breakpoint-4,
	break-5            :   $breakpoint-5
);

//-----------------------------------------------------------------
```

The **$breakpoints** Sass map is used in various mixins to generate the different types of columns and rows. The **$col-collapse** variable controls the default width at which the columns vertically stack on top of each other.

#### Typography

The tyography variables control your project's fonts and font sizes. By default two font-families and six font-sizes are provided.

> Only the font names are defined here. You still need to load the actual [font files](http://onenexusproject.com/documentation/elements/fonts/).

```css
//-----------------------------------------------------------------
// Typography
//-----------------------------------------------------------------

// Fonts

$font-1                :   "Lato", sans-serif;
$font-2                :   "Raleway", sans-serif;

// Font Sizes

$base-font-size        :   1rem;

$font-size-1           :   0.9rem;
$font-size-2           :   1rem;
$font-size-3           :   1.2rem;
$font-size-4           :   1.4rem;
$font-size-5           :   1.6rem;
$font-size-6           :   2rem; 

//-----------------------------------------------------------------
```

#### Color Palette

These variables control the color scheme of yout project. You can quickly and simply change the entire color of your whole website just by changing a couple of variables. By default there are five different palettes - feel free to delete any you don't need.

```css
//-----------------------------------------------------------------
// Color Palettes
//-----------------------------------------------------------------

// Greyscale Colors

$white                 :   #ffffff;
$dark-white            :   #f1f1f1;
$light-grey            :   #b1b1b1;
$grey                  :   #707070;
$dark-grey             :   #111111;
$black                 :   #000000;

// Branding Colors

$brand-1               :   #F62459;
$brand-2               :   #22A7F0;
$brand-3               :   #03C9A9;

$colors-brand: (
	brand-1            :   $brand-1,
	brand-2            :   $brand-2,
	brand-3            :   $brand-3
);

// Alert Colors

$alert-error           :   #CB8888;
$alert-help            :   #e7d16c;
$alert-info            :   #79a9c0;
$alert-success         :   #9cc079;

$colors-alert: (
	error              :   $alert-error,
	help               :   $alert-help,
	info               :   $alert-info,
	success            :   $alert-success
);

// Validation Colors

$valid                 :   #00B16A;
$invalid               :   #D91E18;

// Social Network Colors

$facebook              :    #507CBD;
$twitter               :    #63CEF2;
$linkedin              :    #117BB8;
$github                :    #1C1C1C;
$skype                 :    #63CEF2;
$pinterest             :    #CD2129;
$instagram             :    #5280A5;
$rss                   :    #FBA933;
$youtube               :    #CB312E;
$flickr                :    #ED1384;
$vimeo                 :    #1EB8EB;
$dribbble              :    #EB4C89;
$behance               :    #0595FC;
$deviantart            :    #B3C434;
$reddit                :    #0D7CCD;
$google-plus           :    #dd4b39;
```

##### Greyscale Colors

This palette has six different shades ranging from white to black.

##### Brand Colors

This palette is for your brand colors, which are typically used for the main theming and styling colors of your website.

##### Alert Colors

This palette contains a standard set of colors useful for various things such as our [Alert Bars](http://onenexusproject.com/documentation/elements/alert-bars/).

##### Validation Colors

This palette contains the validation colors for the [HTML5 Forms](http://onenexusproject.com/documentation/elements/forms/).

##### Social Network Colors

This palette can be used in conjunction with the [Font Awesome Icons](http://onenexusproject.com/documentation/elements/icons/) to create your set of social-networking buttons.

#### Theming

This is where all your theme-specific variables should be placed. By default we only provide you with a select handful of common/useful ones to get going.

```css
//-----------------------------------------------------------------
// Theming
//-----------------------------------------------------------------

$base-margin           :   2rem;
$base-line-height      :   1.4;

$background-color      :   $dark-white;
$base-text-color       :   $grey;
$heading-color         :   $dark-grey;

//-----------------------------------------------------------------
```

---

### Base

This is where all the core CSS for your project is placed. It contains the main structural CSS as well as some other useful snippets. The base SCSS partial is located in the **skeleton** folder:

```javascript
assets > styles > scss > skeleton > _base.scss
```

##### The CSS

We have broken the CSS down to individual chunks so we can analyse it more easily. Below you will find everything that appears in the default **_base.scss** file, with a breif overview about what it does and why we've included it.

###### Reset

```css
html, body {
	padding: 0;
	margin: 0;
}
```

We remove any default **padding** and **margins** applied by the browser to the **html** and **body** elements.

###### Prevent Horizontal Scroll

```css
html {
	overflow-x: hidden;
}
```

We set the HTML element to **overflow-x: hidden** to hide any unwated horizontal scroll.

###### Body Element

```css
body {
    line-height: $base-line-height;
    font-family: $font-1;
    color: $base-text-color;
	background-color: $background-color;
    font-size: $base-font-size;
}
```

This is where we set the main styling for the **body** element; we set the typography and our main background.

* $base-line-height
* $base-text-color
* $background-color
* $base-font-szize

###### Hyperlinks

```css
a {
    color: $brand-1;
    transition: 0.4s;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
}
```

This is where we style our basic **hyperlinks**/**anchor** tags. We set their **color**, remove the default **text-decoration** of **underline** and apply it back when the elment is hovered using a transition of **0.4s**.

###### Container

```css
.container {
	width: $base-width;
	max-width: $max-width;
	margin: 0 auto;
}
```

This is our main **container** element. We set the **width** and **max-width** using our [variables](http://www.onenexusproject.com/documentation/skeleton/variables/), and horizontally center the container in the page with **margin: 0 auto**.

###### Site Overlay

```css
.site-overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    cursor: pointer;
    background: rgba(0,0,0,0.4);
    transform: translateZ(0);
    transition: 0.4s;
    z-index: 10;
    visibility: hidden;
    opacity: 0;
    &.visible {
        visibility: visible;
        opacity: 1;
    }
}
```

This is the opaque mask overlay that is used to enhance the [Flyout Nav module](http://onenexusproject.com/documentation/modules/flyout-nav).

###### Box-Sizing

```css
* {
	&, &:before, &:after {
	    box-sizing: border-box;
	}
}
```

The famous [* { box-sizing: border-box }](http://www.paulirish.com/2012/box-sizing-border-box-ftw/) has been included by default with One Nexus. This is to ensure that all CSS values for **height** and **width** are not affected by padding.

###### Vertical Rhythm

```css
h1, h2, h3, h4, h5, h6, 
p, ul, ol, 
fieldset, legend, 
figure, table, 
pre, 
hr {
    margin: $base-margin 0;
    &:first-child {
    	margin-top: 0;
    }
    &:last-child {
        margin-bottom: 0;
    }
}
```

The above code tackles the issue of the [spacing above and below modules](http://css-tricks.com/spacing-the-bottom-of-modules/). Generally, we want the majority of our HTML elements that form the main content to be equally spaced between each other in an intuitive manner. This means no spacing at the very top of the content, and none at the bottom, but an equal space between each main element. The above code does just that, and takes advantage of the collapsing behaviour of margins.

###### Highlighted Text

```css
::selection {
	background-color: $brand-1;
	color: #fff;
	text-shadow: none;
}
```

This is where you can set the default appearance for highlighted text on your project. Many websites often miss this simple and subtle effect, but we think it is a definite must for any project.

---

### Grid

One of the most important features of One Nexus is the responsive grid system. It allows you to build highly reliable websites which work great on all devices and resolutions thanks to the use of percentages instead of fixed widths. The grid SCSS partial is located in the **skeleton** folder:


```html
assets > styles > scss > skeleton > _grid.scss
```

##### The CSS

We have broken the CSS down to individual chunks so we can analyse it more easily. Below you will find everything that appears in the default **_grid.scss** file, with a breif overview about what it does and why we've included it.

###### Column Row

```css
.row { 
    // IE < 8 collapse white-space
    *letter-spacing: normal;
    *word-spacing: -0.43em;
    // Firefox/IE collapse white-space
    letter-spacing: -0.31em;
    // Webkit collapse white-space
    display: table;
    width: 100%;
    // for Owl-Carousel functionality
    table-layout: fixed;
}

.opera-only :-o-prefocus,
.row {
    word-spacing: -0.43em;
}

* {        
    letter-spacing: normal;
    word-spacing: normal;
    text-rendering: auto;
}
```

This code may look obscure and awkward, but it is the magic that allows us to use the **inline-block** property for our columns. By default, adding **display: inline-block** to an element causes a natural [whitespace](http://css-tricks.com/fighting-the-space-between-inline-block-elements/) to appear between each element, which can vary in width from font to font and browser to browser. Indeed, this has caused [many people many problems](http://stackoverflow.com/search?q=inline-block+column), and there are plenty of go-to [hacky and impractical](http://davidwalsh.name/remove-whitespace-inline-block) work arounds, none of which are really suitble for a production environment. However, the above code allows for the use of completely usable and functional columns which use **inline-block** and have no **white-space**. And to top it all off, it works on all browsers, **including Internet Explorer 6**!

###### Single Column

```css
[class*="span"] {
    display: inline-block;
    zoom: 1; *display: inline; // IE < 8: fake inline-block
    vertical-align: top;
	margin-left: $gutter;
	&:first-child {
		margin-left: 0;
	}
}
```

This is the CSS for our individual columns. We add a display of **inline-block** so that they align next to each other, and set their vertical-align to **top**. We add a gutter between our columns by adding a **margin-left** using the value defined by the [$gutter variable](http://www.onenexusproject.com/documentation/skeleton/config/), and then remove it from the first column (as it should sit flush with the container).

###### Column Width

```css
@for $i from 1 through $columns {
	.span-#{$i} {			
		width: ( (100/$columns) * $i) - ( ( ((100 / ((100/$columns) * $i)) - 1) * $gutter ) / ( $columns / $i ) )
	}
}
```

This beautiful equation calculcates and generates the CSS for each column width. It uses the **$columns** and **$gutter** [variables](http://www.onenexusproject.com/documentation/skeleton/variables/) to create the grid-system, and will create a grid for whatever values you set them as.

###### Flow Columns

```css
.row {

	...

//-----------------------------------------------------------------
// Flow Columns
//-----------------------------------------------------------------

	@media (min-width: $col-collapse) {
		&.flow-columns {
			margin-left: -$gutter;
			width: 100% + $gutter;
			[class*="span"] {
				&, &:first-child {
					margin-left: $gutter;
				}
			}
			@for $i from 1 through $columns {
				.span-#{$i} {		
					width: ((100/$columns) * $i) - $gutter;
				}
			}
		}
	}

	...

} // end .row
```

Flow Columns are laid out slightly differently to regular columns. In order for the columns to sit flush with the container, rather than removing the left margin from the first-child we add a negative left margin of equal value to the entire row to displace the column margin, and add this width back to the row to make up for the lost space.

###### Magic Columns

```css
.row {

	...

//-----------------------------------------------------------------
// Magic Columns
//-----------------------------------------------------------------

	@media (min-width: $col-collapse) {
		.span-m {
			&:first-child {
				@for $i from 1 through $columns {
					&:nth-last-child(#{$i}) {
						&, ~ .span-m {		
							width: (100/$i) - ( ( ( (100 / (100/$i) ) - 1) * $gutter ) / $i );
						}
					}
				}
			}
		}
	}

	...

} // end .row
```

Magic Columns work by using the **nth-last-child** CSS3 selector. By using this selector along with the **general sibling combinator** (~), we can create sets of columns with equal width, depending on how many columns (or siblings) the row has.

###### Adaptive columns

```css
.row {

	...

//-----------------------------------------------------------------
// Adaptive Columns
//-----------------------------------------------------------------

	&.adaptive-columns {
		.span {
			width: 100%;
			margin-left: 0;
		}
	}

	...

} // end .row
```

The bulk of the Adaptive Columns functionality is handled by the [Carousel](http://onenexusproject.com/documentation/elements/carousels/) plugin (Owl-Carousel). The only custom CSS we use is to ensure that the columns are the correct width within their dynamically created carousel column wrappers, and ensure that the columns have no left margin, as this is now handled by the carousel plugin.

###### Block Columns

```css
.row {

	...
	
//-----------------------------------------------------------------
// Block Columns
//-----------------------------------------------------------------

	&.block-columns {
		> [class*="span"] {
			display: table-cell;
		}
	}

	...

} // end .row
```

This code allows you to create [block columns](http://onenexusproject.com/documentation/features/responsive-grid-system/#anchor-block-columns) in your project. It's amazingly simple how it works, it simply adds the **display: table-cell** property to each column in the row, which removes the gutter and makes them all equal height.

###### Column Collapsing

```css
.row {

	...

//-----------------------------------------------------------------
// Default Column Stacking
//-----------------------------------------------------------------

	@media (max-width: $col-collapse) {
		&:not([class*="bp"]) {
			> [class*="span"] {
				margin-left: 0;
				width: 100%;
			}
			&.block-columns {
				> [class*="span"] {
					display: inline-block;
				}
			}
		}
	}

//-----------------------------------------------------------------
// Custom Column Stacking
//-----------------------------------------------------------------

	@each $bp, $width in $breakpoints {
		@media (max-width: $width) {
			&.#{$bp} {
				[class*="span"] {
					margin-left: 0;
					width: 100%;
				}
				&.block-columns {
					> [class*="span"] {
						display: inline-block;
					}
				}
			}
		}
	} 	

	...

} // end .row
```

This code allows for the [custom column collapsing](http://www.onenexusproject.com/documentation/features/responsive-grid-system/#advanced-usage) feature, and also sets the default point at which the columns should collapse to 100% width and stack on top of each other. The equation pulls the values from the [$breakpont variables](http://www.onenexusproject.com/documentation/skeleton/variables/) to create a class for each breakpoint. 

---

### Helpers

One of the benefits of the [HTML5 Boilerplate](http://html5boilerplate.com/) (which One Nexus is built on) is the inclusion of a [common CSS helpers](https://github.com/h5bp/html5-boilerplate/blob/v4.3.0/doc/css.md#common-helpers) stylesheet. Our helpers stylesheet is built off this and contains some of our own additional helpers to enhance your project's framework. The helpers SCSS partial is located in the **skeleton** folder:

```html
assets > styles > scss > skeleton > _helpers.scss
```

---

#### .hidden

```css
.hidden {
    display: none !important;
}
```

From the [H5BP documentation](https://github.com/h5bp/html5-boilerplate/blob/master/doc/css.md):

The **hidden** class can be added to any element that you want to hide visually and from screen readers. It could be an element that will be populated and displayed later, or an element you will hide with JavaScript.

#### .visually-hidden

```css
.visually-hidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    &.focusable {
        &:active, &:focus {
            clip: auto;
            height: auto;
            margin: 0;
            overflow: visible;
            position: static;
            width: auto;
        }
    }
}
```

From the [H5BP documentation](https://github.com/h5bp/html5-boilerplate/blob/master/doc/css.md):

The **visually-hidden** class can be added to any element that you want to hide visually, while still have its content accessible to screen readers.

See also:

* [CSS in Action: Invisible Content Just for Screen Reader Users](http://www.webaim.org/techniques/css/invisiblecontent/)
* [Hiding content for accessibility](http://snook.ca/archives/html_and_css/hiding-content-for-accessibility)
* [HTML5 Boilerplate - Issue #194](https://github.com/h5bp/html5-boilerplate/issues/194/)

#### .invisible

```css
.invisible {
    visibility: hidden;
}
```

From the [H5BP documentation](https://github.com/h5bp/html5-boilerplate/blob/master/doc/css.md):

The **invisible** class can be added to any element that you want to hide visually and from screen readers, but without affecting the layout.

As opposed to the **hidden** class that effectively removes the element from the layout, the **invisible** class will simply make the element invisible while keeping it in the flow and not affecting the positioning of the surrounding content.

N.B. Try to stay away from, and don't use the classes specified above for [keyword stuffing](http://en.wikipedia.org/wiki/Keyword_stuffing) as you will harm your site's ranking!

#### .clearfix


```css
.clearfix, .cf {
    zoom: 1;
    &:before, &:after { 
        content: ""; 
        display: table; 
    }
    &:after { 
        clear: both; 
    }
}
```

From the [H5BP documentation](https://github.com/h5bp/html5-boilerplate/blob/master/doc/css.md):

The **clearfix** class can be added to any element to ensure that it always fully contains its floated children.

Over the years there have been many variants of the clearfix hack, but currently, we use the [micro clearfix](http://nicolasgallagher.com/micro-clearfix-hack/).

#### Vertically Align Columns

```css
.va-top {
    vertical-align: top !important;
}
.va-middle {
    vertical-align: middle !important;
}
.va-bottom {
    vertical-align: bottom !important;
}
```

The **vertical align** classes allow you to easily control the vertical alignment of your columns. Simply add the class to each column in a row that you want to edit the vertical alignment of.

[Click here](http://www.onenexusproject.com/documentation/features/responsive-grid-system/#advanced-usage) to read more about how to control the vertical alignment of your columns.

#### Horizontal Rules

```css
hr.line {
    color: rgba(0,0,0,0.2);
    margin: $base-margin 0;
}
```

One Nexus comes with an alternative horizontal rule which is less intrusive than the default one, and can be used to easily section off the content of your page.

#### Horizontal Aligning


```css
.text-left { 
    text-align: left !important; 
}
.text-center { 
    text-align: center !important; 
}
.text-right { 
    text-align: right !important; 
}

.left  { 
    float: left !important; 
}
.right { 
    float: right !important; 
}
```

The above classes can be used to quickly and simply control the horizontal alignment of your elements.

[Click here](http://onenexusproject.com/documentation/features/responsive-grid-system/#anchor-horizontal-aligning) to read more about how to control the horizontal alignment of your columns.

#### Responsive Visibility


```css
//-----------------------------------------------------------------
// Responsive Visiblity
//-----------------------------------------------------------------

// Show only when resolution is at most X

@each $bp, $width in $breakpoints {
    .max-#{$bp} {
        @media (min-width: $width) {
            display: none !important;
        }
    }
}

// Show only when resolution is at least X

@each $bp, $width in $breakpoints {
    .min-#{$bp} {
        @media (max-width: $width) {
            display: none !important;
        }
    }
}
```

The above code generates a set of classes using using the [breakpoint variables](http://www.onenexusproject.com/documentation/features/responsive-grid-system/#breakpoints). These classes let you hide or show certain elements depending on the resolution. By default the above function generates two sets of six classes.

##### Example CSS Output

```css
/* Show only when resolution is at most X
================================================================ */

@media (min-width: 0px) {
  .max-break-0 {
    display: none !important;
  }
}

...

@media (min-width: 1400px) {
  .max-break-5 {
    display: none !important;
  }
}
```

**Ex:** to show an element **only** when the resolution is **at most** the value definted by the **$breakpoint-3** variable, we would use the **.max-bp3** class.

```css
/* Show only when resolution is at least X
================================================================ */

@media (max-width: 0px) {
  .min-break-0 {
    display: none !important;
  }
}

...

@media (max-width: 1400px) {
  .min-break-5 {
    display: none !important;
  }
}
```

**Ex:** to show an element **only** when the resolution is **at least** the value defined by the **$breakpoint-3** variable, we would use the **.min-bp3** class.

#### Using Helper Classes Semantically

The easiest way to use these helper classes is by simply adding them straight to your HTML element, which is fine in most cases, but may result in [unsemantic code](http://css-tricks.com/semantic-class-names/). It is possible to use the helper classes within another, semantically named class by [extending them](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#extend) with SASS.

##### Example

```css
/*********************
CLEARFIXIN
*********************/

.clearfix, .cf {
    zoom: 1;
    &:before, &:after { 
    	content: ""; 
    	display: table; 
    }
    &:after { 
    	clear: both; 
    }
}
```

```html
<div class="top-features cf">
	...
</div>
```

The above example shows the simplest case of using the provided [clearfix](http://nicolasgallagher.com/micro-clearfix-hack/) solution to handle floated elements. Whilst the above example is perfectly valid code, it is not semantic. To use this clearfix class (or any helper class) semantically, you should extend the class into your main class like so:

```css
/*********************
Top Features
*********************/

.top-features {
	...
	@extend .cf;
}
```

```html
<div class="top-features">
	...
</div>
```

This results is cleaner and more semantic HTML markup, and we recommend using all helper classes in this way where possible.

---

### Utilities

```html
assets > styles > scss > skeleton > _utilities.scss
```

The provided utilities are used to offer reusable support in your styles. By default there are only a couple of mixins but this file is useful to store any other mixins you may need for your project.

#### Placeholder

The **placeholder** mixin is used to style the **placeholder** HTML5 input attribute.

> We don't provide any other vendor-prefixed mixins as we recommend using [Autoprefixer](https://github.com/postcss/autoprefixer) on your projects.

```css
@mixin placeholder {
	&::-webkit-input-placeholder {@content};
	&:-moz-placeholder           {@content};
	&::-moz-placeholder          {@content};
	&:-ms-input-placeholder      {@content};
}
```

##### Usage

```css
input {	
    @include placeholder {
        font-weight: lighter;
        opacity: 1;
        transition: 0.4s;
    }
}
```

#### Vertical Centering

This mixin is used to **vertically center** any element using the method popularized by [Zerosizthree](http://zerosixthree.se/vertical-align-anything-with-just-3-lines-of-css/).

```css
@mixin vam ($position) {
    position: $position;
    top: 50%;
    transform: translateY(-50%);
}
```

##### Usage

This mixin allows you to set the **position** attribute when calling it. Normally, depending on your context, yo would use either **relative** or **absolute** here.

```css
.container {
	@include vam(relative);
}
```

```css
.container {
	@include vam(absolute);
}
```

---

### Normalize

[Normalize.css](https://github.com/necolas/normalize.css/) makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing. It is a native feautre of the [HTML5 Boilerplate](http://html5boilerplate.com/), which One Nexus is built on. The normalize SCSS partial is located in the **skeleton** folder:

```html
assets > styles > scss > skeleton > _normalize.scss
```

---

### Print Styles

One Nexus comes with a custom stylesheet for printed media. It is a native feautre of the HTML5 Boilerplate, which One Nexus is built on. The print SCSS partial is located in the **skeleton** folder:

```html
assets > styles > scss > skeleton > _print.scss
```

From the [H5BP documentation](https://github.com/h5bp/html5-boilerplate/blob/v4.3.0/doc/css.md#print-styles):

* We strip all background colors, change the font color to black and remove text-shadow. This is meant to help save printer ink and make the printing process much faster.
* Anchors do not need colors to indicate they are linked. They are underlined to indicate so.
* Anchors and Abbreviations are expanded to indicate where users reading the printed page can refer to.
* But we do not want to show link text for image replaced elements (given that they are primarily images).

---


## UI Elements

We see websites as being made up of visual "elements". The styling of these elements plays as large part in creating the look and feel of your website. One Nexus comes with a generous amount of pre-made common elements to help structure the UI of your project.

Each main element has its own Sass partial which contains all variations of the element (where applicable). Any given element can be found in the **elements** folder:

```html
assets > styles > scss > elements > _your-element.scss
```

Every element must be included in the main **app.scss** file. All provided elements are included by default, and you are encouraged to remove any you don't need and add your own where necessary.

```css
/******************************************************************
Skeleton
******************************************************************/

...

/******************************************************************
Elements
******************************************************************/

@import "elements/accordions";
@import "elements/alert-bars";
@import "elements/buttons";
@import "elements/blockquotes";
@import "elements/carousels";
@import "elements/fonts";
@import "elements/forms";
@import "elements/headings";
@import "elements/icons";
@import "elements/images";
@import "elements/lists";
@import "elements/modals";
@import "elements/progress-bars";
@import "elements/tables";
@import "elements/tabs";
@import "elements/tooltips";
@import "elements/wells";

/******************************************************************
Modules
******************************************************************/

...

```

---

#### Accordions

```html
assets > styles > scss > elements > _accordions.scss
```

```html
assets > js > accordion.js
```

The One Nexus accordions are built to be as dynamic as possible - meaning they do not require any specific markup or classes (other than the main **accordion** class on the parent) - they just need to be in the correct format and wrapped in a container with the **accordion class**. If you want a section to be open be default, you need to add the **active** class to the appropriate tags (see below).

```html
<div class="accordion">
    <section>
        <h4>Accordion Title 1</h4>
        <article>
            <!-- accordion content -->
        </article>
    </section>
    <!-- open by default -->
    <section class="active">
        <h4>Accordion Title 2</h4>
        <article class="active">
            <!-- accordion content -->
        </article>
    </section>
    <section>
        <h4>Accordion Title 3</h4>
        <article>
            <!-- accordion content -->
        </article>
    </section>
    <section>
        <h4>Accordion Title 4</h4>
        <article>
            <!-- accordion content -->
        </article>
    </section>
</div>
```

This will also work:

```html
<div class="accordion">
    <div>
        <div>Accordion Title 1</div>
        <div>
            <!-- accordion content -->
        </div>
    </div>
    <!-- open by default -->
    <div class="active">
        <div>Accordion Title 2</div>
        <div class="active">
            <!-- accordion content -->
        </div>
    </div>
    <div>
        <div>Accordion Title 3</div>
        <div>
            <!-- accordion content -->
        </div>
    </div>
    <div>
        <div>Accordion Title 4</div>
        <div>
            <!-- accordion content -->
        </div>
    </div>
</div>
```

---

#### Alert Bars

```html
assets > styles > scss > elements > _alert-bars.scss
```

Alert bars are a great way to draw your users to important bits of information. One Nexus comes with four different styles of alert bars to use for different scenarios. To use each alert bar, simply add one of the following classes to any element:

* alert-help
* alert-error
* alert-success
* alert-info

```html
<div class="alert-help">
    This is a <b>help</b> alert bar.
</div>
```

---

#### Blockquotes

```html
assets > styles > scss > elements > _blockquotes.scss
```

One Nexus comes with a clean, default style for **blockquote** elements, ready for you to build upon. To create a blockquote (with optional **cite** tag), simply create a paragraph with **p** HTML tags wrapped in **blockquote** html tags.


```html
<blockquote>
    <p>Lorem ipsum dolor sit amet... <cite>- John Doe</cite></p>
</blockquote>
```

---

#### Buttons

```html
assets > styles > scss > elements > _buttons.scss
```

One Nexus makes it easy to create your own custom reusable buttons, and comes with a generous set of prepared buttons in different shapes, sizes and colors for you to use out-the-box. To create a basic button, add the **button** class your element (usually an **a** or **button** HTML tag). You can then chain extra paremeters onto the end of your class to add further styles.

```html
<a class="button" href="#">Button</a>
```

##### Color Variants

> If you add more brand colors in the [config](http://onenexusproject.com/documentation/skeleton/config/) file, they will automatically be available to use in your buttons.

* -brand-1
* -brand-2
* -brand-3

```html
<a class="button-brand-1" href="#">Brand-1 Button</a>
```

##### Size Variants

* -small
* -large

```html
<a class="button-large" href="#">Large Button</a>
```

##### Style Variants

* -block
* -border
* -disabled
* -round
* -oval

```html
<a class="button-round" href="#">Round Button</a>
```

##### Combining Parameters

It is possible to combine parameters in whatever combination or order you desire. If you're feeling crazy, you can do something like this:

```html
<a class="button-large-round-full-width-disabled-brand-3" href="#">
	Large Round Block Disabled Brand-3 Button
</a>
```

---

#### Carousels

```html
assets > styles > scss > elements > _carousels.scss
```

```html
assets > js > carousel.js
```

The popular [Owl-Carousel](http://www.owlcarousel.owlgraphic.com/) jQuery plugin is used for carousels - visit their homepage for the full documentation, only the most basic example will be covered here. To create a basic carousel, create a container of similar elements (ie same HTML tag) and add the **carousel** class and assign a unique **ID** to the container. You then need to call the plugin on your container, as shown below.

```html
<div id="demo-carousel" class="carousel">
    <img src="http://skyux.com/stock-photos/stock6.jpg">
    <img src="http://skyux.com/stock-photos/stock16.jpg">
    <img src="http://skyux.com/stock-photos/stock2.jpg">
</div>
```

```javascript
$(document).ready(function() {

    //-----------------------------------------------------------------
    // Demo Carousel
    //-----------------------------------------------------------------

    var demoCarousel = $("#demo-carousel");

    demoCarousel.owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: true,
        margin: 31,
        slideBy: 1,
        navText: [],
        responsive:{
            460 :{                
                items: 2
            },
            720 :{                
                items: 3
            },
            940 :{                
                items: 4
            }
        }
    });

}); // end document.ready  
```

> Make sure to call the plugin inside a **document.ready** function as shown in the above example.

> For a full list of available options for your carousel (which there's a lot of!) visit the [Owl-Carousel](http://owlgraphic.com/owlcarousel/) homepage.

---

#### Fonts

```html
assets > styles > scss > elements > _fonts.scss
```

> The actual font-family names are declared in the project's [config](http://www.onenexusproject.com/documentation/skeleton/config/) by default, but feel free to move them here.

##### Adding/Replacing Fonts

By default there are two fonts included with One Nexus. The first option is used for your project's main font (which in our case is the [Lato](https://www.google.com/fonts/specimen/Lato) Google Font), and then either delete/amend/add more fonts as desired.

```css
//-----------------------------------------------------------------
// Font 1
//-----------------------------------------------------------------

@import url(http://fonts.googleapis.com/css?family=Lato:300,400,700,900);

.font-1 {
    font-family: $font-1;
}

//-----------------------------------------------------------------
```

In the [config](http://onenexusproject.com/documentation/skeleton/config/) file, we declare the actual typeface names as reusable variables. You can of course then add the font to any element in your CSS by adding **font-family: $font-1;** as shown above.

```css
//-----------------------------------------------------------------
// Typography
//-----------------------------------------------------------------

// Fonts

$font-1                :   "Lato", sans-serif;
$font-2                :   "Raleway", sans-serif;

// Font Sizes

$base-font-size        :   1rem;

$font-size-1           :   0.9rem;
$font-size-2           :   1rem;
$font-size-3           :   1.2rem;
$font-size-4           :   1.4rem;
$font-size-5           :   1.6rem;
$font-size-6           :   2rem; 

//-----------------------------------------------------------------
```

---

#### Forms

```html
assets > styles > scss > elements > _forms.scss
```

One Nexus makes use of the new available HTML5 input attribute types as well as other new HTML5 features. These new elements will get ignored by older browser, and will render as plain text input fields. To create a form (or any form element), create a container with the **form** class.

> Please note that the below examples are for visual demonstration only, and do not have any **name** or **ID** attributes.

##### Basic Example


```html
<form class="form">
    <fieldset>
        <label>
            Username
            <input type="text" required placeholder="example: username" />
        </label>
        <br />
        <label>
            Password
            <input type="password" pattern=".{3,}" required placeholder="example: 123" />
        </label>
        <br />
        <label>
            Select Dropdown
            <select name="browser" required>
                ...
            </select>
        </label>
    </fieldset>
    <br />
    <label>
        Your Message
        <textarea rows="5" cols="50" required placeholder="enter your message..."></textarea>
    </label>
    <fieldset class="row">
        <span class="span va-middle">
            <button class="button-brand-1" type="submit">Submit</button>
        </span>
        <label class="span va-middle"> 
            <input type="checkbox" />
            Subscribe to our SPAM newsletters?
        </label>
    </fieldset>
</form>
```

To manually set the width of the field, you can use the **span-x** class, where **x** is any integer between **1** and **12** (or whatever value you have set for **$columns** in the [config](http://onenexusproject.com/documentation/skeleton/config/) file). This doesn't transform the field into a column, it merely inherits the class's width.

```html
<form class="form">
    <fieldset>
        <label>
            Username
            <input class="span-5" type="text" required placeholder="example: username" />
        </label>
        <br />
        <label>
            Password
            <input class="span-5" type="password" pattern=".{3,}" required placeholder="example: 123" />
        </label>
        ...
    </fieldset>
    <br />
    <label>
        Your Message
        <textarea class="span-8" rows="5" cols="50" required placeholder="enter your message..."></textarea>
    </label>
    ...
</form>  
```

##### Inline Form

You can easily create an inline **form** or **fieldset** group by wrapping each field in an HTML tag that has the **inline-field** class.

```html
<form class="form"> 
    <fieldset>
        <div class="inline-field">
            <label>Username</label>
            <input type="text" required placeholder="example: username" />
        </div>
        <div class="inline-field">
            <label>Password</label>
            <input type="password" pattern=".{3,}" required placeholder="example: 123" />
        </div>
        <div class="inline-field">
            <button class="button-brand-1-block" type="submit">Submit</button>
        </div>
        <div class="inline-field"> 
            <input type="checkbox" />
            <label>Remember Me?</label>
        </div>
    </fieldset>
</form> 
```

##### Grid System Integration Implementation

The most reliable and efficient way to structure your form is by integrating it with our grid system. By doing so, you can create a form layout for pretty much any purpose. See the below examples for some common layouts:

###### Login Form

```html
<form class="form span-6">
    <fieldset class="row">
        <label class="span-3 va-middle">
            Username
        </label>
        <div class="span-9 va-middle">
            <input type="text" required placeholder="example: username">
        </div>
    </fieldset>
    <br />
    <fieldset class="row">
        <label class="span-3 va-middle">
            Password
        </label>
        <div class="span-9 va-middle">
            <input type="password" required placeholder="example: 123">
        </div>
    </fieldset>
    <br />
    <fieldset class="row">
        <label class="span-9 va-middle"> 
            <input type="checkbox">
            Remember Me
        </label>
        <span class="span-3 va-middle text-right">
            <button class="button-brand-1" type="submit">Submit</button>
        </span>
    </fieldset>
</form>
```

###### Contact Form

```html
<form class="form span-8">
    <fieldset class="row">
        <label class="span-6">
            Username
            <input type="text" required placeholder="example: username">
        </label>
        <label class="span-6">
            Password
            <input type="password" required placeholder="example: 123">
        </label>
    </fieldset> 
    ... 
    <br /> 
    <fieldset>
        <label>
            Select Dropdown
            <select name="browser" required="">
                ...
            </select>
        </label> 
        <br /> 
        <label>
            Your Message
            <textarea rows="5" cols="50" required placeholder="enter your message..."></textarea>
        </label>
    </fieldset>
    <br />
    <fieldset class="row">
        <label class="span-10 va-middle"> 
            <input type="checkbox" />
            Subscribe to our SPAM newsletters?
        </label>
        <span class="span-3 va-middle text-right">
            <button class="button-brand-1" type="submit">Submit</button>
        </span>
    </fieldset>
</form>
```

##### Radio & Checkbox Lists

```html
<form class="form">
    <fieldset>
        <legend>Checkbox List</legend>
        <br />
        <ul class="reset">
            <li>
                <label> 
                    <input type="checkbox" checked />
                    Lorem ipsum dolor sit amet
                </label>
            </li>
            <li>
                <label> 
                    <input type="checkbox" checked />
                    Vestibulum vel nisl dictum
                </label>
            </li>
            ...
        </ul>
    </fieldset>
</form>
```

##### HTML5 Elements (Experimental)

The below elements are only partially supported by modern browsers, but we have included them as they require practically no extra markup, and supporting new elements is alaways good moving forward (where appropriate) so long as a fallback is povided.

```html
<form class="form">
    <!-- Date Picker -->
    <fieldset> 
        <label>
            Pick Date
            <input type="date" min="2015-01-01" max="2020-01-01">
        </label> 
    </fieldset>
    <!-- Range Input -->
    <fieldset>
        <label>
            Range Input
            <input type="range" min="0" value="10" max="100" step="10">
        </label>
    </fieldset> 
    <!-- Color Picker --> 
    <fieldset> 
        <div><label>Pick Color</label></div>
        <input type="color" value="#F62459">
        <input type="color" value="#22A7F0">
        <input type="color" value="#03C9A9">
    </fieldset>
</form>
```

---

#### Headings

```html
assets > styles > scss > elements > _headings.scss
```

To create a heading, add the **heading** class to any element, along with any optional additional styles. These classes only affect the heading's visual appearance, and do not affect the font-size. By default, all heading sizes will be the default browser-applied ones.

Using the available HTML elements, we have assigned different styles to differen tags, following their semantic meanings.

```html
<h4 class="heading">Regular Heading</h4>

<h4 class="heading"><strong>Uppercase Heading</strong></h4>

<h4 class="heading"><em>Thin Text Heading</em></h4>

<h4 class="heading"><b>Heavy Text Heading<b></h4>

<h4 class="heading"><i>Colourful Heading</i></h4>

<h4 class="heading-highlight"><b>Highlighted Heading</b></h4>
```

Alternatively, you can also chain the available styles as classes:

```html
<h4 class="heading-uppercase">Uppercase Heading</h4>

<h4 class="heading-light">Thin Text Heading</h4>

<h4 class="heading-heavy">Heavy Text Heading</h4>

<h4 class="heading-brand-1">Colourful Heading</h4>
```

##### Combining Styles

```html
<h4 class="heading"><b><i>This is a Colorful, Heavy Heading</i></b></h4>
```
Or:

```html
<h4 class="heading-brand-1-heavy">This is a Colorful, Heavy Heading</h4>
```

---

#### Icons

One Nexus comes equipped with the [Font Awesome](http://fortawesome.github.io/Font-Awesome/) icon font set, giving you instant access to over 500 vector icons to use as you please. These icons can easily be resized, reshaped and recolored using CSS.


```html
assets > styles > scss > elements > _icons.scss
```

> One Nexus references the [CDN version](http://www.bootstrapcdn.com/#fontawesome_tab) of Font Awesome by default, but also comes with an optional self hosted version.

> One Nexus uses Font Awesome 4.3.0.

##### Single Icon Example


```html
<i class="fa fa-desktop"></i>
```

##### Using With Buttons

One of the most common use cases of Font Awesome is for creating buttons with icons. Creating a basic button with an icon is simple with One Nexus, just add the icon markup inside [your button](http://www.onenexusproject.com/documentation/elements/general/buttons/) markup, next to the button text. 

```html
<a class="button-brand-2" href="#">
	<i class="fa fa-envelope"></i> Button With Icon
</a>
```

---

#### Images


```html
assets > styles > scss > elements > _images.scss
```

By default, all images are responsive thanks to the addition of **max-width: 100%;** in the CSS, meaning they will never be larger than their container. One Nexus comes with a small set of classes for you to style your images with.

##### Thumbnails

```html
<img src="http://skyux.com/stock-photos/stock1.jpg" class="thumbnail">
```

##### Image Shapes

```html
<!-- Square Image -->
<div class="square">
    <img src="http://skyux.com/stock-photos/stock2.jpg">
</div>

<!-- Circle Image -->
<div class="circle">
    <img src="http://skyux.com/stock-photos/stock14.jpg">
</div>
```

---

#### Lists

```html
assets > styles > scss > elements > _lists.scss
```

##### List with no padding and margin:

```css
<ul class="clear">
    <li>Lorem Ipsum</li>
    <li>Dolor Sit Amet</li>
    <li>Billy Madison</li>
</ul>
```

##### List with no padding, margin and list-style:

```css
<ul class="reset">
    <li>Lorem Ipsum</li>
    <li>Dolor Sit Amet</li>
    <li>Billy Madison</li>
</ul>
```

##### Arrow List

```css
<ul class="arrow-list">
    <li>Lorem Ipsum</li>
    <li>Dolor Sit Amet</li>
    <li>Billy Madison</li>
</ul>
```

##### Grid System Integration

```css
<ul class="row flow-columns arrow-list">
    <li class="span-4">Eu nonummy condimentum</li>
    <li class="span-4">Lorem ipsum dolor sit amet</li>
    <li class="span-4">Hac molestie amet justo quis</li>
    <li class="span-4">Hac molestie amet justo quis</li>
    <li class="span-4">Eu nonummy condimentum</li>
    <li class="span-4">Lorem ipsum dolor sit amet</li>
</ul>
```

---

#### Modal Windows

As of version 2.0, One Nexus now uses [LeanModal.js](http://leanmodal.finelysliced.com.au/), an extremely simple and lightweight modal jQuery plugin.

```html
assets > styles > scss > elements > _modals.scss
```

```html
assets > js > modal.js
```

To create a modal popup, create your content inside an element with the **modal-content** class, and assign it a unique **ID**. To load the content in a modal popup, create an **anchor** tag with **rel="modal"** and **href="#YOURID"**, replacing **#YOURID** with the **ID** of your custom modal content.


```html
<div id="demo-modal" class="modal-content">
    Demo modal!
    <div class="modal-close">
        <i class="fa fa-times"></i>
    </div>
</div>

<a href="#demo-modal" rel="modal">Click Me</a>
```

The modal initialisation call is included in the global.js JavaScript file.

```javascriip
$("[rel*="modal"]").leanModal({ 
    closeButton: ".modal-close" 
});
```

For more available options please visit the [plugin's homepage](http://leanmodal.finelysliced.com.au/).

---

#### Progress Bars

```html
assets > styles > scss > elements > _progress-bars.scss
```

Progress bars are part of the HTML5 spec, but are only partially supported by modern browsers, so we have provided a fallback for those browsers which don't support it.

```html
<progress max="100" value="50">
    <div class="progress-bar">
        <div class="progress" data-progress="50%"></div>
    </div>
</progress>
```

The progress bars use the following script found in the [global.js](http://onenexusproject.com/documentation/features/jquery/) file. The code grabs the **data-progress** attribute value and applies it as an **inline-style** to set the width, keeping your source code clean and inline-style free.

```javascript
$(".progress").each(function() {
    attrProgress = $(this).attr("data-progress");
    $(this).css({ width : attrProgress }); 
});
```

---

#### Tables


```html
assets > styles > scss > elements > _tables.scss
```

To create a styled **table**, add the **table** class to your main table element.


```html
<table class="table">
    <thead>
        <tr>
            <td colspan="3">Optional Table Header</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>COLOR</td>
            <td>DESCRIPTION</td>
            <td>COUNT</td>
        </tr>
        <tr>
            <td>blue</td>
            <td>Lorem ipsum dolor sit amet...</td>
            <td>12</td>
        </tr>
        ...
    </tbody>
    <tfoot>
        <tr>
            <td colspan="3"><small>Optional Table Footer</small></td>
        </tr>
    </tfoot>
</table>
```

Width fixed-layout

```html
<table class="table-fixed">
    ...
</table>
```

---

#### Tabs

```html
assets > styles > scss > elements > _element.scss
```

```html
assets > js > tabs.js
```

Creating a set of tabs requires two things; a tab navigation , and the tab contents. The tab navigation is an unordered list with the **nav** class. Next, create a set of **section** tags, one for each tab item. You can than put any HTML content you desire for your tabs. To choose the default **active** tab, add the **active** class to the appropriate tags (see below). Finally, all of that needs to be wrapped up in a container with the **tabs** class.


```html
<div class="tabs">
    <ul class="nav">
        <li class="active">Tab 1</li>
        <li>Tab 2</li>
        <li>Tab 3</li>
    </ul>
    <section class="active"> 
        <!-- tab content -->
    </section>
    <section> 
        <!-- tab content -->
    </section>
    <section> 
        <!-- tab content -->
    </section>
</div>
```

To create a set of tabs with full-width navigation items, use the **tabs-full** class.

```html
<div class="tabs-full">
    ...
</div>
```
---

#### Tooltips

As of version 2.0, One Nexus now uses the [tipsy](http://onehackoranother.com/projects/jquery/tipsy/) jQuery plugin to handle tooltips. Make sure to visit the plugin's homepage for the full documentation.

```html
assets > styles > scss > elements > _tooltips.scss
```

```html
assets > js > tooltip.js
```

```html
<a rel="tooltip" href="#" tooltip="Demo Tooltip">Hover Me</a>
```

The tooltip initialisation call is included in the global.js JavaScript file.

```javascript
$(function() {
    $("a[rel*="tooltip"]"").tipsy({
        fade: true, 
        gravity: "s"
    });
});
```
---

## Modules

Each web page can be considered to be a group of modules in a grid which contain the website's content. A module is typically the layout and structure of one or more [elements](http://www.onenexusproject.com/documentation/elements/) to form a specific section of a web page.

The default modules which come with One Nexus are designed to be as minimal as possible, allowing you to build on them and add your own styles rather than having to removing a load of styles you don't need. Each module has its own SASS partial which is located in the **modules** folder located here:

```html
assets > styles > scss > modules > _your-module.scss
```

Every module must be included in the main **app.scss** file &#42;. All provided modules are included by default, and you are encouraged to remove any you don't need and add your own where neccessery.

*&#42;Except for [Nexted Modules](http://www.onenexusproject.com/documentation/modules/#nested-modules)*

```css
/******************************************************************
Skeleton
******************************************************************/

...

/******************************************************************
Elements
******************************************************************/

...

/******************************************************************
Modules
******************************************************************/

@import "modules/breadcrumb";
@import "modules/flyout-navigation";
@import "modules/footer";
@import "modules/header";
@import "modules/logo";
@import "modules/navigation";
@import "modules/scroll-top";
```

#### Nested Modules

It is possible to nest smaller modules within larger modules. Sometimes this may be done out of personal preference, and in few cases may even be beneficial. The below is an example of the latter from the **main-nav** module from One Nexus. This module also contains nested within it the **dropdown-nav** module.

```css
.main-nav {

	ul {
	    li {
			display: inline-block;
			position: relative;
	    	// Import the dropdown nav
	    	@import "dropdown-nav";
	    }
	}

} // end .main-nav 
```

> Because the nested module is being included in the main module, it does not need to be included in **app.scss**.

#### Creating a Mobile-First Responsive Module

Below is an example of how to build a mobile first responsive module using our defined breakpoints. The concept is simple; start out with the core CSS for the module and then gradually add styles for larger resolutions.

```css
/* Main Slider
================================================================ */

.main-slider {

//-----------------------------------------------------------------
// Core Layout
//-----------------------------------------------------------------

	background-color: $grey;	
	color: white;
	position: relative;
	section {		
		height: 375px;
		background-color: $brand-1;
		background-image: url(../../images/slide-1-bg.jpg);
		background-repeat: no-repeat;
		background-position: center top;
	}

//-----------------------------------------------------------------
// Larger Resolutions
//-----------------------------------------------------------------

	/* These styles will take affect when the resolution is at least 
	as wide as the value defined by the $breakpoint-3 variable */
	@media (min-width: $breakpoint-3) {
		section {
			height: 450px;
		}
	}

	/* These styles will take affect when the resolution is at least 
	as wide as the value defined by the $breakpoint-4 variable */
	@media (min-width: $breakpoint-4) {
		section {
			background-size: cover;
		}
	}

} // end .main-slider
```

---

### Header 

```html
assets > styles > scss > modules > _header.scss
```

The **header** module by default consists of the [logo](http://onenexusproject.com/documentation/modules/header/) module and the [main navigation](http://onenexusproject.com/documentation/modules/main-nav/) module (note that these modules are not imported in the header SCSS file). The header has been designd to be as simple to build upon as possible whilst still retaining all traditional concepts of a website header.

#### Key Points

* The ID of **app-nav** is used as a jQuery selector for creating the [Flyout Navigation](http://onenexusproject.com/documentation/modules/flyout-nav).
* The **header-wrapper** class acts as a faux table, providing flexibility for the logo and navigation's positioning.
* Both the logo and app-nav elements are displayed as faux table-cells, so they can be both horizontally and vertically aligned whilst retianing full scalability.

```html
<header class="app-header">
    <div class="container">
        <div class="header-wrapper">
            <!-- Logo -->
            <div class="logo">
                <a href="/">
                    <img src="assets/images/logo.png" alt="One Nexus" />
                </a>
            </div>
            <!-- Main-Nav -->
            <nav class="app-nav" id="app-nav">
                <ul>
                    <li><a href="#">Header Link 1</a></li>
                    <li><a href="#">Header Link 2</a></li>
                    <li><a href="#">Header Link 3</a></li>
                </ul>
            </nav>
        </div>
    </div>
</header>
```

> For semantic purposes we recommend using the **&#60;header>** HTML5 element for your **header**'s wrapper element.

---

### Footer

```html
assets > styles > scss > modules > _footer.scss
```

#### Key Points

* The **footer-wrapper** class acts as a faux table, providing flexibility for the copyright and navigation's positioning.
* Both the **copyright** and **footer-nav** sections are displayed as faux **table-cells**, so they can be both horizontally and vertically aligned whilst retianing full scalability.


```html
<footer class="app-footer">
    <div class="container">
        <div class="footer-wrapper">
            <!-- Copyright Section -->
            <h4 class="copyright">© Your Website 2014</h4>
            <!-- Footer Navigation -->
            <nav class="footer-nav"> 
                <ul>
                    <li><a href="#">Footer Link 1</a></li>
                    <li><a href="#">Footer Link 2</a></li>
                    <li><a href="#">Footer Link 3</a></li>
                </ul>
            </nav>
        </div>
    </div>
</footer>
```

> For semantic purposes we recommend using the **&#60;footer>** HTML5 element for your footer's wrapper element.

---

### Main Navigation

```html
assets > styles > scss > modules > _navigation.scss
```

> This module also contains the **_dropdown-nav.scss** module.

The markup for the main navigation is a regular un-ordered list (which can accommodate an infinite number of sub-menus), wrapped up in an element with the **app-nav** class.

###### Basic Example

```html
<nav class="app-nav" id="app-nav">
    <ul>
        <li><a href="#">Lorem Ipsum</a></li>
        <li><a href="#">Alpha Bravo</a></li>
        <li><a href="#">Dolor Sit Amet</a></li>
    </ul>
</nav>
```

###### With Multi-Level Dropdown Menu

```html
<nav class="app-nav" id="main-nav">
    <ul>
        <li><a href="#">Lorem Ipsum</a></li>
        <li>
            <a href="#">Dropdown Menu</a>
            <ul>
            	<li><a href="#">Alpha Alpha</a></li>
            	<li><a href="#">Bravo Alpha</a></li>
            	<li>
            		<a href="#">Dropdown Alpha</a>
            		<ul>
		            	<li><a href="#">Alpha Bravo</a></li>
		            	<li><a href="#">Bravo Bravo</a></li>
		            	<li><a href="#">Charlie Bravo</a></li>
		            </ul>
            	</li>
            </ul>
        </li>
        <li><a href="#">Dolor Sit Amet</a></li>
    </ul>
</nav>
```

> For semantic purposes we recommend using the **&#60;nav>** HTML5 element for your **navigation**'s wrapper element.

---

### Logo

```html
assets > styles > scss > modules > _logo.scss
```

##### Plain Text Logo

```html
<div class="logo">
    <a href="/">One Nexus</a>
</div>
```

##### Image Logo

```html
<div class="logo">
    <a href="/">				                
		<img src="/assets/images/logo.png" alt="One Nexus" />
    </a>
</div>
```

---

### Breadcrumb

```html
assets > styles > scss > modules > _breadcrumb.scss
```

One Nexus comes with a basic breadcrumb module ready to build upon. The markup for a breadcrumb is an un-ordered list wrapped in an element with the **breadcrumb** class.

```html
<nav class="breadcrumb">
    <ul>
        <li><a href="/">One Nexus</a></li>
        <li><a href="/documentation/">Documentation</a></li>
        <li><a href="/documentation/modules/">Modules</a></li>
        <li>Breadcrumb</li>
    </ul>
</nav>
```

> For semantic purposes we recommend using the **&lt;nav>** HTML5 element for your breadcrumb's wrapper element.

---

### Flyout Navigation

```html
assets > styles > scss > modules > _off-canvas.nav.scss
```

```html
assets > js > flyout-navigation.js
```

The flyout navigation is a **clone** of the **app-navigation**, which is located off-canvas by default. It's visibility can be toggled by creating an element with an ID of **flyout-trigger** (the navigation is toggled when this element is clicked). The reason this module has been included is because it is perfect for use on mobile devices, and we feel every website should have such a solution.

We have provided a default navigation trigger button for you to use - to avoid having extra CSS to create a unique icon, the provided icon is built using our framework classes. The class **max-break-3** means only show the element when the resolution is **at most** the value defined by **$breakpoint-3**.

```html
<span class="icon-lrg flyout-trigger max-break-3" id="flyout-trigger">
    <i class="fa fa-bars nav-open"></i>
    <i class="fa fa-times nav-close"></i>
</span>
```

The below code is neccessery so the flyout-navigation script has a place to clone the **app-navigation** into.

```html
<nav class="flyout-container" id="flyout"></nav>
```

Finally, the site-overlay, which is hidden by default and made visible when the flyout-navigation is triggered. It is used as a physical mask to focus attention to the flayout-navigation and also acts as a clickable trigger to close the menu.

```html
<div class="site-overlay" id="site-overlay"></div>
```
---

### Scroll to Top

```html
assets > styles > scss > modules > _off-canvas.nav.scss
```

```html
assets > js > global.js
```

One Nexus comes with a "scroll-to-top" button, which works off the [smooth-scroll](http://onenexusproject.com/documentation/features/jquery/) script.

The below code can be placed anywhere; by default it is placed outside of the **#site-content** wrappear and appears in the bottom right of the page. The button links to the **#site-content** ID by default, but you can change this to any other ID.

```html
<a class="icon-lrg-border-grey scroll-top" href="#site-content">
    <i class="fa fa-angle-up"></i>
</a> 
```

By default, the button appears after **350** pixels have been scrolled. Change this value in the below code to also change when the button should appear.

```javascript
$(window).bind("scroll", function() {
    if ($(this).scrollTop() > 350) {
        $(".scroll-top").addClass("active");
    } else {
        $(".scroll-top").stop().removeClass("active");
    }
});
```

---

## Credits

* [HTML5 Boilerplate](http://html5boilerplate.com/)
* [Modernizr](http://modernizr.com/)
* [Normalize](http://necolas.github.io/normalize.css/)
* [Font Awesome](http://fortawesome.github.io/Font-Awesome/)
* [Pushy](http://www.christopheryee.ca/pushy/)
* [Owl Carousel](http://owlgraphic.com/owlcarousel/)
* [Tipr](http://www.tipue.com/tipr/)
* [Magnific Popup](http://dimsemenov.com/plugins/magnific-popup/)