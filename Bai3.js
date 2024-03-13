function lietKeDayCon(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
            result.push(arr.slice(i, j));
        }
    }

    return result;
}

let mangSo = [1, 2, 3, 4, 5];
let ketQua = lietKeDayCon(mangSo);
console.log("Tất cả các dãy con liên tiếp của mảng", mangSo, "là:");
console.log(ketQua);