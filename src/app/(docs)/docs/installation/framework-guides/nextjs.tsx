import { css, js, shell, Page, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/nextjs.react.svg";
import LogoDark from "@/docs/img/guides/nextjs-white.react.svg";

export let tile: Tile = {
  title: "Next.js",
  description: "Framework React đầy đủ tính năng với trải nghiệm nhà phát triển tuyệt vời.",
  Logo,
  LogoDark,
};

export let page: Page = {
  title: "Cài đặt Tailwind CSS với Next.js",
  description: "Thiết lập Tailwind CSS trong dự án Next.js.",
};

export let steps: Step[] = [
  {
    title: "Tạo dự án của bạn",
    body: (
      <p>
        Bắt đầu bằng cách tạo một dự án Next.js mới nếu bạn chưa thiết lập. Cách phổ biến nhất là sử dụng{" "}
        <a href="https://nextjs.org/docs/api-reference/create-next-app">Create Next App</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npx create-next-app@latest my-project --typescript --eslint --app
        cd my-project
      `,
    },
  },
  {
    title: "Cài đặt Tailwind CSS",
    body: (
      <p>
        Cài đặt <code>@tailwindcss/postcss</code> và các peer dependencies thông qua npm.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm install tailwindcss @tailwindcss/postcss postcss
      `,
    },
  },
  {
    title: "Cấu hình PostCSS Plugins",
    body: (
      <p>
        Tạo file <code>postcss.config.mjs</code> ở thư mục gốc của dự án và thêm plugin{" "}
        <code>@tailwindcss/postcss</code> vào cấu hình PostCSS của bạn.
      </p>
    ),
    code: {
      name: "postcss.config.mjs",
      lang: "js",
      code: js`
        const config = {
          plugins: {
            // [!code highlight:2]
            "@tailwindcss/postcss": {},
          },
        };

        export default config;
      `,
    },
  },
  {
    title: "Import Tailwind CSS",
    body: (
      <p>
        Thêm <code>@import</code> vào <code>./app/globals.css</code> để import Tailwind CSS.
      </p>
    ),
    code: {
      name: "globals.css",
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
      name: "page.tsx",
      lang: "jsx",
      code: js`
        export default function Home() {
          return (
            // [!code highlight:4]
            <h1 className="text-3xl font-bold underline">
              Hello world!
            </h1>
          )
        }
      `,
    },
  },
];
