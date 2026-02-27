

# SimulationSingleSPA

#### 介绍

SimulationSingleSPA 是一个用于模拟 [single-spa](https://single-spa.js.org/) 微前端框架核心功能的实现项目。该项目展示了微前端架构的核心概念，包括应用注册、生命周期管理、路由导航以及应用的动态加载与卸载。

#### 软件架构

```
SimulationSingleSPA
├── src/
│   ├── applications/          # 应用管理模块
│   │   ├── appliccation.js    # 应用注册与状态管理
│   │   └── helpers.js          # 应用状态常量与辅助函数
│   ├── lifecycles/            # 生命周期模块
│   │   ├── bootstrap.js       # 应用启动生命周期
│   │   ├── load.js            # 应用加载生命周期
│   │   ├── mount.js           # 应用挂载生命周期
│   │           # 应用卸载生命周期
│   └── unmount.js ├── navigations/           # 路由导航模块
│   │   ├── navigatorEvents.js # 导航事件处理
│   │   └── reroute.js         # 路由重定向处理
│   ├── index.js               # 入口文件
│   └── start.js               # 启动函数
├── public/
│   └── index.html             # HTML 模板
├── rollup.config.js           # Rollup 构建配置
└── package.json               # 项目配置
```

#### 核心特性

- **应用注册机制**：通过 `registerApplication` 注册微应用
- **生命周期管理**：完整的 bootstrap、load、mount、unmount 生命周期支持
- **状态管理**：多种应用状态（NOT_LOADED、LOADING、MOUNTED 等）
- **路由感知**：基于 URL 路径的微应用激活/卸载
- **事件驱动**：支持导航事件的监听与处理

#### 安装教程

1. 确保已安装 Node.js (v14+) 和 pnpm
   ```bash
   node -v
   pnpm -v
   ```

2. 克隆仓库并安装依赖
   ```bash
   git clone https://gitee.com/QQXQQ/SimulationSingleSPA.git
   cd SimulationSingleSPA
   pnpm install
   ```

3. 构建项目
   ```bash
   pnpm build
   ```

#### 使用说明

1. **引入框架**
   ```html
   <script src="./dist/simulation-single-spa.js"></script>
   ```

2. **定义微应用**
   ```javascript
   // 定义微应用
   const app1 = {
     bootstrap: () => Promise.resolve(),
     mount: () => {
       console.log('App1 mounted');
       return Promise.resolve();
     },
     unmount: () => {
       console.log('App1 unmounted');
       return Promise.resolve();
     }
   };
   ```

3. **注册应用**
   ```javascript
   // 注册微应用
   singleSpa.registerApplication(
     'app1',
     () => Promise.resolve(app1),
     (location) => location.pathname.startsWith('/app1')
   );
   ```

4. **启动框架**
   ```javascript
   singleSpa.start();
   ```

#### API 参考

| 方法 | 描述 |
|------|------|
| `registerApplication(appName, loadApp, activeWhen, customProps)` | 注册微应用 |
| `getAppChanges()` | 获取应用变更状态 |
| `start()` | 启动微前端框架 |
| `isStarted()` | 检查框架是否已启动 |

#### 参与贡献

1. Fork 本仓库
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request

#### 许可证

MIT License