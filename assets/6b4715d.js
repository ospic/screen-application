(window.webpackJsonp=window.webpackJsonp||[]).push([[66,19,35,37],{695:function(t,e,o){var content=o(721);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("5c66766f",content,!0,{sourceMap:!1})},696:function(t,e,o){var content=o(723);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("3f698efc",content,!0,{sourceMap:!1})},707:function(t,e,o){"use strict";var r=o(122),n=o(52),l=o(6),c=o(13);e.a=Object(l.a)(r.a,n.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(c.c)("v-hover should only contain a single element",this),element)):(Object(c.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},720:function(t,e,o){"use strict";o(695)},721:function(t,e,o){var r=o(17)(!1);r.push([t.i,".outlined[data-v-068e46a4]{color:#00f!important;border-color:#00f!important}",""]),t.exports=r},722:function(t,e,o){"use strict";o(696)},723:function(t,e,o){var r=o(17)(!1);r.push([t.i,".outlined[data-v-450b2fec]{color:#00f!important;border-color:#00f!important}",""]),t.exports=r},740:function(t,e,o){var content=o(816);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("7c47b293",content,!0,{sourceMap:!1})},758:function(t,e,o){"use strict";o.r(e);var r={props:{item:{type:Object,default:null}},data:function(){return{}}},n=(o(720),o(43)),l=o(50),c=o.n(l),d=o(265),m=o(64),f=o(269),v=o(707),h=o(140),y=o(166),_=o(31),T=o(637),O=o(81),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[o("v-card",{staticClass:"default",attrs:{elevation:r?3:1}},[o("v-toolbar",{attrs:{flat:"",dense:"",color:"primary",dark:""}},[o("v-card-title",[o("span",[t._v(" "+t._s(t.item.title))])]),t._v(" "),o("v-spacer"),t._v(" "),o("v-icon",{attrs:{color:"white"},domProps:{textContent:t._s(t.item.icon)}})],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-text",[o("v-list-item",[o("v-list-item-content",[o("v-list-item-title",{staticClass:"\n                primary--text\n                font-weight-bold\n                text-body-1 text-xs-center\n              "},[t._v(t._s(null==t.formatPrice(t.item.value)?0:t.formatPrice(t.item.value))+"\n            ")]),t._v(" "),o("v-list-item-subtitle",{domProps:{innerHTML:t._s(t.item.subtitle)}})],1)],1)],1)],1)]}}])})}),[],!1,null,"068e46a4",null);e.default=component.exports;c()(component,{VCard:d.a,VCardText:m.c,VCardTitle:m.d,VDivider:f.a,VHover:v.a,VIcon:h.a,VListItem:y.a,VListItemContent:_.a,VListItemSubtitle:_.b,VListItemTitle:_.c,VSpacer:T.a,VToolbar:O.a})},759:function(t,e,o){"use strict";o.r(e);var r={props:{item:{type:Object,default:null}},data:function(){return{}}},n=(o(722),o(43)),l=o(50),c=o.n(l),d=o(265),m=o(64),f=o(269),v=o(707),h=o(140),y=o(166),_=o(31),T=o(637),O=o(81),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[o("v-card",{staticClass:"default",attrs:{elevation:r?3:1}},[o("v-toolbar",{attrs:{flat:"",dense:""}},[o("v-card-title",{staticClass:"grey--text"},[o("span",[t._v(" "+t._s(t.item.title))])]),t._v(" "),o("v-spacer"),t._v(" "),o("v-icon",{attrs:{color:t.item.color},domProps:{textContent:t._s(t.item.icon)}})],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-text",{staticClass:"ma-0 py-0"},[o("v-list-item",{staticClass:"ma-0 pa-0",attrs:{dense:""}},[o("v-list-item-content",[o("v-list-item-title",{staticClass:"primary--text font-weight-light text-body-1"},[t._v(t._s(t.formatPrice(t.item.value))+"\n            ")]),t._v(" "),o("v-list-item-subtitle",{domProps:{innerHTML:t._s(t.item.subtitle1)}})],1)],1),t._v(" "),o("v-list-item",{staticClass:"ma-0 pa-0",attrs:{dense:""}},[o("v-list-item-content",[o("v-list-item-title",{staticClass:"primary--text font-weight-normal text-body-1"},[t._v(t._s(t.formatPrice(t.item.amount))+" "),o("v-icon",{attrs:{color:"primary",small:""}},[t._v("mdi-arrow-up")])],1),t._v(" "),o("v-list-item-subtitle",{domProps:{innerHTML:t._s(t.item.subtitle2)}})],1)],1)],1)],1)]}}])})}),[],!1,null,"450b2fec",null);e.default=component.exports;c()(component,{VCard:d.a,VCardText:m.c,VCardTitle:m.d,VDivider:f.a,VHover:v.a,VIcon:h.a,VListItem:y.a,VListItemContent:_.a,VListItemSubtitle:_.b,VListItemTitle:_.c,VSpacer:T.a,VToolbar:O.a})},760:function(t,e,o){"use strict";o.r(e);var r={props:{data:{type:Object,default:null},title:{type:String,default:null}},data:function(){return{options:{series:this.data.series,chart:{height:350,type:"line"},theme:{mode:"light",palette:"palette1",monochrome:{enabled:!0,color:"#2E294E",shadeTo:"dark",shadeIntensity:1}},stroke:{width:4,curve:"smooth"},xaxis:{type:"datetime",categories:this.data.categories,tickAmount:10},title:{text:null==this.title?"No. of bills per day":this.title,align:"left",style:{fontSize:"16px",color:"#666"}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#FDD835"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:4,colors:["#FFA41B"],strokeColors:"#fff",strokeWidth:2,hover:{size:7}},yaxis:{min:0,title:{text:this.title}}}}}},n=o(43),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("apexchart",{attrs:{width:"98%",type:"line",options:t.options,series:t.options.series}})}),[],!1,null,null,null);e.default=component.exports},815:function(t,e,o){"use strict";o(740)},816:function(t,e,o){var r=o(17)(!1);r.push([t.i,".outlined[data-v-4f10d320]{color:#00f!important;border-color:#00f!important}",""]),t.exports=r},871:function(t,e,o){"use strict";o.r(e);o(12),o(9),o(7),o(14),o(15);var r=o(0),n=(o(5),o(8),o(758)),l=o(759),c=o(760),d=o(70);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={components:{"statistical-card":n.default,"transaction-card":l.default,"smooth-line-chart":c.default},data:function(){return{}},created:function(){this.$store.dispatch("get_bills_perday"),this.$store.dispatch("get_bills_summation"),this.$store.dispatch("get_transactions_perday"),this.$store.dispatch("get_transactions_summations")},computed:f(f({},Object(d.b)({billsperday:"billsperday",billsummation:"billsummation",transactionsperday:"transactionsperday",transactionsummation:"transactionsummation"})),{},{bills:{get:function(){return[{value:this.billsummation.totalNumberOfBillsToday,title:"No. bills today",subtitle:"Total number of bills today",icon:"mdi-currency-usd-circle",color:"black darken-2"},{value:this.billsummation.totalBillsAmountToday,title:"Amount of bills today",subtitle:"Total amount of bills today",icon:"mdi-layers-outline",color:"red darken-1"},{value:this.billsummation.totalBillsPaidAmountToday,title:"Amount paid today",subtitle:"Total amount of bills paid today",icon:"mdi-layers-outline",color:"red darken-1"},{value:this.billsummation.totalNumberOfBills,title:"No. of bills",subtitle:"Total number of bills",icon:"mdi-bitcoin",color:"blue"},{value:this.billsummation.totalBillsAmount,title:"Bills amount",subtitle:"Total of all bills amount",icon:"mdi-layers-outline",color:"red darken-1"},{value:this.billsummation.totalBillsPaidAmount,title:"Total paid bills",subtitle:"Amount paid from bills",icon:"mdi-barcode-scan",color:"blue darken-2"}]}},transactions:{get:function(){return[{value:this.transactionsummation.totalNumberOfTransactionsToday,amount:this.transactionsummation.totalTransactionAmountToday,title:"Transactions today",subtitle1:"Transactions",subtitle2:"Total amount",icon:"mdi-currency-usd-circle",color:"black darken-2"},{value:this.transactionsummation.totalNumberOfTransactionsLast7Days,amount:this.transactionsummation.totalTransactionAmountLast7Days,title:"Transactions in last 7 days",subtitle1:"Number of Transactions",subtitle2:"Total amount",icon:"mdi-contactless-payment-circle",color:"primary darken-1"},{value:this.transactionsummation.totalNumberOfTransactionsLast30Days,amount:this.transactionsummation.totalTransactionAmountLast30Days,title:"Transactions in last 30 days",subtitle1:"No. of transactions in last 30 days",subtitle2:"Transactions amount in last 30 days",icon:"mdi-wallet",color:"red darken-1"},{value:this.transactionsummation.totalNumberOfTransactions,amount:this.transactionsummation.totalTransactionAmount,title:"All transactions",subtitle1:"Number of all transactions",subtitle2:"Total amounts",icon:"mdi-barcode",color:"blue darken-2"}]}},transactiontrends:{get:function(){var t=this.transactionsperday,e=new Array,o=new Array;return void 0!==t&&t.forEach((function(element){e.push(element.numberOfTransactions);var t=element.transactionDate;o.push(new Date(t).toISOString())})),{series:[{name:"Number of Transactions per day",data:e}],categories:o}}},billtrends:{get:function(){var t=this.billsperday,e=new Array,o=new Array;return void 0!==t&&t.forEach((function(element){e.push(element.totalBills);var t=element.createdDate;o.push(new Date(t).toISOString())})),{series:[{name:"Number of bills per day",data:e}],categories:o}}}})},h=(o(815),o(43)),y=o(50),_=o.n(y),T=o(265),O=o(645),x=o(635),w=o(646),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{fluid:""}},[o("v-row",{attrs:{"no-gutters":"",wrap:""}},t._l(t.bills,(function(t,e){return o("v-col",{key:e,staticClass:"ma-0 pa-0 pr-2 pb-2",attrs:{sm:"12",md:"2",lg:"2",xl:"2"}},[o("statistical-card",{attrs:{item:t}})],1)})),1),t._v(" "),o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"12",md:"5",sm:"12"}},[o("v-card",{staticClass:"mr-1"},[o("smooth-line-chart",{attrs:{data:t.transactiontrends,title:"Number of transactions per day"}})],1)],1),t._v(" "),null!=t.billsperday?o("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"12",md:"5",sm:"12"}},[o("v-card",{staticClass:"ml-1"},[o("smooth-line-chart",{attrs:{data:t.billtrends,title:"Number of bills created per day"}})],1)],1):t._e(),t._v(" "),o("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"12",md:"2",sm:"12"}},t._l(t.transactions,(function(t,e){return o("v-col",{key:e,staticClass:"ma-0 pa-0 pl-2 pb-2"},[o("transaction-card",{attrs:{item:t}})],1)})),1)],1)],1)}),[],!1,null,"4f10d320",null);e.default=component.exports;_()(component,{VCard:T.a,VCol:O.a,VContainer:x.a,VRow:w.a})}}]);