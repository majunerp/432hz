# 432 Hz Sound Generator | 432 Hz 音频生成器

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)](https://tailwindcss.com/)

🌐 **Live Site**: [432-hz.org](https://432-hz.org)

A free, privacy-first online platform for generating and downloading 432 Hz healing frequency audio. Built with Next.js 16, React 19, and modern web technologies.

一个免费的、隐私优先的在线平台，用于生成和下载 432 Hz 疗愈频率音频。基于 Next.js 16、React 19 和现代 Web 技术构建。

---

## ✨ Features | 功能特性

### Core Features | 核心功能
- 🎵 **Pure 432 Hz Generation** - Scientifically accurate 432 Hz sine wave tones using Web Audio API
- 🎧 **Binaural Beats** - Create 432 Hz binaural beats with Delta, Theta, Alpha, or Beta frequencies
- 🎛️ **Multiple Waveforms** - Sine, Square, Triangle, and Sawtooth waveforms
- ⏱️ **Custom Duration** - Generate audio from 5 to 60 minutes
- 💾 **High-Quality Export** - Download in WAV (24-bit, 48kHz) or MP3 (320kbps) formats
- 🔒 **Privacy First** - No registration required, all processing happens client-side
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- 🌓 **Dark Mode** - Automatic dark/light theme switching

### 核心功能
- 🎵 **纯净 432 Hz 生成** - 使用 Web Audio API 生成科学精确的 432 Hz 正弦波音调
- 🎧 **双耳节拍** - 创建 432 Hz 双耳节拍，支持 Delta、Theta、Alpha 或 Beta 频率
- 🎛️ **多种波形** - 正弦波、方波、三角波和锯齿波
- ⏱️ **自定义时长** - 生成 5 到 60 分钟的音频
- 💾 **高质量导出** - 支持 WAV（24-bit, 48kHz）或 MP3（320kbps）格式下载
- 🔒 **隐私优先** - 无需注册，所有处理均在客户端进行
- 📱 **响应式设计** - 为桌面、平板和移动设备优化
- 🌓 **暗色模式** - 自动深色/浅色主题切换

---

## 🚀 Tech Stack | 技术栈

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library**: [React 19.2.0](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Audio Processing**: Web Audio API
- **Fonts**: [Geist Sans & Geist Mono](https://vercel.com/font)

---

## 📦 Getting Started | 快速开始

### Prerequisites | 前置要求

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation | 安装

```bash
# Clone the repository | 克隆仓库
git clone https://github.com/yourusername/432hz.git
cd 432hz

# Install dependencies | 安装依赖
npm install

# Run development server | 运行开发服务器
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

打开 [http://localhost:3000](http://localhost:3000) 查看应用。

### Available Scripts | 可用脚本

```bash
npm run dev      # Start development server | 启动开发服务器
npm run build    # Build for production | 构建生产版本
npm run start    # Start production server | 启动生产服务器
npm run lint     # Run ESLint | 运行 ESLint
```

---

## 📁 Project Structure | 项目结构

```
432hz/
├── app/
│   ├── layout.tsx           # Root layout | 根布局
│   ├── page.tsx             # Home page | 首页
│   ├── about/               # About 432 Hz page | 关于 432 Hz 页面
│   ├── faq/                 # FAQ page | 常见问题页面
│   └── globals.css          # Global styles | 全局样式
├── components/
│   ├── AudioGenerator.tsx   # Main audio generator | 主音频生成器
│   ├── WaveformSelector.tsx # Waveform type selector | 波形选择器
│   └── DownloadButton.tsx   # Download controls | 下载控件
├── lib/
│   ├── audioEngine.ts       # Web Audio API wrapper | Web Audio API 封装
│   └── audioExport.ts       # Audio export utilities | 音频导出工具
├── types/
│   └── audio.ts             # TypeScript type definitions | TypeScript 类型定义
└── public/
    ├── robots.txt           # SEO robots file | SEO robots 文件
    └── sitemap.xml          # SEO sitemap | SEO 站点地图
```

---

## 🎯 What is 432 Hz? | 什么是 432 Hz？

432 Hz is an alternative tuning frequency to the standard 440 Hz. Proponents claim that 432 Hz is more harmonious and natural, aligning with mathematical patterns found in nature. The platform allows users to:

432 Hz 是标准 440 Hz 的替代调音频率。支持者声称 432 Hz 更加和谐自然，与自然界中的数学模式一致。本平台允许用户：

- Generate pure 432 Hz tones for meditation and relaxation
- Create binaural beats for brainwave entrainment
- Download high-quality audio files for personal use
- Learn about the science and claims surrounding 432 Hz

- 为冥想和放松生成纯净的 432 Hz 音调
- 创建双耳节拍以进行脑波调节
- 下载高质量音频文件供个人使用
- 了解有关 432 Hz 的科学知识和相关声明

**Disclaimer**: While many users report subjective benefits, scientific evidence for specific therapeutic effects of 432 Hz is limited. This platform does not provide medical advice.

**免责声明**：虽然许多用户报告了主观益处，但关于 432 Hz 特定治疗效果的科学证据有限。本平台不提供医疗建议。

---

## 🛠️ Development | 开发

### Key Technologies | 核心技术

- **Web Audio API**: Client-side audio generation and processing
- **TypeScript**: Type-safe code with strict mode enabled
- **Tailwind CSS 4**: Modern utility-first styling
- **Next.js App Router**: Server and client components

### Audio Processing | 音频处理

The audio generation uses the Web Audio API for precise 432 Hz tone generation:

```typescript
const audioContext = new AudioContext();
const oscillator = audioContext.createOscillator();
oscillator.frequency.value = 432; // Hz
oscillator.type = 'sine';
oscillator.connect(audioContext.destination);
```

---

## 📈 Roadmap | 路线图

- [x] Core 432 Hz audio generator
- [x] Multiple waveform types
- [x] Binaural beats functionality
- [x] WAV and MP3 export
- [x] Dark mode support
- [ ] FLAC format support
- [ ] Audio effects (reverb, filters)
- [ ] Preset library
- [ ] Multi-language support
- [ ] Mobile app (React Native)

---

## 🤝 Contributing | 贡献

Contributions are welcome! Please feel free to submit a Pull Request.

欢迎贡献！请随时提交 Pull Request。

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License | 许可证

This project is open source and available under the [MIT License](LICENSE).

本项目是开源的，采用 [MIT 许可证](LICENSE)。

---

## 🙏 Acknowledgments | 致谢

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Hosted on [Vercel](https://vercel.com/)

---

## 📧 Contact | 联系方式

For questions, suggestions, or feedback:

如有问题、建议或反馈：

- Website: [432-hz.org](https://432-hz.org)
- Issues: [GitHub Issues](https://github.com/yourusername/432hz/issues)

---

**Made with ❤️ for the sound healing community**
