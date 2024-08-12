/* empty css                                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro } from '../chunks/astro/server_BV5gQu3o.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let error = "";
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const channelName = data.get("channelName");
      return Astro2.redirect(`/channel/${channelName}`);
    } catch (error2) {
      if (error2 instanceof Error) {
        error2 = error2.message;
      }
    }
  }
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center"> <h1 class="mb-4 mt-20 text-4xl font-extrabold leading-none tracking-tight text-gray-900"> <span class="text-orange-500">Astro</span> x <span class="text-blue-500">Agora</span> </h1> <form method="POST"> <p>${error}</p> <div class="md:flex md:items-center mt-6"> <div> <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
Channel Name
</label> </div> <div> <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="text" name="channelName"> </div> </div> <div class="text-center"> <button class="inline-flex items-center justify-center px-5 py-3 mt-5 text-base font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">Submit</button> </div> </form> </div>`;
}, "/Users/ganatejaakula/Desktop/Repos/videocall/src/pages/index.astro", void 0);

const $$file = "/Users/ganatejaakula/Desktop/Repos/videocall/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
