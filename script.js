// 獲取漢堡圖示和手機選單的元素
const menuToggle = document.getElementById("menu-toggle"); // 漢堡圖示
const mobileMenu = document.querySelector(".menulist"); // 手機版選單容器

// 點擊漢堡圖示時，切換選單顯示或隱藏
menuToggle.addEventListener("click", () => {
    const isHidden = mobileMenu.style.display === "none" || !mobileMenu.style.display; // 確認目前選單是否隱藏
    mobileMenu.style.display = isHidden ? "block" : "none"; // 顯示或隱藏選單
});

// 預設隱藏手機選單（當頁面載入時）
window.addEventListener("load", () => {
    mobileMenu.style.display = "none";
});
