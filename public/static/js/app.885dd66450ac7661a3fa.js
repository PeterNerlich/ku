webpackJsonp([0],[,,function(t,e){},function(t,e,n){var i=n(0)(n(5),n(11),null,null,null);t.exports=i.exports},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(10),r=n.n(i),o=n(9),s=n.n(o);e.default={name:"app",components:{monitor:r.a,controllroom:s.a},mounted:function(){this.getLocalIp()},data:function(){return{view:null,localIp:""}},methods:{setView:function(t){this.view=t}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=n.n(i);e.default={data:function(){return{allowedValues:[{id:"1"},{id:"2"},{id:"3"},{id:"4"},{id:"5"},{id:"6"},{id:"7"},{id:"8"},{id:"9"},{id:"10"},{id:"11"},{id:"12"},{id:"13"},{id:"14"},{id:"15"},{id:"16"},{id:"17"},{id:"18"},{id:"19"},{id:"20"},{id:"21"},{id:"22"},{id:"23"},{id:"24"},{id:"25"},{id:"26"},{id:"27"},{id:"28"},{id:"29"},{id:"30"}],currentValues:[],continueRefresh:!0,refreshTimeout:null}},mounted:function(){this.refresh()},beforeDestroy:function(){console.log("clearTimeout monitor"),this.refreshTimeout&&clearTimeout(this.refreshTimeout)},methods:{isActive:function(t){return void 0!==this.currentValues.find(function(e){return e.id===t.id})},refresh:function(){var t=this;this.continueRefresh?r.a.ajax({type:"GET",url:this.getTargetServer()+"currentEntries",success:function(e){t.currentValues=e},complete:function(e){console.log("refresh done"),t.refreshTimeout=setTimeout(function(){t.refresh()},500)}}):t.refreshTimeout&&clearTimeout(t.refreshTimeout)},addToCurrent:function(t){this.isActive(t)||r.a.ajax({type:"POST",url:this.getTargetServer()+"currentEntries",data:t,success:function(t){}})},getTargetServer:function(){return window.location.href.replace(":8080","")},removeFromCurrent:function(t){r.a.ajax({type:"DELETE",url:this.getTargetServer()+"currentEntries/"+t.id,success:function(t){}})},doClose:function(){this.$emit("close")}}}},function(t,e){throw new Error("Module build failed: SyntaxError: C:/Daten/dev/php/_tests/ku/src/components/Monitor.vue: Unexpected token, expected , (80:0)\n\n[0m [90m 78 | [39m    }\n [90m 79 | [39m}\n[31m[1m>[22m[39m[90m 80 | [39m\n [90m    | [39m[31m[1m^[22m[39m[0m\n")},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),r=n(3),o=n.n(r),s=n(2);n.n(s);i.a.config.productionTip=!1,new i.a({el:"#app",template:"<App/>",components:{App:o.a}})},function(t,e,n){var i=n(0)(n(6),n(12),null,null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(7),n(13),null,null,null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},["controll"===t.view?n("controllroom",{on:{close:function(e){t.setView(null)}}}):t._e(),t._v(" "),"monitor"===t.view?n("monitor",{on:{close:function(e){t.setView(null)}}}):t._e(),t._v(" "),null===t.view?n("div",{staticClass:"appOverview text-center"},[n("button",{staticClass:"btn btn-primary btn-lg",attrs:{type:"button"},on:{click:function(e){t.setView("controll")}}},[t._v("zum Kontrollraum")]),t._v(" "),n("button",{staticClass:"btn btn-primary btn-lg",attrs:{type:"button"},on:{click:function(e){t.setView("monitor")}}},[t._v("zum Monitor")])]):t._e()],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"controllroom"},[n("div",{staticClass:"numberpad"},t._l(t.allowedValues,function(e){return n("button",{class:{active:t.isActive(e)},attrs:{type:"button"},on:{click:function(n){t.addToCurrent(e)}}},[t._v(t._s(e.id))])})),t._v(" "),n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-12"},[n("h2",[t._v("Bitte abholen")]),t._v(" "),n("div",{staticClass:"currentValues"},t._l(t.currentValues,function(e){return n("div",[n("button",{staticClass:"removeButton",attrs:{type:"button"},on:{click:function(n){t.removeFromCurrent(e)}}},[t._v("×")]),t._v("\n            "+t._s(e.id)+"\n          ")])}))])])]),t._v(" "),n("button",{staticClass:"btn btn-primary btn-lg viewClose",attrs:{type:"button"},on:{click:t.doClose}},[t._v("Schließen")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"monitorView"},[n("transition",{attrs:{name:"wrapAnimated"}},[t.currentValues.length>0?n("div",{staticClass:"wrap"},[n("h2",[t._v("Bitte abholen")]),t._v(" "),n("h1",{attrs:{values:t.currentValues.length}},[n("transition-group",{attrs:{name:"numberAnimated"}},t._l(t.currentValues,function(e){return n("span",{key:e},[t._v(t._s(e.id))])}))],1)]):t._e()]),t._v(" "),n("button",{staticClass:"btn btn-primary btn-lg viewClose",attrs:{type:"button"},on:{click:t.doClose}},[t._v("Schließen")])],1)},staticRenderFns:[]}}],[8]);
//# sourceMappingURL=app.885dd66450ac7661a3fa.js.map