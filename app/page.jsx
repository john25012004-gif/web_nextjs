"use client";

import "./index.css";
import ClientScripts from "./ClientScripts";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen font-sans bg-[#F5F3E7] text-gray-800">
      <Navbar />

      {/* Banner Section */}
      <section className="bg-black text-yellow-400 py-24 text-center flex flex-col items-center transition-all duration-300 hover:shadow-[0_0_25px_#FFD700] hover:scale-[1.02]">
        {/* Avatar */}
        <img
          src="https://media.pixverse.ai/pixverse%2Fi2i%2Fori%2F2dd64834-df93-4140-9604-80e121bd7198.jpg"
          alt="Avatar"
          className="w-40 h-40 object-cover rounded-full shadow-2xl border-4 border-white mb-4 transition duration-300"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://via.placeholder.com/400x400.png?text=Avatar+Anime";
          }}
        />

        {/* Links */}
        <div className="flex space-x-6 mt-6 justify-center">
          <a
            href="https://www.facebook.com/quocthang.pham.5477"
            target="_blank"
            className="text-gray-400 hover:text-blue-500 transition duration-300 transform hover:scale-110"
            title="Facebook Profile"
          >
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.35C0 23.407.593 24 1.325 24h11.458v-9.358H9.425V11.23h3.358V8.406c0-3.324 1.986-5.18 5.045-5.18 1.45 0 2.76.108 3.132.157v3.52l-2.083.003c-1.637 0-1.956.777-1.956 1.916v2.502h4.09l-.532 4.09H17.06V24h5.615c.732 0 1.325-.593 1.325-1.325V1.325c0-.732-.593-1.325-1.325-1.325z" />
            </svg>
          </a>

          <a
            href="https://github.com/john25012004-gif"
            target="_blank"
            className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110"
            title="GitHub Profile"
          >
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.27.82-.58
                0-.28-.01-1.02-.02-2-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.76.08-.75.08-.75
                1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.1-.78.42-1.32.76-1.62-2.67-.3-5.47-1.33-5.47-5.93
                0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23
                .66 1.65.26 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.93.43.37.82 1.1.82 2.22
                0 1.6-.02 2.88-.02 3.27 0 .31.22.69.82.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        <h1 className="text-5xl font-bold mb-4 mt-4">
          Phạm Bùi Quốc Thắng
        </h1>
        <p className="text-lg max-w-2xl">
          Chào mừng bạn đến với trang CV cá nhân của tôi. Tại đây bạn
          có thể xem thông tin, dự án và kỹ năng của tôi.
        </p>
      </section>

      {/* Main Container */}
      <div className="p-6 max-w-4xl mx-auto space-y-4">

        {/* Giới thiệu */}
        <Section
          id="gioithieu"
          title="Giới thiệu"
          bgColor="bg-red-600"
          hoverShadow="hover:shadow-[0_0_25px_#FF6666]"
        >
          <p>
            Tôi là Phạm Bùi Quốc Thắng, sinh viên Trường Đại học Khoa học Tự nhiên
            – ĐHQG TP.HCM. Ngành Công Nghệ Vật Lý Điện tử Và Tin Học. Tôi luôn
            không ngừng học hỏi để trở thành lập trình viên giỏi.
          </p>
        </Section>

        {/* Học vấn */}
        <Section
          id="hocvan"
          title="TRÌNH ĐỘ HỌC VẤN"
          bgColor="bg-green-700"
          hoverShadow="hover:shadow-[0_0_25px_#66FF66]"
        >
          <div className="flex items-start gap-6 mb-4">
            <div className="flex-shrink-0 w-24 h-24 rounded-lg bg-hcmus-blue shadow-xl overflow-hidden">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5930dc9237c5817c00b10842/1607929454387-Z64LGZAMXVUKBRXCGC0X/35189853_2076230709311065_3947220011839389696_o.png?format=500w"
                alt="Logo HCMUS"
                className="w-full h-full object-cover p-2"
              />
            </div>

            <div className="flex-grow text-black">
              <p className="text-xl font-semibold">
                Đại học Khoa học Tự nhiên, ĐHQG-HCM
              </p>
              <p className="text-lg">Sinh viên năm 4</p>
              <p className="text-md">
                Chuyên ngành: Công nghệ Vật Lý Điện tử và Tin học
              </p>
              <p className="text-md">Dự kiến tốt nghiệp: Tháng 10/2026</p>
            </div>
          </div>
        </Section>

        {/* Kỹ năng */}
        <Section
          id="kynang"
          title="KỸ NĂNG"
          bgColor="bg-orange-500"
          hoverShadow="hover:shadow-[0_0_25px_#FFD580]"
        >
          <ul className="list-disc list-inside space-y-2 text-lg pl-4 text-black">
            <li>Khả năng làm việc nhóm tốt</li>
            <li>Kỹ năng phân tích, quản lý thời gian hiệu quả</li>
            <li>Sử dụng tốt Word, Excel</li>
            <li>
              Ngôn ngữ lập trình & công cụ:{" "}
              <span className="font-medium text-black">
                C++, Python, Proteus, Arduino, C
              </span>
            </li>
          </ul>
        </Section>

        {/* Đồ án — thêm watermark */}
        <Section
          id="duan"
          title="ĐỒ ÁN THAM GIA"
          bgColor="bg-purple-600"
          hoverShadow="hover:shadow-[0_0_25px_#D580FF]"
        >
          <div className="watermark-doan">
            <ul className="list-disc list-inside space-y-3 pl-4 text-lg text-black">
              <li>Python: Population.</li>
              <li>Xử lý tín hiệu lọc nhiễu âm thanh.</li>
              <li>Đánh giá chất lượng sản phẩm bằng Machine Learning.</li>
              <li>Lắp ráp mô hình cảm biến chuyển động radar.</li>
              <li>Ứng dụng mạch đếm số vào đồng hồ điện tử.</li>
            </ul>
          </div>
        </Section>

        {/* Pikachu API */}
        <Section
          id="pikachu"
          title="Pikachu API"
          bgColor="bg-blue-600"
          hoverShadow="hover:shadow-[0_0_25px_#66B2FF]"
        >
          <div id="pikachu-data" className="text-center"></div>
          <button
            id="toggle-shiny-button"
            className="mt-2 px-3 py-1 bg-yellow-500 text-black rounded"
          >
            Xem Shiny
          </button>
        </Section>

        {/* Tỷ giá */}
        <Section
          id="tygia"
          title="Tỷ giá USD → VND"
          bgColor="bg-red-500"
          hoverShadow="hover:shadow-[0_0_25px_#FF6666]"
        >
          <p id="current-rate-display" className="mb-2"></p>
          <div className="flex gap-2">
            <input
              id="usd-input"
              type="number"
              placeholder="USD"
              className="p-2 rounded border bg-gray-100 text-black"
            />
            <input
              id="vnd-input"
              type="text"
              placeholder="VND"
              readOnly
              className="p-2 rounded border bg-gray-100 text-black"
            />
          </div>
          <button
            id="refresh-rate-button"
            className="mt-2 px-3 py-1 bg-yellow-500 text-black rounded"
          >
            Làm mới
          </button>
        </Section>

        {/* Contact Form */}
        <Section
          id="contact"
          title="Liên hệ"
          bgColor="bg-green-600"
          hoverShadow="hover:shadow-[0_0_25px_#66FF66]"
        >
          <form id="contact-form" className="space-y-4 max-w-lg">
            <input
              id="name"
              type="text"
              placeholder="Tên của bạn"
              className="w-full p-3 rounded bg-gray-800 text-white"
            />
            <textarea
              id="message"
              placeholder="Nội dung"
              className="w-full p-3 rounded bg-gray-800 text-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 rounded text-white"
            >
              Gửi
            </button>
          </form>
          <p id="form-message" className="mt-4 hidden"></p>
        </Section>
      </div>

      <Footer />
      <ClientScripts />
    </div>
  );
}

// Section component
function Section({ id, title, children, bgColor = "bg-black", hoverShadow = "hover:shadow-[0_0_20px_#FFD700]" }) {
  return (
    <section
      id={id}
      className={`${bgColor} text-white rounded-lg p-6 shadow-md transition-all duration-300 ${hoverShadow} hover:scale-[1.02]`}
    >
      <h2 className="text-2xl font-semibold mb-2 flex justify-between items-center">{title}</h2>
      <div className="content-section">{children}</div>
    </section>
  );
}
