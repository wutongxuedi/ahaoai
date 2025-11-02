import { Link } from 'react-router-dom'

export default function MyProducts() {
  return (
    <div className="min-h-screen bg-black">
      {/* 头部导航 */}
      <nav className="border-b border-neutral-800 backdrop-blur-sm bg-black/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-light bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 hover:opacity-80 transition-opacity">
              AHAOAI
            </Link>
            <Link to="/" className="text-neutral-400 hover:text-neutral-200 transition-colors font-light">
              返回首页
            </Link>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-light text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            我在做的产品
          </h1>
          
          <div className="flex flex-col items-center justify-center py-32">
            <div className="text-9xl mb-12 animate-bounce">🚀</div>
            <h2 className="text-4xl font-light text-neutral-300 mb-6">敬请期待</h2>
            <p className="text-neutral-500 font-light text-center text-lg max-w-2xl leading-relaxed mb-8">
              正在打造一些有趣的产品，专注于 AI 应用、效率工具和知识管理领域。<br/>
              即将与大家见面，请持续关注！
            </p>
            
            {/* 占位卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-12">
              {[1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-lg backdrop-blur-sm"
                >
                  <div className="w-16 h-16 bg-neutral-800 rounded-lg mb-4"></div>
                  <div className="h-6 bg-neutral-800 rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-neutral-800/50 rounded w-full mb-2"></div>
                  <div className="h-4 bg-neutral-800/50 rounded w-5/6"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="border-t border-neutral-800 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8 text-center text-neutral-500">
          <p className="font-light">© 2025 AHAOAI. Build in Public.</p>
        </div>
      </footer>
    </div>
  )
}

