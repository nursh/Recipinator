webpackJsonp([4],{"2tt5":function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}var e=c("CwoH"),f=d(e),g=c("NKHc");c("fAzA");var h=c("bFrA"),i=d(h),j=c("tr1O"),k=d(j);(0,g.render)(f.default.createElement(function(){return"serviceWorker"in navigator&&navigator.serviceWorker.register("/service-worker.js"),f.default.createElement("div",null,f.default.createElement(k.default,null),f.default.createElement(i.default,null))},null),document.querySelector("#root"))},K7ns:function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"==typeof b||"function"==typeof b)?b:a}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}Object.defineProperty(b,"__esModule",{value:!0});var h=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),i=c("CwoH"),j=d(i),k=c("5D9O"),l=d(k),m=function(a){function b(a){e(this,b);var c=f(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a));return c.state={value:c.props.value,error:!1},c.handleChange=c.handleChange.bind(c),c}return g(b,a),h(b,[{key:"componentWillReceiveProps",value:function(a){this.setState({value:a.value})}},{key:"handleChange",value:function(a){var b=this.props.name,c=a.target.value,d="activity"===b||"target"===b?c.split(" ").join(""):c,e=this.props.validate(d),f=document.querySelector(".message."+b);e?f.classList.remove("hidden"):f.classList.add("hidden"),this.setState({value:c,error:e}),this.context.handleChange({name:b,value:c,error:e})}},{key:"render",value:function(){return j.default.createElement("div",{className:"required field"},j.default.createElement("label",{htmlFor:this.props.name},this.props.placeholder),j.default.createElement("input",{type:"text",name:this.props.name,id:this.props.name,placeholder:this.props.placeholder,value:this.state.value,onChange:this.handleChange}),j.default.createElement("div",{className:"ui negative hidden message "+this.props.name},j.default.createElement("p",null,this.state.error)))}}]),b}(i.Component);b.default=m,m.propTypes={name:l.default.string.isRequired,value:l.default.string.isRequired,placeholder:l.default.string.isRequired,validate:l.default.func}},KszN:function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"==typeof b||"function"==typeof b)?b:a}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}Object.defineProperty(b,"__esModule",{value:!0});var h=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),i=c("CwoH"),j=d(i),k=c("NEjq"),l=d(k),m=c("va2E"),n=d(m),o=(0,l.default)({loader:function(){return c.e(1).then(c.bind(null,"loRP"))},loading:function(){return null}}),p=(0,l.default)({loader:function(){return c.e(2).then(c.bind(null,"Ah+x"))},loading:function(){return null}}),q=(0,l.default)({loader:function(){return c.e(0).then(c.bind(null,"9r5N"))},loading:function(){return null}}),r=function(a){function b(){var a,c,d,g;e(this,b);for(var h=arguments.length,i=Array(h),j=0;j<h;j++)i[j]=arguments[j];return g=(c=(d=f(this,(a=b.__proto__||Object.getPrototypeOf(b)).call.apply(a,[this].concat(i))),d),d.state={page:1,fields:{title:"",description:"",imageUrl:"",prepTime:"",cookTime:"",ingredients:[],directions:[]},fieldErrors:{}},d.nextPage=function(){return d.setState(function(a){return{page:a.page+1}})},d.previousPage=function(){return d.setState(function(a){return{page:a.page-1}})},d.handleSubmit=function(a){if(a.preventDefault(),!d.validate()){var b=d.state.fields;d.setState({fields:{title:"",description:"",imageUrl:"",prepTime:"",cookTime:"",ingredients:[],directions:[]},fieldErrors:{}}),d.postData(b)}},d.postData=function(a){fetch("/recipe",{method:"post",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then(function(a){return a.json()}).then(function(a){return console.log(a)}).catch(function(a){return console.error(a)})},d.validate=function(){var a=d.state.fields,b=d.state.fieldErrors,c=Object.keys(b).filter(function(a){return b[a]});return!!c.length},c),f(d,g)}return g(b,a),h(b,[{key:"render",value:function(){return j.default.createElement("div",{className:"ui container"},j.default.createElement("div",{className:"ui grid centered"},j.default.createElement("div",{className:"row"},j.default.createElement("div",{className:"sixteen wide mobile twelve wide tablet eight wide computer column"},j.default.createElement("div",{className:"ui very raised teal segment"},j.default.createElement("h2",{className:"ui teal horizontal divider header"},"Recipinator"),1===this.state.page&&j.default.createElement(n.default,{onSubmit:this.nextPage}),2===this.state.page&&j.default.createElement(o,{onPreviousPage:this.previousPage,onSubmit:this.nextPage}),3===this.state.page&&j.default.createElement(p,{onPreviousPage:this.previousPage,onSubmit:this.nextPage}),4===this.state.page&&j.default.createElement(q,{onPreviousPage:this.previousPage,onSubmit:this.handleSubmit}))))))}}]),b}(i.Component);b.default=r},RIj7:function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"==typeof b||"function"==typeof b)?b:a}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}Object.defineProperty(b,"__esModule",{value:!0});var h=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),i=c("CwoH"),j=d(i),k=c("5D9O"),l=d(k),m=function(a){function b(a){e(this,b);var c=f(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a));return c.state={value:c.props.value,error:!1},c.handleChange=c.handleChange.bind(c),c}return g(b,a),h(b,[{key:"componentWillReceiveProps",value:function(a){this.setState({value:a.value})}},{key:"handleChange",value:function(a){var b=this.props.name,c=a.target.value,d="activity"===b||"target"===b?c.split(" ").join(""):c,e=this.props.validate(d),f=document.querySelector(".message."+b);e?f.classList.remove("hidden"):f.classList.add("hidden"),this.setState({value:c,error:e}),this.context.handleChange({name:b,value:c,error:e})}},{key:"render",value:function(){return j.default.createElement("div",{className:"field"},j.default.createElement("label",{htmlFor:this.props.name},this.props.placeholder),j.default.createElement("textarea",{rows:"3",name:this.props.name,id:this.props.name,placeholder:this.props.placeholder,value:this.state.value,onChange:this.handleChange}),j.default.createElement("div",{className:"ui negative hidden message "+this.props.name},j.default.createElement("p",null,this.state.error)))}}]),b}(i.Component);b.default=m,m.propTypes={name:l.default.string.isRequired,value:l.default.string.isRequired,placeholder:l.default.string.isRequired,validate:l.default.func}},bFrA:function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(b,"__esModule",{value:!0});var e=c("CwoH"),f=d(e),g=c("mrC1"),h=d(g),i=c("KszN"),j=d(i);b.default=function(){return f.default.createElement("div",{className:"pusher"},f.default.createElement(h.default,null),f.default.createElement(j.default,null))}},fAzA:function(){$(document).ready(()=>{$(".rating").rating({initialRating:5,maxRating:5,onRate:(a)=>alert(a)})}),$(document).ready(()=>{$("#root .ui.sidebar").sidebar({context:$(document.body)}).sidebar("attach events",".open.button")})},mrC1:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c("CwoH"),e=function(a){return a&&a.__esModule?a:{default:a}}(d);b.default=function(){return e.default.createElement("div",{className:"ui grid"},e.default.createElement("div",{className:"column"},e.default.createElement("div",{className:"ui huge pointing secondary menu"},e.default.createElement("a",{className:"item open button"}," ",e.default.createElement("i",{className:"sidebar icon"})),e.default.createElement("div",{className:"header item"},"Recipitopia"))))}},tr1O:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c("CwoH"),e=function(a){return a&&a.__esModule?a:{default:a}}(d);b.default=function(){return e.default.createElement("div",{className:"ui sidebar left vertical menu"},e.default.createElement("div",{className:"ui input focus item"},e.default.createElement("input",{type:"text",placeholder:"Search for recipe..."})),e.default.createElement("a",{className:"item"},"View recipes"),e.default.createElement("a",{className:"item"},"Add a recipe"))}},va2E:function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"==typeof b||"function"==typeof b)?b:a}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}Object.defineProperty(b,"__esModule",{value:!0});var h=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),i=c("CwoH"),j=d(i),k=c("5D9O"),l=d(k),m=c("/VmG"),n=d(m),o=c("I8yr"),p=d(o),q=c("K7ns"),r=d(q),s=c("RIj7"),t=d(s),u=function(a){function b(){var a,c,d,g;e(this,b);for(var h=arguments.length,i=Array(h),j=0;j<h;j++)i[j]=arguments[j];return g=(c=(d=f(this,(a=b.__proto__||Object.getPrototypeOf(b)).call.apply(a,[this].concat(i))),d),d.state={title:"",description:"",imageUrl:"",prep:"",cooking:""},c),f(d,g)}return g(b,a),h(b,[{key:"render",value:function(){return j.default.createElement("form",{className:"ui form",onSubmit:this.props.onSubmit},j.default.createElement(r.default,{placeholder:"Recipe Title",name:"title",value:this.state.title,validate:function(a){return a&&(0,p.default)(a)?!1:"Title is Required and should only contain letters"}}),j.default.createElement(t.default,{placeholder:"Enter Recipe Description",name:"description",value:this.state.description}),j.default.createElement(r.default,{placeholder:"Image Url",name:"Image Url",value:this.state.imageUrl,validate:function(a){return a&&(0,p.default)(a)?!1:"Image Url is Required and should only contain letters"}}),j.default.createElement("div",{className:"required two fields"},j.default.createElement(r.default,{placeholder:"Prep Time in mins",name:"prep",value:this.state.prep,validate:function(a){return a&&(0,n.default)(a)?!1:"PrepTime should only contain numbers"}}),j.default.createElement(r.default,{placeholder:"Cooking Time in mins",name:"cooking",value:this.state.prep,validate:function(a){return a&&(0,n.default)(a)?!1:"Cooking Time should only contain numbers"}})),j.default.createElement("div",{className:"field"},j.default.createElement("button",{type:"submit",className:"ui teal right labeled icon button right floated"},"Next",j.default.createElement("i",{className:"arrow right icon"}))),j.default.createElement("div",{className:"field"}))}}]),b}(j.default.Component);b.default=u}},["2tt5"]);
//# sourceMappingURL=app.42f45e42.js.map