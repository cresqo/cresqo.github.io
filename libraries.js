/*
 * Mambo jQuery Plugin
 * @author: Valerio Barrila aka NinjaTux
 * @twitter: ninjatux2k
*/!function(a){"use strict";function i(b,c){this.element=b,this.options=a.extend(!0,{},f,c),this._defaults=f,this._name=e,this.init()}var e="mambo",f={percentage:100,circleColor:"#F2AC29",circleBorder:"#F2AC29",ringStyle:"percentage",ringColor:"#F2762E",ringBackground:"#CCC",labelColor:"#FFF",displayValue:!0,drawShadow:!1},g=Math.PI/180,h=2*Math.PI;i.prototype={init:function(){this.checkCanvas()&&(this.context=this.element.getContext("2d"),this.percentage=3.6*this.options.percentage,this.points=this.getPoints(),a(this.element).css({width:this.points.width+"px",height:this.points.width+"px"}),this.linesAndRadiuses=this.getLinesAndRadiuses(),this.options.percentage>0&&this.drawPercentage(),"full"===this.options.ringStyle&&360!==this.percentage&&this.drawExtraPercentage(),this.drawInternalCircle(),this.options.drawShadow&&this.drawShadow(),this.options.image?this.drawImage():this.drawText())},drawInternalCircle:function(){this.context.beginPath(),this.context.moveTo(this.points.x,this.points.x),this.context.arc(this.points.x,this.points.x,this.linesAndRadiuses.internalRadius,0,h,!1),this.context.fillStyle=this.options.circleColor,this.context.lineWidth=this.linesAndRadiuses.internalLine,this.context.closePath(),this.context.strokeStyle=this.options.circleBorder,this.context.stroke(),this.context.fill()},drawPercentage:function(){this.context.beginPath(),this.context.moveTo(this.points.x,this.points.x),this.context.arc(this.points.x,this.points.x,this.linesAndRadiuses.externalRadius,this.points.angle.start,this.points.angle.end,!1),this.context.closePath(),this.context.fillStyle=this.options.ringColor,this.context.fill()},drawExtraPercentage:function(){this.context.beginPath(),this.context.moveTo(this.points.x,this.points.x),this.context.arc(this.points.x,this.points.x,this.linesAndRadiuses.externalRadius,this.points.angle.start,this.points.angle.end,!0),this.context.closePath(),this.context.fillStyle=this.options.ringBackground,this.context.fill()},drawShadow:function(){this.context.beginPath(),this.context.arc(this.points.x,this.points.x,this.linesAndRadiuses.shadowRadius,0,h,!1),this.context.shadowColor="#cbcbcb",this.context.lineWidth=this.linesAndRadiuses.shadowLine,this.context.strokeStyle="rgba(203, 203, 203, 1)",this.context.stroke()},drawImage:function(){var c,d,e,a=(this.linesAndRadiuses.internalRadius-this.linesAndRadiuses.internalLine)*Math.sqrt(2),b=new Image,f=this;b.src=this.options.image,b.onload=function(){e=b.height/b.width,b.width>a&&1>=e?(c=a,d=Math.round(c*e)):b.height>a?(d=a,c=Math.round(d/e)):c=d=a,f.context.drawImage(b,(f.points.width-c)/2,(f.points.width-d)/2,c,d)}},drawText:function(){var a;this.context.textAlign="center",this.context.fillStyle=this.options.labelColor,this.context.textBaseline="bottom",this.options.displayValue?(a=this.points.width/3.5,this.context.font="bold "+a+"px helvetica",this.options.label&&this.options.label.length>0?(this.context.fillText(this.options.label,this.points.x,this.points.x+this.linesAndRadiuses.internalRadius/25),this.context.fillText(this.options.percentage+"%",this.points.x,this.points.x+this.linesAndRadiuses.internalRadius/1.5)):this.context.fillText(this.options.percentage+"%",this.points.x,this.points.x+this.linesAndRadiuses.internalRadius/2.3)):(a=this.points.width/2.5,this.context.font="bold "+a+"px helvetica",this.context.fillText(this.options.label,this.points.x,this.points.x+this.linesAndRadiuses.internalRadius/1.8))},checkCanvas:function(){return!(!this.element.getContext||!this.element.getContext("2d"))},getPoints:function(){return{width:this.element.width,x:this.element.width/2,angle:{start:360===this.percentage?0:270*g,end:360===this.percentage?h:(this.percentage-90)*g}}},getLinesAndRadiuses:function(){var a=this.points.width/30,b=this.points.x-a/2,c=b,d=this.points.width/35,e=.8*c;return{shadowLine:a,shadowRadius:b,externalRadius:c,internalLine:d,internalRadius:e}}},a.fn[e]=function(b){return this.each(function(){a.data(this,"plugin_"+e)||a.data(this,"plugin_"+e,new i(this,b))})}}(jQuery,window,document);

// Easy Responsive Tabs Plugin
// Author: Samson.Onna <Email : samson3d@gmail.com>
(function ($) {
    $.fn.extend({
        easyResponsiveTabs: function (options) {
            //Set the default values, use comma to separate the settings, example:
            var defaults = {
                type: 'default', //default, vertical, accordion;
                width: 'auto',
                fit: true,
                closed: false,
                activate: function(){}
            }
            //Variables
            var options = $.extend(defaults, options);            
            var opt = options, jtype = opt.type, jfit = opt.fit, jwidth = opt.width, vtabs = 'vertical', accord = 'accordion';
            var hash = window.location.hash;
            var historyApi = !!(window.history && history.replaceState);
            
            //Events
            $(this).bind('tabactivate', function(e, currentTab) {
                if(typeof options.activate === 'function') {
                    options.activate.call(currentTab, e)
                }
            });

            //Main function
            this.each(function () {
                var $respTabs = $(this);
                var $respTabsList = $respTabs.find('ul.resp-tabs-list');
                var respTabsId = $respTabs.attr('id');
                $respTabs.find('ul.resp-tabs-list li').addClass('resp-tab-item');
                $respTabs.css({
                    'display': 'block',
                    'width': jwidth
                });

                $respTabs.find('.resp-tabs-container > div').addClass('resp-tab-content');
                jtab_options();
                //Properties Function
                function jtab_options() {
                    if (jtype == vtabs) {
                        $respTabs.addClass('resp-vtabs');
                    }
                    if (jfit == true) {
                        $respTabs.css({ width: '100%', margin: '0px' });
                    }
                    if (jtype == accord) {
                        $respTabs.addClass('resp-easy-accordion');
                        $respTabs.find('.resp-tabs-list').css('display', 'none');
                    }
                }

                //Assigning the h2 markup to accordion title
                var $tabItemh2;
                $respTabs.find('.resp-tab-content').before("<h2 class='resp-accordion' role='tab'><span class='resp-arrow'></span></h2>");

                var itemCount = 0;
                $respTabs.find('.resp-accordion').each(function () {
                    $tabItemh2 = $(this);
                    var $tabItem = $respTabs.find('.resp-tab-item:eq(' + itemCount + ')');
                    var $accItem = $respTabs.find('.resp-accordion:eq(' + itemCount + ')');
                    $accItem.append($tabItem.html());
                    $accItem.data($tabItem.data());
                    $tabItemh2.attr('aria-controls', 'tab_item-' + (itemCount));
                    itemCount++;
                });

                //Assigning the 'aria-controls' to Tab items
                var count = 0,
                    $tabContent;
                $respTabs.find('.resp-tab-item').each(function () {
                    $tabItem = $(this);
                    $tabItem.attr('aria-controls', 'tab_item-' + (count));
                    $tabItem.attr('role', 'tab');

                    //Assigning the 'aria-labelledby' attr to tab-content
                    var tabcount = 0;
                    $respTabs.find('.resp-tab-content').each(function () {
                        $tabContent = $(this);
                        $tabContent.attr('aria-labelledby', 'tab_item-' + (tabcount));
                        tabcount++;
                    });
                    count++;
                });
                
                // Show correct content area
                var tabNum = 0;
                if(hash!='') {
                    var matches = hash.match(new RegExp(respTabsId+"([0-9]+)"));
                    if (matches!==null && matches.length===2) {
                        tabNum = parseInt(matches[1],10)-1;
                        if (tabNum > count) {
                            tabNum = 0;
                        }
                    }
                }

                //Active correct tab
                $($respTabs.find('.resp-tab-item')[tabNum]).addClass('resp-tab-active');

                //keep closed if option = 'closed' or option is 'accordion' and the element is in accordion mode
                if(options.closed !== true && !(options.closed === 'accordion' && !$respTabsList.is(':visible')) && !(options.closed === 'tabs' && $respTabsList.is(':visible'))) {                  
                    $($respTabs.find('.resp-accordion')[tabNum]).addClass('resp-tab-active');
                    $($respTabs.find('.resp-tab-content')[tabNum]).addClass('resp-tab-content-active').attr('style', 'display:block');
                }
                //assign proper classes for when tabs mode is activated before making a selection in accordion mode
                else {
                    $($respTabs.find('.resp-tab-content')[tabNum]).addClass('resp-tab-content-active resp-accordion-closed')
                }

                //Tab Click action function
                $respTabs.find("[role=tab]").each(function () {
                   
                    var $currentTab = $(this);
                    $currentTab.click(function () {
                        
                        var $currentTab = $(this);
                        var $tabAria = $currentTab.attr('aria-controls');

                        if ($currentTab.hasClass('resp-accordion') && $currentTab.hasClass('resp-tab-active')) {
                            $respTabs.find('.resp-tab-content-active').slideUp('', function () { $(this).addClass('resp-accordion-closed'); });
                            $currentTab.removeClass('resp-tab-active');
                            return false;
                        }
                        if (!$currentTab.hasClass('resp-tab-active') && $currentTab.hasClass('resp-accordion')) {
                            $respTabs.find('.resp-tab-active').removeClass('resp-tab-active');
                            $respTabs.find('.resp-tab-content-active').slideUp().removeClass('resp-tab-content-active resp-accordion-closed');
                            $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active');

                            $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + ']').slideDown().addClass('resp-tab-content-active');
                        } else {
                            $respTabs.find('.resp-tab-active').removeClass('resp-tab-active');
                            $respTabs.find('.resp-tab-content-active').removeAttr('style').removeClass('resp-tab-content-active').removeClass('resp-accordion-closed');
                            $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active');
                            $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + ']').addClass('resp-tab-content-active').attr('style', 'display:block');
                        }
                        //Trigger tab activation event
                        $currentTab.trigger('tabactivate', $currentTab);
                        
                        //Update Browser History
                        if(historyApi) {
                            var currentHash = window.location.hash;
                            var newHash = respTabsId+(parseInt($tabAria.substring(9),10)+1).toString();
                            if (currentHash!="") {
                                var re = new RegExp(respTabsId+"[0-9]+");
                                if (currentHash.match(re)!=null) {                                    
                                    newHash = currentHash.replace(re,newHash);
                                }
                                else {
                                    newHash = currentHash+"|"+newHash;
                                }
                            }
                            else {
                                newHash = '#'+newHash;
                            }
                            
                            history.replaceState(null,null,newHash);
                        }
                    });
                    
                });
                
                //Window resize function                   
                $(window).resize(function () {
                    $respTabs.find('.resp-accordion-closed').removeAttr('style');
                });
            });
        }
    });
})(jQuery);


