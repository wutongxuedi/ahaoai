import { useState } from 'react'
import { SplineSceneBasic } from './components/demo'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Full3DExperience } from './components/Full3DExperience'
import { TimelineDemo } from './components/TimelineDemo'

function App() {
  const [showFull3D, setShowFull3D] = useState(false)

  // 如果显示全屏 3D 体验，则渲染该组件
  if (showFull3D) {
    return <Full3DExperience onBack={() => setShowFull3D(false)} />
  }

  return (
    <div className="min-h-screen bg-black">
      {/* 头部导航 */}
      <nav className="border-b border-neutral-800 backdrop-blur-sm bg-black/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              交互式 3D 网站
            </h1>
            <div className="flex gap-6">
              <a href="#features" className="text-neutral-400 hover:text-neutral-200 transition-colors">
                功能特性
              </a>
              <a href="#demo" className="text-neutral-400 hover:text-neutral-200 transition-colors">
                演示
              </a>
              <a href="#about" className="text-neutral-400 hover:text-neutral-200 transition-colors">
                关于
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容区域 */}
      <main className="container mx-auto px-4 py-12">
        {/* 英雄区域 */}
        <section className="mb-20 text-center">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            欢迎来到未来
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-8">
            探索交互式 3D 体验的无限可能，将您的网站提升到一个全新的维度
          </p>
          <button 
            onClick={() => {
              console.log('🚀 点击了"开始探索"按钮')
              setShowFull3D(true)
            }}
            className="px-8 py-3 bg-neutral-100 hover:bg-white text-black rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            开始探索
          </button>
        </section>

        {/* 3D 演示区域 */}
        <section id="demo" className="mb-20">
          <SplineSceneBasic onClick={() => {
            console.log('🎨 点击了 3D 卡片')
            setShowFull3D(true)
          }} />
        </section>

        {/* 功能特性区域 */}
        <section id="features" className="mb-20">
          <h3 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            核心功能
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-neutral-900/50 border-neutral-800 backdrop-blur-sm hover:bg-neutral-900/70 transition-all">
              <CardHeader>
                <CardTitle className="text-neutral-200">精美设计</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-neutral-400">
                  使用现代化的 UI 组件和流畅的动画效果，打造令人印象深刻的视觉体验。
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-neutral-900/50 border-neutral-800 backdrop-blur-sm hover:bg-neutral-900/70 transition-all">
              <CardHeader>
                <CardTitle className="text-neutral-200">高性能</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-neutral-400">
                  基于 React 和 Vite 构建，确保快速的加载速度和流畅的交互体验。
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-neutral-900/50 border-neutral-800 backdrop-blur-sm hover:bg-neutral-900/70 transition-all">
              <CardHeader>
                <CardTitle className="text-neutral-200">易于集成</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-neutral-400">
                  模块化的组件设计，让您可以轻松地将 3D 效果集成到任何项目中。
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 关于区域 */}
        <section id="about" className="mb-20">
          <Card className="bg-neutral-900/50 border-neutral-800 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">关于这个项目</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-300 text-lg leading-relaxed mb-4">
                这是一个展示如何将交互式 3D 场景集成到现代 Web 应用中的示例项目。
                我们使用了 Spline、React、TypeScript 和 Tailwind CSS 等前沿技术。
              </p>
              <p className="text-neutral-300 text-lg leading-relaxed">
                通过这个项目，您可以学习如何创建具有视觉冲击力的网站，
                并了解如何将复杂的 3D 效果与简洁的代码结构相结合。
              </p>
            </CardContent>
          </Card>
        </section>

        {/* 技术栈区域 */}
        <section className="mb-20">
          <h3 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            技术栈
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Spline', 'Framer Motion'].map((tech) => (
              <div
                key={tech}
                className="px-6 py-3 bg-neutral-900/50 border border-neutral-800 rounded-full text-neutral-300 hover:bg-neutral-800/50 transition-all cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Timeline 演示区域 */}
      <section className="w-full">
        <TimelineDemo />
      </section>

      {/* 页脚 */}
      <footer className="border-t border-neutral-800 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8 text-center text-neutral-500">
          <p>© 2025 交互式 3D 网站。保留所有权利。</p>
          <p className="mt-2 text-sm text-neutral-600">使用 React、TypeScript 和 Spline 构建</p>
        </div>
      </footer>
    </div>
  )
}

export default App

