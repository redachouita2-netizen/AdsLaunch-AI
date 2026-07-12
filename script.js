// AdsLaunch AI Engine
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");


generateBtn.addEventListener("click", function(){

    const product = document.getElementById("product").value;
    const platform = document.getElementById("platform").value;
    const language = document.getElementById("language").value;


    if(product === ""){
        alert("Please enter your product name");
        return;
    }


    let ad = "";


    if(language === "Arabic"){

        ad = `
🔥 ${platform} Ad

🚀 اكتشف ${product}

✨ جودة عالية وتصميم مميز
✅ أفضل اختيار لعملائنا
💎 لا تفوت الفرصة

اطلب الآن واستفد من العرض 🔥
        `;

    }


    else if(language === "French"){

        ad = `
🔥 Publicité ${platform}

Découvrez ${product}

✨ Qualité premium
✅ Une offre exceptionnelle
🚀 Commandez maintenant
        `;

    }


    else {

        ad = `
🔥 ${platform} Advertisement

Discover ${product}

✨ Premium quality
✅ Best choice for customers
🚀 Order now today
        `;
    }


    document.getElementById("result").innerText = ad;

});



copyBtn.addEventListener("click", function(){

    const text = document.getElementById("result").innerText;

    navigator.clipboard.writeText(text);

    alert("Copied successfully ✅");

});
const loginBtn = document.getElementById("loginBtn");

if(loginBtn){

loginBtn.addEventListener("click", function(){

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    if(email === "" || password === ""){
        alert("Complete your information");
        return;
    }


    localStorage.setItem("userEmail", email);


    alert("Welcome to AdsLaunch AI 🚀");


});

}
const userEmail = document.getElementById("userEmail");
const logoutBtn = document.getElementById("logoutBtn");


if(localStorage.getItem("userEmail")){

    userEmail.innerText =
    "👤 " + localStorage.getItem("userEmail");

}


if(logoutBtn){

logoutBtn.addEventListener("click", function(){

    localStorage.removeItem("userEmail");

    alert("Logged out");

    location.reload();

});

}
