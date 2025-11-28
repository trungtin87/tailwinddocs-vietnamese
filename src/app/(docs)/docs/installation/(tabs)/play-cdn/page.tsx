import Link from "next/link";
import { Metadata } from "next";
import { Steps, type Step } from "@/components/installation-steps";
import dedent from "dedent";

export const metadata: Metadata = {
  title: "Play CDN",
  description: "Sử dụng Play CDN để thử Tailwind ngay trong trình duyệt mà không cần bước build nào.",
  openGraph: {
    type: "article",
    title: "Play CDN",
    description: "Thử Tailwind CSS ngay trong trình duyệt mà không cần bước build nào.",
    images: "https://tailwindcss.com/api/og?path=/docs/installation/play-cdn",
    url: "https://tailwindcss.com/docs/installation/play-cdn",
  },
};

const steps: Step[] = [
  {
    title: "Thêm script Play CDN vào HTML của bạn",
    body: (
      <p>
        Thêm thẻ script Play CDN vào <code>&lt;head&gt;</code> của file HTML của bạn, và bắt đầu sử dụng các utility class của Tailwind
        để style nội dung của bạn.
      </p>
    ),
    code: {
      name: "index.html",
      lang: "html",
      code: dedent`
        <!doctype html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <!-- [!code highlight:2] -->
            <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
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
  {
    title: "Thử thêm một số CSS tùy chỉnh",
    body: (
      <p>
        Sử dụng <code>type="text/tailwindcss"</code> để thêm CSS tùy chỉnh hỗ trợ tất cả các tính năng CSS của Tailwind.
      </p>
    ),
    code: {
      name: "index.html",
      lang: "html",
      code: dedent`
        <!doctype html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
            <!-- [!code highlight:6] -->
            <style type="text/tailwindcss">
              @theme {
                --color-clifford: #da373d;
              }
            </style>
          </head>
          <body>
            <!-- [!code word:text-clifford] -->
            <h1 class="text-3xl font-bold underline text-clifford">
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
          Sử dụng Play CDN
        </h3>
        <p>
          Sử dụng Play CDN để thử Tailwind ngay trong trình duyệt mà không cần bước build nào. Play CDN được thiết kế cho
          mục đích phát triển, và không dành cho production.
        </p>
      </div>
      <Steps steps={steps} />
    </>
  );
}
