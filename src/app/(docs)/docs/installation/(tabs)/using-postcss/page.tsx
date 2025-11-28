import { Cta } from "@/components/cta";
import { type Step, Steps } from "@/components/installation-steps";
import dedent from "dedent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cài đặt Tailwind CSS với PostCSS",
  description:
    "Cài đặt Tailwind CSS dưới dạng plugin PostCSS là cách liền mạch nhất để tích hợp nó với các framework như Next.js và Angular.",
  openGraph: {
    type: "article",
    title: "Cài đặt với PostCSS",
    description: "Tích hợp Tailwind CSS với các framework như Next.js và Angular.",
    images: "https://tailwindcss.com/api/og?path=/docs/installation/using-postcss",
    url: "https://tailwindcss.com/docs/installation/using-postcss",
  },
};

const steps: Step[] = [
  {
    title: "Cài đặt Tailwind CSS",
    body: (
      <p>
        Cài đặt <code>tailwindcss</code>, <code>@tailwindcss/postcss</code>, và <code>postcss</code> qua npm.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: dedent`
        npm install tailwindcss @tailwindcss/postcss postcss
      `,
    },
  },
  {
    title: "Thêm Tailwind vào cấu hình PostCSS của bạn",
    body: (
      <p>
        Thêm <code>@tailwindcss/postcss</code> vào file <code>postcss.config.mjs</code> của bạn, hoặc bất cứ nơi nào PostCSS được
        cấu hình trong dự án của bạn.
      </p>
    ),
    code: {
      name: "postcss.config.mjs",
      lang: "js",
      code: dedent`
        export default {
          plugins: {
            // [!code highlight:2]
            "@tailwindcss/postcss": {},
          }
        }
      `,
    },
  },
  {
    title: "Import Tailwind CSS",
    body: (
      <p>
        Thêm một <code>@import</code> vào file CSS của bạn để import Tailwind CSS.
      </p>
    ),
    code: {
      name: "CSS",
      lang: "css",
      code: dedent`
        @import "tailwindcss";
      `,
    },
  },
  {
    title: "Bắt đầu quá trình build của bạn",
    body: (
      <p>
        Chạy quá trình build của bạn với <code>npm run dev</code> hoặc bất kỳ lệnh nào được cấu hình trong file{" "}
        <code>package.json</code> của bạn.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: dedent`
        npm run dev
      `,
    },
  },
  {
    title: "Bắt đầu sử dụng Tailwind trong HTML của bạn",
    body: (
      <p>
        Đảm bảo CSS đã biên dịch của bạn được bao gồm trong <code>{"<head>"}</code>{" "}
        <em>(framework của bạn có thể xử lý việc này cho bạn)</em>, sau đó bắt đầu sử dụng các utility class của Tailwind để style
        nội dung của bạn.
      </p>
    ),
    code: {
      name: "HTML",
      lang: "html",
      code: dedent`
        <!doctype html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <!-- [!code highlight:2] -->
          <link href="/dist/styles.css" rel="stylesheet">
        </head>
        <body>
          <!-- [!code highlight:4] -->
          <h1 class="text-3xl font-bold underline">
            Hello world!
          </h1>
        </body>
        </html>
      `,
    },
  },
];

export default function Page() {
  return (
    <>
      <div id="content-wrapper" className="prose relative z-10 mb-10 max-w-3xl" data-content="true">
        <h3 data-title="true" className="sr-only">
          Cài đặt Tailwind CSS dưới dạng plugin PostCSS
        </h3>
        <p>
          Cài đặt Tailwind CSS dưới dạng plugin PostCSS là cách liền mạch nhất để tích hợp nó với các framework như
          Next.js và Angular.
        </p>
      </div>
      <Steps steps={steps} />
      <div className="my-4 md:my-16">
        <Cta label="Khám phá hướng dẫn framework của chúng tôi" href="/docs/installation/framework-guides">
          <strong className="font-semibold text-gray-950 dark:text-white">Bạn đang gặp khó khăn?</strong> Thiết lập Tailwind
          với PostCSS có thể hơi khác nhau giữa các công cụ build khác nhau. Kiểm tra hướng dẫn framework của chúng tôi để xem liệu chúng tôi có
          hướng dẫn cụ thể hơn cho thiết lập cụ thể của bạn không.
        </Cta>
      </div>
    </>
  );
}
