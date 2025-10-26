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
            <h1 className="text-2xl font-light bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              AHAOAI
            </h1>
            <div className="flex gap-6">
              <a href="#about" className="text-neutral-400 hover:text-neutral-200 transition-colors font-light">
                关于我
              </a>
              <a href="#doing" className="text-neutral-400 hover:text-neutral-200 transition-colors font-light">
                在做的事
              </a>
              <a href="#interests" className="text-neutral-400 hover:text-neutral-200 transition-colors font-light">
                兴趣爱好
              </a>
              <a href="#timeline" className="text-neutral-400 hover:text-neutral-200 transition-colors font-light">
                时间轴
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容区域 */}
      <main className="container mx-auto px-4 py-12">
        {/* 英雄区域 - 个人介绍 */}
        <section className="mb-20 text-center">
          <h2 className="text-6xl md:text-7xl font-light mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Hi, 我是阿豪
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto mb-4 font-light leading-relaxed">
            🧬 ENFJ ➡️ 本职是个产品，也点了运营、设计的技能树
          </p>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto mb-8 font-light leading-relaxed">
            🎐 经历数据产品到AI产品，希望能「做自己认同的产品 or 内容，改善一小撮人的生活」
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-neutral-400 text-base font-light">
            <span>💎 最近关注：AI｜主题写作｜知识管理｜个人规划</span>
            <span>📍 坐标：武汉</span>
            <span>🐮 力求多讲"人话"</span>
            <span>🙋 享受把事情完全想通、讲明白的感觉</span>
          </div>
          <button 
            onClick={() => {
              console.log('🚀 点击了"探索更多"按钮')
              setShowFull3D(true)
            }}
            className="mt-12 px-8 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-none font-light transition-all"
          >
            探索 3D 空间
          </button>
        </section>

        {/* 3D 演示区域 */}
        <section id="demo" className="mb-20">
          <SplineSceneBasic onClick={() => {
            console.log('🎨 点击了 3D 卡片')
            setShowFull3D(true)
          }} />
        </section>

        {/* 关于我区域 */}
        <section id="about" className="mb-20">
          <h3 className="text-4xl font-light text-center mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            关于我
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-black border-white/10 backdrop-blur-sm hover:border-white/20 transition-all">
              <CardHeader>
                <CardTitle className="text-neutral-200 font-light">💼 职业路径</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-neutral-400 font-light leading-relaxed">
                  从数据产品到 AI 产品，主业是 B 端产品经理，深耕供应链行业。经历让我理解数据驱动与智能化转型的全过程。
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-black border-white/10 backdrop-blur-sm hover:border-white/20 transition-all">
              <CardHeader>
                <CardTitle className="text-neutral-200 font-light">🎯 技能树</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-neutral-400 font-light leading-relaxed">
                  产品 + 运营 + 设计的复合能力。既能把握产品全局，也能深入细节打磨体验，还能用数据和运营思维驱动增长。
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-black border-white/10 backdrop-blur-sm hover:border-white/20 transition-all">
              <CardHeader>
                <CardTitle className="text-neutral-200 font-light">🌟 个人特质</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-neutral-400 font-light leading-relaxed">
                  ENFJ 性格，力求多讲"人话"，享受把复杂事情想通、讲明白的过程。相信输出是最好的输入。
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 在做的事区域 */}
        <section id="doing" className="mb-20">
          <Card className="bg-black border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-3xl font-light bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                在做的事
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3 items-start">
                <span className="text-white text-xl">—</span>
                <p className="text-neutral-300 text-lg font-light leading-relaxed">
                  <strong className="text-neutral-200">跟随 AI 时代浪潮</strong>，专注探索 AI 应用，参与 AI 开源社区贡献
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-white text-xl">—</span>
                <p className="text-neutral-300 text-lg font-light leading-relaxed">
                  <strong className="text-neutral-200">主业是 B 端产品经理</strong>，在做供应链行业
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-white text-xl">—</span>
                <p className="text-neutral-300 text-lg font-light leading-relaxed">
                  <strong className="text-neutral-200">面向自己的公开写作</strong>，Build in Public，吸引同路人
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-white text-xl">—</span>
                <p className="text-neutral-300 text-lg font-light leading-relaxed">
                  <strong className="text-neutral-200">持续发掘自我</strong>，探寻最适合我的事情
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 我的兴趣区域 */}
        <section id="interests" className="mb-20">
          <h3 className="text-4xl font-light text-center mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            我的兴趣
          </h3>
          
          {/* AI 与工具 */}
          <Card className="bg-black border-white/10 backdrop-blur-sm mb-6">
            <CardHeader>
              <CardTitle className="text-2xl font-light text-neutral-200">🤖 AI 与效率工具</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-neutral-300 font-light leading-relaxed">
                最近关注 AI 比较多，<strong className="text-neutral-200">AI Agent 应用、Prompt 工程</strong>都是我的关注项
              </p>
              <p className="text-neutral-300 font-light leading-relaxed">
                我是个<strong className="text-neutral-200">工具控</strong>，喜欢迭代自己的知识管理、效率工具
              </p>
              <p className="text-neutral-400 text-sm font-light leading-relaxed">
                广泛且深入地用过飞书、Notion、Obsidian、我来Wolai、OneNote、Bear、印象笔记等数十款工具，搭建过 PARA、LYT、常青笔记、GTD 等模式
              </p>
            </CardContent>
          </Card>

          {/* 生活兴趣 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-black border-white/10 backdrop-blur-sm hover:border-white/20 transition-all">
              <CardHeader>
                <CardTitle className="text-xl font-light text-neutral-200">🚲 骑车</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-neutral-400 font-light leading-relaxed">
                  山地转公路，目前最长骑过单日 100 公里
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-black border-white/10 backdrop-blur-sm hover:border-white/20 transition-all">
              <CardHeader>
                <CardTitle className="text-xl font-light text-neutral-200">🍳 烹饪</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-neutral-400 font-light leading-relaxed">
                  研究各种烧法的不同变化，掌握辣椒炒肉的 10 种炒法
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-black border-white/10 backdrop-blur-sm hover:border-white/20 transition-all">
              <CardHeader>
                <CardTitle className="text-xl font-light text-neutral-200">🎮 游戏</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-neutral-400 font-light leading-relaxed">
                  PS5、Xbox、Switch 全平台玩家，周五晚 9 点在打星际 2
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-black border-white/10 backdrop-blur-sm hover:border-white/20 transition-all">
              <CardHeader>
                <CardTitle className="text-xl font-light text-neutral-200">🏹 光弓</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-neutral-400 font-light leading-relaxed">
                  只能在 10 米收黄
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 我的价值观区域 */}
        <section className="mb-20">
          <h3 className="text-4xl font-light text-center mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            我的价值观
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {[
              '做自己认同的事',
              '终身学习，永远在成长的路上',
              '输出是最好的输入',
              'Build in Public，才能更好地吸引同路人',
              '多与有思考、真诚、共赢、有梦想的人碰撞',
              '永远坦诚，口碑是穿越周期的核心资产',
              '聚焦目标，就像新手专注于通关游戏，不要在意无效 judge',
              '有效的自我评判，是为了衡量成功率、反思下一步改进；而不是给自己施压'
            ].map((value, index) => (
              <div
                key={index}
                className="px-6 py-4 bg-black border border-white/10 hover:border-white/20 text-neutral-300 font-light transition-all flex items-center gap-3"
              >
                <span className="text-white">—</span>
                <span className="leading-relaxed">{value}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Timeline 演示区域 */}
      <section id="timeline" className="w-full">
        <TimelineDemo />
      </section>

      {/* 页脚 */}
      <footer className="border-t border-neutral-800 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8 text-center text-neutral-500">
          <p className="font-light">© 2025 AHAOAI. Build in Public.</p>
          <p className="mt-2 text-sm text-neutral-600 font-light">坐标武汉 · 产品 · AI 探索者</p>
        </div>
      </footer>
    </div>
  )
}

export default App
