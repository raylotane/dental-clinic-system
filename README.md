# Dental Clinic System 牙医诊所系统

基于 Nuxt 3 + Vue 3 + TiDB 的牙医诊所管理系统。

## 技术栈

- **框架**: Nuxt 3
- **前端**: Vue 3 + Element Plus
- **数据库**: TiDB Cloud (MySQL 兼容)
- **语言**: TypeScript

## 安装

```bash
# 使用 pnpm
pnpm install

# 或使用 npm
npm install
```

## 启动服务

开发服务器运行于 `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev
```

## 工程目录结构

```
dental-clinic-system/
├── app/                          # 前端应用目录
│   ├── pages/                    # 页面路由
│   │   ├── index.vue             # 首页
│   │   ├── service-categories/   # 服务分类管理
│   │   ├── service-items/        # 服务项目管理
│   │   └── settings/             # 系统设置
│   └── app.vue                   # 根组件
├── server/                       # 服务端 API 目录
│   ├── api/                      # API 路由
│   │   ├── server-item/          # 服务项目 API
│   │   │   └── byPage.ts         # 分页查询
│   │   ├── hello.ts              # 测试接口
│   │   └── test-db.get.ts        # 数据库连接测试
│   └── utils/                    # 服务端工具
│       └── db.ts                 # TiDB 数据库连接
├── public/                       # 静态资源
├── nuxt.config.ts                # Nuxt 配置文件
├── package.json                  # 依赖管理
├── tsconfig.json                 # TypeScript 配置
├── .env                          # 环境变量（TiDB 配置）
└── API文档.md                     # API 接口文档
```

### 目录说明

| 目录 | 说明 |
|------|------|
| `app/pages` | 前端页面，基于文件系统的路由 |
| `server/api` | 服务端 API，`/api/*` 路由自动映射 |
| `server/utils` | 服务端工具函数，Nuxt 自动导入 |
| `public` | 静态资源，直接通过根路径访问 |

## 环境变量配置

创建 `.env` 文件，配置 TiDB 连接：

```env
TIDB_HOST=your-tidb-host.tidbcloud.com
TIDB_PORT=4000
TIDB_USER=your-username
TIDB_PASSWORD=your-password
TIDB_DATABASE=dentistdb
TIDB_ENABLE_SSL=true
```

## 常用命令

```bash
# 开发模式
npm run dev

# 构建生产版本
npm run build

# 本地预览生产版本
npm run preview

# 生成静态站点
npm run generate
```

## 相关链接

- [数据库控制台](https://tidbcloud.com/project/clusters?orgId=1372813089209282015&projectId=1372813089454599907)
- [TiDB 开发文档](https://docs.pingcap.com/zh/developer/dev-guide-sample-application-nextjs/)