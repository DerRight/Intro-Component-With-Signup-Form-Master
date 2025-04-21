function validInformation() {
    const fields = [
        {
            input: document.getElementById('first-name'),
            isValid: (val) => val.trim() !== '',
        },
        {
            input: document.getElementById('last-name'),
            isValid: (val) => val.trim() !== '',
        },
        {
            input: document.getElementById('email-address'),
            isValid: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
        },
        {
            input: document.getElementById('password'),
            isValid: (val) => val.trim() !== '',
        }
    ];

    fields.forEach(({ input, isValid }) => {
        const section = input.closest('section'); // 找到包裹的 section
        const icon = section.querySelector('.icon');
        const message = section.querySelector('.error-message');

        // 清除錯誤狀態
        input.classList.remove('error');
        icon.classList.remove('active');
        message.classList.remove('active');

        if (!isValid(input.value)) {
            input.classList.add('error');
            icon.classList.add('active');
            message.classList.add('active');
        }
    });
}


