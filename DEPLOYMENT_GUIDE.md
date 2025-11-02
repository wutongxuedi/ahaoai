# 🚀 网站部署指南

本指南将帮助你将 3D 网站部署到 GitHub Pages。

---

## 📋 部署前准备

### 1. 确保项目可以正常构建

```bash
npm run build
```

构建成功后，会在 `dist` 目录生成静态文件。

### 2. 测试生产构建

```bash
npm run preview
```

访问显示的地址，确认网站正常工作。

---

## 🔧 方法一：GitHub Pages 自动部署（推荐）

### 步骤 1: 初始化 Git 仓库

```bash
cd "/Users/zouxihao/Documents/AI产品数字花园/【输出】程序/3D网站构建"

# 初始化 git
git init

# 添加所有文件
git add .

# 创建初始提交
git commit -m "Initial commit: 3D Timeline Website"
```

### 步骤 2: 在 GitHub 创建仓库

1. 访问 [GitHub](https://github.com)
2. 点击右上角 `+` → `New repository`
3. 填写信息：
   - **Repository name**: `3d-website` （或其他名称）
   - **Description**: "交互式 3D 网站，带黑白极简风格时间轴"
   - **Public** 或 **Private**（都可以，但 Private 需要 Pro 账号才能用 Pages）
   - ❌ **不要**勾选 "Add a README file"
4. 点击 `Create repository`

### 步骤 3: 连接远程仓库

复制 GitHub 显示的命令，或使用：

```bash
# 添加远程仓库（替换 YOUR_USERNAME 和 YOUR_REPO_NAME）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 重命名分支为 main
git branch -M main

# 推送到 GitHub
git push -u origin main
```

### 步骤 4: 配置 GitHub Pages

1. 在 GitHub 仓库页面，点击 `Settings`
2. 左侧菜单找到 `Pages`
3. 在 **Source** 下选择：
   - Source: `GitHub Actions`
4. 保存

### 步骤 5: 触发部署

推送代码后，GitHub Actions 会自动开始部署：

```bash
# 查看部署状态
# 访问：https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/actions
```

几分钟后，你的网站将部署到：
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

### 步骤 6: 更新 Vite 配置

⚠️ **重要**：如果你的仓库名不是 `3d-website`，需要更新 `vite.config.ts`：

```typescript
// 将 '/3d-website/' 改为 '/YOUR_REPO_NAME/'
base: process.env.GITHUB_ACTIONS ? '/YOUR_REPO_NAME/' : '/',
```

然后重新提交推送：
```bash
git add vite.config.ts
git commit -m "Update base path for GitHub Pages"
git push
```

---

## 🌐 方法二：Vercel 部署（更简单）

### 步骤 1: 推送到 GitHub

（同上方法一的步骤 1-3）

### 步骤 2: 部署到 Vercel

1. 访问 [Vercel](https://vercel.com)
2. 使用 GitHub 账号登录
3. 点击 `New Project`
4. 导入你的 GitHub 仓库
5. Vercel 会自动检测到 Vite 项目
6. 点击 `Deploy`

几分钟后，你会得到一个 `.vercel.app` 域名！

**优势**：
- ✅ 自动 HTTPS
- ✅ 全球 CDN
- ✅ 自动部署（推送即部署）
- ✅ 无需配置 base path

---

## 🚀 方法三：Netlify 部署

### 步骤 1: 推送到 GitHub

（同上方法一的步骤 1-3）

### 步骤 2: 部署到 Netlify

1. 访问 [Netlify](https://www.netlify.com)
2. 使用 GitHub 账号登录
3. 点击 `Add new site` → `Import an existing project`
4. 选择 GitHub 并授权
5. 选择你的仓库
6. 构建设置（通常自动检测）：
   - Build command: `npm run build`
   - Publish directory: `dist`
7. 点击 `Deploy site`

几分钟后，你会得到一个 `.netlify.app` 域名！

---

## 📝 后续更新网站

### 本地修改后推送

```bash
# 修改代码后...
git add .
git commit -m "描述你的更改"
git push
```

- **GitHub Pages**: 自动触发 Actions 重新部署
- **Vercel/Netlify**: 自动检测并重新部署

---

## 🔍 常见问题

### 1. GitHub Pages 显示 404

**原因**: `base` 路径配置不正确

**解决**:
- 检查 `vite.config.ts` 中的 `base` 设置
- 确保路径格式为 `/repo-name/`（前后都有斜杠）

### 2. 样式或资源加载失败

**原因**: 资源路径问题

**解决**:
- 确保使用相对路径或 Vite 的 `import` 语法
- 检查 `index.html` 中的资源引用

### 3. 3D 场景不显示

**原因**: Spline 资源可能被跨域限制

**解决**:
- 确保 Spline 场景设置为公开
- 检查浏览器控制台的错误信息

### 4. 部署后刷新页面 404

**原因**: SPA 路由问题（如果使用了路由）

**解决**:
- GitHub Pages: 添加 `public/404.html` 重定向到 `index.html`
- Vercel/Netlify: 会自动处理

---

## 🎨 自定义域名（可选）

### GitHub Pages

1. 在仓库根目录创建 `public/CNAME` 文件：
   ```
   yourdomain.com
   ```

2. 在域名提供商添加 DNS 记录：
   ```
   A    @    185.199.108.153
   A    @    185.199.109.153
   A    @    185.199.110.153
   A    @    185.199.111.153
   ```

3. 在 GitHub Pages 设置中输入自定义域名

### Vercel/Netlify

1. 在项目设置中添加自定义域名
2. 按照提示配置 DNS 记录

---

## 📊 部署状态监控

### GitHub Actions

查看部署日志：
```
https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/actions
```

### Vercel

查看部署历史：
```
https://vercel.com/YOUR_USERNAME/YOUR_PROJECT/deployments
```

### Netlify

查看部署历史：
```
https://app.netlify.com/sites/YOUR_SITE/deploys
```

---

## 🎉 完成！

部署完成后，你的网站将可以通过以下地址访问：

- **GitHub Pages**: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
- **Vercel**: `https://YOUR_PROJECT.vercel.app`
- **Netlify**: `https://YOUR_PROJECT.netlify.app`

分享给你的朋友，展示你的作品吧！ 🚀

---

## 💡 性能优化建议

### 1. 图片优化
- 使用 WebP 格式
- 压缩图片大小
- 使用 CDN 加速

### 2. 代码分割
项目已配置 Vite，会自动进行代码分割

### 3. 启用缓存
Vercel 和 Netlify 自动配置缓存

### 4. 添加 SEO
在 `index.html` 中添加 meta 标签：
```html
<meta name="description" content="交互式 3D 网站展示">
<meta name="keywords" content="3D, Timeline, React, Vite">
<meta property="og:title" content="3D Timeline Website">
<meta property="og:description" content="现代化的 3D 交互网站">
```

---

**需要帮助？** 查看 [README.md](./README.md) 或提交 Issue。



