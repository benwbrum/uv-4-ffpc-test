"use strict";(self.webpackChunkUV=self.webpackChunkUV||[]).push([[7224],{7530:(t,e,n)=>{n.d(e,{K:()=>u});var i,s=n(9979),o=n(8204),a=n(4541),r=n(6783),h=n(2716),l=(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),d=n(9755),u=function(t){function e(e){return t.call(this,e)||this}return l(e,t),e.prototype.create=function(){var e,n=this;this.setConfig("downloadDialogue"),t.prototype.create.call(this),this.$element.attr("role","region"),this.$element.attr("aria-label",this.content.title),this.openCommand=s.e.SHOW_DOWNLOAD_DIALOGUE,this.closeCommand=s.e.HIDE_DOWNLOAD_DIALOGUE,this.extensionHost.subscribe(this.openCommand,(function(t){e=t,n.open(t)})),this.extensionHost.subscribe(this.closeCommand,(function(){e&&e.focus(),n.close()})),this.$title=d('<div role="heading" class="heading">'+this.content.title+"</div>"),this.$content.append(this.$title),this.$noneAvailable=d('<div class="noneAvailable">'+this.content.noneAvailable+"</div>"),this.$content.append(this.$noneAvailable),this.$downloadOptions=d('<ol class="options"></ol>'),this.$content.append(this.$downloadOptions),this.$footer=d('<div class="footer"></div>'),this.$content.append(this.$footer),this.$termsOfUseButton=d('<a href="#">'+this.extension.data.config.content.termsOfUse+"</a>"),this.$footer.append(this.$termsOfUseButton),this.$termsOfUseButton.onPressed((function(){n.extensionHost.publish(s.e.SHOW_TERMS_OF_USE)})),this.$element.hide(),this.updateTermsOfUseButton()},e.prototype.addEntireFileDownloadOptions=function(){if(this.isDownloadOptionAvailable(a.h.ENTIRE_FILE_AS_ORIGINAL)){this.$downloadOptions.empty();for(var t=this.extension.helper.getCurrentCanvas(),e=!1,n=t.getRenderings(),i=0;i<n.length;i++){var s=n[i],o=s.getFormat(),r="";o&&(r=o.toString()),this.addEntireFileDownloadOption(s.id,h.Wy.getValue(s.getLabel()),r),e=!0}if(!e){var l=!1,d=t.getContent();for(i=0;i<d.length;i++){var u=d[i].getBody();u.length&&(r=u[0].getFormat())&&(this.addEntireFileDownloadOption(u[0].id,"",r.toString()),l=!0)}l||this.addEntireFileDownloadOption(t.id,"","")}}},e.prototype.addEntireFileDownloadOption=function(t,e,n){var i;i=n?r.hv.simplifyMimeType(n):this.getFileExtension(t),e||(e=this.content.entireFileAsOriginal),i&&(e+=" ("+i+")"),this.$downloadOptions.append('<li><a href="'+t+'" target="_blank" download tabindex="0">'+e+"</li>")},e.prototype.resetDynamicDownloadOptions=function(){this.renderingUrls=[],this.renderingUrlsCount=0,this.$downloadOptions.find("li.dynamic").remove()},e.prototype.getDownloadOptionsForRenderings=function(t,e,n){for(var i=t.getRenderings(),s=[],o=0;o<i.length;o++){var a=i[o];if(a){var l=h.Wy.getValue(a.getLabel(),this.extension.getLocale()),u="downloadOption"+ ++this.renderingUrlsCount;l?l+=" ({0})":l=e;var p=r.hv.simplifyMimeType(a.getFormat().toString());l=r.eI.format(l,p),this.renderingUrls[u]=a.id;var c=d('<li class="option dynamic"><input id="'+u+'" data-mime="'+p+'" title="'+l+'" type="radio" name="downloadOptions" tabindex="0" /><label for="'+u+'">'+l+"</label></li>");s.push({type:n,button:c})}}return s},e.prototype.getSelectedOption=function(){return this.$downloadOptions.find("li.option input:checked")},e.prototype.getCurrentResourceId=function(){return this.extension.helper.getCurrentCanvas().externalResource.data.id},e.prototype.getCurrentResourceFormat=function(){var t=this.getCurrentResourceId();return t.substr(t.lastIndexOf(".")+1).toLowerCase()},e.prototype.updateNoneAvailable=function(){this.$downloadOptions.find("li:visible").length?this.$noneAvailable.hide():this.$noneAvailable.show()},e.prototype.updateTermsOfUseButton=function(){var t=this.extension.helper.getRequiredStatement();r.RS.getBool(this.extension.data.config.options.termsOfUseEnabled,!1)&&t&&t.value?this.$termsOfUseButton.show():this.$termsOfUseButton.hide()},e.prototype.getFileExtension=function(t){var e=t.split(".").pop();return e.length>5||-1!==e.indexOf("/")?null:e},e.prototype.isMediaDownloadEnabled=function(){return this.extension.helper.isUIEnabled("mediaDownload")},e.prototype.isDownloadOptionAvailable=function(t){return t!==a.h.ENTIRE_FILE_AS_ORIGINAL||this.isMediaDownloadEnabled()},e.prototype.close=function(){t.prototype.close.call(this)},e.prototype.resize=function(){this.setDockedPosition()},e}(o.i)},6136:(t,e,n)=>{n.d(e,{r:()=>i});var i=function(){}},4541:(t,e,n)=>{var i;n.d(e,{h:()=>i}),function(t){t.CANVAS_RENDERINGS="canvasRenderings",t.CURRENT_VIEW="currentView",t.ENTIRE_DOCUMENT_AS_PDF="entireDocumentAsPdf",t.ENTIRE_DOCUMENT_AS_TEXT="entireDocumentAsText",t.ENTIRE_FILE_AS_ORIGINAL="entireFileAsOriginal",t.IMAGE_RENDERINGS="imageRenderings",t.MANIFEST_RENDERINGS="manifestRenderings",t.RANGE_RENDERINGS="rangeRenderings",t.SELECTION="selection",t.UNKNOWN="unknown",t.WHOLE_IMAGE_HIGH_RES="wholeImageHighRes",t.WHOLE_IMAGE_LOW_RES="wholeImageLowRes",t.WHOLE_IMAGES_HIGH_RES="wholeImagesHighRes"}(i||(i={}))},6303:(t,e,n)=>{n.d(e,{u:()=>u});var i,s=n(9979),o=n(298),a=n(3911),r=n(2415),h=n(6783),l=(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),d=n(9755),u=function(t){function e(e){var n=t.call(this,e,!0,!0)||this;return n.isCreated=!1,n.isOpen=!1,n}return l(e,t),e.prototype.create=function(){var e=this;t.prototype.create.call(this),this.extensionHost.subscribe(s.e.CANVAS_INDEX_CHANGE,(function(t){e.selectIndex(parseInt(t))})),this.extensionHost.subscribe(s.e.LOGIN,(function(){e.loadThumbs()})),this.extensionHost.subscribe(s.e.CLICKTHROUGH,(function(){e.loadThumbs()})),this.$thumbs=d('<div class="thumbs"></div>'),this.$element.append(this.$thumbs);var n=this.extension.helper.getViewingDirection()||a.Pr.LEFT_TO_RIGHT;this.$thumbs.addClass(n);var i=this;d.templates({thumbsTemplate:'<a id="thumb{{>index}}" class="{{:~className()}}" data-src="{{>uri}}" data-visible="{{>visible}}" data-index="{{>index}}" tabindex="0">                                <div class="wrap" style="height:{{>height + ~extraHeight()}}px"></div>                                <div class="info">                                    <span class="index">{{:#index + 1}}</span>                                    <span class="label" title="{{>label}}">{{>label}}&nbsp;</span>                                    <span class="searchResults" title="{{:~searchResultsTitle()}}">{{>data.searchResults}}</span>                                </div>                             </a>                             {{if ~separator()}}                                  <div class="separator"></div>                              {{/if}}'});var o=this.options.thumbsExtraHeight;d.views.helpers({separator:function(){return!1},extraHeight:function(){return o},className:function(){var t="thumb";0===this.data.index&&(t+=" first"),this.data.uri||(t+=" placeholder");var e=i.extension.helper.getViewingDirection();return!e||e!==a.Pr.LEFT_TO_RIGHT&&e!==a.Pr.RIGHT_TO_LEFT?i.extension.helper.isPaged()?t+=" twoCol":t+=" oneCol":t+=" twoCol",t},searchResultsTitle:function(){var t=Number(this.data.data.searchResults);return t?t>1?h.eI.format(i.content.searchResults,t.toString()):h.eI.format(i.content.searchResult,t.toString()):""}}),this.$element.on("scroll",(function(){e.scrollStop()}),100),this.resize()},e.prototype.databind=function(){this.thumbs&&(this._$thumbsCache=null,this.createThumbs(),this.loadThumbs(0),this.selectIndex(this.extension.helper.canvasIndex))},e.prototype.createThumbs=function(){var t=this;if(this.thumbs){for(var e=[],n=0;n<this.thumbs.length;n++){var i=this.thumbs[n];e.push(i.height)}var o=h.Vb.median(e);for(n=0;n<this.thumbs.length;n++)(i=this.thumbs[n]).height=o;this.$thumbs.link(d.templates.thumbsTemplate,this.thumbs),this.$thumbs.undelegate(".thumb","click"),this.$thumbs.delegate(".thumb","click",(function(e){e.preventDefault();var n=d.view(this).data;return t.lastThumbClickedIndex=n.index,t.extensionHost.publish(s.e.THUMB_SELECTED,n),!1})),this.$thumbs.delegate(".thumb","keydown",(function(e){var n=e.originalEvent,i=h.N1.getCharCode(n);if(i===r.z.Spacebar||i===r.z.Enter){e.preventDefault();var o=d.view(this).data;t.lastThumbClickedIndex=o.index,t.extensionHost.publish(s.e.THUMB_SELECTED,o)}})),this.setLabel(),this.isCreated=!0}},e.prototype.scrollStop=function(){var t=1/((this.$thumbs.height()-this.$element.height())/this.$element.scrollTop());t>1&&(t=1);var e=Math.floor((this.thumbs.length-1)*t);this.loadThumbs(e)},e.prototype.loadThumbs=function(t){if(void 0===t&&(t=this.extension.helper.canvasIndex),this.thumbs&&this.thumbs.length){var e,n=this.extension.helper.getCanvasByIndex(t).getContent();if(n.length){var i=n[0].getBody();if(i.length){var s=i[0].getType();s&&(e=s.toString().toLowerCase())}}for(var o=t,a=this.options.thumbsLoadRange,r={start:o>a?o-a:0,end:o<this.thumbs.length-1-a?o+a:this.thumbs.length-1},l=this.options.thumbsImageFadeInDuration,u=this,p=r.start;p<=r.end;p++){var c=this.getThumbByIndex(p),f=c.find(".wrap");if(!f.hasClass("loading")&&!f.hasClass("loaded"))if("false"!==c.attr("data-visible")){f.removeClass("loadingFailed"),f.addClass("loading"),e&&f.addClass(e);var m=c.attr("data-src");u.config.options.thumbsCacheInvalidation&&u.config.options.thumbsCacheInvalidation.enabled&&(m+=u.config.options.thumbsCacheInvalidation.paramType+"t="+h.L0.getTimeStamp());var b=d('<img src="'+m+'" alt=""/>');b.hide(),b.on("load",(function(){d(this).fadeIn(l,(function(){d(this).parent().switchClass("loading","loaded")}))})),b.on("error",(function(){d(this).parent().switchClass("loading","loadingFailed")})),f.append(b)}else f.hide()}}},e.prototype.show=function(){var t=this;this.isOpen=!0,this.$element.show(),setTimeout((function(){t.selectIndex(t.extension.helper.canvasIndex)}),1)},e.prototype.hide=function(){this.isOpen=!1,this.$element.hide()},e.prototype.isPDF=function(){var t=this.extension.helper.getCurrentCanvas().getType();return!!t&&t.toString().includes("pdf")},e.prototype.setLabel=function(){d(this.$thumbs).find("span.index").hide(),d(this.$thumbs).find("span.label").show()},e.prototype.addSelectedClassToThumbs=function(t){this.getThumbByIndex(t).addClass("selected")},e.prototype.selectIndex=function(t){-1!==t&&this.thumbs&&this.thumbs.length&&(this.getAllThumbs().removeClass("selected"),this.$selectedThumb=this.getThumbByIndex(t),this.addSelectedClassToThumbs(t),~this.extension.getPagedIndices(t).indexOf(this.lastThumbClickedIndex)||this.$element.scrollTop(this.$selectedThumb.position().top),this.loadThumbs(t))},e.prototype.getAllThumbs=function(){return this._$thumbsCache||(this._$thumbsCache=this.$thumbs.find(".thumb")),this._$thumbsCache},e.prototype.getThumbByIndex=function(t){return this.$thumbs.find('[data-index="'+t+'"]')},e.prototype.scrollToThumb=function(t){var e=this.getThumbByIndex(t);this.$element.scrollTop(e.position().top)},e.prototype.resize=function(){t.prototype.resize.call(this)},e}(o.P)}}]);