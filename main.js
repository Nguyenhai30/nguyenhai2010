// Khi người dùng click vào bất kỳ đâu trên trang, bật âm thanh và phát nhạc
window.addEventListener('click', function() {
  const audio = document.querySelector('audio');
  if (audio) {
    audio.muted = false; // Bỏ chế độ mute
    audio.play(); // Phát nhạc
  }
});

  
// Khi trang tải xong, thực hiện các bước chuẩn bị
onload = () => {
  // Đảm bảo trang đã tải xong sau 1 giây
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded"); // Gỡ lớp 'not-loaded'
    clearTimeout(c);

    // Sau khi trang đã tải xong, thử phát nhạc
    const audio = document.querySelector('audio');
    if (audio && audio.paused) {
      audio.muted = false; // Bỏ chế độ mute
      audio.play().catch(err => {
        console.log("Tự động phát nhạc bị chặn. Chờ người dùng click:", err);
      });
    }
  }, 1000);
};
