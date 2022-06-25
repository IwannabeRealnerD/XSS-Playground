"use strict";
exports.__esModule = true;
// app 모듈 -> 애플리케이션의 이벤트사이클을 관리
// BrowserWindow -> 애플리케이션의 창을 관리
var electron_1 = require("electron");
var createWindow = function () {
    var mainWindow = new electron_1.BrowserWindow({
        width: 1000,
        height: 800,
        // 렌더러 프로세스에서 node.js 사용 가능
        webPreferences: { nodeIntegration: true }
    });
    // 창이 켜졌을 때 index.htmlfile 로드
    mainWindow.loadURL("http://localhost:3000");
    // 프로덕션 코드에선 제거
    mainWindow.webContents.openDevTools();
};
// 일렉트론에선 app 모듈에 ready가 실행되어야만 브라우저 윈도우가 실행될 수 있음
// 앱이 준비되면 createWindow로 화면 띄움
electron_1.app.whenReady().then(function () {
    createWindow();
    // 맥에서만 돌아가는 코드 -> 윈도우가 없을때 하나만 활성화하기
    electron_1.app.on("activate", function () {
        if (electron_1.BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
});
// macOS를 제외한 다른 OS의 경우 모든 창이 닫혔을 경우 앱 종료
electron_1.app.on("window-all-closed", function () {
    if (process.platform !== "darwin")
        electron_1.app.quit();
});
// macOS는 해당 애플리케이션의 모든 창이 전부 닫혀있어도
