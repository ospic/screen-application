(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{915:function(t,n,r){"use strict";r.r(n);var o=r(265),e=r(63),c=r(645),l=r(646),v=r(80),f=r(90),_=(r(35),r(11),r(8),r(7),r(5),r(13),r(9),r(14),r(0)),d=r(69);function m(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,r)}return n}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(n){Object(_.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}var h={data:function(){return{search:null,title:"Insurances",valid:!1}},computed:O(O({},Object(d.b)(["insurance"])),{},{insuranceinfo:function(){return this.insurance(this.$route.params.id)}})},w=r(43),component=Object(w.a)(h,(function(){var t=this,n=t._self._c;return n("div",[n("div",{staticClass:"breadcrumb"},[n("router-link",{attrs:{to:"/"}},[t._v("Dashboard")]),t._v(" "),n("router-link",{attrs:{to:"/insurances"}},[t._v("Insurances")]),t._v(" "),n("router-link",{staticClass:"active",attrs:{to:"/insurances/".concat(t.insuranceinfo.id)}},[t._v(t._s(t.insuranceinfo.name))])],1),t._v(" "),n(o.a,{staticClass:"mx-auto default"},[n(v.a,{attrs:{flat:"",dark:"",color:"primary"}},[n(f.b,[t._v("\n        "+t._s(t.insuranceinfo.name)+"\n      ")])],1),t._v(" "),n(e.c,[n(c.a,{attrs:{"align-top":"",dense:""}},[n(l.a,{attrs:{color:"info",small:""}},[n("div",[n("div",{staticClass:"font-weight-normal"},[n("strong",[t._v("ID")])]),t._v(" "),n("div",[t._v(t._s(t.insuranceinfo.id))])])]),t._v(" "),n(l.a,{attrs:{color:"info",small:""}},[n("div",[n("div",{staticClass:"font-weight-normal"},[n("strong",[t._v("Name")])]),t._v(" "),n("div",[t._v(t._s(t.insuranceinfo.name))])])]),t._v(" "),n(l.a,{attrs:{color:"info",small:""}},[n("div",[n("div",{staticClass:"font-weight-normal"},[n("strong",[t._v("P.O Box")])]),t._v(" "),n("div",[t._v(t._s(t.insuranceinfo.poBox))])])]),t._v(" "),n(l.a,{attrs:{color:"info",small:""}},[n("div",[n("div",{staticClass:"font-weight-normal"},[n("strong",[t._v("Location")])]),t._v(" "),n("div",[t._v(t._s(t.insuranceinfo.location))])])]),t._v(" "),n(l.a,{attrs:{color:"info",small:""}},[n("div",[n("div",{staticClass:"font-weight-normal"},[n("strong",[t._v("Telephone No.")])]),t._v(" "),n("div",[t._v(t._s(t.insuranceinfo.telephoneNo))])])]),t._v(" "),n(l.a,{attrs:{color:"info",small:""}},[n("div",[n("div",{staticClass:"font-weight-normal"},[n("strong",[t._v("Email")])]),t._v(" "),n("div",[t._v(t._s(t.insuranceinfo.emailAddress))])])])],1)],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports}}]);