import { css, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/react-router.react.svg";
import LogoDark from "@/docs/img/guides/react-router-white.react.svg";

export let tile: Tile = {
  title: "React Router",
  description: "Router tập trung vào tiêu chuẩn mà bạn có thể triển khai ở bất kỳ đâu.",
  Logo,
  LogoDark,
};

export let page: Page = {
  title: "Cài đặt Tailwind CSS với React Router",
  description: "Thiết lập Tailwind CSS trong dự án React Router.",
};

export let steps: Step[] = [
  {
    title: "Tạo dự án của bạn",
    body: (
      <p>
        Bắt đầu bằng cách tạo một dự án React Router mới nếu bạn chưa thiết lập. Cách phổ biến nhất là
        sử dụng <a href="https://reactrouter.com/start/framework/installation">Create React Router</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npx create-react-router@latest my-project
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
        import { reactRouter } from "@react-router/dev/vite";
        import { defineConfig } from "vite";
        import tsconfigPaths from "vite-tsconfig-paths";
        // [!code highlight:2]
        import tailwindcss from "@tailwindcss/vite";

        export default defineConfig({
          plugins: [
            // [!code highlight:2]
            tailwindcss(),
            reactRouter(),
            tsconfigPaths(),
          ],
        });
      `,
    },
  },
  {
    title: "Import Tailwind CSS",
    body: (
      <p>
        Thêm <code>@import</code> vào <code>./app/app.css</code> để import Tailwind CSS.
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
      name: "home.tsx",
      lang: "tsx",
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
