# API 接口文档

> 基础地址: `https://dentist-fc.flaging.cn/api`

---

## 目录

1. [基础请求配置](#1-基础请求配置)
2. [服务分类 (ServiceCategory)](#2-服务分类-servicecategory)
3. [服务项 (ServiceItem)](#3-服务项-serviceitem)
4. [服务详情 (ServiceDetail)](#4-服务详情-servicedetail)
5. [设置 (Settings)](#5-设置-settings)
6. [文件上传 (UploadFile)](#6-文件上传-uploadfile)

---

## 1. 基础请求配置

**文件**: `request.ts`

### 基础配置

| 配置项 | 值 |
|--------|-----|
| 主机地址 | `https://dentist-fc.flaging.cn` |
| API前缀 | `api` |
| 完整基础URL | `https://dentist-fc.flaging.cn/api` |

### 通用类型定义

```typescript
export type TApiResponseBody<T> = {
    success: boolean;
    message: string;
    data: T;
}
```

### 通用请求方法

| 方法名 | 说明 | 参数 |
|--------|------|------|
| `request` | axios实例 | - |
| `fetchData<T>` | 通用数据请求 | `(uri, method, data?)` |
| `getFetchData<T>` | GET请求封装 | `(uri)` |

---

## 2. 服务分类 (ServiceCategory)

**文件**: `serviceCategory.ts`

### 数据类型

```typescript
export type TServiceCategory = {
    id: string;
    name: string;       // 分类名称
    rank: number;       // 排序
    isOpen: number;     // 是否开启 (0/1)
};
```

### 接口列表

#### 2.1 获取分类列表
- **方法**: `listServiceCategories`
- **请求方式**: GET
- **路径**: `/serviceCategory`
- **请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| name | string | 否 | 分类名称（搜索） |
| isOpen | number | 否 | 是否开启 |
| page | number | 否 | 页码 |
| limit | number | 否 | 每页数量 |

- **响应数据**:
```typescript
{
    data: TServiceCategory[],
    total: number,
    limit: number
}
```

#### 2.2 创建分类
- **方法**: `createServiceCategory`
- **请求方式**: POST
- **路径**: `/serviceCategory`
- **请求体**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| name | string | 是 | 分类名称 |
| rank | number | 是 | 排序 |
| isOpen | number | 否 | 是否开启 |

#### 2.3 更新分类
- **方法**: `updateServiceCategory`
- **请求方式**: PUT
- **路径**: `/serviceCategory/{id}`
- **请求体**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| name | string | 否 | 分类名称 |
| rank | number | 否 | 排序 |
| isOpen | number | 否 | 是否开启 |

#### 2.4 删除分类
- **方法**: `deleteServiceCategory`
- **请求方式**: DELETE
- **路径**: `/serviceCategory/{id}`

---

## 3. 服务项 (ServiceItem)

**文件**: `serviceItem.ts`

### 数据类型

```typescript
export type TServiceItem = {
    id: string;
    serviceCategoryId: number;  // 所属分类ID
    description: string;         // 描述
    name: string;               // 服务名称
    rank: number;               // 排序
    price: number;              // 价格
    unit: string;               // 单位
    isOpen: number;             // 是否开启 (0/1)
};
```

### 接口列表

#### 3.1 获取服务项列表
- **方法**: `listServiceItems`
- **请求方式**: GET
- **路径**: `/serviceItem`
- **请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| serviceCategoryId | string | 否 | 分类ID（筛选） |
| name | string | 否 | 服务名称（搜索） |
| isOpen | number | 否 | 是否开启 |
| page | number | 否 | 页码 |
| limit | number | 否 | 每页数量 |

- **响应数据**:
```typescript
{
    data: TServiceItem[],
    total: number,
    limit: number
}
```

#### 3.2 创建服务项
- **方法**: `createServiceItem`
- **请求方式**: POST
- **路径**: `/serviceItem`
- **请求体**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| serviceCategoryId | string | 是 | 所属分类ID |
| name | string | 是 | 服务名称 |
| rank | number | 是 | 排序 |
| price | number | 是 | 价格 |
| unit | string | 是 | 单位 |
| isOpen | number | 否 | 是否开启 |

#### 3.3 更新服务项
- **方法**: `updateServiceItem`
- **请求方式**: PUT
- **路径**: `/serviceItem/{id}`
- **请求体**: `Partial<TServiceItem>`

#### 3.4 删除服务项
- **方法**: `deleteServiceItem`
- **请求方式**: DELETE
- **路径**: `/serviceItem/{id}`

---

## 4. 服务详情 (ServiceDetail)

**文件**: `serviceDetail.ts`

### 数据类型

```typescript
export type TServiceDetail = {
    id: number;
    serviceItemId: number;      // 关联服务项ID
    descriptions?: string[];     // 多行描述
    precautions?: string[];      // 注意事项
    imageUrls?: string[];        // 图片数组（URL）
    createdAt?: string;
    updatedAt?: string;
};
```

### 接口列表

#### 4.1 获取服务详情列表
- **方法**: `listServiceDetails`
- **请求方式**: GET
- **路径**: `/serviceDetail`
- **请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| serviceItemId | number/string | 否 | 服务项ID（筛选） |
| page | number | 否 | 页码 |
| limit | number | 否 | 每页数量 |

- **响应数据**:
```typescript
{
    data: TServiceDetail[],
    total: number,
    limit: number
}
```

#### 4.2 根据ID获取详情
- **方法**: `getServiceDetailById`
- **请求方式**: GET
- **路径**: `/serviceDetail/{id}`

#### 4.3 根据服务项ID获取详情
- **方法**: `getServiceDetailByServiceItemId`
- **请求方式**: GET
- **路径**: `/serviceDetail?serviceItemId={serviceItemId}`

#### 4.4 创建服务详情
- **方法**: `createServiceDetail`
- **请求方式**: POST
- **路径**: `/serviceDetail`
- **请求体**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| serviceItemId | number/string | 是 | 关联服务项ID |
| descriptions | string[] | 否 | 多行描述 |
| precautions | string[] | 否 | 注意事项 |
| images | string[] | 否 | 图片数组 |

#### 4.5 更新服务详情
- **方法**: `updateServiceDetail`
- **请求方式**: PUT
- **路径**: `/serviceDetail/{id}`
- **请求体**: 同创建接口

#### 4.6 删除服务详情
- **方法**: `deleteServiceDetail`
- **请求方式**: DELETE
- **路径**: `/serviceDetail/{id}`

---

## 5. 设置 (Settings)

**文件**: `settings.ts`

### 数据类型

```typescript
export interface IGlobalData {
    shopName: string;   // 店铺名称
    shopDesc: string;   // 店铺描述
}
```

### 接口列表

#### 5.1 获取设置
- **方法**: `getSetting`
- **请求方式**: GET
- **路径**: `/setting`

#### 5.2 保存设置
- **方法**: `saveSetting`
- **请求方式**: PUT
- **路径**: `/setting`
- **请求体**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| shopName | string | 是 | 店铺名称 |
| shopDesc | string | 是 | 店铺描述 |

---

## 6. 文件上传 (UploadFile)

**文件**: `uploadFile.ts`

### 接口列表

#### 6.1 上传文件
- **方法**: `uploadFile`
- **请求方式**: POST
- **路径**: `/file`
- **请求体**: `FormData` (包含 file 字段)
- **参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| file | File | 是 | 要上传的文件 |

---

## 导出汇总

**文件**: `inde.ts`

```typescript
export * from './request';
export * from './settings';
```

---

## 模块依赖关系

```
inde.ts (入口)
  ├── request.ts (基础请求)
  └── settings.ts (设置)

serviceCategory.ts ──┐
serviceItem.ts ──────┼── 均依赖 request.ts
serviceDetail.ts ────┤
uploadFile.ts ───────┘
```
