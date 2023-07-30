// https://github.com/vitejs/vite/tree/main/packages/plugin-legacy
import legacy from "@vitejs/plugin-legacy";
import { resolve } from "path";
// import handlebars from "vite-plugin-handlebars";

// https://vitejs.dev/config/

export default {
  // Сделать пути относительными https://vitejs.dev/config/shared-options.html#base
  base: './',
  
  // build: {
  //   rollupOptions: {
  //     input: {
  //       index: resolve(__dirname, "index.html"),
  //       services: resolve(__dirname, "services.html"),
  //       404: resolve(__dirname, "404.html"),

  //       products: resolve(__dirname, "products/index.html"),
  //       productsBoats1: resolve(__dirname, "products/boats/ploshchadka-dlya-aksessuarov-v-t-paz.html"),
  //       productsBoats2: resolve(__dirname, "products/boats/runduk-pod-sidene.html"),
  //       productsBoats3: resolve(__dirname, "products/boats/shpigat-f50.html"),
  //       productsBoats4: resolve(__dirname, "products/boats/universalnaya-konsol-sudovoditelya.html"),
  //       productsBoats5: resolve(__dirname, "products/boats/universalnyy-runduk-stupenka.html"),

  //       productsTables1: resolve(__dirname, "products/tables/expert.html"),
  //       productsTables2: resolve(__dirname, "products/tables/hardprofi.html"),
  //       productsTables3: resolve(__dirname, "products/tables/master.html"),
  //       productsTables4: resolve(__dirname, "products/tables/profi.html"),
  //     },
  //   },
  // },

  plugins: [
    legacy({
      targets: [
        "last 5 versions and not dead",
        "> 0.2%",
        "Firefox ESR",
        "IE 11",
      ],
      // polyfills: ['es.promise.finally', 'es/map', 'es/set'],
      // modernPolyfills: ['es.promise.finally'],
    }),
    // handlebars({
    //   partialDirectory: resolve(__dirname, "chunks"),
    // }),
  ],
};
