import { js, css, shell, type Page, type Step, type Tile } from "./utils";
import Logo from "@/docs/img/guides/solidjs.react.svg";

export let tile: Tile = {
  title: "SolidJS",
  description: "Công cụ để xây dựng giao diện người dùng đơn giản, hiệu năng cao và reactive.",
  Logo,
};

export let page: Page = {
  title: "Cài đặt Tailwind CSS với SolidJS",
  description: "Thiết lập Tailwind CSS trong dự án SolidJS.",
};

export let steps: Step[] = [
  {
    title: "Tạo dự án của bạn",
    body: (
      <p>
        Bắt đầu bằng cách tạo một dự án SolidJS mới nếu bạn chưa thiết lập. Cách phổ biến nhất là sử dụng{" "}
        <a href="https://www.solidjs.com/guides/getting-started">SolidJS Vite template</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npx degit solidjs/templates/js my-project
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
        import { defineConfig } from 'vite';
        import solidPlugin from 'vite-plugin-solid';
        // [!code highlight:2]
        import tailwindcss from '@tailwindcss/vite';

        export default defineConfig({
          plugins: [
            // [!code highlight:2]
            tailwindcss(),
            solidPlugin(),
          ],
          server: {
            port: 3000,
          },
          build: {
            target: 'esnext',
          },
        });
      `,
    },
  },
  {
    title: "Import Tailwind CSS",
    body: (
      <p>
        Thêm <code>@import</code> vào <code>./src/index.css</code> để import Tailwind CSS.
      </p>
    ),
    code: {
      name: "index.css",
      lang: "css",
      code: css`
        @import "tailwindcss";
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
      name: "App.jsx",
      lang: "jsx",
      code: js`
        export default function App() {
          return (
            // [!code highlight:4]
            <h1 class="text-3xl font-bold underline">
              Hello world!
            </h1>
          )
        }
      `,
    },
  },
];
