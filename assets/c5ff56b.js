(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{766:function(e,t,n){"use strict";n.r(t);var d=n(164),o=n(265),r=n(63),l=n(650),c=n(641),m=n(652),h=n(637),v=n(268),_=n(140),f=n(649),I=n(639),x=n(111),k=n(80),y=n(90),w=(n(27),n(215),n(35),n(50),{props:{groups:{type:Array,default:null}},data:function(){return{editedIndex:-1,editedItemId:"",dialog:!1,search:"",headers:[{text:"ID",value:"id",class:"primary"},{text:"Name",value:"name",class:"primary"},{text:"Descriptions",value:"descriptions",sortable:!1,class:"primary"},{text:"Actions",value:"actions",sortable:!1,class:"primary"}],editedItem:{id:0,name:"",descriptions:""},defaultItem:{id:0,name:"",descriptions:""}}},methods:{save:function(){var e=this;this.editedIndex>-1?(Object.assign(this.groups[this.editedIndex],this.editedItem),this.$store.dispatch("update_medicine_group",this.editedItem).then((function(t){setTimeout((function(){return e.$emit("update")}),e.delay_seconds)}))):(this.groups.push(this.editedItem),this.$store.dispatch("add_new_medicine_group",this.editedItem).then((function(t){setTimeout((function(){return e.$emit("update")}),e.delay_seconds)}))),this.close()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},editItem:function(e){this.editedIndex=this.groups.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0,this.editedItemId=e.id},deleteItem:function(){}},computed:{formTitle:function(){return-1===this.editedIndex?"New medicine  group":"Edit medicine group"}}}),C=n(43),component=Object(C.a)(w,(function(){var e=this,t=e._self._c;return t("div",[t(m.a,{staticClass:"elevation-0",attrs:{headers:e.headers,items:e.groups,search:e.search,"items-per-page":15,"sort-by":"id",dense:""},scopedSlots:e._u([{key:"top",fn:function(){return[t(k.a,{attrs:{flat:"",color:"primary",dark:""}},[t(y.b,[t("h3",[e._v("Medicine groups")])]),e._v(" "),t(I.a),e._v(" "),t(x.a,{attrs:{label:"Search by name/company/composition","single-line":"","hide-details":"",rounded:"",filled:"",height:"40"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v("  \n        "),t(h.a,{attrs:{"max-width":"900px"},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[e.isMdAndUp?t(d.a,e._g(e._b({staticClass:"button primary",attrs:{elevation:"1","x-large":"",dark:""}},"v-btn",r,!1),o),[t(_.a,{attrs:{left:""}},[e._v("mdi-plus")]),e._v(e._s(e.$t("label.button.addnewgroup")))],1):t(d.a,e._g(e._b({staticClass:"mb-2 font-weight-normal",attrs:{color:"button",fab:"",small:"",dark:""}},"v-btn",r,!1),o),[t(_.a,[e._v("mdi-plus")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),t(o.a,[t(r.d,{staticClass:"primary white--text"},[t("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),e._v(" "),t(v.a),e._v(" "),t(r.c,{staticClass:"pa-4 mt-4"},[t(c.a,[t(f.a,[t(l.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(x.a,{attrs:{label:"Name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",sm:"6",md:"8"}},[t(x.a,{attrs:{label:"Descriptions"},model:{value:e.editedItem.descriptions,callback:function(t){e.$set(e.editedItem,"descriptions",t)},expression:"editedItem.descriptions"}})],1)],1)],1)],1),e._v(" "),t(v.a),e._v(" "),t(r.a,[t(I.a),e._v(" "),t(d.a,{staticClass:"button cancel",on:{click:e.close}},[e._v(e._s(e.$t("label.button.decline")))]),e._v(" "),t(d.a,{staticClass:"button",on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(n){var d=n.item;return[t(_.a,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(d)}}},[e._v(" mdi-pencil ")]),e._v(" "),t(_.a,{attrs:{small:"",color:"indigo darken-4"},on:{click:function(t){return e.deleteItem(d)}}},[e._v("\n        mdi-delete\n      ")])]}}],null,!0)})],1)}),[],!1,null,null,null);t.default=component.exports}}]);