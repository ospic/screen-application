(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{882:function(t,e,n){"use strict";n.r(e);n(12),n(9),n(7),n(5),n(14),n(8),n(15);var r=n(0),o=(n(51),n(70));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={data:function(){return{total:10}},created:function(){this.$store.dispatch("_getallnotifications")},methods:{fetchnotifications:function(){this.$store.dispatch("_getallnotifications")},markasread:function(t){var e=this;this.$store.dispatch("_readnotification",t.id).then((function(){setTimeout((function(){e.fetchnotifications(),e.$store.dispatch("_getnewnotifications")}),e.delay_seconds)}))}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({notifications:"allnotifications"}))},f=l,d=n(43),v=n(50),_=n.n(v),m=n(165),h=n(265),O=n(64),w=n(645),y=n(269),j=n(140),k=n(646),V=n(642),C=n(643),P=n(644),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto",attrs:{"max-width":""}},[n("v-card",{attrs:{dark:"",flat:""}},[n("v-card-title",{staticClass:"pa-2 primary"},[n("h3",{staticClass:"title font-weight-light text-center grow"},[t._v("Notifications")])])],1),t._v(" "),n("v-card-text",{staticClass:"py-0"},[n("v-timeline",{attrs:{"align-top":"",dense:""}},t._l(t.notifications,(function(e,i){return n("v-timeline-item",{key:i,attrs:{color:"primary",small:""}},[n("v-row",{staticClass:"pt-1",attrs:{"no-gutters":"",dense:""}},[n("v-col",{attrs:{cols:"1"}}),t._v(" "),n("v-col",[n("strong",[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"caption"},[n("p",[t._v("\n                "+t._s(e.message)+"\n              ")])])]),t._v(" "),n("v-col",{attrs:{cols:"1"}},[n("v-btn",{attrs:{icon:"",text:""}},[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on,c=r.attrs;return[e.isNewNotification?n("v-icon",t._g(t._b({attrs:{color:"primary"},on:{click:function(n){return n.stopPropagation(),t.markasread(e)}}},"v-icon",c,!1),o),[t._v("mdi-checkbox-marked-circle-outline")]):t._e()]}}],null,!0)},[t._v(" "),n("span",[t._v("Mark as read")])])],1)],1)],1),t._v(" "),n("v-divider")],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{VBtn:m.a,VCard:h.a,VCardText:O.c,VCardTitle:O.d,VCol:w.a,VDivider:y.a,VIcon:j.a,VRow:k.a,VTimeline:V.a,VTimelineItem:C.a,VTooltip:P.a})}}]);