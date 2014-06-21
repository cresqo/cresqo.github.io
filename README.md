<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
nyp_wadp_proj
=============
=======
Readmore.js
========

A smooth, lightweight jQuery plugin for collapsing and expanding long blocks of text with "Read more" and "Close" links. 

The required markup for Readmore.js is also extremely lightweight and very simple. No need for complicated sets of `div`s or hardcoded class names, just call ``.readmore()`` on the element containing your block of text and Readmore.js takes care of the rest.

Readmore.js is compatible with all versions of jQuery greater than 1.7.0.

## Example ##

    $('article').readmore();
  
Yes, it's that simple. You can change the speed of the animation, the height of the collapsed block, and the open and close elements.

    $('article').readmore({
      speed: 75,
      maxHeight: 500
    });

## The options: ##

* `speed: 100` (in milliseconds)
* `maxHeight: 200`  (in pixels)
* `heightMargin: 16` (in pixels, avoids collapsing blocks that are only slightly larger than `maxHeight`)
* `moreLink: '<a href="#">Read more</a>'`
* `lessLink: '<a href="#">Close</a>'`
* `embedCSS: true` (insert required CSS dynamically, set this to `false` if you include the necessary CSS in a stylesheet)
* `sectionCSS: 'display: block; width: 100%;'` (sets the styling of the blocks, ignored if `embedCSS` is `false`)
* `startOpen: false` (do not immediately truncate, start in the fully opened position)
* `expandedClass: 'readmore-js-expanded'` (class added to expanded blocks)
* `collapsedClass: 'readmore-js-collapsed'` (class added to collapsed blocks)
* `beforeToggle: function() {}` (called after a more or less link is clicked, but *before* the block is collapsed or expanded)
* `afterToggle: function() {}` (called *after* the block is collapsed or expanded)

If the element has a `max-height` CSS property, Readmore.js will use that value rather than the value of the `maxHeight` option.

### The callbacks:

The callback functions, `beforeToggle()` and `afterToggle`, both receive the same arguments: `trigger`, `element`, and `expanded`.

* `trigger`: the "Read more" or "Close" element that was clicked
* `element`: the block that is being collapsed or expanded
* `expanded`: Boolean; `true` means the block is expanded

#### Callback example:

Here's an example of how you could use the `afterToggle` callback to scroll back to the top of a block when the "Close" link is clicked.

```javascript
$('article').readmore({
  afterToggle: function(trigger, element, expanded) {
    if(! expanded) { // The "Close" link was clicked
      $('html, body').animate( { scrollTop: element.offset().top }, {duration: 100 } );
    }
  }
});
```

### Recommended CSS:

The intention behind Readmore.js is to use CSS for as much functionality as possible. In particular, "collapsing" is achieved by setting `overflow: hidden` on the containing block and changing the `height` property.

By default, Readmore.js inserts the following CSS:

```css
.readmore-js-toggle, .readmore-js-section {
  display: block;
  width: 100%;
}
.readmore-js-section {
  overflow: hidden;
}
```

You can override the the first set of rules when you set up Readmore.js like so:

```javascript
$('article').readmore({sectionCSS: 'display: inline-block; width: 50%;'});
```

If you want to include the necessary styling in your site's stylesheet, you can disable the dynamic embedding by passing `embedCSS: false` in the options hash.

```javascript
$('article').readmore({embedCSS: false});
```

## Removing Readmore

You can remove the Readmore functionality like so:

```javascript
$('article').readmore('destroy');
```

Or, you can be more surgical by specifying a particular element:

```javascript
$('article:first').readmore('destroy');
```
>>>>>>> 40c74c090f234a75d33386ab10586c11d901707f
=======
Easy Responsive Tabs to Accordion
=================================

Easy responsive tabs - is a lightweight jQuery plugin which optimizes normal horizontal or vertical tabs to accordion on multi devices like: web, tablets, Mobile (IPad &amp; IPhone). This plugin adapts the screen size and changes its form accordingly.


Features
=========

+ Horizontal / Vertical Tabs to Accordion
+ Tabs and accordion are created entirely with jQuery
+ Supports multiple sets of tabs on same page
+ Cross browser compatibility (IE7+, Chrome, Firefox, Safari and Opera)
+ Multi device support (Web, Tablets & Mobile)
+ Link directly to specified tab (works with multiple instances)
+ Maintains state of tabs when navigating away from page and then returning using back or forward (if browser supports the History API)

Demo
====

http://webthemez.com/demo/easy-responsive-tabs/Index.html


How to use
==========

=> Included jQuery file (minimum jQuery-1.5.1.min.js)
=> Included easyResponsiveTabs.js
=> Include responsive-tabs.css

=> Here is the Markup for Tabs structure:

        <div id="demoTab">          
            <ul class="resp-tabs-list">
                <li> .... </li>
                <li> .... </li>
                <li> .... </li>
            </ul> 

            <div class="resp-tabs-container">                                                        
                <div> ....... </div>
                <div> ....... </div>
                <div> ....... </div>
            </div>
        </div>    
        
=> Call the easyResponsiveTabs function:

        $('#demoTab').easyResponsiveTabs();
        
=> With optional parameters:

        $("#demoTab").easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion           
            width: 'auto', //auto or any custom width
            fit: true,   // 100% fits in a container
            closed: false, // Close the panels on start, the options 'accordion' and 'tabs' keep them closed in there respective view types
            activate: function() {}  // Callback function, gets called if tab is switched
        });

=> Linking to Tabs:
        
        http://yoursite.com/tabs.html#{TAB ID}{TAB NUM}
        http://yoursite.com/tabs.html#demoTab2
        
        Multiple Instances:
        http://yoursite.com/tabs.html#{TAB ID 1}{TAB NUM}|{TAB ID 2}{TAB NUM}
        http://yoursite.com/tabs.html#demoTab2|demoTwo3

For any support
===============
Samson 
Email: samson3d@gmail.com
>>>>>>> 0cf31ed5f17f3463fa65beb4f43e5730421199ca
=======
Please refer to [jQuery Mambo Plugin](http://valeriobarrila.com/mambo.html "jQuery Mambo Plugin") page because at the moment I didn't made a good README on GitHub (as you can see)

>>>>>>> 99a281af0f5ac471460a92f0a4b5649603935cbb
