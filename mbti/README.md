# MBTI Form M 本地测试网页

一个基于 **Vite + TypeScript** 的本地静态 MBTI 测试网页项目。

## 项目说明

- 题库：93 题 Form M
- 计分：逐题 IRT 权重 + 5 级程度计分
- 结果：输出 MBTI 类型、族群、核心特质、详细说明、短板
- 适配：支持手机和电脑浏览器访问
- 部署方式：本地静态运行，无后端

## 环境要求

请先安装：

- Node.js 18+（推荐）
- npm

## 安装依赖

在项目目录 [d:/project/mbti](d:/project/mbti) 下执行：

```bash
npm install
```

## 启动开发环境

```bash
npm run dev
```

启动后默认可访问：

- 本机：`http://localhost:5173`
- 局域网手机访问：终端显示的 `Network` 地址

如果端口被占用，Vite 会自动切换到新的端口，例如 `5174`。

## 生产构建

```bash
npm run build
```

构建完成后会生成：

- [dist/](dist/)

## 本地预览构建结果

```bash
npm run preview
```

## GitHub Pages 自动部署

当前项目已配置 GitHub Actions 自动部署到 GitHub Pages。

发布地址：

- `https://imp1024.github.io/Type_Indicator/`

首次启用时，请到 GitHub 仓库设置中确认：

1. 打开 `Settings -> Pages`
2. 在 `Source` 中选择 `GitHub Actions`

自动部署工作流文件：

- [.github/workflows/deploy-mbti-pages.yml](../.github/workflows/deploy-mbti-pages.yml)

后续只要向 `master` 分支推送 `mbti/` 目录相关变更，GitHub 就会自动执行构建并发布 `mbti/dist/`。

## 常用命令汇总

```bash
npm install         # 安装依赖
npm run dev         # 启动开发环境
npm run build       # 生产构建
npm run preview     # 预览构建结果
npm run tunnel      # 将本地 dev 服务暴露到外网
npm run tunnel:preview # 将本地 preview 服务暴露到外网
```

## 外网临时访问（独立 tunnel 功能）

如果你想让外网设备临时访问当前静态网页，可以使用项目内单独拆分出来的 tunnel 辅助功能。

特点：

- 仅用于本地开发、测试、演示
- 与 `src/` 业务代码分离
- 不参与 `build` 产物
- 后续部署到 GitHub Pages、Vercel、Cloudflare Pages 等公网平台时可直接停用或删除

相关目录：

- [devtools/tunnel/](devtools/tunnel/)

当前默认方案为 `Cloudflare Tunnel Quick Tunnel`。

在使用前，请先确认本机已安装：

```bash
cloudflared --version
```

如果该命令不可用，请先安装 `cloudflared`。

### 方式一：暴露开发环境

先启动 Vite 开发服务：

```bash
npm run dev
```

请以终端里实际显示的 `Local` 地址为准。例如：

```text
http://localhost:5174/Type_Indicator/
```

如果端口不是 `5173`，需要按实际端口启动 tunnel。

在 PowerShell 中：

```powershell
$env:TUNNEL_PORT=5174; npm run tunnel
```

在 cmd 中：

```cmd
set TUNNEL_PORT=5174 && npm run tunnel
```

如果 Vite 实际就是 `5173`，也可以直接执行：

```bash
npm run tunnel
```

执行后终端会输出一个临时外网地址，通常形如：

```text
https://xxxx.trycloudflare.com
```

如果项目配置了 `base` 路径，例如当前项目使用：

```text
/Type_Indicator/
```

那么外部访问时请优先打开：

```text
https://xxxx.trycloudflare.com/Type_Indicator/
```

### 方式二：暴露预览环境

如果你更希望外部看到更接近正式部署的静态结果：

```bash
npm run preview
```

然后按 preview 实际端口启动 tunnel。

PowerShell 示例：

```powershell
$env:TUNNEL_PORT=4173; npm run tunnel
```

如果 preview 实际端口不是 `4173`，同样要替换成终端里显示的真实端口。

### 常见问题

#### 1. 出现 `502 Bad Gateway`
通常表示 tunnel 已启动，但连不到本地 origin 服务。常见原因：

- `npm run dev` / `npm run preview` 没有运行
- tunnel 连的端口不对
- Vite 实际端口已经自动跳到了 `5174`、`5175` 等

解决方式：以终端里显示的 `Local` 地址为准，使用对应端口重新启动 tunnel。

#### 2. 出现 Host not allowed
当前 [vite.config.ts](vite.config.ts) 已放宽 `allowedHosts`，正常情况下不应再被 Cloudflare 随机域名拦截。如果仍出现，请重启 dev 服务后再重试。

### 停用 / 移除

后续如果准备部署到正式公网静态平台，可以直接移除这套能力：

1. 删除 [devtools/tunnel/](devtools/tunnel/)
2. 删除 `package.json` 中的 tunnel scripts
3. 删除本节文档

这样不会影响原本的 `npm run dev`、`npm run build`、`npm run preview`。

## 项目结构

```text
mbti/
├─ devtools/
│  └─ tunnel/               # 独立的外网访问辅助功能（Cloudflare Tunnel）
├─ src/
│  ├─ core/                 # 计分、结果构建、本地存储
│  ├─ data/                 # 题库、步骤配置、人格资料
│  ├─ main.ts               # 页面主逻辑
│  └─ style.css             # 页面样式
├─ scripts/                 # 数据生成脚本
├─ dist/                    # 构建产物
├─ index.html
├─ package.json
├─ tsconfig.json
└─ vite.config.ts
```

## 数据来源

项目数据基于以下文档整理：

- [MBTI官方Form M完整版（93题）题库+计分手册.md](MBTI官方Form%20M完整版（93题）题库+计分手册.md)
- [MBTI 16型人格｜完整组合名称、族群分类、精准释义（适配Form M 93题）.md](MBTI%2016型人格｜完整组合名称、族群分类、精准释义（适配Form%20M%2093题）.md)

## 备注

如果你希望手机访问，请确保：

1. 手机和电脑在同一个局域网
2. 使用终端输出的 `Network` 地址访问
3. Windows 防火墙没有拦截 Node/Vite
