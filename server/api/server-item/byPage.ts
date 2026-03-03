import { dbQuery } from "~~/server/utils/db";

const mock = {
  "success": true,
  "message": "查询成功",
  "data": [
    {
      "id": 3,
      "service_category_id": 2,
      "name": "牙医上药（派力奥）",
      "rank": 100,
      "unit": "元/支",
      "is_open": 1,
      "created_at": "2025-10-18T22:25:22.000Z",
      "updated_at": "2025-10-18T22:25:22.000Z",
      "deleted_at": "2025-11-07T20:41:05.903Z",
      "description": "",
      "price": ""
    },
    {
      "id": 30001,
      "service_category_id": 30001,
      "name": "全瓷牙",
      "rank": 100,
      "unit": "元/颗",
      "is_open": 1,
      "created_at": "2025-10-19T00:33:21.000Z",
      "updated_at": "2025-10-19T00:33:36.000Z",
      "deleted_at": "2025-11-07T20:41:09.186Z",
      "description": "",
      "price": ""
    },
    {
      "id": 30002,
      "service_category_id": 2,
      "name": "CT检查",
      "rank": 100,
      "unit": "元/张",
      "is_open": 1,
      "created_at": "2025-10-19T00:34:28.000Z",
      "updated_at": "2025-11-01T04:40:33.000Z",
      "deleted_at": "2025-11-07T20:41:11.857Z",
      "description": "",
      "price": ""
    }
  ]
}

export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    // 页码
    const page = Number(query.page) || 1
    // 页容量
    const pageSize = Number(query.pageSize) || 10

    // 查询数据库
    const sql = `SELECT * FROM dentistdb.server_item LIMIT ${page},${pageSize};`

    // const result = await dbQuery(sql)

    return mock

    // return {
    //     success: true,
    //     message: '查询成功',
    //     data: result
    // }
});