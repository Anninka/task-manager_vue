(function(){"use strict";var t={1268:function(t,e,s){var a=s(9242),n=s(3396);const r={class:"page"},o=(0,n._)("header",{class:"page-header"},[(0,n._)("div",{class:"container"},[(0,n._)("h1",{class:"page-title"},"Компания DNS. Тестовое задание. Task manager.")])],-1),i={class:"page-main"},u={class:"task-desk container"},c=(0,n._)("footer",{class:"page-footer"},[(0,n._)("div",{class:"container"},[(0,n._)("p",{class:"page-footer__text"},"Терентьева А.В."),(0,n._)("p",{class:"page-footer__text"},"Владивосток 2023")])],-1);function l(t,e,s,a,l,d){const p=(0,n.up)("task-list");return(0,n.wg)(),(0,n.iD)("div",r,[o,(0,n._)("main",i,[(0,n._)("div",u,[(0,n.Wm)(p,{tasks:l.tasks,groupedTasks:d.groupedTasks},null,8,["tasks","groupedTasks"])])]),c])}s(7658);var d=s(7139);const p={class:"task-list__header"};function k(t,e,s,a,r,o){const i=(0,n.up)("task-item");return(0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.groupedTasks,((t,e)=>((0,n.wg)(),(0,n.iD)("div",{class:"task-list",key:e},[(0,n._)("div",p,(0,d.zw)(e),1),(0,n.Wm)(i,{taskGroups:t},null,8,["taskGroups"])])))),128)}const _={class:"task-item__title"},f={class:"task-item__title"},w={class:"task-item__title"},v={class:"task-item__title"},g={key:0,class:"task-item__title"},h={key:1,class:"task-item__title"},T={class:"task-item__title"};function m(t,e,s,a,r,o){return(0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.taskGroups,(t=>((0,n.wg)(),(0,n.iD)("div",{class:"task-item",key:t.id},[(0,n._)("p",_,[(0,n.Uk)("Название: "),(0,n._)("span",null,(0,d.zw)(t.title),1)]),(0,n._)("p",f,[(0,n.Uk)("Описание: "),(0,n._)("span",null,(0,d.zw)(t.description),1)]),(0,n._)("p",w,[(0,n.Uk)("Автор: "),(0,n._)("span",null,(0,d.zw)(t.author),1)]),(0,n._)("p",v,[(0,n.Uk)("Дата создания: "),(0,n._)("span",null,(0,d.zw)(new Date(t.date).toLocaleString()),1)]),"Создана"!==t.status?((0,n.wg)(),(0,n.iD)("p",g,[(0,n.Uk)("Взяли в работу: "),(0,n._)("span",null,(0,d.zw)(new Date(t.atwork).toLocaleString()),1)])):(0,n.kq)("",!0),"Создана"!==t.status?((0,n.wg)(),(0,n.iD)("p",h,[(0,n.Uk)("Затрачено времени: "),(0,n._)("span",null,(0,d.zw)(o.getWorkTime(t)),1)])):(0,n.kq)("",!0),(0,n._)("p",T,[(0,n.Uk)("Состояние: "),(0,n._)("span",null,(0,d.zw)(t.status),1)])])))),128)}var b={props:{taskGroups:{type:Array,require:!0}},methods:{getWorkTime(t){return"В работе"===t.status?`${Math.floor((new Date-new Date(t.atwork))/36e5)} ч.`:"Завершена"===t.status?`${Math.floor((new Date(t.done)-new Date(t.atwork))/36e5)} ч.`:void 0}}},y=s(89);const D=(0,y.Z)(b,[["render",m],["__scopeId","data-v-b2bdec6e"]]);var O=D,z={components:{TaskItem:O},props:{tasks:{type:Array,require:!0},groupedTasks:{type:Object,required:!0}}};const j=(0,y.Z)(z,[["render",k],["__scopeId","data-v-21b05fa6"]]);var U=j,x={components:{TaskList:U},data(){return{tasks:[{id:1,title:"Создание новой карточки",description:"Необходимо провести следующие операции",author:"Сидорова",date:"2023-03-09T10:05:00",atwork:"2023-03-09T10:10:00",done:"2023-03-15T11:55:00",status:"Завершена"},{id:2,title:"Перетаскивание задач",description:"Добавить возможность перетаскивать задачи между колонками создана/в работе/завершена",author:"Петров",date:"2023-03-12T12:55:00",atwork:"",done:"2023-03-13T17:46:00",status:"Создана"},{id:3,title:"Добавление задач в таск-менеджер",description:"Реализовать добавление новых задач в таск-менеджере по шаблону. Все поля обязательные.",author:"Иванов",date:"2023-03-10T09:00:00",atwork:"2023-03-10T10:12:00",done:"",status:"В работе"},{id:4,title:"Удаление выполненных задач",description:'Добавить функционал удаления задач из колонки "Завершена"',author:"Терентьева",date:"2023-03-13T10:10:00",atwork:"2023-03-13T11:10:00",done:"",status:"В работе"},{id:5,title:"Разделить проект на компоненты",description:"Разделить проект на несколько компонентов по смыслу",author:"Рукавишников",date:"2023-03-13T11:48:00",atwork:"2023-03-13T12:05:00",done:"2023-03-13T18:05:00",status:"Завершена"},{id:6,title:"Возможность менять оформление",description:"Реализовать возможность менять цветовую гамму, как минимум 3 варианта",author:"Морозова",date:"2023-03-13T12:07:00",atwork:"2023-03-13T12:10:00",done:"",status:"В работе"},{id:7,title:"Придумать содержимое задач",description:"Придумать названия и описания задач для тестирования таск-менеджера. А то у меня уже фантазия заканчивается.",author:"Терентьева",date:"2023-03-16T12:12:00",atwork:"2023-03-16T12:52:00",done:"",status:"В работе"}],statusId:{"Создана":0,"В работе":1,"Завершена":2}}},computed:{groupedTasks(){const t=[...this.tasks].sort(((t,e)=>this.statusId[t.status]-this.statusId[e.status]));return t.reduce(((t,e)=>{const s=e.status;return t[s]||(t[s]=[]),t[s].push(e),t}),{})}}};const I=(0,y.Z)(x,[["render",l]]);var q=I;(0,a.ri)(q).mount("#app")}},e={};function s(a){var n=e[a];if(void 0!==n)return n.exports;var r=e[a]={exports:{}};return t[a](r,r.exports,s),r.exports}s.m=t,function(){var t=[];s.O=function(e,a,n,r){if(!a){var o=1/0;for(l=0;l<t.length;l++){a=t[l][0],n=t[l][1],r=t[l][2];for(var i=!0,u=0;u<a.length;u++)(!1&r||o>=r)&&Object.keys(s.O).every((function(t){return s.O[t](a[u])}))?a.splice(u--,1):(i=!1,r<o&&(o=r));if(i){t.splice(l--,1);var c=n();void 0!==c&&(e=c)}}return e}r=r||0;for(var l=t.length;l>0&&t[l-1][2]>r;l--)t[l]=t[l-1];t[l]=[a,n,r]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,r,o=a[0],i=a[1],u=a[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(n in i)s.o(i,n)&&(s.m[n]=i[n]);if(u)var l=u(s)}for(e&&e(a);c<o.length;c++)r=o[c],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(l)},a=self["webpackChunktask_manager_vue"]=self["webpackChunktask_manager_vue"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(1268)}));a=s.O(a)})();
//# sourceMappingURL=app.039a39d9.js.map