/* empty css                                            */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, b as createAstro } from '../../chunks/astro/server_BV5gQu3o.mjs';
import 'kleur/colors';
import 'html-escaper';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$channelName = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$channelName;
  const { channelName } = Astro2.params;
  return renderTemplate`${maybeRenderHead()}<div class="static m-0 p-0"> <p class="absolute z-10 mt-2 ml-12 text-2xl font-bold text-gray-900"> ${channelName} </p> ${renderComponent($$result, "Call", null, { "client:only": "react", "channelName": channelName, "appId": "248bf01d8da34b3db3d9517ec9ddd236", "client:component-hydration": "only", "client:component-path": "/Users/ganatejaakula/Desktop/Repos/videocall/src/components/Call.tsx", "client:component-export": "default" })} </div>`;
}, "/Users/ganatejaakula/Desktop/Repos/videocall/src/pages/channel/[channelName].astro", void 0);
const $$file = "/Users/ganatejaakula/Desktop/Repos/videocall/src/pages/channel/[channelName].astro";
const $$url = "/channel/[channelName]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$channelName,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
