(this["webpackJsonpgoit-react-hw-01"]=this["webpackJsonpgoit-react-hw-01"]||[]).push([[0],{17:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),i=n(5),o=n.n(i),r=n(6),d=n(7),l=n(11),b=n(10),j=n(8),u=n.n(j),h=function(e){var t=e.good,n=e.neutral,a=e.bad,s=e.total,i=e.positivePercentage;return Object(c.jsxs)("div",{className:u.a.block_btn,children:[Object(c.jsxs)("div",{children:["Good:",Object(c.jsx)("span",{children:t})]}),Object(c.jsxs)("div",{children:["Neutral:",Object(c.jsx)("span",{children:n})]}),Object(c.jsxs)("div",{children:["Bad:",Object(c.jsx)("span",{children:a})]}),Object(c.jsxs)("div",{children:["Total: ",Object(c.jsx)("span",{children:s})]}),!!s&&Object(c.jsxs)("div",{children:["Positive feedback:",Object(c.jsxs)("span",{children:[i," %"]})]})]})},x=n(2),O=n.n(x),v=function(e){var t=e.addFeedback;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{className:O.a.btn,onClick:t,children:"good"}),Object(c.jsx)("button",{className:O.a.btn,onClick:t,children:"neutral"}),Object(c.jsx)("button",{className:O.a.btn,onClick:t,children:"bad"})]})},g=n(4),f=n.n(g),k=function(e){var t=e.title,n=e.children;return Object(c.jsxs)("section",{className:f.a.section,children:[Object(c.jsx)("h1",{className:f.a.title,children:t}),n]})};k.defaultProps={title:""};var p=k,m=n(9),_=n.n(m),F=function(e){var t=e.message;return Object(c.jsx)("div",{className:_.a.message,children:t})};F.defaultProps={message:""};var N=F,P=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.addFeedback=function(t){var n=t.target.textContent;e.setState((function(e){var t={};return t[n]=e[n]+1,t}))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){return Math.ceil(100/e.countTotalFeedback()*e.state.good)},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(p,{title:"Please leave feedback",children:Object(c.jsx)(v,{addFeedback:this.addFeedback})}),Object(c.jsx)(p,{title:"Statistics",children:this.countTotalFeedback()?Object(c.jsx)(h,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(c.jsx)(N,{message:"No feedback given"})})]})}}]),n}(a.Component);o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(P,{})}),document.getElementById("root"))},2:function(e,t,n){e.exports={btn:"FeedbackOptions_btn__1wzKJ"}},4:function(e,t,n){e.exports={section:"Section_section__2ivY5",title:"Section_title__2T7UT"}},8:function(e,t,n){e.exports={block_btn:"Statistics_block_btn__1EmwC"}},9:function(e,t,n){e.exports={message:"Notification_message__3H76K"}}},[[17,1,2]]]);
//# sourceMappingURL=main.a800fd78.chunk.js.map