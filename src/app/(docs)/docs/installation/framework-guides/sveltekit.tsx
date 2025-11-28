import { css, js, html, shell, Page, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/svelte.react.svg";

export let tile: Tile = {
  title: "SvelteKit",
  description: "Cách nhanh nhất để xây dựng ứng dụng mọi quy mô với Svelte.js.",
  Logo,
};

export let page: Page = {
  title: "Cài đặt Tailwind CSS với SvelteKit",
  description: "Thiết lập Tailwind CSS trong dự án SvelteKit.",
};

export let steps: Step[] = [
  {
    title: "Tạo dự án của bạn",
    body: (
      <p>
        Bắt đầu bằng cách tạo một dự án SvelteKit mới nếu bạn chưa thiết lập. Cách phổ biến nhất được
        đề cập trong tài liệu <a href="https://svelte.dev/docs/kit/creating-a-project">SvelteKit</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npx sv create my-project
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
        Thêm plugin <code>@tailwindcss/vite</code> vào cấu hình Vite của bạn.
      </p>
    ),
    code: {
      name: "vite.config.ts",
      lang: "ts",
      code: js`
        import { sveltekit } from '@sveltejs/kit/vite';
        import { defineConfig } from 'vite';
        // [!code highlight:2]
        import tailwindcss from '@tailwindcss/vite';

        export default defineConfig({
          plugins: [
            // [!code highlight:2]
            tailwindcss(),
            sveltekit(),
          ],
        });
      `,
    },
  },
  {
    title: "Import Tailwind CSS",
    body: (
      <p>
        Tạo file <code>./src/app.css</code> và thêm <code>@import</code> để import Tailwind CSS.
      </p>
    ),
    code: {
      name: "app.css",
      lang: "css",
      code: css`
        @import "tailwindcss";
      `,
    },
  },
  {
    title: "Import file CSS",
    body: (
      <p>
        Tạo file <code>./src/routes/+layout.svelte</code> và import file <code>app.css</code> vừa tạo.
      </p>
    ),
    code: {
      name: "+layout.svelte",
      lang: "svelte",
      code: html`
        <script>
          let { children } = $props();
          // [!code highlight:2]
          import "../app.css";
        </script>

        {@render children()}
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
    body: (
      <p>
        Bắt đầu sử dụng các utility class của Tailwind để style nội dung của bạn, đảm bảo import theme Tailwind CSS
        cho bất kỳ khối <code>&lt;style&gt;</code> nào cần được xử lý bởi Tailwind.
      </p>
    ),
    code: {
      name: "+page.svelte",
      lang: "svelte",
      code: html`
        <!-- [!code highlight:4] -->
        <h1 class="text-3xl font-bold underline">
          <!-- prettier-ignore -->
          Hello world!
        </h1>

        <style lang="postcss">
          /* [!code highlight:2] */
          @reference "tailwindcss";

          :global(html) {
            background-color: theme(--color-gray-100);
          }
        </style>
      `,
    },
  },
];
