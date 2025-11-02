import { Timeline } from "./ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <p className="text-neutral-300 text-base md:text-lg font-light mb-4 leading-relaxed">
            <strong className="text-neutral-200">在顺丰科技转型 AI 产品经理</strong>
          </p>
          <p className="text-neutral-400 text-sm md:text-base font-light mb-6 leading-relaxed">
            负责落地仓库出库 AI Agent，通过智能决策系统优化出库流程，提升仓储效率。探索 AI 在物流场景的深度应用，推动供应链智能化升级。
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/timeline/2025-1.jpg"
              alt="AI Agent"
              className="rounded-lg w-full object-cover h-48 border border-white/10"
            />
            <img
              src="/images/timeline/2025-2.jpg"
              alt="智能仓储"
              className="rounded-lg w-full object-cover h-48 border border-white/10"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-300 text-base md:text-lg font-light mb-4 leading-relaxed">
            <strong className="text-neutral-200">在顺丰科技供应链做策略产品经理</strong>
          </p>
          <p className="text-neutral-400 text-sm md:text-base font-light mb-4 leading-relaxed">
            主导供应链策略产品设计，通过数据驱动优化物流决策。项目获得<strong className="text-neutral-200">中物联智能供应链平台二等奖</strong>，为行业数字化转型提供了创新解决方案。
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/timeline/2024-1.jpg"
              alt="供应链数据分析"
              className="rounded-lg w-full object-cover h-48 border border-white/10"
            />
            <img
              src="/images/timeline/2024-2.jpg"
              alt="策略规划"
              className="rounded-lg w-full object-cover h-48 border border-white/10"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-300 text-base md:text-lg font-light mb-4 leading-relaxed">
            <strong className="text-neutral-200">在小米数据中台做数据产品经理</strong>
          </p>
          <p className="text-neutral-400 text-sm md:text-base font-light mb-4 leading-relaxed">
            深耕数据产品，获得<strong className="text-neutral-200">集团数据治理一等奖</strong>。主导开发数据机器人、代码补全工具等创新产品，显著提升研发效率，为公司数据化转型奠定基础。
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/timeline/2022-1.jpg"
              alt="数据分析"
              className="rounded-lg w-full object-cover h-48 border border-white/10"
            />
            <img
              src="/images/timeline/2022-2.jpg"
              alt="数据可视化"
              className="rounded-lg w-full object-cover h-48 border border-white/10"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="text-neutral-300 text-base md:text-lg font-light mb-4 leading-relaxed">
            <strong className="text-neutral-200">在小米小爱同学做 AI 产品经理</strong>
          </p>
          <p className="text-neutral-400 text-sm md:text-base font-light mb-6 leading-relaxed">
            系统学习并实践 AI 产品全流程方法论，从需求分析、模型训练到产品落地。深入理解语音交互、自然语言处理等核心技术，为后续 AI 产品工作打下扎实基础。
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/timeline/2021-1.jpg"
              alt="AI语音助手"
              className="rounded-lg w-full object-cover h-48 border border-white/10"
            />
            <img
              src="/images/timeline/2021-2.jpg"
              alt="智能交互"
              className="rounded-lg w-full object-cover h-48 border border-white/10"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <p className="text-neutral-300 text-base md:text-lg font-light mb-4 leading-relaxed">
            <strong className="text-neutral-200">在腾讯短视频产品部做产品运营</strong>
          </p>
          <p className="text-neutral-400 text-sm md:text-base font-light mb-6 leading-relaxed">
            职业生涯的起点，在腾讯这个大平台培养了最初的产品感。从用户运营到数据分析，从内容策划到增长优化，全方位锻炼产品思维，为转型产品经理奠定基础。
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/timeline/2020-1.jpg"
              alt="短视频制作"
              className="rounded-lg w-full object-cover h-48 border border-white/10"
            />
            <img
              src="/images/timeline/2020-2.jpg"
              alt="内容运营"
              className="rounded-lg w-full object-cover h-48 border border-white/10"
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

