<!-- DoubaoChat.vue -->
<template>
  <div class="doubao-chat-page">
    <div class="chat-header">
      <h2>智能咨询</h2>
      <button @click="$router.back()">返回</button>
    </div>

    <div class="chat-container" ref="chatContainer">
      <div v-for="(msg, index) in chatMessages" :key="index" class="chat-message">
        <div :class="['message-avatar', msg.role === 'user' ? 'user-avatar' : 'ai-avatar']">
          <span :class="msg.role === 'user' ? 'user-icon' : 'ai-icon'">
            {{ msg.role === 'user' ? '👤' : '🤖' }}
          </span>
        </div>
        <div :class="['message-content', msg.role === 'user' ? 'user-content' : 'ai-content']">
          <p>{{ msg.content }}</p>
        </div>
      </div>
    </div>

    <div class="chat-input-area">
      <textarea
          v-model="userInput"
          placeholder="输入您的问题..."
          @keyup.enter="sendMessage"
      ></textarea>
      <button @click="sendMessage" :disabled="isLoading">
        {{ isLoading ? '发送中...' : '发送' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chatMessages: [
        { role: 'assistant', content: '您好！我是咨询小助手，有什么可以帮助您的吗？' }
      ],
      userInput: '',
      isLoading: false,
      apiKey: 'a6c27aa2-8693-4fdc-89c2-558b6c2f3501' // 替换为您的API Key
    };
  },
  methods: {
    sendMessage() {
      if (!this.userInput.trim()) return;

      // 添加用户消息
      const userMessage = { role: 'user', content: this.userInput };
      this.chatMessages.push(userMessage);
      this.userInput = '';
      this.isLoading = true;

      // 调用豆包API
      fetch('https://ark.cn-beijing.volces.com/api/v3/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: 'doubao-pro-32k-241215',
          messages: this.chatMessages
        })
      })
          .then(response => response.json())
          .then(data => {
            if (data.choices && data.choices.length > 0) {
              const aiMessage = {
                role: 'assistant',
                content: data.choices[0].message.content
              };
              this.chatMessages.push(aiMessage);
            } else {
              this.chatMessages.push({
                role: 'assistant',
                content: '抱歉，我暂时无法回答这个问题。'
              });
            }
          })
          .catch(error => {
            console.error('API调用错误:', error);
            this.chatMessages.push({
              role: 'assistant',
              content: '网络错误，请稍后再试。'
            });
          })
          .finally(() => {
            this.isLoading = false;
            this.$nextTick(() => {
              this.$refs.chatContainer.scrollTop = this.$refs.chatContainer.scrollHeight;
            });
          });
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.chatContainer.scrollTop = this.$refs.chatContainer.scrollHeight;
    });
  }
};
</script>

<style scoped>
.doubao-chat-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f5f7fa;
}

.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background-color: #4a90e2;
  color: white;
  box-shadow: 0 2px 10px rgba(74, 144, 226, 0.2);
}

.chat-header button {
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.chat-container {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.chat-message {
  display: flex;
  gap: 15px;
}

.message-avatar {
  min-width: 40px;
  display: flex;
  align-items: flex-start;
}

.user-avatar {
  justify-content: flex-end;
}

.ai-avatar {
  justify-content: flex-start;
}

.message-content {
  max-width: 80%;
  padding: 12px 18px;
  border-radius: 18px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.user-content {
  background-color: #4a90e2;
  color: white;
  align-self: flex-end;
  border-radius: 18px 18px 0 18px;
}

.ai-content {
  background-color: white;
  color: #333;
  align-self: flex-start;
  border-radius: 18px 18px 18px 0;
}

.message-avatar span {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.user-icon {
  background-color: #4a90e2;
  color: white;
}

.ai-icon {
  background-color: #e0e0e0;
  color: #555;
}

.chat-input-area {
  padding: 15px 20px;
  background-color: white;
  display: flex;
  gap: 15px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
}

.chat-input-area textarea {
  flex: 1;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  padding: 12px 15px;
  resize: none;
  font-size: 16px;
  outline: none;
}

.chat-input-area button {
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;
}

.chat-input-area button:hover {
  background-color: #3a78c2;
}

.chat-input-area button:disabled {
  background-color: #e0e0e0;
  cursor: not-allowed;
}
</style>