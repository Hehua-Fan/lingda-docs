---
title: 数据库服务
---

# 数据库服务

数据库服务提供了智能体与结构化数据交互的能力，使智能体能够存储、检索和操作数据，从而支持更复杂的应用场景。

## 数据库服务概述

通过数据库服务，您的智能体可以：

- 存储用户会话信息和交互历史
- 维护和更新结构化数据
- 查询特定信息以增强响应
- 跟踪长期任务和多步骤流程
- 实现数据持久化和状态管理

## 支持的数据库类型

平台支持多种类型的数据库连接：

### 关系型数据库
- **MySQL/MariaDB**：适用于复杂的关系数据
- **PostgreSQL**：支持高级数据类型和复杂查询
- **SQLite**：轻量级内置选项，适合简单应用

### NoSQL数据库
- **MongoDB**：文档型数据库，适合半结构化数据
- **Redis**：键值存储，适合缓存和快速访问
- **Firestore/DynamoDB**：适合云原生应用

### 向量数据库
- **Pinecone**：优化的向量检索
- **Milvus**：开源向量数据库
- **Qdrant**：自托管向量搜索

## 数据库集成流程

### 步骤1：连接数据库

```yaml
# 数据库连接配置示例
databaseConnection:
  type: "postgresql"
  host: "db.example.com"
  port: 5432
  database: "agent_data"
  username: "agent_user"
  password: "********"
  ssl: true
  poolSize: 5
```

### 步骤2：定义数据模型

您可以使用平台的可视化界面或直接通过SQL定义数据模型：

```sql
-- 用户会话表示例
CREATE TABLE user_sessions (
  session_id VARCHAR(36) PRIMARY KEY,
  user_id VARCHAR(36) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_active TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  context JSONB
);

-- 对话历史表示例
CREATE TABLE conversation_history (
  message_id VARCHAR(36) PRIMARY KEY,
  session_id VARCHAR(36) REFERENCES user_sessions(session_id),
  sender VARCHAR(20) NOT NULL,
  content TEXT NOT NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  metadata JSONB
);
```

### 步骤3：配置数据访问权限

设置细粒度的权限控制，确保智能体只能执行必要的操作：

- **读取权限**：允许查询特定表或视图
- **写入权限**：允许插入或更新数据
- **执行权限**：允许调用特定的存储过程

### 步骤4：创建数据操作工具

在智能体工作流中，您可以定义数据操作工具：

```typescript
// 查询用户历史工具示例
const queryUserHistoryTool = {
  name: "queryUserHistory",
  description: "查询用户的历史互动记录",
  parameters: {
    type: "object",
    properties: {
      userId: {
        type: "string",
        description: "用户ID"
      },
      limit: {
        type: "integer",
        description: "返回的最大记录数",
        default: 5
      }
    },
    required: ["userId"]
  },
  handler: async (params) => {
    const { userId, limit } = params;
    
    const query = `
      SELECT content, timestamp
      FROM conversation_history ch
      JOIN user_sessions us ON ch.session_id = us.session_id
      WHERE us.user_id = $1
      ORDER BY ch.timestamp DESC
      LIMIT $2
    `;
    
    const result = await db.query(query, [userId, limit]);
    return result.rows;
  }
};
```

## 高级数据库功能

### 事务管理

对于需要保证数据完整性的操作，您可以使用事务：

```typescript
async function updateUserPreference(userId, preference, value) {
  const client = await db.pool.connect();
  
  try {
    await client.query('BEGIN');
    
    // 检查用户是否存在
    const userCheck = await client.query(
      'SELECT id FROM users WHERE id = $1',
      [userId]
    );
    
    if (userCheck.rows.length === 0) {
      throw new Error('User not found');
    }
    
    // 更新偏好设置
    await client.query(
      'INSERT INTO user_preferences (user_id, preference_key, preference_value) ' +
      'VALUES ($1, $2, $3) ' +
      'ON CONFLICT (user_id, preference_key) DO UPDATE SET preference_value = $3',
      [userId, preference, value]
    );
    
    await client.query('COMMIT');
    return { success: true };
  } catch (e) {
    await client.query('ROLLBACK');
    return { success: false, error: e.message };
  } finally {
    client.release();
  }
}
```

### 数据验证和清理

确保输入数据的质量和一致性：

```typescript
function validateUserInput(input) {
  // 移除潜在的SQL注入
  const sanitized = input.replace(/['";\\]/g, '');
  
  // 验证数据格式
  if (!/^[a-zA-Z0-9\s\-_\.]+$/.test(sanitized)) {
    throw new Error('Input contains invalid characters');
  }
  
  return sanitized;
}
```

### 缓存策略

实现缓存以提高频繁查询的性能：

```typescript
const cache = new Map();
const CACHE_TTL = 60 * 1000; // 1分钟过期

async function getCachedProductInfo(productId) {
  const cacheKey = `product:${productId}`;
  
  // 检查缓存
  if (cache.has(cacheKey)) {
    const { data, timestamp } = cache.get(cacheKey);
    if (Date.now() - timestamp < CACHE_TTL) {
      return data;
    }
  }
  
  // 缓存未命中，从数据库获取
  const result = await db.query(
    'SELECT * FROM products WHERE id = $1',
    [productId]
  );
  
  const productData = result.rows[0];
  
  // 更新缓存
  cache.set(cacheKey, {
    data: productData,
    timestamp: Date.now()
  });
  
  return productData;
}
```

## 最佳实践

### 数据安全

- **参数化查询**：始终使用参数化查询防止SQL注入
- **最小权限**：为数据库用户分配最小必要权限
- **敏感数据加密**：加密存储敏感信息
- **审计日志**：记录关键数据操作以便追踪

### 性能优化

- **索引优化**：为频繁查询的字段创建适当的索引
- **查询优化**：避免选择不必要的列和表
- **连接池管理**：适当配置连接池大小
- **批量操作**：适当时使用批量插入和更新

### 可扩展架构

- **分区策略**：对大型表使用表分区
- **树形结构**：适当使用自引用关系和路径枚举
- **JSON字段**：对于半结构化数据使用JSON/JSONB列
- **版本控制**：实现架构版本控制和迁移策略

## 故障排除

### 常见问题

1. **连接超时**：检查网络设置和防火墙规则
2. **权限错误**：验证数据库用户权限配置
3. **查询性能**：使用EXPLAIN分析查询计划
4. **数据不一致**：检查事务管理和约束设置

### 调试工具

- **日志分析**：启用详细日志记录查找问题根源
- **查询分析器**：使用数据库提供的查询分析工具
- **连接监控**：监控活动连接和锁定情况

## 案例研究：客户支持智能体

某客户支持智能体使用数据库服务跟踪客户交互和问题解决流程：

1. 每次新对话启动时创建会话记录
2. 存储客户问题和智能体响应
3. 关联会话与客户账户信息
4. 跟踪问题解决状态和升级路径
5. 生成分析报告识别常见问题

这种集成使智能体能够：
- 记住客户之前的问题
- 提供连贯的多轮交互
- 个性化响应基于客户历史
- 自动分类和路由复杂问题
- 收集客户满意度数据

## 相关资源

- [数据库模式设计最佳实践](/docs/database-schema-design)
- [SQL注入防护指南](/docs/sql-injection-prevention)
- [智能体状态管理](/docs/agent-state-management)
