import dedent from "dedent";
import Link from "next/link";
import { Metadata } from "next";
import { type Step, Steps } from "@/components/installation-steps";

export const metadata: Metadata = {
  title: "Tailwind CLI",
  description:
    "Cách đơn giản nhất và nhanh nhất để bắt đầu với Tailwind CSS từ đầu là sử dụng công cụ Tailwind CLI.",
  openGraph: {
    type: "article",
    title: "Tailwind CLI",
    description: "Cách đơn giản nhất và nhanh nhất để bắt đầu với Tailwind CSS từ đầu.",
    images: "https://tailwindcss.com/api/og?path=/docs/installation/tailwind-cli",
    url: "https://tailwindcss.com/docs/installation/tailwind-cli",
  },
};

const steps: Step[] = [
  {
    title: "Cài đặt Tailwind CSS",
    body: (
      <p>
        Cài đặt <code>tailwindcss</code> và <code>@tailwindcss/cli</code> qua npm.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: "npm install tailwindcss @tailwindcss/cli",
    },
  },
  {
    title: "Import Tailwind vào CSS của bạn",
    body: (
      <p>
        Thêm dòng import <code>@import "tailwindcss";</code> vào file CSS chính của bạn.
      </p>
    ),
    code: {
      name: "src/input.css",
      lang: "css",
      code: '@import "tailwindcss";',
    },
  },
  {
    title: "Bắt đầu quá trình build Tailwind CLI",
    body: <p>Chạy công cụ CLI để quét các file nguồn của bạn tìm các class và build CSS của bạn.</p>,
    code: {
      name: "Terminal",
      lang: "shell",
      code: "npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch",
    },
  },
  {
    title: "Bắt đầu sử dụng Tailwind trong HTML của bạn",
    body: (
      <p>
        Thêm file CSS đã biên dịch của bạn vào <code>{"<head>"}</code> và bắt đầu sử dụng các utility class của Tailwind để style
        nội dung của bạn.
      </p>
    ),
    code: {
      name: "src/index.html",
      lang: "html",
      code: dedent`
        <!doctype html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <!-- [!code highlight:2] -->
          <link href="./output.css" rel="stylesheet">
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
        <h3 className="sr-only" data-title="true">
          Cài đặt Tailwind CLI
        </h3>
        <p>
          Cách đơn giản nhất và nhanh nhất để bắt đầu với Tailwind CSS từ đầu là sử dụng công cụ Tailwind CLI.
          CLI cũng có sẵn dưới dạng một{" "}
          <Link href="https://github.com/tailwindlabs/tailwindcss/releases/latest">tệp thực thi độc lập</Link> nếu bạn
          muốn sử dụng nó mà không cần cài đặt Node.js.
        </p>
      </div>
      <Steps steps={steps} />
    </>
  );
}
