(this["webpackJsonpwd-5"]=this["webpackJsonpwd-5"]||[]).push([[0],{36:function(t,e,a){},64:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a(29),i=a.n(c),s=(a(36),a(10)),r=a(11),o=a(13),h=a(12),u=a(15),l=a.n(u),j=a(1),d=function(t){Object(o.a)(a,t);var e=Object(h.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"zip-card",children:Object(j.jsxs)("ul",{children:[Object(j.jsxs)("h3",{children:[" ",this.props.city,", ",this.props.state]}),Object(j.jsxs)("li",{children:[" State: ",this.props.state," "]}),Object(j.jsxs)("li",{children:[" Location: (",this.props.latitude,", ",this.props.longitude,") "]}),Object(j.jsxs)("li",{children:[" Population (estimated): ",this.props.population," "]}),Object(j.jsxs)("li",{children:[" Total Wages: ",this.props.wages," "]})]})})}}]),a}(n.Component),p=function(t){Object(o.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).handleSubmit=function(t){t.preventDefault(),l.a.get("https://ctp-zip-api.herokuapp.com/zip/".concat(n.state.zip)).then((function(t){var e=t.data;n.setState({data:e})})).catch((function(t){console.log(t),n.setState({data:[]})}))},n.handleChange=function(t){n.setState({zip:t.target.value})},n.state={zip:"",data:[]},n}return Object(r.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"centered",children:[Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:["Enter a Zip Code",Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",name:"zip",onChange:this.handleChange}),Object(j.jsx)("input",{type:"submit",value:"Submit"})]}),Object(j.jsx)("div",{className:"container",children:0==this.state.data.length?"No Results":this.state.data.map((function(t){return Object(j.jsx)("div",{className:"card",children:Object(j.jsx)(d,{city:t.City,state:t.State,latitude:t.Lat,longitude:t.Long,population:t.EstimatedPopulation,wages:t.TotalWages})},t.RecordNumber)}))})]})}}]),a}(n.Component),b=function(t){Object(o.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).handleSubmit=function(t){t.preventDefault(),l.a.get("https://ctp-zip-api.herokuapp.com/city/".concat(n.state.city.toUpperCase())).then((function(t){var e=t.data;n.setState({data:e})})).catch((function(t){console.log(t),n.setState({data:["No results found"]})}))},n.handleChange=function(t){n.setState({city:t.target.value})},n.state={city:"",data:[]},n}return Object(r.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"centered",children:[Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:["Enter a City name",Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",name:"city",onChange:this.handleChange}),Object(j.jsx)("input",{type:"submit",value:"Submit"})]}),Object(j.jsx)("div",{className:"container",children:0==this.state.data.length?"Search above":this.state.data.map((function(t){return Object(j.jsx)("div",{className:"card",children:t})}))})]})}}]),a}(n.Component),O=a(17),m=a.n(O);var x=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(m.a,{to:"/zipsearch",children:"Zip Code Search"}),Object(j.jsx)("br",{}),Object(j.jsx)(m.a,{to:"/citysearch",children:"City Search"})]})},f=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,65)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,i=e.getLCP,s=e.getTTFB;a(t),n(t),c(t),i(t),s(t)}))},v=a(31),g=a(2),y=Object(j.jsx)(v.a,{basename:"/wd-5",children:Object(j.jsxs)(g.Switch,{children:[Object(j.jsx)(g.Route,{exact:!0,path:"/zipsearch",component:p}),Object(j.jsx)(g.Route,{exact:!0,path:"/citysearch",component:b}),Object(j.jsx)(g.Route,{path:"/",component:x})]})});i.a.render(y,document.getElementById("root")),f()}},[[64,1,2]]]);
//# sourceMappingURL=main.ff243ba9.chunk.js.map