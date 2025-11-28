import { css, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/tanstack.react.svg";
import LogoDark from "@/docs/img/guides/tanstack-white.react.svg";

export let tile: Tile = {
  title: "TanStack Start",
  description: "Framework full-stack được hỗ trợ bởi TanStack Router cho React và Solid.",
  Logo,
  LogoDark,
};

export let page: Page = {
  title: "Cài đặt Tailwind CSS với TanStack Start",
  description: "Thiết lập Tailwind CSS trong dự án TanStack Start.",
};

export let steps: Step[] = [
  {
    title: "Tạo dự án",
    body: (
      <p>
        Bắt đầu bằng cách tạo một dự án TanStack Start mới nếu bạn chưa thiết lập. Cách phổ biến nhất là
        sử dụng <a href="https://tanstack.com/start/latest/docs/framework/react/overview">Create Start App</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npx create-start-app@latest my-project
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
        import { tanstackStart } from '@tanstack/react-start/plugin/vite';
        import { defineConfig } from 'vite';
        import tsConfigPaths from 'vite-tsconfig-paths';
        // [!code highlight:2]
        import tailwindcss from '@tailwindcss/vite'

        export default defineConfig({
          plugins: [
            // [!code highlight:2]
            tailwindcss()
            tanstackStart(),
            tsConfigPaths(),
          ]
        });
      `,
    },
  },
  {
    title: "Import Tailwind CSS",
    body: (
      <p>
        Thêm <code>@import</code> vào <code>./src/styles.css</code> để import Tailwind CSS.
      </p>
    ),
    code: {
      name: "src/styles.css",
      lang: "css",
      code: css`
        @import "tailwindcss";
      `,
    },
  },
  {
    title: "Import file CSS vào root route",
    body: (
      <p>
        Import file CSS vào file <code>__root.tsx</code> của bạn với query <code>?url</code>.
      </p>
    ),
    code: {
      name: "src/routes/__root.tsx",
      lang: "tsx",
      code: js`
        // other imports...

        // [!code highlight:2]
        import appCss from '../styles.css?url'

        export const Route = createRootRoute({
          head: () => ({
            meta: [
              // your meta tags and site config
            ],
            // [!code highlight:2]
            links: [{ rel: 'stylesheet', href: appCss }],
            // other head config
          }),
          component: RootComponent,
        })
      `,
    },
  },
  {
    title: "Bắt đầu sử dụng Tailwind trong dự án của bạn",
    body: <p>Bắt đầu sử dụng các utility class của Tailwind để style nội dung của bạn.</p>,
    code: {
      name: "src/routes/index.tsx",
      lang: "tsx",
      code: js`
        import { createFileRoute } from '@tanstack/react-router'

        export const Route = createFileRoute('/')(({
          component: App,
        })

        function App() {
          return (
            // [!code highlight:4]
            <h1 class="text-3xl font-bold underline">
              Hello World!
            </h1>
          )
        }
      `,
    },
  },
];
