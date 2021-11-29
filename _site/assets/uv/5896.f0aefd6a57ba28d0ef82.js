"use strict";(self.webpackChunkUV=self.webpackChunkUV||[]).push([[5896,4594],{8193:(t,e,n)=>{n.d(e,{P:()=>i,g:()=>r});var i=function(t,e){this.x=t,this.y=e},r=function(t,e,n,i,r){var a=s(t.y,e.y,n.y,i.y,r);return o(t.x,e.x,n.x,i.x,a[0])},o=function(t,e,n,i,r){return r*(3*e*Math.pow(r-1,2)+r*(-3*n*r+3*n+i*r))-t*Math.pow(r-1,3)},s=function(t,e,n,i,r){return a((i-=r)-3*(n-=r)+3*(e-=r)-(t-=r),3*n-6*e+3*t,3*e-3*t,t).filter((function(t){return t>=0&&t<=1}))},a=function(t,e,n,i){if(0===t)return function(t,e,n){var i=e*e-4*t*n;return i<0?[]:[(-e+Math.sqrt(i))/(2*t),(-e-Math.sqrt(i))/(2*t)]}(e,n,i);var r=(3*(n/=t)-(e/=t)*e)/3,o=(2*e*e*e-9*e*n+27*(i/=t))/27;if(0===r)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-r),-Math.sqrt(-r)];var s=Math.pow(o/2,2)+Math.pow(r/3,3);if(0===s)return[Math.pow(o/2,.5)-e/3];if(s>0)return[Math.pow(-o/2+Math.sqrt(s),1/3)-Math.pow(o/2+Math.sqrt(s),1/3)-e/3];var a=Math.sqrt(Math.pow(-r/3,3)),u=Math.acos(-o/(2*Math.sqrt(Math.pow(-r/3,3)))),c=2*Math.pow(a,1/3);return[c*Math.cos(u/3)-e/3,c*Math.cos((u+2*Math.PI)/3)-e/3,c*Math.cos((u+4*Math.PI)/3)-e/3]}},1874:(t,e,n)=>{n.r(e),n.d(e,{GESTURE_CONTROLLER:()=>u,createGesture:()=>h});var i,r=function(){function t(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){return new o(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new s(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,e,n){return this.canStart(t)?(this.requestedStart.set(e,n),!0):(this.requestedStart.delete(e),!1)},t.prototype.capture=function(t,e,n){if(!this.start(t,e,n))return!1;var i=this.requestedStart,r=-1e4;if(i.forEach((function(t){r=Math.max(r,t)})),r===n){this.capturedId=e,i.clear();var o=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(o),!0}return i.delete(e),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,e){var n=this.disabledGestures.get(t);void 0===n&&(n=new Set,this.disabledGestures.set(t,n)),n.add(e)},t.prototype.enableGesture=function(t,e){var n=this.disabledGestures.get(t);void 0!==n&&n.delete(e)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add(a)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove(a)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);return!!(e&&e.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}(),o=function(){function t(t,e,n,i,r){this.id=e,this.name=n,this.disableScroll=r,this.priority=1e6*i+e,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),s=function(){function t(t,e,n,i){this.id=e,this.disable=n,this.disableScroll=i,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++){var n=e[t];this.ctrl.disableGesture(n,this.id)}this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++){var n=e[t];this.ctrl.enableGesture(n,this.id)}this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),a="backdrop-no-scroll",u=new r,c=function(t,e,n,i){var r,o,s=l(t)?{capture:!!i.capture,passive:!!i.passive}:!!i.capture;return t.__zone_symbol__addEventListener?(r="__zone_symbol__addEventListener",o="__zone_symbol__removeEventListener"):(r="addEventListener",o="removeEventListener"),t[r](e,n,s),function(){t[o](e,n,s)}},l=function(t){if(void 0===i)try{var e=Object.defineProperty({},"passive",{get:function(){i=!0}});t.addEventListener("optsTest",(function(){}),e)}catch(t){i=!1}return!!i},d=function(t){return t instanceof Document?t:t.ownerDocument},h=function(t){var e=!1,n=!1,i=!0,r=!1,o=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),s=o.canStart,a=o.onWillStart,l=o.onStart,h=o.onEnd,v=o.notCaptured,b=o.onMove,y=o.threshold,g={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},w=function(t,e,n){var i=n*(Math.PI/180),r="x"===t,o=Math.cos(i),s=e*e,a=0,u=0,c=!1,l=0;return{start:function(t,e){a=t,u=e,l=0,c=!0},detect:function(t,e){if(!c)return!1;var n=t-a,i=e-u,d=n*n+i*i;if(d<s)return!1;var h=Math.sqrt(d),p=(r?n:i)/h;return l=p>o?1:p<-o?-1:0,c=!1,!0},isGesture:function(){return 0!==l},getDirection:function(){return l}}}(o.direction,o.threshold,o.maxAngle),S=u.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),E=function(){e&&(r=!1,b&&b(g))},x=function(){return!(S&&!S.capture()||(e=!0,i=!1,g.startX=g.currentX,g.startY=g.currentY,g.startTimeStamp=g.timeStamp,a?a(g).then(k):k(),0))},k=function(){l&&l(g),i=!0},_=function(){e=!1,n=!1,r=!1,i=!0,S.release()},O=function(t){var n=e,r=i;_(),r&&(p(g,t),n?h&&h(g):v&&v(g))},A=function(t,e,n,i,r){var o,s,a,u,l,h,p,f=0,m=function(i){f=Date.now()+2e3,e(i)&&(!s&&n&&(s=c(t,"touchmove",n,r)),a||(a=c(t,"touchend",b,r)),u||(u=c(t,"touchcancel",b,r)))},v=function(i){f>Date.now()||e(i)&&(!h&&n&&(h=c(d(t),"mousemove",n,r)),p||(p=c(d(t),"mouseup",y,r)))},b=function(t){g(),i&&i(t)},y=function(t){w(),i&&i(t)},g=function(){s&&s(),a&&a(),u&&u(),s=a=u=void 0},w=function(){h&&h(),p&&p(),h=p=void 0},S=function(){g(),w()},E=function(e){e?(o&&o(),l&&l(),o=l=void 0,S()):(o||(o=c(t,"touchstart",m,r)),l||(l=c(t,"mousedown",v,r)))};return{setDisabled:E,stop:S,destroy:function(){E(!0),i=n=e=void 0}}}(o.el,(function(t){var e=m(t);return!(n||!i)&&(f(t,g),g.startX=g.currentX,g.startY=g.currentY,g.startTimeStamp=g.timeStamp=e,g.velocityX=g.velocityY=g.deltaX=g.deltaY=0,g.event=t,(!s||!1!==s(g))&&(S.release(),!!S.start()&&(n=!0,0===y?x():(w.start(g.startX,g.startY),!0))))}),(function(t){e?!r&&i&&(r=!0,p(g,t),requestAnimationFrame(E)):(p(g,t),w.detect(g.currentX,g.currentY)&&(w.isGesture()&&x()||M()))}),O,{capture:!1}),M=function(){_(),A.stop(),v&&v(g)};return{setDisabled:function(t){t&&e&&O(void 0),A.setDisabled(t)},destroy:function(){S.destroy(),A.destroy()}}},p=function(t,e){if(e){var n=t.currentX,i=t.currentY,r=t.timeStamp;f(e,t);var o=t.currentX,s=t.currentY,a=(t.timeStamp=m(e))-r;if(a>0&&a<100){var u=(o-n)/a,c=(s-i)/a;t.velocityX=.7*u+.3*t.velocityX,t.velocityY=.7*c+.3*t.velocityY}t.deltaX=o-t.startX,t.deltaY=s-t.startY,t.event=e}},f=function(t,e){var n=0,i=0;if(t){var r=t.changedTouches;if(r&&r.length>0){var o=r[0];n=o.clientX,i=o.clientY}else void 0!==t.pageX&&(n=t.pageX,i=t.pageY)}e.currentX=n,e.currentY=i},m=function(t){return t.timeStamp||Date.now()}},5318:(t,e,n)=>{n.d(e,{m:()=>d});var i=n(2974),r=function(t,e,n,i){return new(n||(n=Promise))((function(r,o){function s(t){try{u(i.next(t))}catch(t){o(t)}}function a(t){try{u(i.throw(t))}catch(t){o(t)}}function u(t){t.done?r(t.value):new n((function(e){e(t.value)})).then(s,a)}u((i=i.apply(t,e||[])).next())}))},o=function(t,e){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,i=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((r=(r=s.trys).length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){s.label=o[1];break}if(6===o[0]&&s.label<r[1]){s.label=r[1],r=o;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(o);break}r[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},s=void 0,a=function(){return(0,i.c)().easing("cubic-bezier(0.0, 0.0, 0.2, 1)").duration(300)},u=function(t){var e,n,r=t.width+8,o=(0,i.c)(),s=(0,i.c)();return t.isEndSide?(e=r+"px",n="0px"):(e=-r+"px",n="0px"),o.addElement(t.menuInnerEl).fromTo("transform","translateX("+e+")","translateX("+n+")"),s.addElement(t.backdropEl).fromTo("opacity",.01,.32),a().addAnimation([o,s])},c=function(t){var e,n,r=t.width;t.isEndSide?(e=-r+"px",n=r+"px"):(e=r+"px",n=-r+"px");var o=(0,i.c)().addElement(t.menuInnerEl).fromTo("transform","translateX("+n+")","translateX(0px)"),s=(0,i.c)().addElement(t.contentEl).fromTo("transform","translateX(0px)","translateX("+e+")"),u=(0,i.c)().addElement(t.backdropEl).fromTo("opacity",.01,.32);return a().addAnimation([o,u,s])},l=function(t){var e=t.width*(t.isEndSide?-1:1)+"px",n=(0,i.c)().addElement(t.contentEl).fromTo("transform","translateX(0px)","translateX("+e+")");return a().addAnimation(n)},d=function(){var t=new Map,e=[],n=function(t){return r(s,void 0,void 0,(function(){var n,i;return o(this,(function(r){switch(r.label){case 0:return[4,m()];case 1:return r.sent(),"start"===t||"end"===t?(n=f((function(e){return e.side===t&&!e.disabled})))?[2,n]:[2,f((function(e){return e.side===t}))]:null!=t?[2,f((function(e){return e.menuId===t}))]:(i=f((function(t){return!t.disabled})))?[2,i]:[2,e.length>0?e[0].el:void 0]}}))}))},i=function(){return r(s,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,m()];case 1:return t.sent(),[2,h()]}}))}))},a=function(e,n){t.set(e,n)},d=function(t){var n=t.side;e.filter((function(e){return e.side===n&&e!==t})).forEach((function(t){return t.disabled=!0}))},h=function(){return f((function(t){return t._isOpen}))},p=function(){return e.some((function(t){return t.isAnimating}))},f=function(t){var n=e.find(t);if(void 0!==n)return n.el},m=function(){return Promise.all(Array.from(document.querySelectorAll("ion-menu")).map((function(t){return t.componentOnReady()})))};return a("reveal",l),a("push",c),a("overlay",u),{registerAnimation:a,get:n,getMenus:function(){return r(s,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,m()];case 1:return t.sent(),[2,e.map((function(t){return t.el}))]}}))}))},getOpen:i,isEnabled:function(t){return r(s,void 0,void 0,(function(){var e;return o(this,(function(i){switch(i.label){case 0:return[4,n(t)];case 1:return(e=i.sent())?[2,!e.disabled]:[2,!1]}}))}))},swipeGesture:function(t,e){return r(s,void 0,void 0,(function(){var i;return o(this,(function(r){switch(r.label){case 0:return[4,n(e)];case 1:return(i=r.sent())&&(i.swipeGesture=t),[2,i]}}))}))},isAnimating:function(){return r(s,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,m()];case 1:return t.sent(),[2,p()]}}))}))},isOpen:function(t){return r(s,void 0,void 0,(function(){var e;return o(this,(function(r){switch(r.label){case 0:return null==t?[3,2]:[4,n(t)];case 1:return[2,void 0!==(e=r.sent())&&e.isOpen()];case 2:return[4,i()];case 3:return[2,void 0!==(e=r.sent())]}}))}))},enable:function(t,e){return r(s,void 0,void 0,(function(){var i;return o(this,(function(r){switch(r.label){case 0:return[4,n(e)];case 1:return(i=r.sent())&&(i.disabled=!t),[2,i]}}))}))},toggle:function(t){return r(s,void 0,void 0,(function(){var e;return o(this,(function(i){switch(i.label){case 0:return[4,n(t)];case 1:return(e=i.sent())?[2,e.toggle()]:[2,!1]}}))}))},close:function(t){return r(s,void 0,void 0,(function(){var e;return o(this,(function(r){switch(r.label){case 0:return[4,void 0!==t?n(t):i()];case 1:return void 0!==(e=r.sent())?[2,e.close()]:[2,!1]}}))}))},open:function(t){return r(s,void 0,void 0,(function(){var e;return o(this,(function(i){switch(i.label){case 0:return[4,n(t)];case 1:return(e=i.sent())?[2,e.open()]:[2,!1]}}))}))},_getOpenSync:h,_createAnimation:function(e,n){var i=t.get(e);if(!i)throw new Error("animation not registered");return i(n)},_register:function(t){e.indexOf(t)<0&&(t.disabled||d(t),e.push(t))},_unregister:function(t){var n=e.indexOf(t);n>-1&&e.splice(n,1)},_setOpen:function(t,e,n){return r(s,void 0,void 0,(function(){var r;return o(this,(function(o){switch(o.label){case 0:return p()?[2,!1]:e?[4,i()]:[3,3];case 1:return(r=o.sent())&&t.el!==r?[4,r.setOpen(!1,!1)]:[3,3];case 2:o.sent(),o.label=3;case 3:return[2,t._setOpen(e,n)]}}))}))},_setActiveMenu:d}}()},5896:(t,e,n)=>{n.r(e),n.d(e,{ion_menu:()=>l});var i=n(2085),r=n(9292),o=n(8193),s=n(1874),a=n(5318),u=function(t,e,n,i){return new(n||(n=Promise))((function(r,o){function s(t){try{u(i.next(t))}catch(t){o(t)}}function a(t){try{u(i.throw(t))}catch(t){o(t)}}function u(t){t.done?r(t.value):new n((function(e){e(t.value)})).then(s,a)}u((i=i.apply(t,e||[])).next())}))},c=function(t,e){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,i=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((r=(r=s.trys).length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){s.label=o[1];break}if(6===o[0]&&s.label<r[1]){s.label=r[1],r=o;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(o);break}r[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},l=function(){function t(t){(0,i.r)(this,t),this.lastOnEnd=0,this.blocker=s.GESTURE_CONTROLLER.createBlocker({disableScroll:!0}),this.mode=(0,i.f)(this),this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50,this.ionWillOpen=(0,i.c)(this,"ionWillOpen",7),this.ionWillClose=(0,i.c)(this,"ionWillClose",7),this.ionDidOpen=(0,i.c)(this,"ionDidOpen",7),this.ionDidClose=(0,i.c)(this,"ionDidClose",7),this.ionMenuChange=(0,i.c)(this,"ionMenuChange",7)}return t.prototype.typeChanged=function(t,e){var n=this.contentEl;n&&(void 0!==e&&n.classList.remove("menu-content-"+e),n.classList.add("menu-content-"+t),n.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0},t.prototype.disabledChanged=function(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})},t.prototype.sideChanged=function(){this.isEndSide=(0,r.i)(this.side)},t.prototype.swipeGestureChanged=function(){this.updateState()},t.prototype.connectedCallback=function(){return u(this,void 0,void 0,(function(){var t,e,r,o,s=this;return c(this,(function(u){switch(u.label){case 0:return void 0===this.type&&(this.type=i.i.get("menuType","ios"===this.mode?"reveal":"overlay")),t=this.el,e=t.parentNode,void 0===this.contentId&&console.warn('[DEPRECATED][ion-menu] Using the [main] attribute is deprecated, please use the "contentId" property instead:\nBEFORE:\n  <ion-menu>...</ion-menu>\n  <div main>...</div>\n\nAFTER:\n  <ion-menu contentId="my-content"></ion-menu>\n  <div id="my-content">...</div>\n'),(r=void 0!==this.contentId?document.getElementById(this.contentId):e&&e.querySelector&&e.querySelector("[main]"))&&r.tagName?(this.contentEl=r,r.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),a.m._register(this),o=this,[4,Promise.resolve().then(n.bind(n,1874))]):(console.error('Menu: must have a "content" element to listen for drag events on.'),[2]);case 1:return o.gesture=u.sent().createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,canStart:function(t){return s.canStart(t)},onWillStart:function(){return s.onWillStart()},onStart:function(){return s.onStart()},onMove:function(t){return s.onMove(t)},onEnd:function(t){return s.onEnd(t)}}),this.updateState(),[2]}}))}))},t.prototype.componentDidLoad=function(){return u(this,void 0,void 0,(function(){return c(this,(function(t){return this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen}),this.updateState(),[2]}))}))},t.prototype.disconnectedCallback=function(){this.blocker.destroy(),a.m._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0},t.prototype.onSplitPaneChanged=function(t){this.isPaneVisible=t.detail.isPane(this.el),this.updateState()},t.prototype.onBackdropClick=function(t){this._isOpen&&this.lastOnEnd<t.timeStamp-100&&t.composedPath&&!t.composedPath().includes(this.menuInnerEl)&&(t.preventDefault(),t.stopPropagation(),this.close())},t.prototype.isOpen=function(){return Promise.resolve(this._isOpen)},t.prototype.isActive=function(){return Promise.resolve(this._isActive())},t.prototype.open=function(t){return void 0===t&&(t=!0),this.setOpen(!0,t)},t.prototype.close=function(t){return void 0===t&&(t=!0),this.setOpen(!1,t)},t.prototype.toggle=function(t){return void 0===t&&(t=!0),this.setOpen(!this._isOpen,t)},t.prototype.setOpen=function(t,e){return void 0===e&&(e=!0),a.m._setOpen(this,t,e)},t.prototype._setOpen=function(t,e){return void 0===e&&(e=!0),u(this,void 0,void 0,(function(){return c(this,(function(n){switch(n.label){case 0:return!this._isActive()||this.isAnimating||t===this._isOpen?[2,!1]:(this.beforeAnimation(t),[4,this.loadAnimation()]);case 1:return n.sent(),[4,this.startAnimation(t,e)];case 2:return n.sent(),this.afterAnimation(t),[2,!0]}}))}))},t.prototype.loadAnimation=function(){return u(this,void 0,void 0,(function(){var t,e;return c(this,(function(n){switch(n.label){case 0:return(t=this.menuInnerEl.offsetWidth)===this.width&&void 0!==this.animation?[2]:(this.width=t,this.animation&&(this.animation.destroy(),this.animation=void 0),e=this,[4,a.m._createAnimation(this.type,this)]);case 1:return e.animation=n.sent(),i.i.getBoolean("animated",!0)||this.animation.duration(0),this.animation.fill("both"),[2]}}))}))},t.prototype.startAnimation=function(t,e){return u(this,void 0,void 0,(function(){var n,i;return c(this,(function(r){switch(r.label){case 0:return n=!t,i=this.animation.direction(n?"reverse":"normal").easing(n?"cubic-bezier(0.4, 0.0, 0.6, 1)":"cubic-bezier(0.0, 0.0, 0.2, 1)"),e?[4,i.playAsync()]:[3,2];case 1:return r.sent(),[3,3];case 2:i.playSync(),r.label=3;case 3:return[2]}}))}))},t.prototype._isActive=function(){return!this.disabled&&!this.isPaneVisible},t.prototype.canSwipe=function(){return this.swipeGesture&&!this.isAnimating&&this._isActive()},t.prototype.canStart=function(t){return!!this.canSwipe()&&(!!this._isOpen||!a.m._getOpenSync()&&h(window,t.currentX,this.isEndSide,this.maxEdgeStart))},t.prototype.onWillStart=function(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()},t.prototype.onStart=function(){this.isAnimating&&this.animation?this.animation.direction(this._isOpen?"reverse":"normal").progressStart(!0):(0,r.b)(!1,"isAnimating has to be true")},t.prototype.onMove=function(t){if(this.isAnimating&&this.animation){var e=d(t.deltaX,this._isOpen,this.isEndSide)/this.width;this.animation.progressStep(e)}else(0,r.b)(!1,"isAnimating has to be true")},t.prototype.onEnd=function(t){var e=this;if(this.isAnimating&&this.animation){var n=this._isOpen,i=this.isEndSide,s=d(t.deltaX,n,i),a=this.width,u=s/a,c=t.velocityX,l=a/2,h=c>=0&&(c>.2||t.deltaX>l),p=c<=0&&(c<-.2||t.deltaX<-l),f=n?i?h:p:i?p:h,m=!n&&f;n&&!f&&(m=!0),this.lastOnEnd=t.timeStamp;var v=f?.001:-.001,b=u<=0?.01:u;v+=(0,o.g)(new o.P(0,0),new o.P(.4,0),new o.P(.6,1),new o.P(1,1),(0,r.c)(0,b,1)),this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish((function(){return e.afterAnimation(m)}),{oneTimeCallback:!0}).progressEnd(f?1:0,v,300)}else(0,r.b)(!1,"isAnimating has to be true")},t.prototype.beforeAnimation=function(t){(0,r.b)(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(p),this.backdropEl&&this.backdropEl.classList.add(f),this.blocker.block(),this.isAnimating=!0,t?this.ionWillOpen.emit():this.ionWillClose.emit()},t.prototype.afterAnimation=function(t){(0,r.b)(this.isAnimating,"_before() should be called while animating"),this._isOpen=t,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),t?(this.contentEl&&this.contentEl.classList.add(m),this.ionDidOpen.emit()):(this.el.classList.remove(p),this.contentEl&&this.contentEl.classList.remove(m),this.backdropEl&&this.backdropEl.classList.remove(f),this.animation&&this.animation.stop(),this.ionDidClose.emit())},t.prototype.updateState=function(){var t=this._isActive();this.gesture&&this.gesture.setDisabled(!t||!this.swipeGesture),!t&&this._isOpen&&this.forceClosing(),this.disabled||a.m._setActiveMenu(this),(0,r.b)(!this.isAnimating,"can not be animating")},t.prototype.forceClosing=function(){(0,r.b)(this._isOpen,"menu cannot be closed"),this.isAnimating=!0,this.animation.direction("reverse").playSync(),this.afterAnimation(!1)},t.prototype.render=function(){var t,e=this,n=this,r=n.isEndSide,o=n.type,s=n.disabled,a=n.mode,u=n.isPaneVisible;return(0,i.h)(i.H,{role:"navigation",class:(t={},t[a]=!0,t["menu-type-"+o]=!0,t["menu-enabled"]=!s,t["menu-side-end"]=r,t["menu-side-start"]=!r,t["menu-pane-visible"]=u,t)},(0,i.h)("div",{class:"menu-inner",ref:function(t){return e.menuInnerEl=t}},(0,i.h)("slot",null)),(0,i.h)("ion-backdrop",{ref:function(t){return e.backdropEl=t},class:"menu-backdrop",tappable:!1,stopPropagation:!1}))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,i.d)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host-context([dir=rtl]) .menu-inner,[dir=rtl] .menu-inner{left:unset;right:unset;left:auto;right:0;-webkit-transform:translate3d(calc(-1 * -9999px),0,0);transform:translate3d(calc(-1 * -9999px),0,0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}@media (max-width:340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18);box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18)}"},enumerable:!0,configurable:!0}),t}(),d=function(t,e,n){return Math.max(0,e!==n?-t:t)},h=function(t,e,n,i){return n?e>=t.innerWidth-i:e<=i},p="show-menu",f="show-backdrop",m="menu-content-open"}}]);