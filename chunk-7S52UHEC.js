import"./chunk-C53CAAUH.js";import{da as e,na as s,oa as t}from"./chunk-KQE4NFFQ.js";import"./chunk-TMC7WMLO.js";var a=class{constructor(o){this.container=o}init(o){let n=e(o.options.color,o.id,o.options.reduceDuplicates);n&&(o.color=s(n,o.options.color.animation,this.container.retina.reduceFactor))}isEnabled(o){let{h:n,s:l,l:r}=o.options.color.animation,{color:i}=o;return!o.destroyed&&!o.spawning&&(i?.h.value!==void 0&&n.enable||i?.s.value!==void 0&&l.enable||i?.l.value!==void 0&&r.enable)}update(o,n){t(o.color,n)}};export{a as ColorUpdater};
