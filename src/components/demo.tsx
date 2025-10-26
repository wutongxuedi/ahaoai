import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight-aceternity"

interface SplineSceneBasicProps {
  onClick?: () => void
}
 
export function SplineSceneBasic({ onClick }: SplineSceneBasicProps) {
  const handleClick = () => {
    console.log('✅ 3D 卡片被点击了！')
    onClick?.()
  }

  return (
    <Card 
      className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden group transition-all hover:shadow-2xl hover:shadow-white/10 hover:border-neutral-700"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      {/* 点击覆盖层 */}
      <div 
        className="absolute inset-0 z-50 cursor-pointer"
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      />
    
      <div className="flex h-full flex-col md:flex-row relative">
        {/* 左侧内容 */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 group-hover:scale-105 transition-transform">
            交互式 3D 体验
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            用精美的 3D 场景让您的界面焕发生机。创造身临其境的体验，
            吸引注意力并提升您的设计品质。
          </p>
          
          {/* 点击提示 */}
          <div className="mt-6 flex items-center gap-2 text-neutral-400 text-sm group-hover:text-neutral-200 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
            <span>点击卡片进入全屏体验</span>
          </div>
        </div>

        {/* 右侧内容 */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
      
      {/* 悬停效果遮罩 */}
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors pointer-events-none z-40" />
    </Card>
  )
}

