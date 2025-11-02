# 🚀 GitHub 部署 - 快速步骤

## ✅ 已完成
- ✅ Git 仓库已初始化
- ✅ 代码已提交（32 个文件）
- ✅ GitHub Actions 工作流已配置
- ✅ Vite 部署配置已设置

---

## 📝 接下来只需 3 步

### 第 1 步：在 GitHub 创建仓库

1. 访问 https://github.com/new
2. 填写仓库信息：
   - **Repository name**: `3d-website` （或你喜欢的名字）
   - **Description**: `交互式 3D 网站 - 黑白极简时间轴`
   - **Public** ✅（必须选 Public 才能免费使用 GitHub Pages）
   - ❌ **不要勾选** "Add a README file"
3. 点击 **Create repository**

---

### 第 2 步：连接并推送代码

复制以下命令，**替换你的 GitHub 用户名和仓库名**后执行：

```bash
# 进入项目目录
cd "/Users/zouxihao/Documents/AI产品数字花园/【输出】程序/3D网站构建"

# 连接远程仓库（替换 YOUR_USERNAME 和 YOUR_REPO_NAME）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 推送代码
git branch -M main
git push -u origin main
```

**示例：**
```bash
# 如果你的用户名是 zhangsan，仓库名是 3d-website
git remote add origin https://github.com/zhangsan/3d-website.git
git branch -M main
git push -u origin main
```

**输入你的 GitHub 凭证**（如果需要）

---

### 第 3 步：配置 GitHub Pages

1. 进入你的 GitHub 仓库页面
2. 点击 **Settings** （设置）
3. 左侧菜单找到 **Pages**
4. 在 **Source** 下拉菜单选择：
   - **Source**: `GitHub Actions` ✅
5. 点击 **Save**（保存）

---

## ⚠️ 重要：更新仓库名配置

如果你的仓库名**不是** `3d-website`，需要修改 `vite.config.ts`：

打开 `vite.config.ts`，找到这一行：
```typescript
base: process.env.GITHUB_ACTIONS ? '/3d-website/' : '/',
```

改为你的仓库名：
```typescript
base: process.env.GITHUB_ACTIONS ? '/YOUR_REPO_NAME/' : '/',
```

然后提交并推送：
```bash
git add vite.config.ts
git commit -m "Update base path"
git push
```

---

## 🎉 部署完成！

推送代码后，GitHub Actions 会自动开始部署：

### 查看部署进度
访问：`https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/actions`

### 访问你的网站
几分钟后，网站将部署到：
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

**示例：**
```
https://zhangsan.github.io/3d-website/
```

---

## 🔄 后续更新网站

修改代码后，只需：
```bash
git add .
git commit -m "更新说明"
git push
```

GitHub 会自动重新部署！

---

## 🌟 推荐：使用 Vercel（更简单）

如果觉得 GitHub Pages 配置复杂，推荐使用 Vercel：

1. 先完成上面的步骤 1-2（创建仓库并推送）
2. 访问 https://vercel.com
3. 用 GitHub 账号登录
4. 点击 **New Project**
5. 选择你的仓库
6. 点击 **Deploy**

✨ 完成！你会得到一个 `.vercel.app` 域名，无需配置 base path！

**优势：**
- 🚀 更快的部署速度
- 🌍 全球 CDN 加速
- 🔒 自动 HTTPS
- 📊 实时分析

---

## 📞 需要帮助？

- **GitHub Pages 文档**: https://docs.github.com/pages
- **Vercel 文档**: https://vercel.com/docs
- **Vite 部署指南**: https://vitejs.dev/guide/static-deploy.html

---

## 💡 快速检查清单

部署前确认：
- [ ] 项目可以本地构建（`npm run build`）
- [ ] 已创建 GitHub 仓库
- [ ] 已推送代码到 GitHub
- [ ] 已在 Settings → Pages 启用 GitHub Actions
- [ ] （如果需要）已更新 `vite.config.ts` 中的 base path

---

**准备好了吗？开始部署吧！** 🚀



