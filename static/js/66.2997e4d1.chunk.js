"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[66],{6066:function(n,e,t){t.r(e),t.d(e,{Contacts:function(){return _n},default:function(){return Tn}});var i,a,d,r,o,s,c,p,x,l,u,m,f,h,g,w,b,Z,j,y,v,z,P,k,C,A,E,L,N,S,M=t(2187),_=t(9439),T=t(2791),I=t(9434),F=t(5562),D=t.n(F),q=t(3871),B=t(168),J=t(6444),K=J.ZP.form(i||(i=(0,B.Z)(["\n  height: fit-content;\n  min-height: 20vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 32px;\n  border-radius: 12px;\n  background-color: #f1f1f1;\n  border: 2px solid #d4d4d4;\n  color: #010101;\n  margin-bottom: 32px;\n\n  @media screen and (min-width: 768px) {\n    max-width: 30vw;\n  }\n  @media screen and (min-width: 1280px) {\n    margin-bottom: 0;\n  }\n"]))),U=J.ZP.label(a||(a=(0,B.Z)(["\n  width: 100%;\n  display: flex;\n  font-weight: bold;\n  font-size: 14px;\n  justify-content: space-between;\n  align-items: center;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n  @media screen and (min-width: 1280px) {\n    font-size: 20px;\n  }\n"]))),W=t(3337),$=J.ZP.input(d||(d=(0,B.Z)(["\n  min-width: 50%;\n  border-radius: 8px;\n  font-size: 12px;\n  placeholder: grey;\n  padding: 8px 12px;\n  outline-color: #d4d4d4;\n\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n    padding: 12px 16px;\n    margin-left: 16px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    font-size: 16px;\n    padding: 12px 16px;\n    margin-left: 16px;\n  }\n"]))),G=t(3329),Y=function(n){var e=n.type,t=void 0===e?"text":e,i=n.name,a=n.placeholder,d=n.pattern,r=n.title,o=n.onChange,s=n.value;return(0,G.jsx)($,{onChange:o,value:s,placeholder:a,type:t,name:i,pattern:d,title:r,required:!0})},H=t(3661),O=function(n){return n.contacts.items},Q=function(){var n=(0,I.I0)(),e=(0,T.useState)(""),t=(0,_.Z)(e,2),i=t[0],a=t[1],d=(0,T.useState)(""),r=(0,_.Z)(d,2),o=r[0],s=r[1],c=(0,I.v9)(O),p=function(n){switch(n.target.name){case"name":a(n.target.value);break;case"number":s(n.target.value);break;default:return}},x=function(){a(""),s("")};return(0,G.jsxs)(K,{onSubmit:function(e){if(e.preventDefault(),c.find((function(n){return n.name.toLocaleLowerCase()===i.toLocaleLowerCase()})))return D().Notify.warning("".concat(i," is already in contacts"),H.T);n((0,q.uK)({name:i,number:o})),x()},children:[(0,G.jsxs)(U,{children:["Name",(0,G.jsx)(Y,{onChange:p,value:i,name:"name",placeholder:"Enter contact`s name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"})]}),(0,G.jsxs)(U,{children:["Number",(0,G.jsx)(Y,{onChange:p,value:o,type:"tel",name:"number",placeholder:"Enter contact`s number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"})]}),(0,G.jsx)(W.u,{type:"submit",status:"add",text:"Add contact"})]})},R=J.ZP.ul(r||(r=(0,B.Z)(["\n  list-style: none;\n  padding-left: 0;\n  margin-top: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 16px;\n"]))),V=J.ZP.a(o||(o=(0,B.Z)(["\n  text-decoration: none;\n  color: inherit;\n\n  &:hover,\n  &:focus {\n    color: rgba(0, 128, 75, 0.7);\n  }\n\n  & > span {\n    font-weight: normal;\n  }\n"]))),X=J.ZP.div(s||(s=(0,B.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n"]))),nn=J.ZP.li(c||(c=(0,B.Z)(["\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  font-weight: bold;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 16px;\n  padding: 16px;\n  border-radius: 12px;\n  background-color: #f1f1f1;\n  border: 2px solid #d4d4d4;\n\n  @media screen and (min-width: 768px) {\n    padding: 32px;\n  }\n  @media screen and (min-width: 1280px) {\n    font-size: 20px;\n    flex-direction: row;\n    max-width: 50vw;\n    width: 45vw;\n  }\n"]))),en=J.ZP.div(p||(p=(0,B.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  font-size: 16px;\n  margin: 16px;\n  border-radius: 12px;\n  padding: 8px 12px;\n\n  @media screen and (min-width: 1280px) {\n    padding: 32px;\n    font-size: 20px;\n    margin: 0;\n    padding: 12px 18px;\n    max-width: 50vw;\n  }\n"]))),tn=J.ZP.div(x||(x=(0,B.Z)(["\n  & > span {\n    font-weight: normal;\n  }\n"]))),an=t(4164),dn=J.ZP.div(l||(l=(0,B.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1;\n"]))),rn=J.ZP.div(u||(u=(0,B.Z)(["\n  position: relative;\n  height: fit-content;\n  width: fit-content;\n  background-color: white;\n  border-radius: 12px;\n  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;\n  opacity: 1;\n"]))),on=(J.ZP.div(m||(m=(0,B.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n"]))),J.ZP.div(f||(f=(0,B.Z)(["\n  border-radius: 50%;\n  padding: 3px;\n\n  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;\n\n  & > img {\n    border-radius: 50%;\n    width: 150px;\n  }\n"]))),J.ZP.div(h||(h=(0,B.Z)(["\n  max-width: 70vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n  font-size: 16px;\n  padding: 32px;\n  border-radius: 12px;\n  background-color: #f1f1f1;\n\n  @media screen and (min-width: 768px) {\n  }\n\n  @media screen and (min-width: 1280px) {\n    font-size: 20px;\n    max-width: fit-content;\n  }\n"])))),sn=J.ZP.div(g||(g=(0,B.Z)(["\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    gap: 32px;\n    padding: 32px;\n  }\n"]))),cn=J.ZP.form(w||(w=(0,B.Z)(["\n  font-size: 14px;\n  color: #010101;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  border-radius: 12px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    flex-direction: row;\n  }\n"]))),pn=J.ZP.div(b||(b=(0,B.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  border-radius: 12px;\n  padding: 8px 12px;\n"]))),xn=J.ZP.label(Z||(Z=(0,B.Z)(["\n  width: 100%;\n  display: flex;\n  font-weight: bold;\n  font-size: 14px;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  gap: 8px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    font-size: 18px;\n    flex-direction: row;\n  }\n"]))),ln=J.ZP.input(j||(j=(0,B.Z)(["\n  min-width: 50%;\n  border-radius: 8px;\n  font-size: 12px;\n  placeholder: grey;\n  padding: 8px 12px;\n  outline-color: #d4d4d4;\n  margin-left: 8px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    font-size: 16px;\n    margin-left: 0;\n  }\n"]))),un=function(n){var e=n.id,t=n.closeModal,i=(0,I.v9)(O),a=i.find((function(n){return n.id===e})),d=(0,I.I0)(),r=(0,T.useState)("".concat(a.name)),o=(0,_.Z)(r,2),s=o[0],c=o[1],p=(0,T.useState)("".concat(a.number)),x=(0,_.Z)(p,2),l=x[0],u=x[1],m=function(n){switch(n.target.name){case"name":c(n.target.value);break;case"number":u(n.target.value);break;default:return}},f=function(){c(""),u("")};return(0,G.jsx)(on,{children:(0,G.jsx)(sn,{children:(0,G.jsxs)(cn,{onSubmit:function(n){if(n.preventDefault(),i.find((function(n){return n.name===s&&n.number===l})))return D().Notify.warning("No data changed",H.T);d((0,q.Tk)({id:e,name:s,number:l})),t(),f()},children:[(0,G.jsxs)(pn,{children:[(0,G.jsxs)(xn,{children:["Change name:",(0,G.jsx)(ln,{onChange:m,value:s,name:"name",placeholder:"Enter contact`s name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"})]}),(0,G.jsxs)(xn,{children:["Change phone:",(0,G.jsx)(ln,{onChange:m,value:l,type:"tel",name:"number",placeholder:"Enter contact`s number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"})]})]}),(0,G.jsx)(W.u,{type:"submit",status:"update",text:"Update contact"})]})})})},mn=t(7322),fn=J.ZP.div(y||(y=(0,B.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n"]))),hn=(J.ZP.div(v||(v=(0,B.Z)(["\n  border-radius: 50%;\n  padding: 3px;\n"]))),J.ZP.p(z||(z=(0,B.Z)(["\n  font-size: 14px;\n  letter-spacing: 0.03em;\n  margin: 0 0 16px 0;\n  text-align: center;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n    margin: 0;\n  }\n"])))),gn=J.ZP.div(P||(P=(0,B.Z)(["\n  max-width: 70vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n  font-size: 16px;\n  padding: 16px;\n  border-radius: 12px;\n  background-color: #f1f1f1;\n\n  @media screen and (min-width: 768px) {\n    max-width: 50vw;\n    padding: 32px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    font-size: 20px;\n  }\n"]))),wn=J.ZP.div(k||(k=(0,B.Z)(["\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    gap: 32px;\n    padding: 32px;\n  }\n"]))),bn=J.ZP.p(C||(C=(0,B.Z)(["\n  margin: 0;\n  font-weight: normal;\n  text-align: center;\n  & > span {\n    font-weight: bold;\n  }\n"]))),Zn=function(n){var e=n.id,t=n.closeModal,i=n.name,a=(0,I.I0)();return(0,G.jsx)(gn,{children:(0,G.jsx)(wn,{children:(0,G.jsxs)(fn,{children:[(0,G.jsxs)(bn,{children:["Are you sure you want to delete ",(0,G.jsx)("span",{children:i})," from your phonebook ?"]}),(0,G.jsx)(hn,{children:"This action cannot be reversed"}),(0,G.jsx)(W.u,{icon:mn.ZkW,type:"button",status:"delete",text:"Confirm delete",onClick:function(){a((0,q.GK)(e)),t()}})]})})})},jn=document.querySelector("#modal-root"),yn=function(n){var e=n.id,t=n.closeModal,i=n.status,a=n.name;(0,T.useEffect)((function(){var n=function(n){"Escape"===n.code&&t()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[t]);return(0,an.createPortal)((0,G.jsx)(dn,{onClick:function(n){n.currentTarget===n.target&&t()},children:(0,G.jsx)(rn,{children:"edit"===i?(0,G.jsx)(un,{id:e,closeModal:t}):(0,G.jsx)(Zn,{id:e,name:a,closeModal:t})})}),jn)},vn=function(n){var e=n.id,t=n.name,i=n.number,a=(0,T.useState)(!1),d=(0,_.Z)(a,2),r=d[0],o=d[1],s=(0,T.useState)(""),c=(0,_.Z)(s,2),p=c[0],x=c[1],l=function(n){o(!r),x(n)};return(0,G.jsxs)(nn,{children:[(0,G.jsxs)(en,{children:[(0,G.jsxs)(tn,{children:["Name:",(0,G.jsxs)("span",{children:[" ",t," "]})]}),(0,G.jsxs)(tn,{children:["Phone:"," ",(0,G.jsx)(V,{href:"tel:".concat(i),children:(0,G.jsx)("span",{children:i})})]})]}),(0,G.jsxs)(X,{children:[(0,G.jsx)(W.u,{type:"button",status:"delete",text:"Delete contact",onClick:function(){return l("delete")}}),(0,G.jsx)(W.u,{type:"button",status:"edit",text:"Edit contact",onClick:function(){return l("edit")}})]}),r&&(0,G.jsx)(yn,{id:e,closeModal:l,status:p,name:t})]})},zn=function(n){return n.filter},Pn=function(){var n=(0,I.I0)();(0,T.useEffect)((function(){n((0,q.yF)())}),[n]);var e=(0,I.v9)(O),t=(0,I.v9)(zn);return(0,G.jsx)(G.Fragment,{children:(0,G.jsx)(R,{children:function(){var n=t.toLocaleLowerCase(),i=e.filter((function(e){return e.name.toLocaleLowerCase().includes(n)}));return n&&!i.length?(D().Notify.warning("No contacts matching your request",H.T),[]):i}().map((function(n){return(0,G.jsx)(vn,{id:n.id,name:n.name,number:n.number},n.id)}))})})},kn=t(6895),Cn=t(3628),An=J.ZP.div(A||(A=(0,B.Z)(["\n  display: flex;\n  width: 90%;\n  align-items: center;\n  font-size: 16px;\n  color: rgb(1, 1, 1);\n  padding: 24px 16px;\n  border-radius: 12px;\n  background-color: #f1f1f1;\n  border: 2px solid #d4d4d4;\n\n  & > label {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n  }\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 0;\n    padding: 32px;\n    font-size: 24px;\n  }\n  @media screen and (min-width: 1280px) {\n    & > label {\n      flex-direction: row;\n      gap: 0;\n      justify-content: stretch;\n    }\n  }\n"]))),En=(0,J.ZP)(Cn.DebounceInput)(E||(E=(0,B.Z)(["\n  min-width: 50%;\n  width: 75%;\n  border-radius: 8px;\n  font-size: 12px;\n  placeholder: grey;\n  padding: 8px 12px;\n  outline-color: #d4d4d4;\n  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;\n\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n    padding: 12px 16px;\n  }\n  @media screen and (min-width: 1280px) {\n    font-size: 16px;\n    padding: 12px 16px;\n    margin-left: 16px;\n  }\n"]))),Ln=function(){var n=(0,I.I0)(),e=(0,I.v9)(zn);return(0,G.jsx)(An,{children:(0,G.jsxs)(U,{children:["Find contact by name",(0,G.jsx)(En,{type:"text",name:"filter",placeholder:"Enter contact to search",value:e,onChange:function(e){return n((0,kn.W)(e.target.value))},debounceTimeout:500})]})})},Nn=J.ZP.main(L||(L=(0,B.Z)(["\n  padding: 0 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  flex-direction: column;\n  color: #010101;\n\n  @media screen and (min-width: 768px) {\n    padding: 0 42px;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n    align-items: flex-start;\n  }\n\n  @media screen and (min-width: 1280px) {\n    padding: 0 62px;\n  }\n"]))),Sn=J.ZP.div(N||(N=(0,B.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),Mn=J.ZP.h2(S||(S=(0,B.Z)(["\n  font-size: 16px;\n  text-transform: uppercase;\n  margin-top: 0;\n  text-align: center;\n\n  @media screen and (min-width: 768px) {\n    font-size: 20px;\n  }\n  @media screen and (min-width: 1280px) {\n    font-size: 28px;\n  }\n"]))),_n=function(){return(0,G.jsxs)(Nn,{children:[(0,G.jsxs)(Sn,{children:[(0,G.jsx)(Mn,{children:"Add new contact"}),(0,G.jsx)(Q,{})]}),(0,G.jsxs)(Sn,{children:[(0,G.jsx)(Mn,{children:"Your contacts"}),(0,G.jsx)(Ln,{}),(0,G.jsx)(Pn,{})]}),(0,G.jsx)(M.Z,{showUnder:160,style:{bottom:40,right:40}})]})},Tn=_n}}]);
//# sourceMappingURL=66.2997e4d1.chunk.js.map