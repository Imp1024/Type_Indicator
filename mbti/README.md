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

## 常用命令汇总

```bash
npm install      # 安装依赖
npm run dev      # 启动开发环境
npm run build    # 生产构建
npm run preview  # 预览构建结果
```

## 项目结构

```text
mbti/
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
