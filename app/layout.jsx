// file layout.jsx
import "./index.css";

export const metadata = {
  title: "Trang Web Cá Nhân - Phạm Bùi Quốc Thắng",
  description: "CV & Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        {/* Tailwind CDN & Google Font */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      'primary': '#3b82f6',
                      'secondary': '#10b981',
                      'poke-yellow': '#fcd3d9',
                      'currency-green': '#34d399',
                      'hcmus-blue': '#1e40af'
                    },
                    fontFamily: {
                      sans: ['Inter', 'sans-serif']
                    }
                  }
                }
              }
            `,
          }}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="bg-[#F5F3E7] text-gray-800 dark:bg-[#0f0f23] dark:text-gray-200 font-sans transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
