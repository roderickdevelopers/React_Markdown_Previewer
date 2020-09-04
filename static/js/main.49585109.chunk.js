(this.webpackJsonpReact_Markdown_Previewer=this.webpackJsonpReact_Markdown_Previewer||[]).push([[0],{10:function(e,n,t){e.exports={button_container:"ButtonArea_button_container__1gv0y",button:"ButtonArea_button__2rGr3"}},11:function(e,n,t){e.exports={text_area_container:"TextArea_text_area_container__2XiTv",textarea:"TextArea_textarea__3y9iG",editor:"TextArea_editor__3PNOC"}},13:function(e,n,t){e.exports={preview_area_container:"PreviewArea_preview_area_container__1sJn9",preview:"PreviewArea_preview__38snV"}},20:function(e,n,t){e.exports={home:"Home_home__1UecR"}},23:function(e,n,t){e.exports={error:"Error_error__PyqvZ"}},28:function(e,n,t){e.exports=t(39)},33:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(19),i=t.n(o),s=t(24),c=t(1),d=t(20),l=t.n(d),m=t(21),u=t(22),_=t(7),w=t(26),k=t(27),h=t(9),p=t.n(h),v=t(10),b=t.n(v);var f=function(e){return r.a.createElement("div",{className:b.a.button_container},r.a.createElement("button",{type:"button",className:b.a.button,onClick:function(){return e.clearMarkdown()}},"Clear State"),r.a.createElement("button",{type:"button",className:b.a.button,onClick:function(){return e.resetMarkdown()}},"Reset State"))},E=t(13),x=t.n(E),M=t(14),g=t.n(M);g.a.setOptions({breaks:!0});var y=function(e){return r.a.createElement("div",{className:x.a.preview_area_container},r.a.createElement("div",{className:x.a.preview,dangerouslySetInnerHTML:{__html:g()(e.markdown)}}))},T=t(11),I=t.n(T);var N=function(e){return r.a.createElement("div",{className:I.a.text_area_container},r.a.createElement("label",{className:I.a.textarea,htmlFor:"textarea"},"Enter Markdown here:"),r.a.createElement("textarea",{id:"textarea",className:I.a.editor,value:e.markdown,onChange:function(n){e.updateMarkdown(n.target.value)}},e.markdown))},C="#  \ud83c\udf89 Welcome To The Markdown Previewer! \ud83c\udf89\n\nIt's very easy to make some words **bold** and other words *italic* with Markdown. You can even [link to GitHub](https://github.com/roderickdevelopers)\n\n# Headers\n\n# This is a Heading h1\n## This is a Heading h2 \n### This is a Heading h3\n\n\n# Emphasis\n\n*This text will be italic*\n_This will also be italic_\n\n**This text will be bold**\n__This will also be bold__\n~~This will be crossed out~~\n\n_You **can** ~~combine~~ them_\n\n# Lists\n\n## Unordered\n\n* Item 1\n* Item 2\n  * Item 2a\n  * Item 2b\n\n## Ordered\n\n1. Item 1\n1. Item 2\n1. Item 3\n   1. Item 3a\n   1. Item 3b\n\n# Images\n\n![GitHub Logo](/images/logo.png)\nFormat: ![Alt Text](url)\n\n# Links\n\n[MyGitHub](https://github.com/roderickdevelopers)\n\n# Blockquotes\n\nAs Jacob Lett said:\n\n> Learning HTML and CSS is a lot more challenging \n> then it used to be. Responsive web design adds more layers \n> of complexity to design and develop websites.\n\n# Task Lists\n\n- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported\n- [x] list syntax required (any unordered or ordered list supported)\n- [x] this is a complete item\n- [ ] this is an incomplete item\n\n# Tables\n\nFirst Header | Second Header\n------------ | -------------\nContent from cell 1 | Content from cell 2\nContent in the first column | Content in the second column\n\n# Inline code\n\nI think you should use an `<form>` element instead\n\n# Code Snippets\n\n```\nconst aboutMe = {\n  name: 'matthew roderick',\n  email: 'roderickdevelopers@gmail.com',\n  position: 'Jr.Developer',\n  website: 'roderickdevelopers.com'\n};  \n```\n",H=function(e){Object(k.a)(t,e);var n=Object(w.a)(t);function t(e){var a;return Object(m.a)(this,t),(a=n.call(this,e)).updateMarkdown=a.updateMarkdown.bind(Object(_.a)(a)),a.clearMarkdown=a.clearMarkdown.bind(Object(_.a)(a)),a.resetMarkdown=a.resetMarkdown.bind(Object(_.a)(a)),a.state={markdown:C},a}return Object(u.a)(t,[{key:"updateMarkdown",value:function(e){this.setState({markdown:e})}},{key:"clearMarkdown",value:function(){this.setState({markdown:""})}},{key:"resetMarkdown",value:function(){this.setState({markdown:C})}},{key:"render",value:function(){var e=this.state.markdown;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:p.a.markdown_editor_button_area},r.a.createElement(f,{clearMarkdown:this.clearMarkdown,resetMarkdown:this.resetMarkdown})),r.a.createElement("div",{className:p.a.markdown_editor_text_area},r.a.createElement(N,{updateMarkdown:this.updateMarkdown,markdown:e})),r.a.createElement("div",{className:p.a.markdown_editor_preview_area},r.a.createElement(y,{markdown:e})))}}]),t}(r.a.Component);var S=function(){return r.a.createElement("div",{className:l.a.home},r.a.createElement(H,null))},O=t(23),A=t.n(O);var L=function(){return r.a.createElement("div",{className:A.a.error},"Error! Really though.... You are seeing the error component!")};t(33);var j=function(){return r.a.createElement(s.a,null,r.a.createElement("main",null,r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:S}),r.a.createElement(c.a,{default:!0,component:L}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,n,t){e.exports={markdown_editor_button_area:"MarkdownEditor_markdown_editor_button_area__1J_1E",markdown_editor_preview_area:"MarkdownEditor_markdown_editor_preview_area__2XKuI",markdown_editor_text_area:"MarkdownEditor_markdown_editor_text_area__2oBmn"}}},[[28,1,2]]]);
//# sourceMappingURL=main.49585109.chunk.js.map