/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    // 可以添加其他HTML文件路径
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1', // 主色调：靛蓝色
        secondary: '#f59e0b', // 辅助色：琥珀色
        neutral: {
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          800: '#1f2937',
          900: '#111827'
        }
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'shake': 'shake 0.5s ease-in-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%, 60%': { transform: 'translateX(-5px)' },
          '40%, 80%': { transform: 'translateX(5px)' }
        }
      }
    },
  },
  plugins: [],
}