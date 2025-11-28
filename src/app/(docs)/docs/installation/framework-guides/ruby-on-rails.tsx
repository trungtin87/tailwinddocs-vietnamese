import { css, html, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/rails.react.svg";
import LogoDark from "@/docs/img/guides/rails-white.react.svg";

export let tile: Tile = {
  title: "Ruby on Rails",
  description: "Framework full-stack với đầy đủ công cụ cần thiết để xây dựng các ứng dụng web tuyệt vời.",
  Logo,
  LogoDark,
};

export let page: Page = {
  title: "Cài đặt Tailwind CSS với Ruby on Rails",
  description: "Thiết lập Tailwind CSS trong dự án Ruby on Rails v8+.",

  // NOTE: This intro is not used currently but is here for reference as we'll want to bring it back once the rails gem is updated for a stable v4 release.
  intro: (
    <div className="prose prose-slate dark:prose-dark relative z-10 mb-16 max-w-3xl">
      <p>
        Cách nhanh nhất để bắt đầu sử dụng Tailwind CSS trong dự án Rails của bạn là sử dụng{" "}
        <a href="https://github.com/rails/tailwindcss-rails">Tailwind CSS for Rails</a> bằng cách chạy{" "}
        <code>rails new my-project --css tailwind</code>. Điều này sẽ tự động cấu hình thiết lập Tailwind của bạn dựa trên
        ví dụ chính thức của Rails. Nếu bạn muốn cấu hình Tailwind thủ công, hãy tiếp tục với phần còn lại của hướng dẫn này.
      </p>
    </div>
  ),
};

export let steps: Step[] = [
  {
    title: "Tạo dự án của bạn",
    body: (
      <p>
        Bắt đầu bằng cách tạo một dự án Rails mới nếu bạn chưa thiết lập. Cách phổ biến nhất là sử dụng
        <a href="https://guides.rubyonrails.org/command_line.html">Rails Command Line</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        rails new my-project
        cd my-project
      `,
    },
  },
  {
    title: "Cài đặt Tailwind CSS",
    body: (
      <p>
        Cài đặt gem <code>tailwindcss-rails</code> sau đó chạy lệnh cài đặt để thiết lập Tailwind CSS trong dự án của bạn.
      </p>
    ),

    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        bundle add tailwindcss-rails
        ./bin/rails tailwindcss:install
      `,
    },
  },
  {
    title: "Bắt đầu quá trình build",
    body: (
      <p>
        Chạy quá trình build với <code>./bin/dev</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        ./bin/dev
      `,
    },
  },
  {
    title: "Bắt đầu sử dụng Tailwind trong dự án của bạn",
    body: <p>Bắt đầu sử dụng các utility class của Tailwind để style nội dung của bạn.</p>,
    code: {
      name: "index.html.erb",
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
