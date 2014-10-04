# About One Nexus

One Nexus was created by [Edmund Reed](http://edmundreed.co.uk/), a UK based web/UX designer and front-end developer.

Put simply, One Nexus is a front end solution to building modern and responsive websites fast and efficiently. It is a combination of tools, ideas, principles and existing resources to provide a sensible, intuitive and easy to customize solution to your front end needs. There are many reasons why it was created, but the main reason for its existance is to offer any one who uses it a useful headstart for their next project.

Visit the [One Nexus homepage](http://www.onenexusproject.com/) for more help and information.

# One Nexus Documentation

For a more complete experience, visit the official [One Nexus documentaion](http://www.onenexusproject.com/documentation/) page.

## Table of Contents

* [Getting Started]()
* [Project Architecture]()
* [Building Your Website]()
	* [Basic HTML Structure]()
* [Features]()
	* [Responsive Grid system]()
    	* [Grid Structure]()
        * [Example]()
        * [Breakpoints]()
        * [Advanced Usage]()
        	* [Aligning columns]()
            * [Block Columns]()
            * [Custom Column Collapsing]()
    * [HTML5 Boilerplate]()
    * [jQuery & Plugins]()
    	* [Adding Scripts]()
        * [Interactive Elements & Modules]()
        * [UI/UX Enhancements]()
        	* [Scroll to Top/Smooth Scrolling]()
        * [Minifying Scripts]()
    * [Google Fonts]()
* [Skeleton]()
	* [Base]()
	* [Grid]()
	* [Helpers]()
	* [Normalize]()
	* [Print Styles]()
	* [Variables]()
* [Elements]()
	* [General Elements]()
		* [Alert Bars]()
		* [Buttons]()
		* [Forms]()
		* [Images]()
		* [Icons]()
		* [Tables]()
	* [Interactive Elements]()
		* [Accordions]()
		* [Carousels]()
		* [Modals]()
		* [Tabs]()
		* [Tooltips]()
	* [Typographic Elements]()
		* [Fonts]()
		* [Headings]()
		* [Links]()
		* [Lists]()
		* [Quotes]()
* [Modules]()
	* [Breadcrumb]()
	* [Header]()
	* [Footer]()
	* [Logo]()
	* [Main Nav]()
	* [Off-Canvas Navigation]()
* [Credits]()
* [Further Support]()

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

One of the most important features of One Nexus is the responsive grid system. It allows you to build highly reliable websites which work great on all devices and resolutions thanks to the use of percentages instead of fixed widths.

Unlike most grid systems out there, our columns use inline-block display instead of floating them, making them more flexible.

#### Grid Structure

```html
assets > styles > scss > skeleton > _variables.scss
```

This is where you set the main structural variables for your project's framework. Change these to any value you desire, or leave them as they are - the default values work well in most cases.

```css
/******************************************************************
Skeleton
******************************************************************/

$main-width       :   1200px;
$max-width        :   90%;

$columns          :   12;
$gutter           :   2.5%;

/*****************************************************************/
```

##### Main Width ($main-width)

This is where you set the width for the main site container - pretty self-explanatory. This variable can any numeric value; pixels, percentage, em or rem.

##### Max Width ($max-width)

This variable sets the maximum allowed width for the main site container, and will override the previous **$main-width** variable where applicable. It is recommended you use a high percentage for this value, as this is what stops the page from being too wide on smaller resolutions.

##### Columns ($columns)

This is where you can set the number of columns for your grid. Twelve is popularly accepted as the number to use as it is divisible by 2, 3, 4 and 6, allowing for a more flexible system. Feel free to override this if you know what you're doing, our math will calculate your grid no matter the value you enter here.

##### Gutter ($gutter)

The gutter is the gap between each column. As our grid system uses percentage widths, the value you enter here must be a percentage and will not work if you enter a px value.

#### Example Using Default Values

It is typical to wrap your website's content in a main **container** or wrapper class. The container class uses the width set by the **$main-width** variable.

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

The total number of column spans should equate to the value defined by the **$columns** variable. Using our default example of 12, we have created a row consiting of an **8 column span** and a **4 column span**, which adds up to our total of 12 columns.

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

By default each column expands to 100% width when the resolution is less than the value defined by $breakpoint-3.

```css
/******************************************************************
Breakpoints
******************************************************************/

$breakpoint-0     :   0px;
$breakpoint-1     :   460px;
$breakpoint-2     :   720px;
$breakpoint-3     :   940px;
$breakpoint-4     :   1200px;
$breakpoint-5     :   1400px;

$bp-values        :   $breakpoint-0, $breakpoint-1, $breakpoint-2, $breakpoint-3, $breakpoint-4, $breakpoint-5;

$bp-names         :   bp0, bp1, bp2, bp3, bp4, bp5;

/*****************************************************************/
```

The **$bp-values** and **$bp-names** variables are used to generate classes for the [custom column collapsing](http://www.onenexusproject.com/documentation/features/responsive-grid-system/#custom-column-collapsing) feature. To read about how to customize and create your own mobile-first responsive modules using these breakpoint values, header over to the One Nexus [modules](http://www.onenexusproject.com/documentation/modules) page.

#### Advanced Usage

Our grid system has much more to offer than the basic structure we have show you. Learn what else you can achieve with One Nexus to further enhance your project's framework.

##### Aligning Columns

Thanks to the use of **display: inline-block;** you are easily able to align your columns both horizontally and vertically.

###### Horizontal Aligning

The below example shows how to horizontally align a row of columns that do not add up to the value defined by $columns.

```html
<div class="container">
	<div class="row text-center">
		<div class="span-3">
			...
		</div>
	</div>
</div>
```

Horizontally aligning the columns like this is simple; all that is required is the addition of the **text-align** property to the **.row** class, choosing either left, right or center as desired. Thanks to our [Helper Classes](http://www.onenexusproject.com/documentation/skeleton/helpers/), you can also simply add the class **text-left**, **text-right** or **text-center** directly to the row.

###### Vertical Aligning

The example below shows how you can easily control the vertical alignment of your columns.

By default, columns are set to vertical-align: top.

```html
<div class="container">
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
</div>
```

Aligning your columns vertically is as simple as setting the **vertical-align** property on the columns you want to align. The most common values for this property are top, middle and bottom. You can also use the provied [Helper Classes](http://www.onenexusproject.com/documentation/skeleton/helpers/) of **va-top**, **va-middle** and **va-bottom** by adding them to any column.

You can only vertically align columns relative to the tallest column in a row.


##### Block Columns

Block columns are similar to regular columns except that they have no gutter (no margin) and they are all equal height to each other.

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

To create a row of block columns, simply add the **block-columns** class to your row which contains the target columns.

##### Custom Column Collapsing

By default the columns collapse to 100% width at **$breakpoint-3** so that they are stacked vertically. Sometimes you may have a row of colums which you need to collapse at a larger or smaller resolution than others. Setting the width to collapse your row of columns is made simple with One Nexus, as seen in the following example.

```html
<div class="container">
	<div class="row bp2">
		<div class="span-6">
			...
		</div>
		<div class="span-6">
			...
		</div>
	</div>
	<div class="row bp4">
		<div class="span-6">
			...
		</div>
		<div class="span-6">
			...
		</div>
	</div>
</div>
```

To manually override the default collapsing of **$breakpoint-3** you can use the following classes: **bp1**, **bp2**, **bp3**, **bp4** and **bp5** to choose which breakpoint width you would like the columns to collapse at. Simply add your desired class to the main **row** which contains your columns. For example, if you wanted your columns to collapse at the width defined by the **$breakpoint-2** variable, you would add the **bp2** class to your row.

### HTML5 Boilerplate

One Nexus is built off the popular [HTML5](http://html5boilerplate.com/) Boilerplate, making it a fast, robust and adaptable solution from the very beginning. Many native features of One Nexus are included as a result of using H5BP as a base template, including:

* [Normalize.css](http://necolas.github.io/normalize.css/) for CSS normalizations and common bug fixes
* [jQuery](http://jquery.com/) via CDN, with a local fallback
* [Modernizr](http://modernizr.com/) build for feature detection
* Useful CSS [Helper Classes](http://www.onenexusproject.com/documentation/skeleton/helpers/)
* Default [print CSS](http://www.onenexusproject.com/documentation/skeleton/print/), performance optimized


### jQuery & Plugins

One Nexus comes with with jQuery included out of the box. We use [Google's CDN version](https://developers.google.com/speed/libraries/devguide#jquery) by default, with the option to switch to a self hosted version instead. The scripts that come with One Nexus come in two types: complementary scripts for our Interactive Elements and Modules which each have ther own JS file, and scripts for general UI/UX enhancements which are found in global.js.

By default, jQuery is included at the bottom of index.html, linking to [Google's hosted version](https://developers.google.com/speed/libraries/devguide#jquery).

```html

	...
    
	<body>

		...

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
    
    ...

```

It is essential that all jQuery scripts and plugins are included after the link to jQuery itself.

By default we do not minify our JS files. When your project goes live, we recommend that you minify all of your assets.

It is recommended that you use one of the jQuery copies from the [Google Hosted Libraries](https://developers.google.com/speed/libraries/), as included by default with One Nexus. However, should you decide to use your own hosted version, we have also provided the option for that too, directly underneath. Simply uncomment it out from the code, and delete the Google hosted version.

#### Adding Your Own Scripts

Due to the open nature of One Nexus, there is no set place for you to add your own scripts, it's completely up to you. The default structure of our scripts is based off what the script is for. For scripts which complement our [Interactive CSS Elements](http://www.onenexusproject.com/documentation/elements/interactive/) we have created a seperate JS file for each element. For general UI/UX enhancements, plugin initialisations and scripts that affect global modules we have put them in our global.js file.

#### Interactive Elements & Modules

Typically, most [Interactive CSS Elements](http://www.onenexusproject.com/documentation/elements/interactive/) require some additional jQuery code for their functionality. In these instances (which is the case for all the default interactive elements which come with One Nexus), each interactive element has its own JS file.

##### Interactive Elements

* [Accorsions](http://www.onenexusproject.com/documentation/elements/interactive/accordions)
* [Carousels](http://www.onenexusproject.com/documentation/elements/interactive/carousels/)
* [Modals](http://www.onenexusproject.com/documentation/elements/interactive/modal-windows/)
* [Tabs](http://www.onenexusproject.com/documentation/elements/interactive/tabs/)
* [Tooltips](http://www.onenexusproject.com/documentation/elements/interactive/tooltips/)

##### Interactive Modules

* [Off-Canvas Navigation](http://www.onenexusproject.com/documentation/modules/off-canvas-nav/)

#### UI/UX Enhancements

Found within our **global.js** file are a load of tasty jQuery treats to enhance your project's UI and UX. Some of the code here is required for some of the default [Modules](http://www.onenexusproject.com/documentation/modules/)' and [Interactive Elements](http://www.onenexusproject.com/documentation/elements/interactive/)' functionality, whereas the rest is for optional enhancements.

##### Scroll to Top/Smooth Scrolling

This nifty little feature is something we believe every website should have (which is why we've included it!). It displays a button in the bottom-right hand side of the page when the user has scrolled down more than **350px**, which scrolls the user back to the top of the page when clicked.

```javascript
$(window).bind("scroll", function() {
    if ($(this).scrollTop() > 350) {
        $(".scroll-top").addClass("active");
    } else {
        $(".scroll-top").stop().removeClass("active");
    }
});
```

The script works by adding/removing the **active** class from the button - the actual fade in/fade out animation effects are controlled by CSS in the following partial:

```html
assets > styles > scss > elements > _scroll-top.scss
```

The scroll-to-top button is included by default in the provided **index.html** file, and can be added to other pages by adding the following snippet to the bottom of your page:

```html
<a class="fa fa-angle-up scroll-top" href="#site-content"></a> 
```

In order for this feature to work properly, your **body** element must be wrapped in a container with an id of **#site-content** applied to it.

The smooth page scrolling animation is achieved with the following script, which also works for all other same-page anchors:
cs

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

#### Minifying Scripts

Everyone has their own way of doing things, so we don't want to dictate how to organise your project. That's why all of our assets are un-minified by default - so you can have complete control over your project. We do not recommend serving un-minified assets (including both scripts and CSS) to your users as it can have negative impacts on performance. This is why we strongly suggest that you minify all scripts and CSS for production sites, leaving the un-minified assets for development purposes.

Whilst we strongly recommend minifying your scripts and CSS, it is by no means required if you are not comfortable doing so.

[Read our guide on minifying assets to improve your project's performance.](http://www.onenexusproject.com/tutorials/minify-your-assets-to-improve-performance/)

### Google Fonts

One Nexus comes ready to use with Google Fonts out of the box, allowing you to quickly and easily manage your website's typography. Your project is by no menas limited to using only Google Fonts, they are only included as a quick starting point, and switching them out for other web fonts or a self hosted soltion is simple.

[Visit the google fonts homepage](https://www.google.com/fonts#).

## Skeleton

### Base

This is where all the core CSS for your project is placed. It contains the main structural CSS as well as some other useful snippets. The base SCSS partial is located in the **skeleton** folder:


```javascript
assets > styles > scss > skeleton > _base.scss
```

#### The CSS

We have broken the CSS down to individual chunks so we can analyse it more easily. Below you will find everything that appears in the default **_base.scss** partial, with a breif overview about what it does and why we've included it.

```css
html, body {
	padding: 0;
	margin: 0;
}
```

We remove any default **padding** and **margin** applied by the browser.

---

```css
    html {
    overflow-x: hidden;
    }
```

We set the HTML element to **overflow-x: hidden** to hide any unwated horizontal scroll.

---

```css
body {
    line-height: 1.4;
    font-family: $font-1;
    color: $main-text-color;
	background-color: $background-color;
	font-size: $small-font-size;
    @media (min-width: $breakpoint-3) {
    	font-size: $base-font-size;
	}
}
```

This is where we set the main styling for the **body** element; we set the typography and our main background. We apply the **$small-font-size** variable for lowest resolutions, and then apply the main **$base-font-size** variable in a media query set at the width defined by **$breakpoint-3**.

---

```css
.container {
	width: $main-width;
	max-width: $max-width;
	margin: 0 auto;
}
```

This is our main **container** element. We set the **width** and **max-width** using our [variables](http://www.onenexusproject.com/documentation/skeleton/variables/), and horizontally center the container in the page with margin: 0 auto.

---

```css
.row { 
    letter-spacing: -0.31em; /* Webkit: collapse white-space between units */
    *letter-spacing: normal; /* reset IE < 8 */
    *word-spacing: -0.43em; /* IE < 8: collapse white-space between units */
    text-rendering: optimizespeed; /* Webkit: fixes text-rendering: optimizeLegibility */
}

.opera-only :-o-prefocus,
.row {
    word-spacing: -0.43em;
}
```

This code may look obscure and awkward, but it is the magic that allows us to use **inline-block** in a **cross-browser** environment for our columns. By default, adding **display: inline-block** to an element causes a natural [whitespace](http://css-tricks.com/fighting-the-space-between-inline-block-elements/) to appear between each element, which can vary in width from font to font and browser to browser. Indeed, this has [caused many people many problems](http://stackoverflow.com/search?q=inline-block+column), and there are plenty of go-to [hacky and impractical work arounds](http://davidwalsh.name/remove-whitespace-inline-block), none of which are really suitble for a production environment. However, the above code when combined with our grid [system](http://www.onenexusproject.com/documentation/skeleton/grid/) produces completely usable and functional columns which use **inline-block** and have **no white-space**. And to top it all off, it works on all modern browsers!

---

```css
* {
    letter-spacing: normal;
    word-spacing: normal;
    text-rendering: auto;
    box-sizing: border-box;
}
```

The famous [&lowast; { box-sizing: border-box }](http://www.paulirish.com/2012/box-sizing-border-box-ftw/) has been included by default with One Nexus. We also apply a global reset of **letter-spacing**, **word-spacing** and **text-rendering** to make up for any effects caused by our column white-space removal.

---

```css
h1, h2, h3, h4, h5, h6, hgroup, p, ul, ol, dd, figure, pre, table, fieldset, legend, hr {
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

---

```css
::selection {
	background-color: $brand-1;
	color: #fff;
	text-shadow: none;
}

::-moz-selection {
	background-color: $brand-1;
	color: #fff;
	text-shadow: none;
}
```

This is where you can set the default appearance for highlighted text on your project. Many websites often miss this simple and subtle effect, but we think it is a definite must for any project.

### Grid

One of the most important features of One Nexus is the responsive grid system. It allows you to build highly reliable websites which work great on all devices and resolutions thanks to the use of percentages instead of fixed widths. The grid SCSS partial is located in the **skeleton** folder:


```html
assets > styles > scss > skeleton > _grid.scss
```

#### The CSS

We have broken the CSS down to individual chunks so we can analyse it more easily. Below you will find everything that appears in the default **_grid.scss** partial, with a breif overview about what it does and why we've included it.

---

```css
[class*="span"] {
    display: inline-block;
    zoom: 1; *display: inline; /* IE < 8: fake inline-block */
    vertical-align: top;
	margin-left: $gutter;
	&:first-of-type {
		margin-left: 0;
	}
}
```

This is the CSS for our individual columns. We add a display of **inline-block** so that they align next to each other, and set their vertical-align to **top**. We add a gutter between our columns by adding a **margin-left** using the value defined by the [$gutter variable](http://www.onenexusproject.com/documentation/skeleton/variables/), and then remove it from the first column (as it should sit flush with the container).

---

```css
@for $i from 1 through $columns {
	.span-#{$i} {			
		width: ( (100/$columns) * $i) - ( ( ((100 / ((100/$columns) * $i)) - 1) * $gutter ) / ( $columns / $i ) )
	}
}
```

This beautiful equation calculcates and generates the CSS for each column width. It uses the **$columns** and **$gutter** [variables](http://www.onenexusproject.com/documentation/skeleton/variables/) to create the grid-system, and will create a grid for whatever values you set them as.

---

```css
.row {

/******************************************************************
Default Column Stacking
******************************************************************/

	@media (max-width: $breakpoint-3) {
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

/******************************************************************
Custom Column Stacking
******************************************************************/

	@function bp($name) {
		@return nth($bp-values, index($bp-names, $name))
	}

	@each $name in $bp-names {
		@media (max-width: bp($name)) {
			&.#{$name} {
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

} // End .row
```

This code allows for the [custom column collapsing](http://www.onenexusproject.com/documentation/features/responsive-grid-system/#advanced-usage) feature, and also sets the default point at which the columns should collapse to 100% width and stack on top of each other. The equation pulls the values from the [$breakpont variables](http://www.onenexusproject.com/documentation/skeleton/variables/) to create a class for each breakpoint. 

To learn how to use this feature on your project, visit the [Responsive Grid System](http://www.onenexusproject.com/documentation/features/responsive-grid-system/) documentation page.

---

```css
.row {
	
	&.block-columns {
		> [class*="span"] {
			display: table-cell;
		}
	}

} /* End Row */
```
This code allows you to create [block columns](http://www.onenexusproject.com/documentation/features/responsive-grid-system/#advanced-usage) in your project. It's amazingly simple how it works, it simply adds the **display: table-cell** property to each column in the row, which removes the gutter and makes them all equal height.

To learn how to use this feature on your project, visit the [Responsive Grid System](http://www.onenexusproject.com/documentation/features/responsive-grid-system/) documentation page.

### Helpers

```css

```

