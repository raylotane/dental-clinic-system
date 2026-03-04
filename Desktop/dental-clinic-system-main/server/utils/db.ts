import mysql from 'mysql2/promise'

// 数据库配置
const dbConfig = {
  host: process.env.TIDB_HOST,
  port: Number(process.env.TIDB_PORT) || 4000,
  user: process.env.TIDB_USER,
  password: process.env.TIDB_PASSWORD,
  database: process.env.TIDB_DATABASE,
  ssl: process.env.TIDB_ENABLE_SSL === 'true' ? {
    rejectUnauthorized: true
  } : undefined,
  connectionLimit: 10
}

// 创建连接池
const pool = mysql.createPool(dbConfig)

// 查询辅助函数
export async function dbQuery(sql: string, params?: any[]) {
  const [rows] = await pool.execute(sql, params)
  return rows
}

// 获取连接
export async function getConnection() {
  return await pool.getConnection()
}

export default pool
