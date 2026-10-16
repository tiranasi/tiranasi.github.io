# tiranasi 个人主页

纯静态 HTML、CSS 和 JavaScript 项目，无需安装依赖或执行构建。

## 文件

- `index.html`：个人介绍、EEG 研究、SkyMate 与 Typhoon 项目、教育背景和联系方式。
- `assets/styles.css`：排版、配色和移动端适配。
- `assets/main.js`：中英文切换与页面内导航。
- `assets/profile.jpg`：主页使用的照片。
- `assets/favicon.svg`：浏览器标签页图标。

## 本地打开

解压后直接使用浏览器打开 `index.html`。

也可以在本目录运行：

```bash
python -m http.server 8000
```

然后打开 `http://localhost:8000`。

## 修改内容

正文与中英文内容位于 `index.html`；双语文案分别存放在元素的 `data-en` 和 `data-zh` 属性中，修改时同步更新两种语言与默认显示文本。

替换照片时可覆盖 `assets/profile.jpg`；若照片比例发生变化，同时调整图片的宽高属性和 `.hp-photo` 样式。

## 部署

- 线上地址：<https://tiranasi.github.io/>
- GitHub 仓库：<https://github.com/tiranasi/tiranasi.github.io>
- GitHub Pages 发布来源：`main` 分支的根目录（`/`）。
- `.nojekyll` 禁用 Jekyll 处理，直接发布静态文件。

修改后，在本目录提交并推送即可触发自动部署：

```bash
git add index.html assets README.md .nojekyll
git commit -m "Update homepage"
git push origin main
```

也可以将 `index.html` 和整个 `assets` 文件夹上传到其他静态网站托管服务的根目录。

源码包不依赖 ChatGPT Sites，也不包含其站点配置、仓库认证信息或部署归档。
