(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{146:function(e,t,a){"use strict";a.r(t);var l=a(12),n=a(0),i=a.n(n),s=a(11),r=a.n(s),c=a(70),o=a.n(c),u=a(90),h=a(45),d=a(46),p=a(47),m=a(65),j=a(64);var y=function(e){return Object(l.jsx)("div",{className:"wrapper",children:e.children})};var v=function(e){return Object(l.jsxs)("select",{value:e.value,onChange:e.handleOptionFilter,children:[Object(l.jsx)("option",{value:"all",children:" Filter by: "}),Object(l.jsx)("option",{value:"city",children:"City"}),Object(l.jsx)("option",{value:"state",children:"State"}),Object(l.jsx)("option",{value:"all",children:"Cancel"})]})},f=a(16);var O=function(e){var t=[];"city"===e.value?e.employees.forEach((function(e){return t.push(e.city)})):"state"===e.value&&e.employees.forEach((function(e){return t.push(e.state)})),t=Object(f.a)(new Set(t)),console.log(t);var a=t.map((function(e){return Object(l.jsx)("option",{value:e})}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"text",list:"data",onChange:e.handleFilter}),Object(l.jsx)("datalist",{id:"data",children:a})]})},b=a(91),x=[{field:"firstName",headerName:"First name",width:130},{field:"lastName",headerName:"Last name",width:130},{field:"city",headerName:"City",width:130},{field:"state",headerName:"State",width:130},{field:"cell",headerName:"Cell",type:"Phone",width:170},{field:"email",headerName:"E-mail",type:"E-mail",width:300}];function w(e){var t=e.employees;return Object(l.jsx)("div",{style:{width:"100%"},children:Object(l.jsx)(b.a,{rows:t,columns:x,pageSize:7,autoHeight:!0})})}var F=a(94),g=a.n(F),E=function(){return g.a.get("https://randomuser.me/api/?results=25&nat=us&inc=name,email,location,cell&noinfo?")},N=a(198),S=a(199),k=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).state={employees:[],active:!1,value:"all",allEmployees:[]},e.handleOptionFilter=e.handleOptionFilter.bind(Object(p.a)(e)),e.handleFilter=e.handleFilter.bind(Object(p.a)(e)),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;E().then((function(e){return e.data.results.map((function(t){return{lastName:"".concat(t.name.last),firstName:"".concat(t.name.first),state:t.location.state,city:t.location.city,cell:t.cell,email:t.email,id:e.data.results.indexOf(t)+1}}))})).then((function(t){e.setState({allEmployees:t,employees:t}),console.log(t),console.log(e.state.allEmployees)})).catch((function(e){return alert(e)}))}},{key:"handleFilter",value:function(e){switch(console.log(this.state.value),this.state.value){case"city":return this.setState({employees:this.state.allEmployees.filter((function(t){return t.city.includes(e.target.value)}))});case"state":return this.setState({employees:this.state.allEmployees.filter((function(t){return t.state.includes(e.target.value)}))});case"all":return this.setState({employees:this.state.allEmployees});default:return-1}}},{key:"handleOptionFilter",value:function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({value:t.target.value,employees:this.state.allEmployees});case 2:return e.next=4,this.setState({active:!1});case 4:return e.next=6,this.setState({active:!0});case 6:"all"===this.state.value&&this.setState({active:!1});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(l.jsxs)(y,{children:[Object(l.jsx)(N.a,{children:Object(l.jsx)("h1",{className:"text-center",children:" Employee Directory "})}),Object(l.jsxs)(S.a,{children:[Object(l.jsx)(v,{handleOptionFilter:this.handleOptionFilter,value:this.state.value}),this.state.active?Object(l.jsx)(O,{employees:this.state.employees,value:this.state.value,handleFilter:this.handleFilter}):"",Object(l.jsx)(w,{employees:this.state.employees})]})]})}}]),a}(i.a.Component);a(142),a(143);r.a.render(Object(l.jsx)(k,{}),document.getElementById("root"))}},[[146,1,2]]]);
//# sourceMappingURL=main.b72caeaa.chunk.js.map