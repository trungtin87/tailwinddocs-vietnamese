import { css, html, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/parcel.react.svg";

export let tile: Tile = {
  title: "Parcel",
  description: "Công cụ build không cần cấu hình cho web.",
  Logo,
};

export let page: Page = {
  title: "Cài đặt Tailwind CSS với Parcel",
  description: "Thiết lập Tailwind CSS trong dự án Parcel.",
};

export let steps: Step[] = [
  {
    title: "Tạo dự án của bạn",
    body: (
      <p>
        Bắt đầu bằng cách tạo một dự án Parcel mới nếu bạn chưa thiết lập. Cách phổ biến nhất là thêm
        Parcel như một dev-dependency vào dự án như được mô tả trong{" "}
        <a href="https://parceljs.org/getting-started/webapp/">hướng dẫn bắt đầu</a> của họ.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        mkdir my-project
        cd my-project
        npm init -y
        npm install parcel
        mkdir src
        touch src/index.html
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
        npm install tailwindcss @tailwindcss/postcss
      `,
    },
  },
  {
    title: "Cấu hình PostCSS",
    body: (
      <p>
        Tạo file <code>.postcssrc</code> trong thư mục gốc dự án, và bật plugin <code>@tailwindcss/postcss</code>{" "}
        plugin.
      </p>
    ),
    code: {
      name: ".postcssrc",
      lang: "json",
      code: js`
        {
          "plugins": {
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
        Tạo file <code>./src/index.css</code> và thêm <code>@import</code> cho Tailwind CSS.
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
        Chạy quá trình build với <code>npx parcel src/index.html</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npx parcel src/index.html
      `,
    },
  },
  {
    title: "Bắt đầu sử dụng Tailwind trong dự án của bạn",
    body: (
      <p>
        Thêm file CSS vào <code>{"<head>"}</code> và bắt đầu sử dụng các utility class của Tailwind để style
        nội dung của bạn.
      </p>
    ),
    code: {
      name: "index.html",
      lang: "html",
      code: html`
        <!doctype html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <!-- [!code highlight:2] -->
            <link href="./index.css" type="text/css" rel="stylesheet" />
          </head>
          <body>
            <!-- [!code highlight:4] -->
            <h1 class="text-3xl font-bold underline">
              <!-- prettier-ignore -->
              Hello world!
            </h1>
          </body>
        </html>
      `,
    },
  },
];
