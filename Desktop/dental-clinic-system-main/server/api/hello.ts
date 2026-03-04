
export default defineEventHandler((event) => {
    return {
        // 环境变量
        message: 'Hello World' +  process.env.TIDB_HOST
    }
})
