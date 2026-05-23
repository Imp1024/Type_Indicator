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

### 开发环境

先启动本地开发服务：

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

### 预览环境

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

## 可选环境变量

- `TUNNEL_PORT`：指定映射端口，默认 `5173`

## 常见问题

### 1. 出现 `502 Bad Gateway`
通常表示 tunnel 已启动，但连不到本地 origin 服务。常见原因：

- `npm run dev` / `npm run preview` 没有运行
- tunnel 连的端口不对
- Vite 实际端口已经自动跳到了 `5174`、`5175` 等

解决方式：以终端里显示的 `Local` 地址为准，使用对应端口重新启动 tunnel。

### 2. 出现 Host not allowed
当前 [vite.config.ts](../../vite.config.ts) 已放宽 `allowedHosts`，正常情况下不应再被 Cloudflare 随机域名拦截。如果仍出现，请重启 dev 服务后再重试。

## 停用方式

如果后续不再需要本地外网访问：

1. 删除 `devtools/tunnel/`
2. 删除 `package.json` 中的 `tunnel` 相关 scripts
3. 删除 README 中对应说明

这样不会影响主应用的 `dev / build / preview` 流程。
