# 交互式 3D 网站

一个展示如何将交互式 3D 场景集成到现代 Web 应用中的示例项目。

## 技术栈

- **React 18** - 用于构建用户界面
- **TypeScript** - 提供类型安全
- **Vite** - 快速的构建工具
- **Tailwind CSS** - 实用优先的 CSS 框架
- **Spline** - 交互式 3D 场景
- **Framer Motion** - 流畅的动画效果

## 功能特性

- ✨ 交互式 3D 场景展示
- 📜 **滚动式时间轴组件** (Timeline) - 新增！
- 🎨 现代化的渐变和动画效果
- 📱 完全响应式设计
- ⚡ 优化的性能和快速加载
- 🎯 模块化的组件架构
- 🌗 支持深色主题

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 `http://localhost:5173` 查看网站。

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 项目结构

```
网站构建/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── card.tsx          # Card 组件
│   │   │   ├── timeline.tsx      # Timeline 时间轴组件 ⭐ 新增
│   │   │   ├── splite.tsx        # Spline 场景组件
│   │   │   ├── spotlight-aceternity.tsx  # 聚光灯效果（静态）
│   │   │   └── spotlight-ibelick.tsx     # 聚光灯效果（交互式）
│   │   ├── TimelineDemo.tsx      # Timeline 演示组件 ⭐ 新增
│   │   └── demo.tsx              # 3D 场景演示组件
│   ├── lib/
│   │   └── utils.ts              # 工具函数
│   ├── App.tsx                   # 主应用组件
│   ├── main.tsx                  # 应用入口
│   └── index.css                 # 全局样式
├── index.html                    # HTML 模板
├── package.json                  # 项目依赖
├── tsconfig.json                 # TypeScript 配置
├── tailwind.config.js            # Tailwind 配置
├── vite.config.ts                # Vite 配置
├── TIMELINE_QUICK_START.md       # Timeline 快速开始 ⭐ 新增
├── TIMELINE_INTEGRATION_GUIDE.md # Timeline 完整指南 ⭐ 新增
├── INTEGRATION_SUMMARY.md        # 集成总结 ⭐ 新增
└── README.md                     # 项目文档
```

## 组件说明

### Timeline ⭐ 新增

现代化的滚动式时间轴组件，支持：
- 📜 基于滚动的动画效果
- 📱 完全响应式布局
- 🌙 深色模式支持
- 🎨 可自定义内容和样式

```tsx
import { Timeline } from "@/components/ui/timeline";

const data = [
  {
    title: "2024",
    content: <div>Your content here...</div>
  }
];

<Timeline data={data} />
```

**快速开始**: 查看 [`TIMELINE_QUICK_START.md`](./TIMELINE_QUICK_START.md)  
**完整文档**: 查看 [`TIMELINE_INTEGRATION_GUIDE.md`](./TIMELINE_INTEGRATION_GUIDE.md)

### SplineScene

用于嵌入 Spline 3D 场景的组件。

```tsx
<SplineScene 
  scene="https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode"
  className="w-full h-full"
/>
```

### Spotlight

两种聚光灯效果组件：
- `Spotlight` (aceternity) - 静态 SVG 聚光灯效果
- `SpotlightInteractive` (ibelick) - 跟随鼠标的交互式聚光灯

### Card

灵活的卡片组件，支持多种子组件：
- `CardHeader` - 卡片头部
- `CardTitle` - 卡片标题
- `CardDescription` - 卡片描述
- `CardContent` - 卡片内容
- `CardFooter` - 卡片底部

## 自定义

### 更换 3D 场景

1. 访问 [Spline](https://spline.design/) 创建或选择一个 3D 场景
2. 导出场景并获取场景 URL
3. 在 `src/components/demo.tsx` 中替换 `scene` 属性的值

### 修改主题颜色

在 `src/index.css` 中的 `:root` 和 `.dark` 选择器中修改 CSS 变量。

### 调整布局

主要布局在 `src/App.tsx` 中定义，您可以根据需要调整各个部分。

## 部署

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# 将 dist 文件夹拖到 Netlify
```

### GitHub Pages

1. 修改 `vite.config.ts`，添加 `base: '/仓库名/'`
2. 运行 `npm run build`
3. 部署 `dist` 文件夹到 GitHub Pages

## 许可证

MIT License

## 联系方式

如有问题或建议，欢迎提出 Issue 或 Pull Request。

