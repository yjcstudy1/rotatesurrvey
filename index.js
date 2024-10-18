// 定義一個全局變量來跟踪當前的問卷索引
let currentIndex = 0;

// 選擇當前問卷 URL
const selectedUrl = urls[currentIndex];

// 更新索引以便下次選擇
currentIndex = (currentIndex + 1) % urls.length; // 循環回到0

// 進行重定向
window.location.href = selectedUrl;

