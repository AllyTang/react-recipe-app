(window["webpackJsonprecipe-app"]=window["webpackJsonprecipe-app"]||[]).push([[0],{24:function(e,t,a){e.exports=a(37)},30:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(21),i=a.n(r),s=(a(29),a(30),a(6)),l=a(5),p=a(7),o=a.n(p),m=a(10),u=a(11),h=a(12),f=a(14),b=a(13),E=a(15),v=function(e){return n.a.createElement("form",{onSubmit:e.getRecipe,style:{marginBottom:"3rem"}},n.a.createElement("input",{className:"form__input",type:"text",name:"recipeName"}),n.a.createElement("button",{className:"form__button"},"Search"))},_=function(e){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},e.recipes.map(function(e){return n.a.createElement("div",{key:e.title,className:"col-md-4",style:{marginBottom:"2rem"}},n.a.createElement("div",{className:"recipes__box"},n.a.createElement("img",{className:"recipe__box-img",src:e.image_url,alt:e.title}),n.a.createElement("div",{className:"recipe__text"},n.a.createElement("h5",{className:"recipes__title"},e.title.length<20?"".concat(e.title):"".concat(e.title.substring(0,20),"...")),n.a.createElement("p",{className:"recipes__subtitle"},"publisher:",n.a.createElement("span",null,e.publisher))),n.a.createElement("button",{className:"recipe_buttons"},n.a.createElement(s.b,{to:{pathname:"/recipe/".concat(e.recipe_id),state:{recipe:e.title}}},"View Recipe"))))})))},d="17a8af76473885ead68147fefda5962c",w=function(e){function t(){var e,a;Object(u.a)(this,t);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(n)))).state={recipes:[]},a.getRecipe=function(){var e=Object(m.a)(o.a.mark(function e(t){var c,n,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.elements.recipeName.value,t.preventDefault(),e.next=4,fetch("https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=".concat(d,"&q=").concat(c,"&count=9"));case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,a.setState({recipes:r.recipes}),console.log(a.state.recipes);case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"App-header"},n.a.createElement("h1",{className:"App-title"},"Recipe Search")),n.a.createElement(v,{getRecipe:this.getRecipe}),n.a.createElement(_,{recipes:this.state.recipes}))}}]),t}(c.Component),N="17a8af76473885ead68147fefda5962c",g=function(e){function t(){var e,a;Object(u.a)(this,t);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(n)))).state={activeRecipe:[]},a.componentDidMount=Object(m.a)(o.a.mark(function e(){var t,c,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.location.state.recipe,e.next=3,fetch("https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=".concat(N,"&q=").concat(t));case 3:return c=e.sent,e.next=6,c.json();case 6:n=e.sent,a.setState({activeRecipe:n.recipes[0]}),console.log(a.state.activeRecipe);case 9:case"end":return e.stop()}},e)})),a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state.activeRecipe;return n.a.createElement("div",{className:"container"},0!==this.state.activeRecipe.length&&n.a.createElement("div",{className:"active-recipe"},n.a.createElement("img",{className:"active-recipe__img",src:e.image_url,alt:e.title}),n.a.createElement("h3",{className:"active-recipe__title"},e.title),n.a.createElement("h4",{className:"active-recipe__publisher"},"Publisher:",n.a.createElement("span",null,e.publisher)),n.a.createElement("p",{className:"active-recipe__website"},"Website:",n.a.createElement("span",null,n.a.createElement("a",{href:e.publisher_url},e.publisher_url))),n.a.createElement("button",{className:"active-recipe__button"},n.a.createElement(s.b,{to:"/"},"Go Home"))))}}]),t}(c.Component),y=function(){return n.a.createElement(s.a,null,n.a.createElement(l.c,null,n.a.createElement(l.a,{path:"/",component:w,exact:!0}),n.a.createElement(l.a,{path:"/recipe/:id",component:g})))};i.a.render(n.a.createElement(y,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.96a88fc0.chunk.js.map