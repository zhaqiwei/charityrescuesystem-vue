<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>公益平台管理系统</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.8/dist/chart.umd.min.js"></script>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap">

  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: '#165DFF',
            secondary: '#00B42A',
            warning: '#FF7D00',
            danger: '#F53F3F',
            info: '#86909C',
            light: '#F2F3F5',
            dark: '#1D2129',
            sidebar: '#091E42',
            'sidebar-hover': '#162D50',
            'card-bg': '#FFFFFF',
          },
          fontFamily: {
            inter: ['Inter', 'sans-serif'],
          },
          boxShadow: {
            'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
            'dropdown': '0 4px 16px rgba(0, 0, 0, 0.12)',
          }
        },
      }
    }
  </script>

  <style type="text/tailwindcss">
    @layer utilities {
      .content-auto {
        content-visibility: auto;
      }
      .sidebar-item-active {
        @apply bg-sidebar-hover border-l-4 border-primary text-white;
      }
      .transition-custom {
        @apply transition-all duration-300 ease-in-out;
      }
      .card-hover {
        @apply hover:shadow-lg hover:-translate-y-1 transition-custom;
      }
      .nav-item-hover {
        @apply hover:bg-primary/10 transition-custom;
      }
    }
  </style>
</head>
<body class="font-inter bg-gray-50 text-dark">
<div class="flex flex-col h-screen overflow-hidden">
  <!-- 顶部导航栏 -->
  <header class="bg-primary text-white shadow-md z-10">
    <div class="flex items-center justify-between h-16 px-6">
      <!-- 左侧Logo和标题 -->
      <div class="flex items-center space-x-2">
        <div class="text-2xl">
          <i class="fa fa-heart-o"></i>
        </div>
        <h1 class="text-xl font-semibold tracking-wide">公益平台管理系统</h1>
      </div>

      <!-- 右侧用户信息和操作 -->
      <div class="flex items-center space-x-4">
        <button class="p-2 rounded-full nav-item-hover relative">
          <i class="fa fa-bell-o"></i>
          <span class="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full"></span>
        </button>
        <button class="p-2 rounded-full nav-item-hover">
          <i class="fa fa-cog"></i>
        </button>
        <div class="flex items-center space-x-2 cursor-pointer group">
          <img src="https://picsum.photos/200/200?random=1" alt="管理员头像" class="w-8 h-8 rounded-full object-cover border-2 border-white/50">
          <span class="hidden md:inline font-medium">管理员</span>
          <i class="fa fa-angle-down text-xs group-hover:rotate-180 transition-transform duration-300"></i>

          <!-- 下拉菜单 -->
          <div class="absolute right-4 top-16 w-48 bg-white rounded-lg shadow-dropdown opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-custom z-20">
            <div class="py-2">
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <i class="fa fa-user-o mr-2"></i>个人资料
              </a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <i class="fa fa-cog mr-2"></i>账户设置
              </a>
              <div class="border-t border-gray-100 my-1"></div>
              <button id="logoutBtn" class="w-full text-left px-4 py-2 text-sm text-danger hover:bg-gray-100">
                <i class="fa fa-sign-out mr-2"></i>退出登录
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- 主内容区 -->
  <div class="flex flex-1 overflow-hidden">
    <!-- 侧边栏导航 -->
    <aside class="w-64 bg-sidebar text-white shadow-lg z-10 hidden md:block">
      <div class="flex flex-col h-full">
        <!-- 侧边栏菜单 -->
        <nav class="flex-1 overflow-y-auto py-4">
          <div class="px-4 mb-4">
            <p class="text-xs text-gray-400 uppercase tracking-wider">主导航</p>
          </div>

          <div class="space-y-1 px-2">
            <a href="#" class="flex items-center px-4 py-3 rounded-lg sidebar-item-active">
              <i class="fa fa-home w-5 text-center"></i>
              <span class="ml-3">系统首页</span>
            </a>

            <div class="space-y-1">
              <button class="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-sidebar-hover transition-custom">
                <div class="flex items-center">
                  <i class="fa fa-users w-5 text-center"></i>
                  <span class="ml-3">用户管理</span>
                </div>
                <i class="fa fa-angle-down text-xs transition-transform duration-300"></i>
              </button>
              <div class="pl-10 space-y-1">
                <a href="#" class="block px-4 py-2 rounded-lg hover:bg-sidebar-hover transition-custom">
                  普通用户
                </a>
                <a href="#" class="block px-4 py-2 rounded-lg hover:bg-sidebar-hover transition-custom">
                  志愿者
                </a>
              </div>
            </div>

            <div class="space-y-1">
              <button class="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-sidebar-hover transition-custom">
                <div class="flex items-center">
                  <i class="fa fa-gift w-5 text-center"></i>
                  <span class="ml-3">捐赠管理</span>
                </div>
                <i class="fa fa-angle-down text-xs transition-transform duration-300"></i>
              </button>
              <div class="pl-10 space-y-1">
                <a href="#" class="block px-4 py-2 rounded-lg hover:bg-sidebar-hover transition-custom">
                  物资捐赠
                </a>
                <a href="#" class="block px-4 py-2 rounded-lg hover:bg-sidebar-hover transition-custom">
                  资金捐赠
                </a>
              </div>
            </div>

            <div class="space-y-1">
              <button class="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-sidebar-hover transition-custom">
                <div class="flex items-center">
                  <i class="fa fa-comments w-5 text-center"></i>
                  <span class="ml-3">社区管理</span>
                </div>
                <i class="fa fa-angle-down text-xs transition-transform duration-300"></i>
              </button>
              <div class="pl-10 space-y-1">
                <a href="#" class="block px-4 py-2 rounded-lg hover:bg-sidebar-hover transition-custom">
                  未审核
                </a>
                <a href="#" class="block px-4 py-2 rounded-lg hover:bg-sidebar-hover transition-custom">
                  已发布
                </a>
              </div>
            </div>

            <div class="px-4 mb-4 mt-8">
              <p class="text-xs text-gray-400 uppercase tracking-wider">系统设置</p>
            </div>

            <a href="#" class="flex items-center px-4 py-3 rounded-lg hover:bg-sidebar-hover transition-custom">
              <i class="fa fa-cog w-5 text-center"></i>
              <span class="ml-3">系统配置</span>
            </a>

            <a href="#" class="flex items-center px-4 py-3 rounded-lg hover:bg-sidebar-hover transition-custom">
              <i class="fa fa-bell-o w-5 text-center"></i>
              <span class="ml-3">通知管理</span>
            </a>

            <a href="#" class="flex items-center px-4 py-3 rounded-lg hover:bg-sidebar-hover transition-custom">
              <i class="fa fa-file-text-o w-5 text-center"></i>
              <span class="ml-3">日志记录</span>
            </a>
          </div>
        </nav>

        <!-- 侧边栏底部 -->
        <div class="p-4 border-t border-gray-700">
          <div class="flex items-center">
            <img src="https://picsum.photos/200/200?random=1" alt="管理员头像" class="w-8 h-8 rounded-full object-cover">
            <div class="ml-3">
              <p class="text-sm font-medium">管理员</p>
              <p class="text-xs text-gray-400">admin@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </aside>

    <!-- 主内容 -->
    <main class="flex-1 overflow-y-auto bg-gray-50 p-6">
      <!-- 页面标题 -->
      <div class="mb-6">
        <h2 class="text-[clamp(1.5rem,3vw,2rem)] font-semibold text-gray-800">系统仪表盘</h2>
        <p class="text-gray-500 mt-1">欢迎回来，管理员！今天是 <span id="currentDate"></span></p>
      </div>

      <!-- 数据概览卡片 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <!-- 用户统计卡片 -->
        <div class="bg-white rounded-xl shadow-card p-6 card-hover">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-500 text-sm">用户总数</p>
              <h3 class="text-2xl font-bold mt-1">2,548</h3>
              <p class="text-green-500 text-xs mt-2 flex items-center">
                <i class="fa fa-arrow-up mr-1"></i> 12.5% <span class="text-gray-500 ml-1">较上月</span>
              </p>
            </div>
            <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-primary">
              <i class="fa fa-users text-xl"></i>
            </div>
          </div>
        </div>

        <!-- 捐赠统计卡片 -->
        <!-- 待审核内容卡片 -->
        <div class="bg-white rounded-xl shadow-card p-6 card-hover">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-500 text-sm">待审核内容</p>
              <h3 class="text-2xl font-bold mt-1">18</h3>
              <p class="text-red-500 text-xs mt-2 flex items-center">
                <i class="fa fa-arrow-up mr-1"></i> 5.3% <span class="text-gray-500 ml-1">较昨日</span>
              </p>
            </div>
            <div class="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-danger">
              <i class="fa fa-exclamation-circle text-xl"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- 图表和表格区域 -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <!-- 捐赠趋势图表 -->
        <div class="bg-white rounded-xl shadow-card p-6 lg:col-span-2">
          <div class="flex items-center justify-between mb-6">
            <h3 class="font-semibold text-gray-800">捐赠趋势分析</h3>
            <div class="flex space-x-2">
              <button class="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">月度</button>
              <button class="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-500">季度</button>
              <button class="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-500">年度</button>
            </div>
          </div>
          <!-- 图表容器 -->
          <canvas id="donationChart"></canvas>
        </div>

        <!-- 待办事项 -->
        <div class="bg-white rounded-xl shadow-card p-6">
          <div class="flex items-center justify-between mb-6">
            <h3 class="font-semibold text-gray-800">待办事项</h3>
            <button class="text-primary text-sm hover:underline" id="addTodoBtn">添加</button>
          </div>
          <div class="space-y-4" id="todoList">
            <div class="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-custom">
              <input type="checkbox" class="mt-1">
              <div class="ml-3 flex-1">
                <p class="text-sm font-medium">审核新注册志愿者</p>
                <p class="text-xs text-gray-500 mt-1">12个待审核</p>
              </div>
              <span class="text-xs px-2 py-1 bg-red-100 text-red-500 rounded-full">紧急</span>
            </div>

            <div class="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-custom">
              <input type="checkbox" class="mt-1">
              <div class="ml-3 flex-1">
                <p class="text-sm font-medium">处理捐赠物资申请</p>
                <p class="text-xs text-gray-500 mt-1">5个待处理</p>
              </div>
              <span class="text-xs px-2 py-1 bg-yellow-100 text-yellow-500 rounded-full">中等</span>
            </div>

            <div class="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-custom">
              <input type="checkbox" class="mt-1" checked>
              <div class="ml-3 flex-1">
                <p class="text-sm font-medium line-through text-gray-400">发布3月公益活动报告</p>
                <p class="text-xs text-gray-500 mt-1">已完成</p>
              </div>
              <span class="text-xs px-2 py-1 bg-green-100 text-green-500 rounded-full">已完成</span>
            </div>

            <div class="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-custom">
              <input type="checkbox" class="mt-1">
              <div class="ml-3 flex-1">
                <p class="text-sm font-medium">更新系统公告</p>
                <p class="text-xs text-gray-500 mt-1">本周内完成</p>
              </div>
              <span class="text-xs px-2 py-1 bg-blue-100 text-blue-500 rounded-full">常规</span>
            </div>

            <div class="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-custom">
              <input type="checkbox" class="mt-1">
              <div class="ml-3 flex-1">
                <p class="text-sm font-medium">审核社区内容</p>
                <p class="text-xs text-gray-500 mt-1">18条待审核</p>
              </div>
              <span class="text-xs px-2 py-1 bg-red-100 text-red-500 rounded-full">紧急</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>

<!-- 退出登录确认对话框 -->
<div id="logoutModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden">
  <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md transform transition-all scale-95 opacity-0" id="modalContent">
    <div class="text-center mb-4">
      <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
        <i class="fa fa-sign-out text-2xl text-red-500"></i>
      </div>
      <h3 class="text-xl font-semibold mt-4">确认退出登录吗？</h3>
      <p class="text-gray-500 mt-2">您将退出当前账户，未保存的内容可能会丢失。</p>
    </div>
    <div class="flex space-x-3 mt-6">
      <button id="cancelLogout" class="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-custom">
        取消
      </button>
      <button id="confirmLogout" class="flex-1 py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-custom">
        确认
      </button>
    </div>
  </div>
</div>

<!-- 添加待办事项输入框 -->
<div id="addTodoModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden">
  <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md transform transition-all scale-95 opacity-0" id="addTodoModalContent">
    <div class="text-center mb-4">
      <h3 class="text-xl font-semibold mt-4">添加待办事项</h3>
      <input type="text" id="newTodoInput" class="w-full p-2 border border-gray-300 rounded-lg mt-2" placeholder="请输入待办事项">
    </div>
    <div class="flex space-x-3 mt-6">
      <button id="cancelAddTodo" class="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-custom">
        取消
      </button>
      <button id="confirmAddTodo" class="flex-1 py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-custom">
        确认
      </button>
    </div>
  </div>
</div>

<script>
  // 设置当前日期
  const setCurrentDate = () => {
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('zh-CN', options);
    document.getElementById('currentDate').textContent = formattedDate;
  };

  // 初始化捐赠趋势图表
  const initDonationChart = () => {
    const ctx = document.getElementById('donationChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['一月', '二月', '三月', '四月', '五月', '六月', '七月'],
        datasets: [{
          label: '捐赠金额',
          data: [1200, 1500, 1800, 2000, 2200, 2500, 2800],
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  };

  // 退出登录模态框
  const setupLogoutModal = () => {
    const logoutBtn = document.getElementById('logoutBtn');
    const logoutModal = document.getElementById('logoutModal');
    const modalContent = document.getElementById('modalContent');
    const cancelLogout = document.getElementById('cancelLogout');
    const confirmLogout = document.getElementById('confirmLogout');

    logoutBtn.addEventListener('click', () => {
      logoutModal.classList.remove('hidden');
      setTimeout(() => {
        modalContent.classList.remove('scale-95', 'opacity-0');
        modalContent.classList.add('scale-100', 'opacity-100');
      }, 10);
    });

    const closeModal = () => {
      modalContent.classList.remove('scale-100', 'opacity-100');
      modalContent.classList.add('scale-95', 'opacity-0');
      setTimeout(() => {
        logoutModal.classList.add('hidden');
      }, 300);
    };

    cancelLogout.addEventListener('click', closeModal);
    logoutModal.addEventListener('click', (e) => {
      if (e.target === logoutModal) {
        closeModal();
      }
    });

    confirmLogout.addEventListener('click', () => {
      // 实际的退出登录逻辑
      localStorage.removeItem('userToken'); // 清除本地存储的用户令牌
      window.location.href = '/login'; // 跳转到登录页面
    });
  };

  // 添加待办事项模态框
  const setupAddTodoModal = () => {
    const addTodoBtn = document.getElementById('addTodoBtn');
    const addTodoModal = document.getElementById('addTodoModal');
    const addTodoModalContent = document.getElementById('addTodoModalContent');
    const cancelAddTodo = document.getElementById('cancelAddTodo');
    const confirmAddTodo = document.getElementById('confirmAddTodo');
    const newTodoInput = document.getElementById('newTodoInput');
    const todoList = document.getElementById('todoList');

    addTodoBtn.addEventListener('click', () => {
      addTodoModal.classList.remove('hidden');
      setTimeout(() => {
        addTodoModalContent.classList.remove('scale-95', 'opacity-0');
        addTodoModalContent.classList.add('scale-100', 'opacity-100');
      }, 10);
    });

    const closeAddTodoModal = () => {
      addTodoModalContent.classList.remove('scale-100', 'opacity-100');
      addTodoModalContent.classList.add('scale-95', 'opacity-0');
      setTimeout(() => {
        addTodoModal.classList.add('hidden');
      }, 300);
    };

    cancelAddTodo.addEventListener('click', closeAddTodoModal);
    addTodoModal.addEventListener('click', (e) => {
      if (e.target === addTodoModal) {
        closeAddTodoModal();
      }
    });

    confirmAddTodo.addEventListener('click', () => {
      const newTodoText = newTodoInput.value;
      if (newTodoText) {
        const newTodoItem = document.createElement('div');
        newTodoItem.classList.add('flex', 'items-start', 'p-3', 'hover:bg-gray-50', 'rounded-lg', 'transition-custom');
        newTodoItem.innerHTML = `
          <input type="checkbox" class="mt-1">
          <div class="ml-3 flex-1">
            <p class="text-sm font-medium">${newTodoText}</p>
            <p class="text-xs text-gray-500 mt-1">待处理</p>
          </div>
          <span class="text-xs px-2 py-1 bg-yellow-100 text-yellow-500 rounded-full">中等</span>
        `;
        todoList.appendChild(newTodoItem);
        newTodoInput.value = '';
        closeAddTodoModal();
      }
    });
  };

  // 初始化所有功能
  document.addEventListener('DOMContentLoaded', () => {
    setCurrentDate();
    initDonationChart();
    setupLogoutModal();
    setupAddTodoModal();
  });
</script>
</body>
</html>