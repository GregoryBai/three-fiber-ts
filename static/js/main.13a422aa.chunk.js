(this["webpackJsonpthree-fiber-ts"]=this["webpackJsonpthree-fiber-ts"]||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(25),c=a.n(r),i=(a(84),a(17)),l=(a(85),a(44)),m=a(32),s=a(45);function u(){var e=Object(l.a)(["\n\tposition: absolute;\n\twidth: 100%;\n\ttop: 0;\n\tleft: 0;\n\theight: 20px;\n\topacity: 0.8;\n\tpadding: 5px 20px;\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\talign-items: center;\n\tbackground-color: #e0e0e0;\n\tfont-family: 'Space Mono', sans-serif;\n\tfont-weight: 400;\n\tfont-size: 1rem;\n\tletter-spacing: 4px;\n"]);return u=function(){return e},e}var h=s.a.nav(u()),p=function(){return c.a.createPortal(o.a.createElement(h,null,o.a.createElement(m.b,{to:"/"}," Main"),o.a.createElement(m.b,{to:"/map"}," Map"),o.a.createElement(m.b,{to:"/three"}," 3D")),document.querySelector("#portal"))},f=a(67),E=a(8),d=a(9),g=a(52);function b(){var e=Object(l.a)(["\n\theight: 100vh;\n\t/* pointer-events: none; */\n"]);return b=function(){return e},e}var w=s.a.div(b()),v=function(e){var t=e.size,a=e.position,r=e.color,c=Object(n.useRef)(null),i=Object(n.useState)(!1),l=Object(E.a)(i,2),m=l[0],s=l[1],u=Object(n.useRef)({x:0,y:0}),h=Object(n.useState)(r),p=Object(E.a)(h,2),f=p[0],g=p[1];Object(d.e)((function(){}));return o.a.createElement("mesh",{onWheel:function(e){m&&(e.preventDefault(),console.log(e))},onPointerOver:function(e){s(!0),c.current.rotation.x+=15,g("red")},onPointerOut:function(e){s(!1),u.current.x=20,g(r)},castShadow:!0,ref:c,position:a},o.a.createElement("boxBufferGeometry",{attach:"geometry",args:t}),o.a.createElement("meshStandardMaterial",{attach:"material",color:f}))},y=function(e){return Object(f.a)(e),o.a.createElement(o.a.Fragment,null,o.a.createElement(w,null,o.a.createElement(d.a,{shadowMap:!0,colorManagement:!0,camera:{position:[0,10,-15],fov:90}},o.a.createElement("pointLight",{position:[-10,0,5],intensity:.3}),o.a.createElement("ambientLight",{intensity:.2}),o.a.createElement("spotLight",{position:[0,20,-3],intensity:.5,castShadow:!0}),o.a.createElement("directionalLight",{position:[0,10,0],intensity:2,"shadow-mapSize-height":1024,"shadow-mapSize-width":1024,"shadow-camera-far":50,"shadow-camera-top":10,"shadow-camera-bottom":10,"shadow-camera-left":10,"shadow-camera-right":10,castShadow:!0}),o.a.createElement("fog",{attach:"fog",args:["white",10,30]}),o.a.createElement(g.a,{position:[0,10,-20]},o.a.createElement("p",null,"Welcome to the app!")),o.a.createElement(g.a,{position:[0,10,0]},o.a.createElement("p",null,"This is some wonderful HTML")),o.a.createElement(v,{size:[1,1,1],position:[2,5,-3],color:"lightblue"}),o.a.createElement(v,{size:[2,2,1],position:[-5,7,-2],color:"violet"}),o.a.createElement(v,{size:[2,2,1],position:[5,2,3],color:"hotpink"}),o.a.createElement("group",null,o.a.createElement("mesh",{receiveShadow:!0,rotation:[-Math.PI/2,0,0],position:[0,1,0]},o.a.createElement("planeBufferGeometry",{attach:"geometry",args:[100,100]}),o.a.createElement("meshPhysicalMaterial",{attach:"material",color:"green"}))),o.a.createElement(g.b,null))))};var x=function(){return o.a.createElement("div",null,o.a.createElement(p,null),o.a.createElement(i.c,null,o.a.createElement(i.a,{path:"/",exact:!0,component:function(){return o.a.createElement("h1",null,"MAIN")}}),o.a.createElement(i.a,{path:"/map",exact:!0,component:function(){return o.a.createElement("h1",null,"MAP")}}),o.a.createElement(i.a,{path:"/three",exact:!0,component:y})))};c.a.render(o.a.createElement(m.a,null,o.a.createElement(x,null)),document.getElementById("root"))},80:function(e,t,a){e.exports=a(102)},84:function(e,t,a){},85:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.13a422aa.chunk.js.map