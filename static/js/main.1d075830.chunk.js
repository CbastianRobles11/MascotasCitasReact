(this.webpackJsonpcitas=this.webpackJsonpcitas||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),c=t.n(r),o=(t(14),t(8)),i=t(2),m=t(4),s=t(5),u=t(17),h=function(e){var a=e.crearCita,t=Object(n.useState)({mascota:"",propietario:"",fecha:"",hora:"",sintomas:""}),r=Object(i.a)(t,2),c=r[0],o=r[1],h=Object(n.useState)(!1),p=Object(i.a)(h,2),E=p[0],f=p[1],d=function(e){o(Object(s.a)(Object(s.a)({},c),{},Object(m.a)({},e.target.name,[e.target.value])))},b=c.mascota,g=c.propietario,v=c.fecha,N=c.hora,w=c.sintomas;return l.a.createElement(n.Fragment,null,E?l.a.createElement("p",{className:"alerta-error"},"Todos los campos son obligatorios "):null,l.a.createElement("h2",null,"Crear Citas"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),0!==b.length&&0!==g.length&&0!==v.length&&0!==N.length&&0!==w.length?(f(!1),c.id=Object(u.a)(),console.log(c),a(c),o({mascota:"",propietario:"",fecha:"",hora:"",sintomas:""})):f(!0)}},l.a.createElement("label",null,"Nombre De Paciente"),l.a.createElement("input",{type:"text",name:"mascota",className:"u-full-width",placeholder:"nombre de la mascota",onChange:d,value:b}),l.a.createElement("label",null,"Nombre Del Dueno"),l.a.createElement("input",{type:"text",name:"propietario",className:"u-full-width",placeholder:"nombre del dueno",onChange:d,value:g}),l.a.createElement("label",null,"Fecha"),l.a.createElement("input",{type:"date",name:"fecha",className:"u-full-width",onChange:d,value:v}),l.a.createElement("label",null,"Hora"),l.a.createElement("input",{type:"time",name:"hora",className:"u-full-width",onChange:d,value:N}),l.a.createElement("label",null,"Descripcion"),l.a.createElement("textarea",{name:"sintomas",className:"u-full-width",placeholder:"Los sintomas",onChange:d,value:w}),l.a.createElement("input",{type:"submit",className:"u-full-with button-primary",value:"Agregar Cita"})))},p=function(e){var a=e.cita,t=e.eliminarCita;return l.a.createElement("div",{className:"cita"},l.a.createElement("p",null,"Mascota: ",l.a.createElement("span",null,a.mascota)," "),l.a.createElement("p",null,"Duenio: ",l.a.createElement("span",null,a.propietario)," "),l.a.createElement("p",null,"Fecha: ",l.a.createElement("span",null,a.fecha)," "),l.a.createElement("p",null,"Hora: ",l.a.createElement("span",null,a.hora)," "),l.a.createElement("p",null,"Sintomas: ",l.a.createElement("span",null,a.sintomas)," "),l.a.createElement("button",{className:"button eliminar u-full-width",onClick:function(){return t(a.id)}},"Eliminar \xd7"))};var E=function(){var e=JSON.parse(localStorage.getItem("citas"));e||(e=[]);var a=Object(n.useState)([e]),t=Object(i.a)(a,2),r=t[0],c=t[1];Object(n.useEffect)((function(){localStorage.setItem("citas",JSON.stringify(r))}),[r,e]);var m=function(e){var a=r.filter((function(a){return a.id!==e}));c(a)},s=0===r.length?"No Hay Citas":"Administra Tus Citas";return l.a.createElement(n.Fragment,null,l.a.createElement("h1",null,"Administrador de Pacientes"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"one-half column"},l.a.createElement(h,{crearCita:function(e){c([].concat(Object(o.a)(r),[e]))}})),l.a.createElement("div",{className:"one-half column"},l.a.createElement("h2",null,s),r.map((function(e){return l.a.createElement(p,{key:e.id,cita:e,eliminarCita:m})}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,a,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.1d075830.chunk.js.map