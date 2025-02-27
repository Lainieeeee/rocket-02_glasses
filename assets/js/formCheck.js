function validateForm() {
    // 清除錯誤訊息
    clearErrors();

    // 表單驗證
    let isValid = true;

    // 姓名驗證
    const name = document.getElementById('username').value;
    if (name === "") {
        isValid = false;
        document.getElementById('nameError').innerText = "※請輸入姓名";
    }

    // 電話號碼驗證（假設台灣電話格式）
    const phone = document.getElementById('tel').value;
    const phonePattern = /^[0-9]{4}-[0-9]{3}-[0-9]{3}$/;
    if (!phonePattern.test(phone)) {
        isValid = false;
        document.getElementById('phoneError').innerText = "※請輸入正確的電話號碼";
    }

    // 電子郵件驗證
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        document.getElementById('emailError').innerText = "※請輸入正確的電子郵件地址";
    }

    // 意見反饋驗證
    const message = document.getElementById('textarea').value;
    if (message === "") {
        isValid = false;
        document.getElementById('messageError').innerText = "※請輸入意見反饋";
    }

    // 同意隱私權政策驗證
    const agree = document.getElementById('agree').checked;
    if (!agree) {
        isValid = false;
        document.getElementById('agreeError').innerText = "※請同意隱私權政策";
    }

    // 表單有效，顯示成功訊息
    if (isValid) {
        alert("表單已成功提交！");
    }
}

// 清除錯誤訊息
function clearErrors() {
    const errorMessages = document.querySelectorAll('.errorMessage');
    errorMessages.forEach(errorMessage => {
        errorMessage.innerText = "";
    });
}