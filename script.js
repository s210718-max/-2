let currentTheme = 'theme-sweet';
let currentIcon = '🎁';

// 即時更新預覽文字
function update() {
    const text = document.getElementById('inputMsg').value;
    document.getElementById('previewText').innerText = text || "生日快樂！";
}

// 切換主題樣式
function setTheme(t, i, btn) {
    currentTheme = t;
    currentIcon = i;
    
    // 改變預覽區 Class 和 圖示
    const preview = document.getElementById('card-preview');
    preview.className = t;
    document.getElementById('previewIcon').innerText = i;
    
    // 更新按鈕狀態
    document.querySelectorAll('.btn-theme').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

// 生成最終網址
function generateURL() {
    const msg = encodeURIComponent(document.getElementById('inputMsg').value || "生日快樂！");
    const music = encodeURIComponent(document.getElementById('inputMusic').value);
    
    // 取得當前資料夾路徑
    const path = window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1);
    
    // 組合成帶有參數的 card.html 網址
    const finalURL = `${path}card.html?msg=${msg}&m=${music}&t=${currentTheme}&i=${currentIcon}`;
    
    const res = document.getElementById('result-link');
    res.style.display = 'block';
    res.innerHTML = `<strong>複製網址傳給壽星：</strong><br><a href="${finalURL}" target="_blank">${finalURL}</a>`;
}
