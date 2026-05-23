# Tunnel 工具目录

这个目录用于放置“本地外网访问”相关的辅助文件，与主应用代码分开。

## 目标

- 只服务于本地开发/临时演示
- 不耦合到 `src/` 运行时代码
- 不参与生产构建产物
- 后续部署到公网静态平台时可直接移除

## 当前方案

当前使用 `Cloudflare Tunnel` 的 Quick Tunnel 方式作为默认演示方案。

它会把你本地运行的 Vite 服务映射成一个临时外网地址，通常形如 `https://xxxx.trycloudflare.com`。

## 前置要求

你需要先在本机安装 `cloudflared`，并保证命令行可以直接运行：

```bash
cloudflared --version
```

如果这个命令无法执行，请先安装 Cloudflare Tunnel CLI，再继续下面步骤。

## 用法

先在项目根目录启动本地站点：

```bash
npm run dev
```

再在另一个终端启动 tunnel：

```bash
npm run tunnel
```

如果你想暴露 preview 服务：

```bash
npm run preview
npm run tunnel:preview
```

## 可选环境变量

- `TUNNEL_PORT`：指定映射端口，默认 `5173`

示例：

```bash
TUNNEL_PORT=4173 npm run tunnel
```

## 停用方式

如果后续不再需要本地外网访问：

1. 删除 `devtools/tunnel/`
2. 删除 `package.json` 中的 `tunnel` 相关 scripts
3. 删除 README 中对应说明

这样不会影响主应用的 `dev / build / preview` 流程。
