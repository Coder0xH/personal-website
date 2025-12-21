# Dexter

一个现代化的 Go 微服务脚手架，基于 DDD 四层架构设计，支持 gRPC 服务间通信、钱包登录、WebSocket 实时通信和区块链事件监听。

## 特性

- **微服务架构**: 扁平化 mono-repo，每个服务独立 go.mod
- **gRPC 通信**: 服务间通过 gRPC 通信，使用 Protobuf 定义接口
- **Go Workspace**: 使用 go.work 管理多模块
- **DDD 四层架构**: 清晰的分层设计，依赖倒置
- **钱包登录**: 支持以太坊/BSC 钱包签名登录
- **JWT 认证**: 完整的 Access Token + Refresh Token 机制
- **WebSocket**: 实时消息推送
- **区块链监听**: 智能合约事件监听器
- **依赖注入**: 使用 Google Wire 管理依赖

## 项目结构

```
go-scaffold/
├── go.work                      # Go Workspace 配置
├── Makefile                     # 顶层 Makefile
├── docker-compose.yaml          # 多服务编排
│
├── shared/                      # 共享库
│   ├── go.mod                   # module dexter/shared
│   ├── database/                # 数据库连接
│   ├── logger/                  # 日志
│   ├── errors/                  # 错误定义
│   └── ...
│
├── proto/                       # Protobuf 定义
│   ├── buf.yaml
│   ├── buf.gen.yaml
│   ├── payment/v1/              # gRPC 服务定义
│   └── gen/                     # 生成的 Go 代码
│
├── user-service/                # 用户服务 (HTTP + gRPC)
│   ├── go.mod                   # module dexter/user-service
│   ├── Makefile
│   ├── Dockerfile
│   ├── cmd/server/main.go
│   ├── config/
│   └── internal/
│       ├── application/
│       ├── bootstrap/
│       ├── config/
│       ├── domain/
│       ├── infrastructure/
│       ├── service/
│       └── transport/
│           ├── http/            # HTTP 接口
│           └── grpc/            # gRPC 服务端
│
├── listener-service/            # 区块链监听服务
│   ├── go.mod                   # module dexter/listener-service
│   ├── Makefile
│   ├── Dockerfile
│   ├── cmd/listener/main.go
│   ├── config/
│   └── internal/
│       ├── blockchain/          # 区块链监听逻辑
│       ├── client/              # gRPC 客户端
│       └── bootstrap/
│
└── scripts/
    ├── new-service.sh           # 创建新服务脚本
    └── ...
```

## 快速开始

### 1. 安装依赖

```bash
# 安装开发工具
make install-tools

# 同步 workspace
make mod
```

### 2. 生成 Protobuf 代码

```bash
make proto
```

### 3. 运行服务

```bash
# 运行指定服务（热重载）
make run user-service
make run listener-service
```

### 4. 创建新服务

```bash
# 创建新的微服务
make new payment-service

# 指定自定义 module 名
make new payment-service --module github.com/myorg/payment
```

## Make 命令

```bash
# 查看所有命令
make help
```

### 服务开发

| 命令 | 说明 |
|------|------|
| `make run <service>` | 运行指定服务（热重载） |

### 编译

| 命令 | 说明 |
|------|------|
| `make build-all` | 编译所有服务 |
| `make build SERVICE=user-service` | 编译指定服务 |

### 工具

| 命令 | 说明 |
|------|------|
| `make proto` | 生成 Protobuf 代码 |
| `make wire` | 生成 Wire 依赖注入代码 |
| `make install-tools` | 安装开发工具 |
| `make test` | 运行所有测试 |
| `make fmt` | 格式化代码 |
| `make lint` | 代码检查 |
| `make clean` | 清理编译文件 |

### 依赖管理

| 命令 | 说明 |
|------|------|
| `make mod` | 同步 workspace 和所有模块依赖 |
| `make deps-check` | 检查可用更新 |
| `make deps-upgrade` | 升级所有依赖 |

### Docker 部署

| 命令 | 说明 |
|------|------|
| `make docker-all` | 构建所有镜像 |
| `make docker-build SERVICE=<name>` | 构建指定服务镜像 |

### 创建新服务

| 命令 | 说明 |
|------|------|
| `make new <service-name>` | 创建新微服务 |

## 服务间通信

```
┌─────────────────┐     gRPC      ┌─────────────────┐
│                 │ ────────────> │                 │
│ listener-service│               │  user-service   │
│                 │ <──────────── │                 │
└─────────────────┘               └─────────────────┘
        │                                 │
        │ WebSocket                       │ HTTP
        │                                 │
        v                                 v
  ┌───────────┐                    ┌───────────┐
  │ Blockchain│                    │  Clients  │
  └───────────┘                    └───────────┘
```

### gRPC 服务定义

```protobuf
// proto/payment/v1/payment.proto
service PaymentService {
  rpc NotifyPayment(NotifyPaymentRequest) returns (NotifyPaymentResponse);
}
```

## DDD 四层架构

每个服务内部遵循 DDD 四层架构：

```
+-------------------------------------------------------+
|                    Transport Layer                    |  <- 接口层
|              (transport/http, grpc)                   |
+-------------------------------------------------------+
|                   Application Layer                   |  <- 应用编排层
|              (service/, application/)                 |
+-------------------------------------------------------+
|                     Domain Layer                      |  <- 领域层
|                      (domain/)                        |
+-------------------------------------------------------+
|                 Infrastructure Layer                  |  <- 基础设施层
|            (infrastructure/, shared/)                 |
+-------------------------------------------------------+
```

## 开发指南

### 添加新服务

1. 使用 `make new <service-name>` 创建服务骨架
2. 在 `proto/` 下定义 gRPC 接口（如需要）
3. 运行 `make proto` 生成代码
4. 实现业务逻辑
5. 运行 `make wire` 生成依赖注入代码

### 添加新领域（在现有服务中）

1. **Domain 层**: 在 `internal/domain/` 下创建领域目录
2. **Infrastructure 层**: 在 `internal/infrastructure/` 下实现 Repository
3. **Service 层**: 在 `internal/service/` 下创建服务
4. **Transport 层**: 在 `internal/transport/` 下创建 Handler
5. 运行 `make wire` 生成依赖注入代码

## 生产部署

### Docker Compose

```bash
# 构建镜像
make docker-all

# 启动服务
docker-compose up -d

# 启动包含区块链监听器
docker-compose --profile blockchain up -d

# 查看日志
docker-compose logs -f user-service
```

## 技术栈

| 组件 | 技术 |
|------|------|
| Web 框架 | Gin |
| RPC 框架 | gRPC |
| 序列化 | Protobuf (buf) |
| 数据库 | PostgreSQL + pgx |
| 缓存/队列 | Redis (Stream) |
| 日志 | Zap |
| 配置 | Viper |
| 依赖注入 | Wire |
| 验证 | go-playground/validator |
| JWT | golang-jwt |
| 以太坊 | go-ethereum |
| WebSocket | coder/websocket |


## Cursor 开发规则
场景 1: 编辑 internal/service/user/service.go
────────────────────────────────────────────
✅ 加载 architecture.mdc      (匹配 **/internal/**/*.go)
✅ 加载 code-standards.mdc    (匹配 **/*.go)
❌ 不加载 testing-standards.mdc

场景 2: 编辑 internal/service/user/service_test.go
────────────────────────────────────────────
✅ 加载 architecture.mdc      (匹配 **/internal/**/*.go)
✅ 加载 code-standards.mdc    (匹配 **/*.go)
✅ 加载 testing-standards.mdc (匹配 **/*_test.go)

场景 3: 编辑 README.md
────────────────────────────────────────────
❌ 不加载任何规则 (不匹配任何 globs)

场景 4: 编辑 shared/utils/crypto.go
────────────────────────────────────────────
❌ 不加载 architecture.mdc    (不在 internal 目录)
✅ 加载 code-standards.mdc    (匹配 **/*.go)
❌ 不加载 testing-standards.mdc

## License

MIT
