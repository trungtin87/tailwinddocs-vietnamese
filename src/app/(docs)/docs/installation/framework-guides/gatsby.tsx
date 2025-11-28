import { astro, css, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/gatsby.react.svg";

export let tile: Tile = {
  title: "Gatsby",
  description: "Framework để xây dựng các trang web tĩnh với React và GraphQL.",
  Logo,
};

export let page: Page = {
  title: "Cài đặt Tailwind CSS với Gatsby",
  description: "Thiết lập Tailwind CSS trong dự án Gatsby.",
};

export let steps: Step[] = [
  {
    title: "Tạo dự án của bạn",
    body: (
      <p>
        Bắt đầu bằng cách tạo một dự án Gatsby mới nếu bạn chưa thiết lập. Cách phổ biến nhất là sử dụng{" "}
        <a href="https://www.gatsbyjs.com/docs/reference/gatsby-cli/#how-to-use-gatsby-cli">Gatsby CLI</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        gatsby new my-project
        cd my-project
      `,
    },
  },
  {
    title: "Cài đặt Tailwind CSS",
    body: (
      <p>
        Sử dụng npm, cài đặt <code>@tailwindcss/postcss</code>, các peer dependencies, và{" "}
        <code>gatsby-plugin-postcss</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm install @tailwindcss/postcss tailwindcss postcss gatsby-plugin-postcss
      `,
    },
  },
  {
    title: "Bật plugin Gatsby PostCSS",
    body: (
      <p>
        Trong file <code>gatsby-config.js</code> của bạn, bật <code>gatsby-plugin-postcss</code>. Xem{" "}
        <a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-postcss/">tài liệu của plugin</a> để biết thêm
        thông tin.
      </p>
    ),
    code: {
      name: "gatsby-config.js",
      lang: "js",
      code: js`
        module.exports = {
          plugins: [
            // [!code highlight:2]
            'gatsby-plugin-postcss',
            // ...
          ],
        }
      `,
    },
  },
  {
    title: "Cấu hình PostCSS Plugins",
    body: (
      <p>
        Tạo file <code>postcss.config.js</code> ở thư mục gốc của dự án và thêm plugin{" "}
        <code>@tailwindcss/postcss</code> vào cấu hình PostCSS của bạn.
      </p>
    ),
    code: {
      name: "postcss.config.js",
      lang: "js",
      code: js`
        module.exports = {
          plugins: {
            // [!code highlight:2]
            "@tailwindcss/postcss": {},
          },
        };
      `,
    },
  },
  {
    title: "Import Tailwind CSS",
    body: (
      <p>
        Tạo file <code>./src/styles/global.css</code> và thêm <code>@import</code> cho Tailwind CSS.
      </p>
    ),
    code: {
      name: "global.css",
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
        Tạo file <code>gatsby-browser.js</code> ở thư mục gốc của dự án nếu chưa có, và import file
        <code>./src/styles/global.css</code> vừa tạo.
      </p>
    ),
    code: {
      name: "gatsby-browser.js",
      lang: "js",
      code: js`
        import './src/styles/global.css';
      `,
    },
  },
  {
    title: "Bắt đầu quá trình build",
    body: (
      <p>
        Chạy quá trình build với <code>gatsby develop</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        gatsby develop
      `,
    },
  },
  {
    title: "Bắt đầu sử dụng Tailwind trong dự án của bạn",
    body: <p>Bắt đầu sử dụng các utility class của Tailwind để style nội dung của bạn.</p>,
    code: {
      name: "index.js",
      lang: "js",
      code: js`
        export default function IndexPage() {
          return (
            <Layout>
              /* [!code highlight:4] */
              <h1 className="text-3xl font-bold underline">
                Hello world!
              </h1>
            </Layout>
          )
        }
      `,
    },
  },
];
