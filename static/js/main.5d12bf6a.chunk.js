(this.webpackJsonpboil=this.webpackJsonpboil||[]).push([[0],{4:function(e,t,s){"use strict";s.r(t);var n=s(3),r=s.n(n),a=s(1),i=s.n(a),c=s(0);function h(e){return e.celsius>=100?Object(c.jsx)("p",{children:"\u6cb8\u9a30\u3057\u3066\u308b\u3088"}):Object(c.jsx)("p",{children:"\u307e\u3060\u307e\u3060\u306c\u308b\u3044\u305e\uff01."})}class l extends i.a.Component{constructor(e){super(e),this.handleChange=this.handleChange.bind(this),this.state={temperature:""}}handleChange(e){this.setState({temperature:e.target.value})}render(){const e=this.state.temperature;return Object(c.jsxs)("fieldset",{children:[Object(c.jsx)("legend",{children:"Enter temperature in Celsius:"}),Object(c.jsx)("input",{value:e,onChange:this.handleChange}),Object(c.jsx)(h,{celsius:parseFloat(e)})]})}}r.a.render(Object(c.jsx)(l,{}),document.getElementById("root"))}},[[4,1,2]]]);
//# sourceMappingURL=main.5d12bf6a.chunk.js.map