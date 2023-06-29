"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[902],{902:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var a,i,r,d,s,o,p,l,x,c,m,u=t(9439),h=t(9434),f=t(2791),g=t(7689),b=t(168),w=t(6444),Z=w.ZP.main(a||(a=(0,b.Z)(["\n  padding: 0 16px 32px 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  @media screen and (min-width: 320px) {\n    padding: 0 16px 32px 16px;\n  }\n  @media screen and (min-width: 768px) {\n    padding: 0 42px 64px 42px;\n  }\n"]))),j=w.ZP.h2(i||(i=(0,b.Z)(["\n  align-self: center;\n  text-transform: uppercase;\n"]))),y=w.ZP.div(r||(r=(0,b.Z)(["\n  margin-bottom: 16px;\n  width: 100%;\n  align-self: flex-start;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 36px;\n  }\n"]))),v=w.ZP.div(d||(d=(0,b.Z)(["\n  padding: 18px 16px;\n  display: flex;\n  justify-content: space-between;\n  border-radius: 24px;\n\n  @media screen and (min-width: 768px) {\n    padding: 40px;\n    margin-bottom: 20px;\n  }\n"]))),k=w.ZP.form(s||(s=(0,b.Z)(["\n  padding: 18px 16px;\n  border-radius: 32px;\n  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 0 auto;\n\n  @media screen and (min-width: 768px) {\n    padding: 28px 36px;\n  }\n"]))),P=(w.ZP.div(o||(o=(0,b.Z)(["\n  min-width: 25%;\n  flex-basis: 60%;\n"]))),w.ZP.div(p||(p=(0,b.Z)(["\n  margin-top: 20px;\n  margin-bottom: 24px;\n  gap: 8px;\n  align-self: flex-end;\n  flex-direction: column;\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n"])))),_=w.ZP.div(l||(l=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n\n  @media screen and (min-width: 1280px) {\n    gap: 24px;\n  }\n"]))),z=w.ZP.div(x||(x=(0,b.Z)(["\n  position: relative;\n\n  &:hover > p,\n  &:focus > p {\n    opacity: 1;\n  }\n"]))),C=w.ZP.input(c||(c=(0,b.Z)(["\n  padding: 6px;\n  font-size: 14px;\n  border: none;\n  border-bottom: 1px solid black;\n  color: black;\n  outline-color: #d4d4d4;\n\n  &:hover {\n    border-bottom: 1px solid #d4d4d4;\n  }\n\n  &:focus + .lightbox-modal__auth-label {\n    color: #d4d4d4;\n  }\n  @media screen and (min-width: 768px) {\n    padding: 6px 12px;\n  }\n"]))),E=w.ZP.label(m||(m=(0,b.Z)(["\n  text-transform: uppercase;\n  font-size: 16px;\n  color: black;\n\n  &:hover,\n  &:focus {\n    color: #d4d4d4;\n    font-weight: bold;\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 24px;\n  }\n"]))),S=t(5262),q=t(3337),A=t(5047),F=t(3329),L=function(){var n=(0,g.s0)(),e=(0,h.I0)(),t=(0,f.useState)(""),a=(0,u.Z)(t,2),i=a[0],r=a[1],d=(0,f.useState)(""),s=(0,u.Z)(d,2),o=s[0],p=s[1],l=(0,f.useState)(""),x=(0,u.Z)(l,2),c=x[0],m=x[1],b=function(n){switch(n.target.name){case"name":r(n.target.value);break;case"email":p(n.target.value);break;case"password":m(n.target.value);break;default:return}},w=function(){r(""),p(""),m("")};return(0,F.jsxs)(Z,{children:[(0,F.jsxs)(y,{children:[(0,F.jsx)(q.u,{onClick:function(){return n(-1)},text:"Go back",status:"goBack"}),(0,F.jsx)(j,{children:"Let's register"})]}),(0,F.jsx)(v,{children:(0,F.jsxs)(k,{onSubmit:function(n){n.preventDefault(),e((0,A.a$)({name:i,email:o,password:c})),w()},children:[(0,F.jsxs)(P,{children:[(0,F.jsx)(C,{type:"text",id:"auth-name",name:"name",value:i,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0,placeholder:"Enter your name",onChange:b}),(0,F.jsx)(E,{htmlFor:"auth-name",children:"Name"}),(0,F.jsx)(C,{type:"email",id:"auth-email",name:"email",value:o,required:!0,pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",placeholder:"Enter your email",onChange:b}),(0,F.jsx)(E,{htmlFor:"auth-email",children:"Email"}),(0,F.jsx)(C,{type:"password",id:"auth-password",name:"password",value:c,required:!0,minLength:"6",placeholder:"Enter your password",onChange:b}),(0,F.jsx)(E,{htmlFor:"auth-password",children:"Password"})]}),(0,F.jsxs)(_,{children:[(0,F.jsx)(z,{children:(0,F.jsx)(q.u,{type:"submit",status:"register",text:"Create account"})}),(0,F.jsx)(z,{children:(0,F.jsx)(S.O,{text:"Log in",status:"login",to:"/login"})})]})]})})]})}}}]);
//# sourceMappingURL=902.59b6b3be.chunk.js.map