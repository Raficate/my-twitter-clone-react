(this["webpackJsonptwitter-react-2021"]=this["webpackJsonptwitter-react-2021"]||[]).push([[0],{29:function(e,t,c){},51:function(e,t,c){},83:function(e,t,c){"use strict";c.r(t);var n=c(3),s=c(19),a=c.n(s),j=c(44),r=c(10),i=(c(50),c(51),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,111)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,j=t.getTTFB;c(e),n(e),s(e),a(e),j(e)}))}),l=c(11),o=c(85),b=c(92),d=c(88),h=c(89),x=c(93),O=c(94),u=c(95),g=c(96),m=c(97),f=c(84),p=c(86),v=c(87),S=c(90),y=c(91),I=(c(29),c(21)),M=c(20),w=c(43),C={baseURL_API:"https://twitter-clone-raficate.herokuapp.com/",clientID:"784073769962-aetplsrun9hnvmaf1qgv64kdb1nqqpqi.apps.googleusercontent.com"},k=c.n(w).a.create({baseURL:C.baseURL_API});var D=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],P=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function L(e){return P[e.getDay()]+", "+e.getDate()+" "+D[e.getMonth()]+" "+e.getFullYear()+", "+("0"+e.getHours()).slice(-2)+":"+("0"+e.getMinutes()).slice(-2)+":"+("0"+e.getSeconds()).slice(-2)}var N=c(2);function E(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=function(){k.get("/posts").then((function(e){return e.data})).then((function(e){s(e)}))};return Object(n.useEffect)((function(){a()}),[]),Object(N.jsxs)("div",{children:[Object(N.jsx)(f.a,{tag:"center",children:Object(N.jsxs)(o.a,{color:"primary",children:[Object(N.jsx)("strong",{children:"Posts publicados "}),Object(N.jsx)(p.a,{pill:!0,children:c.length})]})}),Object(N.jsx)(v.a,{children:Object(N.jsx)("tbody",{children:c.map((function(e,t){return Object(N.jsxs)("div",{children:[Object(N.jsx)(d.a,{children:Object(N.jsx)(h.a,{children:Object(N.jsx)(S.a,{children:Object(N.jsxs)(y.a,{children:[Object(N.jsx)(d.a,{children:Object(N.jsx)(h.a,{children:Object(N.jsxs)("strong",{children:[Object(N.jsx)("img",{src:e.image,alt:"Img"})," ",e.user]})})}),Object(N.jsx)(d.a,{children:Object(N.jsx)(h.a,{children:e.message})}),Object(N.jsxs)(d.a,{children:[Object(N.jsx)(h.a,{align:"left",xs:"5",children:Object(N.jsxs)(d.a,{children:[Object(N.jsx)(h.a,{xs:"2",children:Object(N.jsx)(M.a,{})}),Object(N.jsxs)(h.a,{xs:"2",children:[Object(N.jsx)(I.b,{}),Object(N.jsx)("small",{children:Math.floor(10*Math.random()+1)})]}),Object(N.jsxs)(h.a,{xs:"2",children:[Object(N.jsx)(I.a,{}),Object(N.jsx)("small",{children:Math.floor(100*Math.random()+1)})]}),Object(N.jsx)(h.a,{xs:"2",children:Object(N.jsx)(M.b,{})})]})}),Object(N.jsx)(h.a,{align:"right",children:Object(N.jsx)("small",{children:L(new Date(e.publicationdate))})})]})]})})})}),Object(N.jsx)("br",{})]})}))})})]})}var T=c(23),A=c.p+"static/media/bird.7a65b904.png",F={maxWidth:"85px"};var J=c(98),q=c(99),B=c(22);function U(e){return Object(N.jsxs)(x.a,{color:"primary",light:!0,expand:"md",children:[Object(N.jsxs)(u.a,{children:[Object(N.jsx)(B.a,{color:"white"}),Object(N.jsxs)("span",{className:"text-white",children:[Object(N.jsx)("strong",{children:" Dashboard:"})," ",sessionStorage.getItem("name")]})]}),Object(N.jsx)(J.a,{navbar:!0,children:Object(N.jsxs)(g.a,{className:"ml-auto",navbar:!0,children:[Object(N.jsx)(m.a,{children:Object(N.jsx)(q.a,{href:"#",onClick:function(){return e.onShow(1)},children:Object(N.jsx)("span",{className:"text-white",children:"Todos los Posts"})})}),Object(N.jsx)(m.a,{children:Object(N.jsx)(q.a,{href:"#",onClick:function(){return e.onShow(2)},children:Object(N.jsx)("span",{className:"text-white",children:"Mis Posts"})})}),Object(N.jsx)(m.a,{children:Object(N.jsx)(T.GoogleLogout,{clientId:C.clientID,buttonText:"Logout",theme:"dark",onLogoutSuccess:e.onLogout})})]})})]})}var _=c(6),G=c.n(_),K=c(110),R=c(105),W=c(106),z=c(107),H=c(104),Y=c(108),Q=c(109),V=c(100),X=c(101),Z=c(102),$=c(103);function ee(e){var t=Object(n.useState)(""),c=Object(l.a)(t,2),s=c[0],a=c[1],j=function(t){"OK"===t&&e.updateMyPosts()};return Object(N.jsx)("div",{children:Object(N.jsxs)(S.a,{body:!0,children:[Object(N.jsx)(f.a,{tag:"h5",children:"A\xf1adir un nuevo post"}),Object(N.jsxs)(V.a,{children:[Object(N.jsxs)(X.a,{children:[Object(N.jsx)(Z.a,{for:"aMensaje",children:"Mensaje"}),Object(N.jsx)($.a,{style:{height:"200px"},type:"textarea",name:"message",value:s,id:"aMensaje",placeholder:"Introduce un mensaje",onChange:function(e){return a(e.target.value)}})]}),Object(N.jsx)(H.a,{color:"primary",onClick:function(e){e.preventDefault(),function(e,t,c,n){return k.post("/posts",{email:e,user:t,image:c,message:n}).then((function(e){return e.data}))}(sessionStorage.getItem("email"),sessionStorage.getItem("name"),sessionStorage.getItem("image"),s).then((function(e){return j(e)}))},children:"A\xf1adir"})]})]})})}function te(e){var t=Object(n.useState)(e.post.message),c=Object(l.a)(t,2),s=c[0],a=c[1],j=function(t){"OK"===t&&e.updateMyPosts()};return Object(n.useEffect)((function(){a(e.post.message)}),[e.post]),Object(N.jsx)("div",{children:Object(N.jsxs)(S.a,{body:!0,children:[Object(N.jsx)(f.a,{tag:"h5",children:"Editar post"}),Object(N.jsxs)(V.a,{children:[Object(N.jsxs)(X.a,{children:[Object(N.jsx)(Z.a,{for:"aDescripcion",children:"Mensaje"}),Object(N.jsx)($.a,{style:{height:"200px"},type:"textarea",name:"message",id:"aDescripcion",placeholder:"Introduce un mensaje",value:s,onChange:function(e){return a(e.target.value)}})]}),Object(N.jsx)(H.a,{color:"primary",onClick:function(t){t.preventDefault(),function(e,t){return k.put("/posts/"+e,{message:t}).then((function(e){return e.data}))}(e.post._id,s).then((function(e){return j(e)}))},children:"Actualizar"})]})]})})}function ce(e){var t=Object(n.useState)([]),c=Object(l.a)(t,2),s=c[0],a=c[1],j=Object(n.useState)(Object(N.jsx)(o.a,{color:"warning",children:"Seleccione editar un post de la lista"})),r=Object(l.a)(j,2),i=r[0],b=r[1],x=Object(n.useState)("1"),O=Object(l.a)(x,2),u=O[0],w=O[1],C=Object(n.useState)(null),D=Object(l.a)(C,2),P=D[0],E=D[1],T=function(){var e;(e=sessionStorage.getItem("email"),k.get("/posts/all/"+e).then((function(e){return e.data}))).then((function(e){a(e)}))},A=function(e){u!==e&&w(e)},F=function(){T()},J=function(e){var t;(t=e._id,k.delete("/posts/"+t).then((function(e){return e.data}))).then((function(e){return U(e)}))},U=function(e){"OK"===e&&(E(null),b(Object(N.jsx)(o.a,{color:"warning",children:"Seleccione editar un post de la lista"})),F())};return Object(n.useEffect)((function(){T()}),[]),Object(N.jsxs)("div",{children:[P,Object(N.jsxs)(d.a,{children:[Object(N.jsxs)(h.a,{xs:"7",children:[Object(N.jsx)(f.a,{tag:"center",children:Object(N.jsxs)(o.a,{color:"primary",children:[Object(N.jsx)("strong",{children:"Mis Posts publicados "}),Object(N.jsx)(p.a,{pill:!0,children:s.length})]})}),Object(N.jsx)(v.a,{children:Object(N.jsx)("tbody",{children:s.map((function(t,c){return Object(N.jsx)("div",{children:Object(N.jsxs)("div",{children:[Object(N.jsx)(d.a,{children:Object(N.jsx)(h.a,{children:Object(N.jsx)(S.a,{children:Object(N.jsxs)(y.a,{children:[Object(N.jsxs)(d.a,{children:[Object(N.jsx)(h.a,{children:Object(N.jsxs)("strong",{children:[Object(N.jsx)("img",{src:t.image,alt:"Img"})," ",t.user]})}),Object(N.jsxs)(h.a,{align:"right",children:[Object(N.jsx)(H.a,{outline:!0,onClick:function(){return function(e){b(Object(N.jsx)(te,{post:e,updateMyPosts:F}))}(t)},children:Object(N.jsx)(B.b,{})})," ",Object(N.jsx)(H.a,{outline:!0,onClick:function(){return function(t){E(Object(N.jsxs)(K.a,{isOpen:"true",className:e.className,children:[Object(N.jsx)(R.a,{children:"Eliminar post"}),Object(N.jsxs)(W.a,{children:["Se va a eliminar el post:",Object(N.jsx)("br",{}),Object(N.jsx)("small",{children:Object(N.jsx)("strong",{children:t.message})})]}),Object(N.jsxs)(z.a,{children:[Object(N.jsx)(H.a,{color:"primary",onClick:function(){return J(t)},children:"Eliminar"})," ",Object(N.jsx)(H.a,{color:"secondary",onClick:function(){return E(null)},children:"Cancelar"})]})]}))}(t)},children:Object(N.jsx)(B.c,{})})]})]}),Object(N.jsx)(d.a,{children:Object(N.jsx)(h.a,{children:t.message})}),Object(N.jsxs)(d.a,{children:[Object(N.jsx)(h.a,{align:"left",xs:"8",children:Object(N.jsxs)(d.a,{children:[Object(N.jsx)(h.a,{xs:"2",children:Object(N.jsx)(M.a,{})}),Object(N.jsxs)(h.a,{xs:"2",children:[Object(N.jsx)(I.b,{}),Object(N.jsx)("small",{children:Math.floor(10*Math.random()+1)})]}),Object(N.jsxs)(h.a,{xs:"2",children:[Object(N.jsx)(I.a,{}),Object(N.jsx)("small",{children:Math.floor(100*Math.random()+1)})]}),Object(N.jsx)(h.a,{xs:"2",children:Object(N.jsx)(M.b,{})})]})}),Object(N.jsx)(h.a,{align:"right",children:Object(N.jsx)("small",{children:L(new Date(t.publicationdate))})})]})]})})})}),Object(N.jsx)("br",{})]})})}))})})]}),Object(N.jsxs)(h.a,{xs:"5",children:[Object(N.jsxs)(g.a,{tabs:!0,children:[Object(N.jsx)(m.a,{children:Object(N.jsx)(q.a,{href:"#",className:G()({active:"1"===u}),onClick:function(){return A("1")},children:"A\xf1adir"})}),Object(N.jsx)(m.a,{children:Object(N.jsx)(q.a,{href:"#",className:G()({active:"2"===u}),onClick:function(){return A("2")},children:"Editar"})})]}),Object(N.jsxs)(Y.a,{activeTab:u,children:[Object(N.jsx)(Q.a,{tabId:"1",children:Object(N.jsx)(d.a,{children:Object(N.jsx)(h.a,{sm:"12",children:Object(N.jsx)(ee,{updateMyPosts:F})})})}),Object(N.jsx)(Q.a,{tabId:"2",children:Object(N.jsx)(d.a,{children:Object(N.jsx)(h.a,{sm:"12",children:i})})})]})]})]})]})}a.a.render(Object(N.jsx)(j.a,{children:Object(N.jsxs)("div",{children:[Object(N.jsx)(r.a,{exact:!0,path:"/",component:function(e){var t=Object(n.useState)(null),c=Object(l.a)(t,2),s=c[0],a=c[1];return Object(N.jsxs)(b.a,{children:[Object(N.jsx)(d.a,{children:Object(N.jsx)(h.a,{children:Object(N.jsxs)(x.a,{color:"primary",light:!0,expand:"md",children:[Object(N.jsx)(O.a,{style:F,object:!0,src:A,alt:"Bird"}),Object(N.jsx)(u.a,{children:Object(N.jsx)("h4",{className:"text-white",children:"My Twitter Clone"})}),Object(N.jsx)(g.a,{className:"ml-auto",navbar:!0,children:Object(N.jsxs)(m.a,{children:[s,Object(N.jsx)(T.GoogleLogin,{clientId:C.clientID,buttonText:"Login with Google",theme:"dark",onSuccess:function(t){var c=t.getBasicProfile();sessionStorage.setItem("name",c.getName()),sessionStorage.setItem("email",c.getEmail()),sessionStorage.setItem("image",c.getImageUrl()),e.history.push("/home")},onFailure:function(e){a(Object(N.jsx)(o.a,{color:"danger",children:"Inicio de sesi\xf3n incorrecto. Int\xe9ntelo de nuevo"}))}})]})})]})})}),Object(N.jsx)(d.a,{children:Object(N.jsx)(h.a,{xs:"12",children:Object(N.jsx)(E,{})})})]})}}),Object(N.jsx)(r.a,{path:"/home",component:function(e){var t=Object(n.useState)(Object(N.jsx)(E,{})),c=Object(l.a)(t,2),s=c[0],a=c[1];if(null!==sessionStorage.getItem("name"))return Object(N.jsxs)(b.a,{children:[Object(N.jsx)(d.a,{children:Object(N.jsx)(h.a,{children:Object(N.jsx)(U,{onLogout:function(){sessionStorage.clear(),e.history.push("/")},onShow:function(e){1===e?a(Object(N.jsx)(E,{})):2===e&&a(Object(N.jsx)(ce,{}))}})})}),Object(N.jsx)(d.a,{children:Object(N.jsx)(h.a,{xs:"12",children:s})})]});e.history.push("/")}})]})}),document.getElementById("root")),i()}},[[83,1,2]]]);
//# sourceMappingURL=main.4db38c4b.chunk.js.map