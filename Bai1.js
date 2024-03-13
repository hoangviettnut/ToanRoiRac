function tinhToHop(n, k) {
    if (k === 0 || k === n) {
        return 1;
    } else {
        return tinhGiaiThua(n) / (tinhGiaiThua(k) * tinhGiaiThua(n - k));
    }
}

function tinhGiaiThua(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * tinhGiaiThua(n - 1);
    }
}

// Số cách chọn 3 quả bóng từ 8 quả bóng
var n = 8; // Số quả bóng
var k = 3; // Số quả bóng muốn chọn
var soCachChon = tinhToHop(n, k);
console.log("Số cách chọn: " + soCachChon);