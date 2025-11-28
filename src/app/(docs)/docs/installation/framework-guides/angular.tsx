import { css, html, js, shell, Page, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/angular.react.svg";
import LogoDark from "@/docs/img/guides/angular-white.react.svg";

export let tile: Tile = {
  title: "Angular",
  description: "Nền tảng để xây dựng ứng dụng web cho mobile và desktop.",
  Logo,
  LogoDark,
};

export let page: Page = {
  title: "Cài đặt Tailwind CSS với Angular",
  description: "Thiết lập Tailwind CSS trong dự án Angular.",
};

export let steps: Step[] = [
  {
    title: "Tạo dự án của bạn",
    body: (
      <p>
        Bắt đầu bằng cách tạo một dự án Angular mới nếu bạn chưa thiết lập. Cách phổ biến nhất là sử dụng{" "}
        <a href="https://angular.dev/tools/cli/setup-local">Angular CLI</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        ng new my-project --style css
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

    // NOTE: The `--force` flag is used to make sure the installation succeeds. Angular has a peer dependency on `tailwindcss` v3 which causes errors when installing `tailwindcss` v4.
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm install tailwindcss @tailwindcss/postcss postcss --force
      `,
    },
  },
  {
    title: "Cấu hình PostCSS Plugins",
    body: (
      <p>
        Tạo file <code>.postcssrc.json</code> ở thư mục gốc của dự án và thêm plugin{" "}
        <code>@tailwindcss/postcss</code> vào cấu hình PostCSS của bạn.
      </p>
    ),
    code: {
      name: ".postcssrc.json",
      lang: "js",
      code: js`
        {
          "plugins": {
            // [!code highlight:2]
            "@tailwindcss/postcss": {}
          }
        }
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
      name: "styles.css",
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
        Chạy quá trình build với <code>ng serve</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        ng serve
      `,
    },
  },
  {
    title: "Bắt đầu sử dụng Tailwind trong dự án của bạn",
    body: <p>Bắt đầu sử dụng các utility class của Tailwind để style nội dung của bạn.</p>,
    code: {
      name: "app.component.html",
      lang: "html",
      code: html`
        <!-- [!code highlight:4] -->
        <h1 class="text-3xl font-bold underline">
          <!-- prettier-ignore -->
          Hello world!
        </h1>
      `,
    },
  },
];
