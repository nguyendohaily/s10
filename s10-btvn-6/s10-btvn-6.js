let math = Number(prompt("Nhập điểm môn Toán (math):"));
let physics = Number(prompt("Nhập điểm môn Vật lý (physics):"));
let chemistry = Number(prompt("Nhập điểm môn Hóa học (chemistry):"));

let average = (math + physics + chemistry) / 3;

console.log("Điểm Toán (math): " + math);
console.log("Điểm Vật lý (physics): " + physics);
console.log("Điểm Hóa học (chemistry): " + chemistry);
console.log("Điểm trung bình (Average): " + average.toFixed(2));