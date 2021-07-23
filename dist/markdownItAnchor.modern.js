let e=!1;const n={false:"push",true:"unshift",after:"push",before:"unshift"},t={isPermalinkSymbol:!0};function r(r,a,i,l){if(!e){const n="Using deprecated markdown-it-anchor permalink option, see https://github.com/valeriangalliat/markdown-it-anchor#todo-anchor-or-file";"object"==typeof process&&process&&process.emitWarning?process.emitWarning(n):console.warn(n),e=!0}const o=[Object.assign(new i.Token("link_open","a",1),{attrs:[...a.permalinkClass?[["class",a.permalinkClass]]:[],["href",a.permalinkHref(r,i)],...Object.entries(a.permalinkAttrs(r,i))]}),Object.assign(new i.Token("html_block","",0),{content:a.permalinkSymbol,meta:t}),new i.Token("link_close","a",-1)];a.permalinkSpace&&i.tokens[l+1].children[n[a.permalinkBefore]](Object.assign(new i.Token("text","",0),{content:" "})),i.tokens[l+1].children[n[a.permalinkBefore]](...o)}function a(e){return"#"+e}function i(e){return{}}const l={class:"header-anchor",symbol:"#",renderHref:a,renderAttrs:i};function o(e){function n(t){return t=Object.assign({},n.defaults,t),(n,r,a,i)=>e(n,t,r,a,i)}return n.defaults=Object.assign({},l),n}const c=o((e,r,a,i,l)=>{const o=[Object.assign(new i.Token("link_open","a",1),{attrs:[...r.class?[["class",r.class]]:[],["href",r.renderHref(e,i)],["aria-hidden","true"],...Object.entries(r.renderAttrs(e,i))]}),Object.assign(new i.Token("html_inline","",0),{content:r.symbol,meta:t}),new i.Token("link_close","a",-1)];r.space&&i.tokens[l+1].children[n[r.placement]](Object.assign(new i.Token("text","",0),{content:" "})),i.tokens[l+1].children[n[r.placement]](...o)});Object.assign(c.defaults,{space:!0,placement:"after"});const s=o((e,n,t,r,a)=>{const i=[Object.assign(new r.Token("link_open","a",1),{attrs:[...n.class?[["class",n.class]]:[],["href",n.renderHref(e,r)],...Object.entries(n.renderAttrs(e,r))]}),...r.tokens[a+1].children,new r.Token("link_close","a",-1)];r.tokens[a+1]=Object.assign(new r.Token("inline","",0),{children:i})}),d=o((e,r,a,i,l)=>{if(!["visually-hidden","aria-label","aria-describedby","aria-labelledby"].includes(r.style))throw new Error(`\`permalink.linkAfterHeader\` called with unknown style option \`${r.style}\``);if(!["aria-describedby","aria-labelledby"].includes(r.style)&&!r.assistiveText)throw new Error(`\`permalink.linkAfterHeader\` called without the \`assistiveText\` option in \`${r.style}\` style`);if("visually-hidden"===r.style&&!r.visuallyHiddenClass)throw new Error("`permalink.linkAfterHeader` called without the `visuallyHiddenClass` option in `visually-hidden` style");const o=i.tokens[l+1].children.filter(e=>"text"===e.type||"code_inline"===e.type).reduce((e,n)=>e+n.content,""),c=[],s=[];r.class&&s.push(["class",r.class]),s.push(["href",r.renderHref(e,i)]),s.push(...Object.entries(r.renderAttrs(e,i))),"visually-hidden"===r.style?(c.push(Object.assign(new i.Token("span_open","span",1),{attrs:[["class",r.visuallyHiddenClass]]}),Object.assign(new i.Token("text","",0),{content:r.assistiveText(o)}),new i.Token("span_close","span",-1)),r.space&&c[n[r.placement]](Object.assign(new i.Token("text","",0),{content:" "})),c[n[r.placement]](Object.assign(new i.Token("span_open","span",1),{attrs:[["aria-hidden","true"]]}),Object.assign(new i.Token("html_inline","",0),{content:r.symbol,meta:t}),new i.Token("span_close","span",-1))):c.push(Object.assign(new i.Token("html_inline","",0),{content:r.symbol,meta:t})),"aria-label"===r.style?s.push(["aria-label",r.assistiveText(o)]):["aria-describedby","aria-labelledby"].includes(r.style)&&s.push([r.style,e]);const d=[Object.assign(new i.Token("link_open","a",1),{attrs:s}),...c,new i.Token("link_close","a",-1)];i.tokens.splice(l+3,0,...d)});function b(e,n,t,r){let a=e,i=r;if(t&&Object.prototype.hasOwnProperty.call(n,a))throw new Error(`User defined \`id\` attribute \`${e}\` is not unique. Please fix it in your Markdown to continue.`);for(;Object.prototype.hasOwnProperty.call(n,a);)a=`${e}-${i}`,i+=1;return n[a]=!0,a}function p(e,n){n=Object.assign({},p.defaults,n),e.core.ruler.push("anchor",e=>{const t={},a=e.tokens,i=Array.isArray(n.level)?(l=n.level,e=>l.includes(e)):(e=>n=>n>=e)(n.level);var l;for(const l of a){if("heading_open"!==l.type)continue;if(!i(Number(l.tag.substr(1))))continue;const o=a.indexOf(l),c=a[o+1].children.filter(e=>"text"===e.type||"code_inline"===e.type).reduce((e,n)=>e+n.content,"");let s=l.attrGet("id");s=null==s?b(n.slugify(c),t,!1,n.uniqueSlugStartIndex):b(s,t,!0,n.uniqueSlugStartIndex),l.attrSet("id",s),!1!==n.tabIndex&&l.attrSet("tabindex",""+n.tabIndex),"function"==typeof n.permalink?n.permalink(s,n,e,o):(n.permalink||n.renderPermalink&&n.renderPermalink!==r)&&n.renderPermalink(s,n,e,o),n.callback&&n.callback(l,{slug:s,title:c})}})}Object.assign(d.defaults,{style:"visually-hidden",space:!0,placement:"after"}),p.permalink={__proto__:null,legacy:r,renderHref:a,renderAttrs:i,makePermalink:o,ariaHidden:c,headerLink:s,linkAfterHeader:d},p.defaults={level:1,slugify:e=>encodeURIComponent(String(e).trim().toLowerCase().replace(/\s+/g,"-")),uniqueSlugStartIndex:1,tabIndex:"-1",permalink:!1,renderPermalink:r,permalinkClass:c.defaults.class,permalinkSpace:c.defaults.space,permalinkSymbol:"¶",permalinkBefore:"before"===c.defaults.placement,permalinkHref:c.defaults.renderHref,permalinkAttrs:c.defaults.renderAttrs};export default p;
//# sourceMappingURL=markdownItAnchor.modern.js.map
