import { dbQuery } from '../utils/db'

export default defineEventHandler(async (event) => {
  try {
    // 测试查询 - 获取数据库版本
    const result = await dbQuery('SELECT VERSION() as version')
    
    return {
      success: true,
      message: '数据库连接成功',
      data: result
    }
  } catch (error: any) {
    return {
      success: false,
      message: '数据库连接失败',
      error: error.message
    }
  }
})
