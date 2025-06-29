<template>
  <div class="review-page">
    <!-- 审核筛选区 -->
    <div class="filter-section">
      <div class="filter-item">
        <label for="category">分类：</label>
        <select id="category" v-model="selectedCategory">
          <option value="">全部分类</option>
          <option value="救助心得">救助心得</option>
          <option value="公益疑问">公益疑问</option>
          <option value="感人故事">感人故事</option>
        </select>
      </div>
      <div class="filter-item">
        <label for="status">状态：</label>
        <select id="status" v-model="selectedStatus">
          <option value="">全部</option>
          <option value="待审核">待审核</option>
        </select>
      </div>
      <div class="filter-item">
        <label for="search">搜索：</label>
        <input
            type="text"
            id="search"
            v-model="searchKeyword"
            placeholder="标题/用户"
        />
      </div>
      <button class="filter-btn" @click="handleFilter">筛选</button>
    </div>

    <!-- 帖子列表 -->
    <table class="post-table">
      <thead>
      <tr>
        <th>帖子ID</th>
        <th>标题</th>
        <th>用户</th>
        <th>分类</th>
        <th>提交时间</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="(post, index) in filteredPosts"
          :key="index"
          :class="{ hover: hoverIndex === index }"
          @mouseenter="hoverIndex = index"
          @mouseleave="hoverIndex = -1"
      >
        <td>{{ post.id }}</td>
        <td>{{ post.title }}</td>
        <td>{{ post.user }}</td>
        <td>{{ post.category }}</td>
        <td>{{ post.submitTime }}</td>
        <td>
          <button class="operate-btn pass" @click="handleOperate(post, '通过')">
            审核通过
          </button>
          <button class="operate-btn reject" @click="handleOperate(post, '驳回')">
            驳回
          </button>
          <button class="operate-btn hide" @click="handleOperate(post, '隐藏')">
            隐藏
          </button>
        </td>
      </tr>
      </tbody>
    </table>

    <!-- 批量操作和刷新 -->
    <div class="batch-section">
      <div class="batch-ops">
        <span>批量操作：</span>
        <button class="batch-btn" @click="handleBatchOperate('通过')">通过</button>
        <button class="batch-btn" @click="handleBatchOperate('驳回')">驳回</button>
        <button class="batch-btn" @click="handleBatchOperate('隐藏')">隐藏</button>
      </div>
      <button class="refresh-btn" @click="handleRefresh">刷新列表</button>
    </div>

    <!-- 页脚分页 -->
    <div class="footer">
      <div class="pagination">
        <span>分页控件: {{ currentPage }}/{{ totalPages }}</span>
        <button @click="handlePrevPage" :disabled="currentPage === 1">上一页</button>
        <button @click="handleNextPage" :disabled="currentPage === totalPages">
          下一页
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// 模拟原始帖子数据
const posts = ref([
  {
    id: '2001',
    title: '流浪猫救助经验分享',
    user: '志愿者A',
    category: '救助心得',
    submitTime: '2025-06-20',
  },
  {
    id: '2002',
    title: '如何申请公益项目',
    user: '普通用户',
    category: '公益疑问',
    submitTime: '2025-06-19',
  },
  {
    id: '2003',
    title: '感人救助故事',
    user: '志愿者B',
    category: '感人故事',
    submitTime: '2025-06-18',
  },
]);

// 筛选相关数据
const selectedCategory = ref('');
const selectedStatus = ref('');
const searchKeyword = ref('');
const hoverIndex = ref(-1);

// 分页相关数据
const pageSize = ref(3);
const currentPage = ref(1);
const totalPages = computed(() => Math.ceil(posts.value.length / pageSize.value));

// 筛选后的帖子
const filteredPosts = computed(() => {
  let result = posts.value;
  // 分类筛选
  if (selectedCategory.value) {
    result = result.filter(
        (post) => post.category === selectedCategory.value
    );
  }
  // 状态筛选（这里简单模拟，实际可根据接口返回处理）
  if (selectedStatus.value === '待审核') {
    // 假设这里都是待审核，实际可扩展字段区分
    result = result.filter(() => true);
  }
  // 搜索筛选
  if (searchKeyword.value) {
    result = result.filter(
        (post) =>
            post.title.includes(searchKeyword.value) ||
            post.user.includes(searchKeyword.value)
    );
  }
  // 分页处理
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return result.slice(start, end);
});

// 筛选按钮点击事件
const handleFilter = () => {
  currentPage.value = 1; // 筛选后重置页码
};

// 操作按钮点击事件
const handleOperate = (post, action) => {
  alert(`对帖子【${post.title}】执行 ${action} 操作`);
  // 实际可调用接口，这里仅做演示
};

// 批量操作事件
const handleBatchOperate = (action) => {
  alert(`批量执行 ${action} 操作`);
  // 实际可遍历帖子，调用接口处理
};

// 刷新列表事件
const handleRefresh = () => {
  // 实际可调用接口重新获取数据，这里简单模拟
  alert('列表已刷新');
};

// 上一页事件
const handlePrevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

// 下一页事件
const handleNextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};
</script>

<style scoped>
.review-page {
  width: 90%;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  padding: 20px;
}

.filter-section {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.filter-item {
  display: flex;
  flex-direction: column;
}

.filter-item label {
  margin-bottom: 5px;
  font-weight: 500;
  color: #333;
}

.filter-item select,
.filter-item input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
}

.filter-btn {
  padding: 8px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.filter-btn:hover {
  background-color: #0056b3;
}

.post-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.post-table thead {
  background-color: #f1f1f1;
}

.post-table th,
.post-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.post-table tbody tr {
  transition: background-color 0.3s ease;
}

.post-table tbody tr.hover {
  background-color: #f8faff;
}

.operate-btn {
  margin-right: 5px;
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.operate-btn.pass {
  background-color: #28a745;
  color: #fff;
}

.operate-btn.reject {
  background-color: #dc3545;
  color: #fff;
}

.operate-btn.hide {
  background-color: #6c757d;
  color: #fff;
}

.operate-btn:hover {
  opacity: 0.8;
}

.batch-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0;
}

.batch-ops {
  display: flex;
  gap: 10px;
}

.batch-btn {
  padding: 6px 12px;
  background-color: #6c757d;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.batch-btn:hover {
  background-color: #5a6268;
}

.refresh-btn {
  padding: 6px 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.refresh-btn:hover {
  background-color: #0056b3;
}

.footer {
  text-align: center;
  margin-top: 20px;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.pagination button {
  padding: 6px 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.pagination button:hover:not(:disabled) {
  background-color: #0056b3;
}
</style>