document.addEventListener('DOMContentLoaded', () => {
    // 1. 抓取所有需要的 HTML 元素
    const openButton = document.getElementById('open-button');
    const cardCover = document.getElementById('card-cover');
    const cardInside = document.getElementById('card-inside');

    // 2. 建立音樂物件 (將 MP3 檔案放進程式中)
    // 確保你的 MP3 檔案路徑是正確的！ (assets/你的檔案名.mp3)
    const birthdaySong = new Audio('assets/birthday.mp3');
    const musicButton = document.getElementById('music-button');
     
    birthdaySong.volume = 1; // 設定音量，避免聲音太大
    
    // 用來追蹤音樂狀態的變數
    let isMusicPlaying = false; 

    // A. 設定「打開卡片」的互動邏輯
    openButton.addEventListener('click', () => {
        // A. 隱藏封面 (移除樣式)
        cardCover.classList.add('hidden');
        // B. 顯示內頁 (移除樣式)
        cardInside.classList.remove('hidden');

        // (可選) 讓卡片容器做一個視覺上的「打開」動畫，
        // 雖然我們是用隱藏/顯示，但你可以在 CSS 裡增加動畫效果。
        console.log("卡片已打開！");
    });

    // B. 設定「播放音樂」的互動邏輯 (可重複點擊播放/暫停)
    musicButton.addEventListener('click', () => {
        
        if (isMusicPlaying) {
            // 如果音樂正在播放，就暫停
            birthdaySong.pause();
            musicButton.textContent = '播放生日歌';
            isMusicPlaying = false;
        } else {
            // 如果音樂是暫停的，就播放
            birthdaySong.play()
                .then(() => {
                    // 播放成功
                    musicButton.textContent = '音樂播放中 (點擊停止)';
                    isMusicPlaying = true;
                    // (進階) 讓歌曲在結束後自動從頭播放 (循環)
                    birthdaySong.loop = true; 
                })
                .catch(error => {
                    // 播放失敗（通常是瀏覽器阻擋，或 MP3 路徑錯誤）
                    console.error("音樂播放失敗：", error);
                    alert("音樂無法播放，請檢查 MP3 檔案路徑或瀏覽器設定。");
                });
        }
    });
});
