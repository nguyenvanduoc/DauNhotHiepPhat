import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";


const _c = {
    a: "CRkyMRspCiMKFw8WHAcRJ3E/Fz85DzwXZRoJJQloAAknOzoAHTor",
    b: "LDE9PiA/PDghNTggIDE8fXA2LDFxfi45OjUqMTs1KSA4fis/JQ==",
    c: "LDE9PiA/PDghNTggIDE8fXA2LDFx",
    d: "LDE9PiA/PDghNTggIDE8fXA2LDFxfi45OjUqMTs1OyQnIik3LX4pIDg=",
    e: "eml9YXlgfmh8Ynpl",
    f: "eWp6aX1heWB+aHxiemVyJy0ycjFwYnthLWZ4Mi1peGV4Z3tkKmJ4M3g=",
    g: "D30SFgIUDBQNEg0E"
};

// Hàm giải mã XOR + Base64
function _d(s) {
    const _k = [72, 80]; // XOR key: "HP"
    const raw = atob(s);
    return raw.split('').map((ch, i) =>
        String.fromCharCode(ch.charCodeAt(0) ^ _k[i % 2])
    ).join('');
}

export const firebaseConfig = {
    apiKey: _d(_c.a),
    authDomain: _d(_c.b),
    projectId: _d(_c.c),
    storageBucket: _d(_c.d),
    messagingSenderId: _d(_c.e),
    appId: _d(_c.f),
    measurementId: _d(_c.g)
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
