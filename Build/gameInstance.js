var gameInstance = UnityLoader.instantiate("gameContainer", "https://cdn.jsdelivr.net/gh/234sd4w5w45wers5tr-645758574456456/ru77@main/Build/Run3Edittor.json", {onProgress: UnityProgress});
function UnityProgress(gameInstance, progress) {
  if (!gameInstance.Module) {
    return;
  }
  const loader = document.querySelector("#loader");
  if (!gameInstance.progress) {
    const progress = document.querySelector("#loader .progress");
    progress.style.display = "block";
    gameInstance.progress = progress.querySelector(".full");
    loader.querySelector(".spinner").style.display = "none";
  }
  gameInstance.progress.style.transform = `scaleX(${progress})`;
  if (progress === 1 && !gameInstance.removeTimeout) {
    gameInstance.removeTimeout = setTimeout(function() {
      loader.style.display = "none";
    }, 2000);
  }
}