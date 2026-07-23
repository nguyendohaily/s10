let usd = Number(prompt("Nhập số tiền Đô la Mỹ ($):"));

let rate = 25000;

let vnd = usd * rate;

document.write("Số tiền USD: " + usd + " $<br>");
document.write("Số tiền VND tương ứng: " + vnd.toLocaleString() + " đ");