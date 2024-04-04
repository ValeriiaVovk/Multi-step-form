const steps = document.querySelectorAll('.form'); 
const form = document.querySelector('.step-form');

let currentStep = 0;

//ф-я для перемикання екранів
function showStep(stepIndex) {
    steps.forEach((step, index) => {
        if (index === stepIndex) {
            step.style.display = 'flex';
        } else {
            step.style.display = 'none';
        }
    });
}

let toggleSwitch = document.querySelector('.toggle-input'); //елементи зміни місячної чи річної ціни
let toggleTextLeft = document.querySelector('.toggle-text--left');
let toggleTextRight = document.querySelector('.toggle-text--right');

let choosePlanDiv = document.querySelector('.choose-plan'); //елементи для заповнення планів
let addExtraDiv = document.querySelector('.add_extra'); // елементи для заповнення додаткових можливостей

let totalText = document.querySelector('.summary_price-title');

//перевіряємо чи була зміна на чекбоксі з місячної підписки на річну
toggleSwitch.addEventListener('change', function() {
        
    if (toggleSwitch.checked) {
    // вибрано "Yearly", змінюємо всі ціни відповідно до річної підписки
        console.log('Yearly option selected');
        toggleTextLeft.classList.remove('toggle-text-active');
        toggleTextRight.classList.add('toggle-text-active');

        choosePlanDiv.innerHTML = `
            <input type="radio" name="typeOfPlan" id="Arcade" class="plan" checked value="90">
            <label for="Arcade" class="plan_type">
                <img src="./images/arcade-plan.png" alt="" width="40" height="40">
                <p class="plan_type-name">Arcade</p>
                <p class="plan_type-price arcade-price">$90/yr</p>
                <p class="plan_type-free">2 months free</p>
            </label>
            <input type="radio" name="typeOfPlan" id="Advanced" class="plan" value="120">
            <label for="Advanced" class="plan_type">
                <img src="./images/advance-plan.png" alt="" width="40" height="40">
                <p class="plan_type-name">Advanced</p>
                <p class="plan_type-price advanced-price">$120/yr</p>
                <p class="plan_type-free">2 months free</p>
            </label>
            <input type="radio" name="typeOfPlan" id="Pro" class="plan" value="150">
            <label for="Pro" class="plan_type">
                <img src="./images/pro-plan.png" alt="" width="40" height="40">
                <p class="plan_type-name">Pro</p>
                <p class="plan_type-price pro-price">$150/yr</p>
                <p class="plan_type-free">2 months free</p>
            </label>
        `;

        addExtraDiv.innerHTML = `
            <label for="online" class="add_extra-point">
                <input type="checkbox" name="Online service" id="online" class="extra" value="10">
                <div class="add_extra-point-info">
                    <p class="add_extra-point-info_type">Online service</p>
                    <p class="add_extra-point-info_details">Access to multiplayer games</p>
                </div>
                <p class="add_extra-point-price onlineExtra">+$10/yr</p>
            </label>
            <label for="storage" class="add_extra-point">
                <input type="checkbox" name="Larger storage" id="storage" class="extra" value="20">
                <div class="add_extra-point-info">
                    <p class="add_extra-point-info_type">Larger storage</p>
                    <p class="add_extra-point-info_details">Extra 1TB of cloud save</p>
                </div>
                <p class="add_extra-point-price storageExtra">+$20/yr</p>
            </label>
            <label for="customize" class="add_extra-point">
                <input type="checkbox" name="Customizable profile" id="customize" class="extra" value="20">
                 <div class="add_extra-point-info">
                    <p class="add_extra-point-info_type">Customizable profile</p>
                    <p class="add_extra-point-info_details">Custom theme on your profile</p>
                </div>
                <p class="add_extra-point-price customizeExtra">+$20/yr</p>
            </label>
        `;

        totalText.innerHTML = 'Total (per year)';

    } else {
        // "Monthly", змінюємо всі ціни відповідно до місячної підписки
        console.log('Monthly option selected');
        toggleTextLeft.classList.add('toggle-text-active');
        toggleTextRight.classList.remove('toggle-text-active');

        choosePlanDiv.innerHTML = `
            <input type="radio" name="typeOfPlan" id="Arcade" class="plan" checked value="9">
            <label for="Arcade" class="plan_type">
                <img src="./images/arcade-plan.png" alt="" width="40" height="40">
                <p class="plan_type-name">Arcade</p>
                <p class="plan_type-price arcade-price">$9/mo</p>
                <p class="plan_type-free"></p>
            </label>
            <input type="radio" name="typeOfPlan" id="Advanced" class="plan" value="12">
            <label for="Advanced" class="plan_type">
                <img src="./images/advance-plan.png" alt="" width="40" height="40">
                <p class="plan_type-name">Advanced</p>
                <p class="plan_type-price advanced-price">$12/mo</p>
                <p class="plan_type-free"></p>
            </label>
            <input type="radio" name="typeOfPlan" id="Pro" class="plan" value="15">
            <label for="Pro" class="plan_type">
                <img src="./images/pro-plan.png" alt="" width="40" height="40">
                <p class="plan_type-name">Pro</p>
                <p class="plan_type-price pro-price">$15/mo</p>
                <p class="plan_type-free"></p>
            </label>
        `;

        addExtraDiv.innerHTML = `
            <label for="online" class="add_extra-point">
                <input type="checkbox" name="Online service" id="online" class="extra" value="1">
                <div class="add_extra-point-info">
                    <p class="add_extra-point-info_type">Online service</p>
                    <p class="add_extra-point-info_details">Access to multiplayer games</p>
                </div>
                <p class="add_extra-point-price onlineExtra">+$1/mo</p>
            </label>
            <label for="storage" class="add_extra-point">
                <input type="checkbox" name="Larger storage" id="storage" class="extra" value="2">
                <div class="add_extra-point-info">
                    <p class="add_extra-point-info_type">Larger storage</p>
                    <p class="add_extra-point-info_details">Extra 1TB of cloud save</p>
                </div>
                <p class="add_extra-point-price storageExtra">+$2/mo</p>
            </label>
            <label for="customize" class="add_extra-point">
                <input type="checkbox" name="Customizable profile" id="customize" class="extra" value="2">
                 <div class="add_extra-point-info">
                    <p class="add_extra-point-info_type">Customizable profile</p>
                    <p class="add_extra-point-info_details">Custom theme on your profile</p>
                </div>
                <p class="add_extra-point-price customizeExtra">+$2/mo</p>
            </label>
        `;


        totalText.innerHTML = 'Total (per month)';
    }
});

//івент лісенер на кнопки для переміщення по інших кроках форми
document.querySelectorAll('.step_next').forEach(button => {
    button.addEventListener('click', (e) => {
        // currentStep++;
        // showStep(currentStep);

        //отримаємо доступ до елементів 1 кроку, та визначаємо їх value
        let nameInput = document.getElementById('name');
        let name = nameInput.value;
        let emailInput = document.getElementById('email');
        let email = emailInput.value;
        let phoneInput = document.getElementById('phone');
        let phone = phoneInput.value
        let errorName = document.querySelector('.error.name');
        let errorEmail = document.querySelector('.error.email');
        let errorPhone = document.querySelector('.error.phone');

        //перевірка на required, додаємо або видаляємо відповідні стилі
        if (!name) {
            errorName.style.display = 'block';
            nameInput.style.borderColor = '#ee374a';
        } else if (!email) {
            errorEmail.style.display = 'block';
            emailInput.style.borderColor = '#ee374a';
            errorName.style.display = 'none';
            nameInput.style.borderColor = '#d6d9e6';
        } else if (!phone) {
            errorPhone.style.display = 'block';
            phoneInput.style.borderColor = '#ee374a';
            errorEmail.style.display = 'none';
            emailInput.style.borderColor = '#d6d9e6';
            errorName.style.display = 'none';
            nameInput.style.borderColor = '#d6d9e6';
        } else {
            errorName.style.display = 'none';
            errorEmail.style.display = 'none';
            errorPhone.style.display = 'none';
            nameInput.style.borderColor = '#d6d9e6';
            emailInput.style.borderColor = '#d6d9e6';
            phoneInput.style.borderColor = '#d6d9e6';

            currentStep++; //якщо required ок, переходемо далі
            showStep(currentStep); // завантажується наступний крок

            let selectedTypeOfPlan = document.querySelector('input[name="typeOfPlan"]:checked').id; //визначає id якого елемента було вибрано
            let selectedTypeOfPlanValue = document.querySelector('input[name="typeOfPlan"]:checked').value; // і значення цього елемента

            let selectedExtraPoint = {}; // вихначаємо ключ та значення чекбоксів які були вибрані на 3 кроці
            document.querySelectorAll('input[type="checkbox"].extra:checked').forEach(point => {
                selectedExtraPoint[point.name] = point.value;
            });

            let checkboxes = document.querySelectorAll('.extra'); // перевірка вибраних чекбоксів та додавання їм відповідних стилів
            checkboxes.forEach(checkbox => {
                checkbox.addEventListener('change', function() {
                    const label = checkbox.closest('label'); // отримуємо відповідний label для цього чекбокса
                    // перевіряємо, чи встановлено чекбокс, додажмо або видаляємо клас
                    if (checkbox.checked) {
                        label.classList.add('checked');
                    } else {
                        label.classList.remove('checked');
                    }
                })
            })

            //обєкт з отриманими даними від користувача
            let information = {
                name: name,
                email: email,
                phone: phone,
                selectedTypeOfPlan: selectedTypeOfPlan,
                selectedExtraPoint: selectedExtraPoint
            }
            // console.log(information.selectedTypeOfPlan)

            localStorage.setItem('formInformation', JSON.stringify(information)); // додаємо дані в локал сторейдж
            // form.reset();

            let userInformation = localStorage.getItem('formInformation'); // отримати дані з локал сторейдж
            if (userInformation) {
                let info = JSON.parse(userInformation);
                console.log(info);
            }

            let choosePlan = document.getElementById('choose-plan'); //елемент щоб прописати вибраний план на 4 кроці

            let planPrice = document.querySelector('.summary_info-plan-price'); //елемент щоб прописати ціну план на 4 кроці
            let summaryExtraIndormation = document.getElementById('summary_info-extra'); //елемент щоб прописати вибрані додаткові можливості на 4 кроці
            summaryExtraIndormation.innerHTML = ''; 

            let keys = Object.keys(selectedExtraPoint); // отримати ключі від вибраних чекбоксів, які раніше були записані в обєкт

            let totalPriceOfExtraPoint = 0; // змінна для прорахунку загальної вартості

            // робимо перевірку чи на 2 кроці був вибраний річний чи місячний варіант і прописуємо обрані раніше план і додаткові можливості і їх ціни
            if (toggleSwitch.checked) {
                if (selectedTypeOfPlan === 'Arcade') {
                    planPrice.innerHTML = '$90/yr';
                    choosePlan.innerHTML = `${information.selectedTypeOfPlan} (Yearly)`;
                } else if (selectedTypeOfPlan === 'Advanced') {
                    planPrice.innerHTML = '$120/yr';
                    choosePlan.innerHTML = `${information.selectedTypeOfPlan} (Yearly)`;
                } else if (selectedTypeOfPlan === 'Pro') {
                    planPrice.innerHTML = '$150/yr';
                    choosePlan.innerHTML = `${information.selectedTypeOfPlan} (Yearly)`;
                }

                keys.forEach(key => {
                    console.log("Ключ:", key, "Значення:", selectedExtraPoint[key]);
                    summaryExtraIndormation.innerHTML += `
                    <div class="summary_info-extra">
                        <p class="summary_info-extra-title">${key}</p>
                        <p class="summary_info-extra-price">+$${selectedExtraPoint[key]}/yr</p>
                    </div>
                    
                `; // прописали додаткові можливості і їх ціни
                });

                Object.values(selectedExtraPoint).forEach(value => {
                    totalPriceOfExtraPoint += parseFloat(value);
                }); // додали значення value усіх вибраних чекбоксів із 3 кроку
    
                let totalPrice = totalPriceOfExtraPoint + parseFloat(selectedTypeOfPlanValue); // прорахували загальну вартість
    
                let summaryPrice = document.querySelector('.summary_price-number');
                summaryPrice.innerHTML = `+$${totalPrice}/yr`//записали вартість 

            } else { // теж саме зробили для місячного варіанту
                if (selectedTypeOfPlan === 'Arcade') {
                    planPrice.innerHTML = `$${selectedTypeOfPlanValue}/mo`;
                    choosePlan.innerHTML = `${information.selectedTypeOfPlan} (Monthly)`;
                } else if (selectedTypeOfPlan === 'Advanced') {
                    planPrice.innerHTML = `$${selectedTypeOfPlanValue}/mo`;
                    choosePlan.innerHTML = `${information.selectedTypeOfPlan} (Monthly)`;
                } else if (selectedTypeOfPlan === 'Pro') {
                    planPrice.innerHTML = `$${selectedTypeOfPlanValue}/mo`;
                    choosePlan.innerHTML = `${information.selectedTypeOfPlan} (Monthly)`;
                }

                keys.forEach(key => {
                    console.log("Ключ:", key, "Значення:", selectedExtraPoint[key]);
                    summaryExtraIndormation.innerHTML += `
                    <div class="summary_info-extra">
                        <p class="summary_info-extra-title">${key}</p>
                        <p class="summary_info-extra-price">+$${selectedExtraPoint[key]}/mo</p>
                    </div>
                    
                `;
                });

                Object.values(selectedExtraPoint).forEach(value => {
                    totalPriceOfExtraPoint += parseFloat(value);
                });
    
                let totalPrice = totalPriceOfExtraPoint + parseFloat(selectedTypeOfPlanValue);
    
                let summaryPrice = document.querySelector('.summary_price-number');
                summaryPrice.innerHTML = `+$${totalPrice}/mo`
            }

    }

    });

});

//івент дісер для повернення з 4 кроку на 2 крок для зміни плану
let changePlan = document.getElementById('changePlan');
changePlan.addEventListener('click', () => {
    currentStep = currentStep - 2;
    showStep(currentStep);
})

//івент лісенер для працювання кнопки з поверненням назад
document.querySelectorAll('.step_prev').forEach(button => {
    button.addEventListener('click', () => {
        currentStep--;
        showStep(currentStep);
    });
});

// Перша відображувана секція
showStep(currentStep);