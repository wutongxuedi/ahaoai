import { useState } from 'react'
import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight-aceternity"

interface Full3DExperienceProps {
  onBack: () => void
}

export function Full3DExperience({ onBack }: Full3DExperienceProps) {
  console.log('🎨 Full3DExperience 组件已加载 - 黑白风格')
  const [showPrompt, setShowPrompt] = useState(false)
  
  const handleDownloadSource = () => {
    console.log('📥 开始下载源码...')
    // 创建一个提示信息
    alert('源码下载功能已触发！\n\n在实际部署中，这会触发项目源码的下载。\n当前为演示环境，源码位于：\n/Users/zouxihao/Documents/AI产品数字花园/【输出】程序/网站构建/')
  }
  
  const promptContent = `# 网站构建提示词

这个交互式 3D 网站是基于以下技术和组件构建的：

## 核心技术栈
- React 18 - 现代化的 UI 框架
- TypeScript - 类型安全的开发体验
- Vite - 快速的构建工具
- Tailwind CSS - 实用优先的 CSS 框架
- Spline - 交互式 3D 场景
- Framer Motion - 流畅的动画效果

## 设计理念
- 黑白极简风格
- 从 neutral-50 到 neutral-400 的渐变标题
- 中性灰色配色方案 (neutral-300/400/500)
- 半透明深灰色卡片 (bg-neutral-900/50)
- 流畅的交互动画和悬停效果

## 核心组件
- SplineScene - 3D 场景展示组件
- Spotlight - 聚光灯效果组件
- Card - 灵活的卡片容器
- Full3DExperience - 全屏沉浸式体验

## 交互功能
- 点击"开始探索"按钮进入全屏体验
- 点击 3D 演示卡片进入全屏体验
- 全屏页面左上角返回首页按钮
- 鼠标拖动旋转 3D 场景
- 滚轮缩放 3D 场景`
  
  return (
    <div className="min-h-screen w-full bg-black/[0.96] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      {/* 顶部操作栏 */}
      <div className="fixed top-8 left-8 right-8 z-50 flex items-center justify-between">
        {/* 返回按钮 */}
        <button 
          onClick={onBack}
          className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-lg text-white font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          返回首页
        </button>

        {/* 右侧功能按钮组 */}
        <div className="flex items-center gap-3">
          {/* 查看提示词按钮 */}
          <button 
            onClick={() => setShowPrompt(true)}
            className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-lg text-white font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            查看提示词
          </button>

          {/* 下载源码按钮 */}
          <button 
            onClick={handleDownloadSource}
            className="px-6 py-3 bg-neutral-100 hover:bg-white text-black font-semibold rounded-lg transition-all transform hover:scale-105 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            下载源码
          </button>
        </div>
      </div>

      {/* 提示词弹窗 */}
      {showPrompt && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={() => setShowPrompt(false)}
        >
          <div 
            className="bg-neutral-900 border border-neutral-700 rounded-xl max-w-3xl w-full max-h-[80vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 弹窗头部 */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-800">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                网站构建提示词
              </h3>
              <button 
                onClick={() => setShowPrompt(false)}
                className="text-neutral-400 hover:text-neutral-200 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* 弹窗内容 */}
            <div className="p-6 overflow-y-auto max-h-[calc(80vh-100px)]">
              <pre className="text-neutral-300 whitespace-pre-wrap font-mono text-sm leading-relaxed">
{promptContent}
              </pre>
            </div>

            {/* 弹窗底部 */}
            <div className="p-6 border-t border-neutral-800 flex justify-end gap-3">
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(promptContent)
                  alert('提示词已复制到剪贴板！')
                }}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all"
              >
                复制内容
              </button>
              <button 
                onClick={() => setShowPrompt(false)}
                className="px-4 py-2 bg-neutral-100 hover:bg-white text-black rounded-lg transition-all"
              >
                关闭
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 主要内容区域 */}
      <div className="flex h-screen w-full flex-col md:flex-row">
        {/* 左侧内容 */}
        <div className="flex-1 p-8 md:p-16 relative z-10 flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-8">
            交互式 3D 体验
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-lg mb-12 leading-relaxed">
            用精美的 3D 场景让您的界面焕发生机。创造身临其境的体验，
            吸引注意力并提升您的设计品质。探索无限可能，将您的创意变为现实。
          </p>
          
          {/* 特性列表 */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-neutral-300">
              <div className="w-2 h-2 rounded-full bg-neutral-400"></div>
              <span>实时 3D 渲染</span>
            </div>
            <div className="flex items-center gap-3 text-neutral-300">
              <div className="w-2 h-2 rounded-full bg-neutral-400"></div>
              <span>流畅的交互体验</span>
            </div>
            <div className="flex items-center gap-3 text-neutral-300">
              <div className="w-2 h-2 rounded-full bg-neutral-400"></div>
              <span>现代化的视觉设计</span>
            </div>
          </div>

          {/* 操作提示 */}
          <div className="border-l-2 border-neutral-700 pl-4 text-sm text-neutral-400">
            <p className="font-semibold text-neutral-300 mb-2">💡 操作提示</p>
            <p>🖱️ 拖动旋转 | 🔍 滚轮缩放 | 👆 点击交互</p>
          </div>
        </div>

        {/* 右侧 3D 场景 */}
        <div className="flex-1 relative min-h-[400px] md:min-h-0">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}

