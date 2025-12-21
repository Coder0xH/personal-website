# FastAPI Scaffold

FastAPI 脚手架项目 - 包含用户认证、数据库、Redis 和 WebSocket 基础设施。

## 功能特性

- **用户认证**: 注册/登录/登出、JWT 令牌、HTTP-Only Cookie、TOTP 两步验证
- **数据库**: PostgreSQL 异步连接、SQLAlchemy ORM、Alembic 迁移
- **缓存**: Redis 异步连接、ACL 认证
- **WebSocket**: 基础连接、消息广播、心跳检测
- **其他**: Loguru 日志、统一异常处理、Google 风格 API 响应、CORS 支持

## 快速开始

### 环境要求

- Python >= 3.13
- PostgreSQL
- Redis

### 安装与运行

```bash
# 创建虚拟环境
uv venv

# 安装依赖
uv sync

# 配置环境变量 (复制 .env.example 或创建 .env)
cp .env.example .env

# 运行服务
make dev

# 存储启动虚拟环境的别名
echo 'alias av="source .venv/bin/activate"' >> ~/.zshrc
source ~/.zshrc

```

### API 文档

- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## 项目结构

```
app/
├── main.py              # 应用入口
├── api/                 # API 路由层
├── config/              # 配置管理
├── core/                # 核心模块 (异常、日志、安全)
├── db/                  # 数据库连接
├── models/              # ORM 模型
├── repositories/        # 数据访问层
├── schemas/             # 请求/响应 Schema
├── services/            # 业务逻辑层
└── utils/               # 工具函数
```

## API 端点

### 认证

| 方法 | 路径 | 描述 |
|------|------|------|
| POST | /api/auth/register | 注册 |
| POST | /api/auth/login | 登录 |
| POST | /api/auth/logout | 登出 |
| POST | /api/auth/refresh | 刷新令牌 |
| GET | /api/auth/me | 当前用户信息 |
| POST | /api/auth/totp/setup | 设置 TOTP |
| POST | /api/auth/totp/verify | 验证 TOTP |
| POST | /api/auth/totp/disable | 禁用 TOTP |

### WebSocket

| 路径 | 描述 |
|------|------|
| /ws | 基础连接 |
| /ws/broadcast | 广播连接 |

## License

MIT
