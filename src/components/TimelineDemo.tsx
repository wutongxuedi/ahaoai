import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-300 text-xs md:text-sm font-light mb-8 leading-relaxed">
            全新启航，开启数字化转型新篇章。整合创新技术，打造极致用户体验。
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=500&fit=crop"
              alt="数据分析"
              className="rounded-none object-cover h-20 md:h-44 lg:h-60 w-full border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
            />
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=500&fit=crop"
              alt="编码工作"
              className="rounded-none object-cover h-20 md:h-44 lg:h-60 w-full border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
            />
            <img
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=500&fit=crop"
              alt="团队协作"
              className="rounded-none object-cover h-20 md:h-44 lg:h-60 w-full border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
            />
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=500&fit=crop"
              alt="业务洽谈"
              className="rounded-none object-cover h-20 md:h-44 lg:h-60 w-full border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-300 text-xs md:text-sm font-light mb-8 leading-relaxed">
            夯实基础，专注核心能力建设。深耕技术，追求卓越品质。
          </p>
          <p className="text-neutral-300 text-xs md:text-sm font-light mb-8 leading-relaxed">
            每一次迭代都是向更好体验的探索，每一个细节都承载着对极致的追求。
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&h=500&fit=crop"
              alt="设计界面"
              className="rounded-none object-cover h-20 md:h-44 lg:h-60 w-full border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
            />
            <img
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500&h=500&fit=crop"
              alt="功能开发"
              className="rounded-none object-cover h-20 md:h-44 lg:h-60 w-full border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
            />
            <img
              src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500&h=500&fit=crop"
              alt="创意设计"
              className="rounded-none object-cover h-20 md:h-44 lg:h-60 w-full border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
            />
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=500&fit=crop"
              alt="产品迭代"
              className="rounded-none object-cover h-20 md:h-44 lg:h-60 w-full border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-300 text-xs md:text-sm font-light mb-4 leading-relaxed">
            持续创新，不断突破。完成多项重要里程碑。
          </p>
          <div className="mb-8 space-y-3">
            <div className="flex gap-3 items-center text-neutral-400 text-xs md:text-sm font-light">
              <span className="text-white">—</span> 完成核心架构升级
            </div>
            <div className="flex gap-3 items-center text-neutral-400 text-xs md:text-sm font-light">
              <span className="text-white">—</span> 发布全新设计系统
            </div>
            <div className="flex gap-3 items-center text-neutral-400 text-xs md:text-sm font-light">
              <span className="text-white">—</span> 优化用户体验流程
            </div>
            <div className="flex gap-3 items-center text-neutral-400 text-xs md:text-sm font-light">
              <span className="text-white">—</span> 构建组件库生态
            </div>
            <div className="flex gap-3 items-center text-neutral-400 text-xs md:text-sm font-light">
              <span className="text-white">—</span> 实现性能优化目标
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop"
              alt="技术开发"
              className="rounded-none object-cover h-20 md:h-44 lg:h-60 w-full border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
            />
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=500&fit=crop"
              alt="设计工作"
              className="rounded-none object-cover h-20 md:h-44 lg:h-60 w-full border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
            />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
              alt="团队成员"
              className="rounded-none object-cover h-20 md:h-44 lg:h-60 w-full border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
            />
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop"
              alt="工作环境"
              className="rounded-none object-cover h-20 md:h-44 lg:h-60 w-full border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

