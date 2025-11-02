import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight-aceternity"

export function SplineSceneBasic() {
  return (
    <div 
      className="w-full h-[600px] md:h-[700px] bg-black relative overflow-hidden"
      style={{ border: 'none', borderRadius: 0, boxShadow: 'none', outline: 'none' }}
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex h-full flex-col md:flex-row relative">
        {/* 左侧内容 */}
        <div className="flex-1 p-8 md:p-16 relative z-10 flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-light mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Hi, 我是阿豪
          </h1>
          <div className="space-y-4 text-neutral-300 text-lg font-light leading-relaxed">
            <p>🧬 ENFJ ➡️ 本职是个产品，也点了运营、设计的技能树</p>
            <p>🎐 经历数据产品到AI产品，希望能「做自己认同的产品 or 内容，改善一小撮人的生活」</p>
            <p>💎 最近关注：AI｜主题写作｜知识管理｜个人规划</p>
            <p>📍 坐标：武汉</p>
            <p>🐮 力求多讲"人话"</p>
            <p>🙋 享受把事情完全想通、讲明白的感觉</p>
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
    </div>
  )
}

