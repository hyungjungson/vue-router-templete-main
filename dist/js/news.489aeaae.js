(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["news"],{"0b56":function(e,t,n){},a2f9:function(e,t,n){"use strict";n.r(t);var a,s,l=n("2877"),o=n("d260"),r=n.n(o),i={},c=Object(l["a"])(i,a,s,!1,null,null,null);"function"===typeof r.a&&r()(c),t["default"]=c.exports},d260:function(e,t){},d35e:function(e,t,n){"use strict";n("0b56")},e2f8:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"calender"},[n("v-sheet",{staticClass:"d-flex",attrs:{tile:"",height:"54"}},[n("v-btn",{staticClass:"ma-2",attrs:{icon:""},on:{click:function(t){return e.$refs.calendar.prev()}}},[n("v-icon",[e._v("mdi-chevron-left")])],1),n("v-select",{staticClass:"ma-2",attrs:{items:e.types,dense:"",outlined:"","hide-details":"",label:"type"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}}),n("v-select",{staticClass:"ma-2",attrs:{items:e.modes,dense:"",outlined:"","hide-details":"",label:"event-overlap-mode"},model:{value:e.mode,callback:function(t){e.mode=t},expression:"mode"}}),n("v-select",{staticClass:"ma-2",attrs:{items:e.weekdays,dense:"",outlined:"","hide-details":"",label:"weekdays"},model:{value:e.weekday,callback:function(t){e.weekday=t},expression:"weekday"}}),n("v-spacer"),n("v-btn",{staticClass:"ma-2",attrs:{icon:""},on:{click:function(t){return e.$refs.calendar.next()}}},[n("v-icon",[e._v("mdi-chevron-right")])],1)],1),n("v-sheet",{attrs:{height:"600"}},[n("v-calendar",{ref:"calendar",attrs:{weekdays:e.weekday,type:e.type,events:e.events,"event-overlap-mode":e.mode,"event-overlap-threshold":30,"event-color":e.getEventColor},on:{change:e.getEvents},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)],1)},s=[],l={data:function(){return{type:"month",types:["month","week","day","4day"],mode:"stack",modes:["stack","column"],weekday:[0,1,2,3,4,5,6],weekdays:[{text:"Sun - Sat",value:[0,1,2,3,4,5,6]},{text:"Mon - Sun",value:[1,2,3,4,5,6,0]},{text:"Mon - Fri",value:[1,2,3,4,5]},{text:"Mon, Wed, Fri",value:[1,3,5]}],value:"",events:[],colors:["blue","indigo","deep-purple","cyan","green","orange","grey darken-1"],names:["Meeting","Holiday","PTO","Travel","Event","Birthday","Conference","Party"]}},methods:{getEvents:function(e){for(var t=e.start,n=e.end,a=[],s=new Date("".concat(t.date,"T00:00:00")),l=new Date("".concat(n.date,"T23:59:59")),o=(l.getTime()-s.getTime())/864e5,r=this.rnd(o,o+20),i=0;i<r;i++){var c=0===this.rnd(0,3),d=this.rnd(s.getTime(),l.getTime()),u=new Date(d-d%9e5),v=9e5*this.rnd(2,c?288:8),m=new Date(u.getTime()+v);a.push({name:this.names[this.rnd(0,this.names.length-1)],start:u,end:m,color:this.colors[this.rnd(0,this.colors.length-1)],timed:!c})}this.events=a},getEventColor:function(e){return e.color},rnd:function(e,t){return Math.floor((t-e+1)*Math.random())+e}}},o=l,r=(n("d35e"),n("2877")),i=Object(r["a"])(o,a,s,!1,null,null,null);t["default"]=i.exports}}]);
//# sourceMappingURL=news.489aeaae.js.map