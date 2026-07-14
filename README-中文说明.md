# Information Systems Week 14 网页作业

这个文件夹已经包含可以直接上传到 GitHub Pages 的完整网页。

## 老师要求（从课件摘抄整理）

1. 网站必须有 3 个页面：Home、Portfolio、Trivia。
2. 每页保持一致的 6 个区域：Header、导航栏、左侧学习链接、主要内容、右侧联系表单、Footer。
3. 导航有 3 个页面链接，并有 hover 效果。
4. 左侧学习链接必须在新标签页打开。
5. 联系表单要有基本验证。
6. Footer 要有创建日期和外部链接。
7. 使用 CSS Flexbox 或 Grid，颜色柔和、文字清楚，并支持手机等不同屏幕。
8. Home：写自我介绍，不放生日、电话号码等隐私；加入 1 张图片。
9. Portfolio：用 CSS 美化表格；至少 5 个项目；至少 4 个字段（本网页用了 5 列）。
10. Trivia：必须用 JavaScript 根据用户输入计算、验证或动态更新内容。
11. 全部页面共用 1 个外部 CSS 文件 `style.css`。
12. Trivia 逻辑使用 1 个外部 JavaScript 文件 `script.js`。
13. 网站必须通过 GitHub 在线发布；作业只提交网站 URL。

## 交作业前建议修改

- 打开 `index.html`，把英文自我介绍换成你自己的情况，不要写隐私信息。
- 打开 `portfolio.html`，把 5 个示例项目换成你自己的经历或作品（如果老师要求内容必须真实）。
- 三个 HTML 文件底部的 GitHub 链接目前是 GitHub 首页；你有个人主页后可以换成自己的链接。
- 网站标题 `My Learning Space` 也可以换成你的名字或喜欢的标题。若修改标题，三个 HTML 文件都要一起改，保持一致。

## 最简单的 GitHub Pages 上传方法

1. 登录 GitHub，点击右上角 `+`，选择 `New repository`。
2. 仓库名填写：`你的GitHub用户名.github.io`。例如用户名是 `sample123`，仓库名就是 `sample123.github.io`。
3. 选择 `Public`，点击 `Create repository`。
4. 在新仓库中点击 `Add file` → `Upload files`。
5. 把本文件夹中的这些文件一起上传：
   - `index.html`
   - `portfolio.html`
   - `trivia.html`
   - `style.css`
   - `script.js`
   - `learning-illustration.svg`
6. 点击 `Commit changes`。
7. 打开仓库的 `Settings` → 左侧 `Pages`。
8. 在 `Build and deployment` 中选择 `Deploy from a branch`；Branch 选 `main` 和 `/ (root)`，然后点 `Save`。
9. 等待几十秒到几分钟，访问 `https://你的GitHub用户名.github.io/`。
10. 检查三个页面、Portfolio 表格、Trivia 计分和联系表单是否正常。

## 最后提交什么

只提交 GitHub Pages 网站 URL，不要提交仓库编辑页面，也不要只提交 GitHub 仓库 URL。

提交格式：

`https://你的GitHub用户名.github.io/`

