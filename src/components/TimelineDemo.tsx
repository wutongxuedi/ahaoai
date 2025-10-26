import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024-现在",
      content: (
        <div>
          <p className="text-neutral-300 text-xs md:text-sm font-light mb-8 leading-relaxed">
            深度探索 AI 时代，专注 AI Agent 应用与 Prompt 工程。积极参与开源社区，Build in Public 吸引同路人。
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=500&fit=crop"
              alt="AI 探索"
              className="rounded-none object-cover h-20 md:h-44 lg:h-60 w-full border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
            />
            <img
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&h=500&fit=crop"
              alt="代码与AI"
              className="rounded-none object-cover h-20 md:h-44 lg:h-60 w-full border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
            />
            <img
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&h=500&fit=crop"
              alt="写作输出"
              className="rounded-none object-cover h-20 md:h-44 lg:h-60 w-full border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
            />
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=500&fit=crop"
              alt="知识管理"
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
            从数据产品转向 AI 产品，在供应链领域深耕 B 端产品设计。持续迭代知识管理体系，探索最适合自己的工作流。
          </p>
          <p className="text-neutral-300 text-xs md:text-sm font-light mb-8 leading-relaxed">
            开始面向自己的公开写作，享受把事情完全想通、讲明白的感觉。
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=500&fit=crop"
              alt="数据分析"
              className="rounded-none object-cover h-20 md:h-44 lg:h-60 w-full border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
            />
            <img
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=500&fit=crop"
              alt="产品工作"
              className="rounded-none object-cover h-20 md:h-44 lg:h-60 w-full border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
            />
            <img
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&h=500&fit=crop"
              alt="笔记系统"
              className="rounded-none object-cover h-20 md:h-44 lg:h-60 w-full border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
            />
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop"
              alt="技术探索"
              className="rounded-none object-cover h-20 md:h-44 lg:h-60 w-full border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      ),
    },
    {
      title: "成长轨迹",
      content: (
        <div>
          <p className="text-neutral-300 text-xs md:text-sm font-light mb-4 leading-relaxed">
            终身学习，永远在成长的路上。从工具控到输出者，从独自探索到 Build in Public。
          </p>
          <div className="mb-8 space-y-3">
            <div className="flex gap-3 items-center text-neutral-400 text-xs md:text-sm font-light">
              <span className="text-white">—</span> 掌握多款知识管理工具（Notion、Obsidian、飞书等）
            </div>
            <div className="flex gap-3 items-center text-neutral-400 text-xs md:text-sm font-light">
              <span className="text-white">—</span> 搭建 PARA、LYT、常青笔记、GTD 等知识体系
            </div>
            <div className="flex gap-3 items-center text-neutral-400 text-xs md:text-sm font-light">
              <span className="text-white">—</span> 骑行单日最长 100 公里
            </div>
            <div className="flex gap-3 items-center text-neutral-400 text-xs md:text-sm font-light">
              <span className="text-white">—</span> PS5、Xbox、Switch 全平台游戏玩家
            </div>
            <div className="flex gap-3 items-center text-neutral-400 text-xs md:text-sm font-light">
              <span className="text-white">—</span> 辣椒炒肉的 10 种炒法研究者
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500&h=500&fit=crop"
              alt="骑行"
              className="rounded-none object-cover h-20 md:h-44 lg:h-60 w-full border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
            />
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500&h=500&fit=crop"
              alt="烹饪"
              className="rounded-none object-cover h-20 md:h-44 lg:h-60 w-full border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
            />
            <img
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&h=500&fit=crop"
              alt="游戏"
              className="rounded-none object-cover h-20 md:h-44 lg:h-60 w-full border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
            />
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&h=500&fit=crop"
              alt="武汉"
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
