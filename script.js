
function icon(){
    var x = document.getElementById("myMenu");
    if(x.className === "menu"){
        x.className += " responsive"
    }
    else{
        x.className = "menu"
    }
}


// وظيفة لتبديل الأذكار
function switchTab(event) {
    // إخفاء جميع المحتويات
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // إزالة النشاط من جميع الأزرار
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });

    // إظهار المحتوى المحدد
    const tabId = event.target.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');

    // إضافة النشاط للزر المحدد
    event.target.classList.add('active');
}

// إضافة حدث النقر للأزرار
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', switchTab);
});

function updateDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    };
    document.getElementById("datetime").innerHTML = now.toLocaleDateString('ar-EG', options);
}

setInterval(updateDateTime, 1000); 
updateDateTime(); 




