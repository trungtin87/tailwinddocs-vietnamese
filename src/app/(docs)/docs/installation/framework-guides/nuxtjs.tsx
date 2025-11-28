import { css, html, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/nuxtjs.react.svg";

export let tile: Tile = {
  title: "Nuxt",
  description: "Framework Vue trực quan để xây dựng các ứng dụng universal.",
  Logo,
};

export let page: Page = {
  title: "Cài đặt Tailwind CSS với Nuxt",
  description: "Thiết lập Tailwind CSS trong dự án Nuxt.",
};

export let steps: Step[] = [
  {
    title: "Tạo dự án của bạn",
    body: (
      <p>
        Bắt đầu bằng cách tạo một dự án Nuxt mới nếu bạn chưa thiết lập. Cách phổ biến nhất là sử dụng{" "}
        <a href="https://nuxt.com/docs/4.x/getting-started/installation#new-project">Create Nuxt</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm create nuxt my-project
        cd my-project
      `,
    },
  },
  {
    title: "Cài đặt Tailwind CSS",
    body: (
      <p>
        Cài đặt <code>@tailwindcss/vite</code> và các peer dependencies thông qua npm.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm install tailwindcss @tailwindcss/vite
      `,
    },
  },
  {
    title: "Cấu hình Vite Plugin",
    body: (
      <p>
        Thêm plugin <code>@tailwindcss/vite</code> vào cấu hình Nuxt của bạn như một Vite plugin.
      </p>
    ),
    code: {
      name: "nuxt.config.ts",
      lang: "ts",
      code: js`
        // [!code highlight:2]
        import tailwindcss from "@tailwindcss/vite";

        export default defineNuxtConfig({
          compatibilityDate: "2025-07-15",
          devtools: { enabled: true },
          vite: {
            plugins: [
              // [!code highlight:2]
              tailwindcss(),
            ],
          },
        });
      `,
    },
  },
  {
    title: "Import Tailwind CSS",
    body: (
      <p>
        Tạo file <code>./app/assets/css/main.css</code> và thêm <code>@import</code> để import Tailwind CSS.
      </p>
    ),
    code: {
      name: "main.css",
      lang: "css",
      code: css`
        @import "tailwindcss";
      `,
    },
  },
  {
    title: "Thêm file CSS toàn cục",
    body: (
      <p>
        Thêm file <code>./app/assets/css/main.css</code> vừa tạo vào mảng <code>css</code> trong file{" "}
        <code>nuxt.config.ts</code> của bạn.
      </p>
    ),
    code: {
      name: "nuxt.config.ts",
      lang: "ts",
      code: js`
        import tailwindcss from "@tailwindcss/vite";

        export default defineNuxtConfig({
          compatibilityDate: "2025-07-15",
          devtools: { enabled: true },
          // [!code highlight:2]
          css: ['./app/assets/css/main.css'],
          vite: {
            plugins: [
              tailwindcss(),
            ],
          },
        });
      `,
    },
  },
  {
    title: "Bắt đầu quá trình build",
    body: (
      <p>
        Chạy quá trình build với <code>npm run dev</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm run dev
      `,
    },
  },
  {
    title: "Bắt đầu sử dụng Tailwind trong dự án của bạn",
    body: <p>Bắt đầu sử dụng các utility class của Tailwind để style nội dung của bạn.</p>,
    code: {
      name: "app.vue",
      lang: "vue",
      code: html`
        <template>
          <!-- [!code highlight:4] -->
          <h1 class="text-3xl font-bold underline">
            <!-- prettier-ignore -->
            Hello world!
          </h1>
        </template>
      `,
    },
  },
];
