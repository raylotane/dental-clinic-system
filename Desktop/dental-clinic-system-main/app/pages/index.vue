<template>
  <div class="common-layout" jiustify="center" align="center">
    <el-container>
      <el-header>
        <div id="title">上海瑞来口腔诊所</div>
        <div id=subtitle>专业口腔医疗，呵护您的健康笑容</div>
        <div id=fullscreen>
          <el-button id="fullscreen-button">全屏模式</el-button>
        </div>
      </el-header>
      <hr>
      <el-main>
        <div id="pricelist">诊所价目表</div>
        <div id="description">提供专业的口腔医疗服务，价格透明公开</div>
        <el-tabs id="tab">
        <el-tab-pane label="口腔检查" name="first">
          <el-tabs-pane>
            <el-table :data="[
              { name: '口腔检查', price: '100元' },
              { name: '牙齿清洁', price: '200元' },
              { name: '牙齿美白', price: '300元' }
            ]" style="width: 100%">
              <el-table-column prop="name" label="项目名称"></el-table-column>
              <el-table-column prop="price" label="价格"></el-table-column>
            </el-table>
          </el-tabs-pane>
        </el-tab-pane>
        <el-tab-pane label="固定修复" name="second">
            <el-table :data="[
              { name: '牙冠修复', price: '500元' },
              { name: '牙桥修复', price: '800元' },
              { name: '牙齿贴面', price: '600元' }
            ]" style="width: 100%">
              <el-table-column prop="name" label="项目名称"></el-table-column>
              <el-table-column prop="price" label="价格"></el-table-column>
            </el-table>
        </el-tab-pane>
          <el-tab-pane label="人工牙" name="third">
          <el-table :data="[
              { name: '单颗人工牙', price: '1000元' },
              { name: '多颗人工牙', price: '2000元' },
              { name: '全口义齿', price: '5000元' }
          ]" style="width: 100%">
          <el-table-column prop="name" label="项目名称"></el-table-column>
          <el-table-column prop="price" label="价格"></el-table-column>
          </el-table>
          </el-tab-pane>
        <el-tab-pane label="基托" name="fourth">Task</el-tab-pane>
      </el-tabs>
      
      </el-main>
    </el-container>
  </div>
</template>


<style>
.el-header {
  display: flex;
  flex-direction: column;  
  justify-content: center; 
  height: 120px !important; 
  padding: 20px 30px;
  background: #fff;
}

#title {
  font-size: 28px;
  font-weight: 600;
  color:blue;
  margin-bottom: 8px;
  text-align: left;
}

#subtitle {
  font-size: 16px;
  color: #666;
  text-align: left;
}

#fullscreen {
  position: absolute;
  top: 20px;
  right: 100px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
}

#fullscreen-button {
  background-color: blue;
  border: none;
  color:white;
  cursor: pointer;
  margin-top: 20px;
}

#pricelist {
  font-size: 25px;
  font-weight: 500;
  color: #2c3e50;
  margin-bottom: 12px;
  position: relative;
}

#description {
  font-size: 18px;
  color: #64748b;
}

#tab {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>


