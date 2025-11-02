import { SplineSceneBasic } from './components/demo'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { TimelineDemo } from './components/TimelineDemo'

function App() {
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
              <a href="#values" className="text-neutral-400 hover:text-neutral-200 transition-colors font-light">
                我的价值观
              </a>
              <a href="#timeline" className="text-neutral-400 hover:text-neutral-200 transition-colors font-light">
                时间轴
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 3D 演示区域 - 占满全宽 */}
      <section id="demo" className="w-full">
        <SplineSceneBasic />
      </section>

      {/* 主要内容区域 */}
      <main className="container mx-auto px-4 py-12">
        {/* 关于我区域 */}
        <section id="about" className="mb-20">
          <h3 className="text-4xl font-light text-center mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            关于我
          </h3>
          
          {/* 爱好 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-black border-white/10 backdrop-blur-sm hover:border-white/20 transition-all">
              <CardHeader>
                <CardTitle className="text-xl font-light text-neutral-200">📷 摄影</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-neutral-400 font-light leading-relaxed">
                  视觉中国认证摄影师；拍过5万张照片；拿过三次摄影赛奖；目前是富士粉
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-black border-white/10 backdrop-blur-sm hover:border-white/20 transition-all">
              <CardHeader>
                <CardTitle className="text-xl font-light text-neutral-200">🎸 音乐</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-neutral-400 font-light leading-relaxed">
                  民谣吉他手；大学组过乐队，拿过十佳歌手；最近业余学流行钢琴
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-black border-white/10 backdrop-blur-sm hover:border-white/20 transition-all">
              <CardHeader>
                <CardTitle className="text-xl font-light text-neutral-200">💒 家乡</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-neutral-400 font-light leading-relaxed">
                  江西吉安
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-black border-white/10 backdrop-blur-sm hover:border-white/20 transition-all">
              <CardHeader>
                <CardTitle className="text-xl font-light text-neutral-200">🏰 学校</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-neutral-400 font-light leading-relaxed">
                  武汉大学
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* 人设标签 */}
          <Card className="bg-black border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-light text-neutral-200">🚩 人设标签</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {[
                  '纪实摄影',
                  '航拍达人',
                  '乐队吉他手',
                  '业余乒乓球',
                  '羽毛球',
                  '篮球',
                  '居家好男人'
                ].map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/5 border border-white/10 hover:border-white/20 text-neutral-300 text-sm font-light rounded-full transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 我的价值观区域 */}
        <section id="values" className="mb-20">
          <h3 className="text-4xl font-light text-center mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            我的价值观
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                className="px-6 py-4 bg-black border border-white/10 hover:border-white/20 text-neutral-300 font-light transition-all"
              >
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

      {/* 关注我区域 */}
      <section className="w-full bg-black py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-light text-center mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            关注我
          </h3>
          <p className="text-center text-neutral-400 mb-12 font-light">
            欢迎通过以下方式与我交流
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* 小红书二维码 */}
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-lg mb-4 border border-white/10">
                <img
                  src="/images/qrcode/xiaohongshu.jpg"
                  alt="小红书二维码"
                  className="w-48 h-48 object-contain"
                />
              </div>
              <p className="text-neutral-300 text-lg font-light">扫码关注小红书</p>
              <p className="text-neutral-500 text-sm font-light mt-1">分享产品与AI干货</p>
            </div>

            {/* 微信公众号二维码 */}
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-lg mb-4 border border-white/10">
                <img
                  src="/images/qrcode/wechat.jpg"
                  alt="微信公众号二维码"
                  className="w-48 h-48 object-contain"
                />
              </div>
              <p className="text-neutral-300 text-lg font-light">扫码关注公众号</p>
              <p className="text-neutral-500 text-sm font-light mt-1">获取深度文章推送</p>
            </div>
          </div>
        </div>
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
