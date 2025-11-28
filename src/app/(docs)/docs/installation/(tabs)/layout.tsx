import { Metadata } from "next";
import { TabBar } from "@/components/installation-tabs";

export const metadata: Metadata = {
  title: {
    template: "%s - Tailwind CSS",
    default: "Installation",
  },
  openGraph: {
    type: "article",
    title: {
      template: "%s - Cài đặt",
      default: "Cài đặt",
    },
  },
};

const tabs = {
  "Sử dụng Vite": "/docs/installation/using-vite",
  "Sử dụng PostCSS": "/docs/installation/using-postcss",
  "Tailwind CLI": "/docs/installation/tailwind-cli",
  "Hướng dẫn Framework": "/docs/installation/framework-guides",
  "Play CDN": "/docs/installation/play-cdn",
};

const readNext = [
  {
    title: "Styling với utility classes",
    href: "/docs/styling-with-utility-classes",
    body: (
      <p>Sử dụng quy trình làm việc ưu tiên tiện ích để xây dựng các thành phần phức tạp từ một tập hợp hạn chế các tiện ích nguyên thủy.</p>
    ),
    // icon: {
    //   className: "dark:bg-indigo-500 dark:highlight-white/20",
    //   // light: require("@/img/icons/home/utility-first.png").default.src,
    //   // dark: require("@/img/icons/home/dark/utility-first.png").default.src,
    // },
    icon: require("@/components/home/icons/css-grid-icon").default,
  },
  {
    title: "Thiết kế phản hồi",
    href: "/docs/responsive-design",
    body: <p>Xây dựng giao diện người dùng phản hồi hoàn toàn thích ứng với mọi kích thước màn hình bằng cách sử dụng các modifier phản hồi.</p>,
    icon: {
      className: "dark:bg-indigo-500 dark:highlight-white/20",
      // light: require("@/img/icons/home/mobile-first.png").default.src,
      // dark: require("@/img/icons/home/dark/mobile-first.png").default.src,
    },
  },
  {
    title: "Hover, Focus & Các trạng thái khác",
    href: "/docs/hover-focus-and-other-states",
    body: <p>Style các phần tử trong các trạng thái tương tác như hover, focus, và nhiều hơn nữa bằng cách sử dụng các modifier điều kiện.</p>,
    icon: {
      className: "dark:bg-blue-500 dark:highlight-white/20",
      // light: require("@/img/icons/home/state-variants.png").default.src,
      // dark: require("@/img/icons/home/dark/state-variants.png").default.src,
    },
  },
  {
    title: "Chế độ tối",
    href: "/docs/dark-mode",
    body: <p>Tối ưu hóa trang web của bạn cho chế độ tối trực tiếp trong HTML của bạn bằng cách sử dụng modifier chế độ tối.</p>,
    icon: {
      className: "dark:bg-slate-600 dark:highlight-white/20",
      // light: require("@/img/icons/home/dark-mode.png").default.src,
      // dark: require("@/img/icons/home/dark/dark-mode.png").default.src,
    },
  },
  {
    title: "Tái sử dụng Styles",
    href: "/docs/reusing-styles",
    body: <p>Quản lý sự trùng lặp và giữ cho các dự án của bạn dễ bảo trì bằng cách tạo ra các sự trừu tượng có thể tái sử dụng.</p>,
    icon: {
      className: "dark:bg-sky-500 dark:highlight-white/20",
      // light: require("@/img/icons/home/component-driven.png").default.src,
      // dark: require("@/img/icons/home/dark/component-driven.png").default.src,
    },
  },
  {
    title: "Tùy chỉnh Framework",
    href: "/docs/adding-custom-styles",
    body: <p>Tùy chỉnh framework để phù hợp với thương hiệu của bạn và mở rộng nó với các style tùy chỉnh của riêng bạn.</p>,
    icon: {
      className: "dark:bg-pink-500 dark:highlight-white/30",
      // light: require("@/img/icons/home/customization.png").default.src,
      // dark: require("@/img/icons/home/dark/customization.png").default.src,
    },
  },
];

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Add a placeholder div so the Next.js router can find the scrollable element. */}
      <div hidden />

      <div className="isolate mx-auto grid w-full max-w-2xl grid-cols-1 gap-10 pt-10 md:pb-24 xl:max-w-5xl">
        <div className="px-4 sm:px-6">
          <p
            data-section="true"
            className="font-mono text-xs/6 font-medium tracking-widest text-gray-600 uppercase dark:text-gray-400"
          >
            Cài đặt
          </p>
          <h1 className="mt-2 text-3xl font-medium tracking-tight text-gray-950 dark:text-white">
            Bắt đầu với Tailwind CSS
          </h1>
          <p data-description="true" className="mt-6 text-base/7 text-gray-700 dark:text-gray-300">
            Tailwind CSS hoạt động bằng cách quét tất cả các file HTML, component JavaScript và bất kỳ template nào khác của bạn để tìm
            tên class, tạo ra các style tương ứng và sau đó ghi chúng vào một file CSS tĩnh.
          </p>
          <p className="mt-4 text-base/7 text-gray-700 dark:text-gray-300">
            Nó nhanh, linh hoạt và đáng tin cậy — với zero-runtime.
          </p>

          <div className="mt-10" data-content="true">
            <section className="relative mb-16">
              <div className="relative z-10">
                <h2
                  data-docsearch-ignore
                  className="mb-6 text-lg font-semibold tracking-tight text-gray-950 dark:text-white"
                >
                  Cài đặt
                </h2>
                <TabBar
                  tabs={Object.entries(tabs).map(([title, url]) => ({
                    title,
                    url,
                  }))}
                />
              </div>
              {children}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
