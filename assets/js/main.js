

function showHoroscope(){
    let input = document.getElementById("field").value
    console.log(input)
    if (input=="Mar")
    {
        document.getElementById("result").innerHTML = 
        "<img src =https://www.horoscopedates.com/img/icon_aries.png>"+"<h1>Your Horoscope is Aries</h1>"+"Today your patience might be tested when one or more of your projects gets put on hold by someone… "
    }
    else if(input=="Apr") {
        document.getElementById("result").innerHTML = 
        "<img src =https://www.horoscopedates.com/img/icon_taurus.png>"+"<h1>Your Horoscope is Taurus</h1>"+"Your intense energy makes you a great candidate for a leadership position right now, so if you are…" 
    }
    else if(input=="May") {
        document.getElementById("result").innerHTML = 
        "<img src =https://www.horoscopedates.com/img/icon_gemini.png>"+"<h1>Your Horoscope is Gemini</h1>"+"If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…"  
    }
    else if(input=="Jun") {
        document.getElementById("result").innerHTML = 
        "<img src =https://www.horoscopedates.com/img/icon_cancer.png>"+"<h1>Your Horoscope is Cancer</h1>"+"Too many different elements in your life are overlapping with each other right now—and it's your…"
    }
    else if(input=="Jul") {
        document.getElementById("result").innerHTML = 
        "<img src =https://www.horoscopedates.com/img/icon_leo.png>"+"<h1>Your Horoscope is Leo</h1>"+"The issues you'll be dealing with today are very complicated ones—you will have to navigate your…"
    }
    else if(input=="Aug") {
        document.getElementById("result").innerHTML = 
        "<img src =https://www.horoscopedates.com/img/icon_virgo.png>"+"<h1>Your Horoscope is Virgo</h1>"+"You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…"
    }
    else if(input=="Sep") {
        document.getElementById("result").innerHTML = 
        "<img src =https://www.horoscopedates.com/img/icon_libra.png>"+"<h1>Your Horoscope is Libra</h1>"+"Pick a cultural event that's coming up and get some tickets for it today."
    }
    else if(input=="Oct") {
        document.getElementById("result").innerHTML = 
        "<img src =https://www.horoscopedates.com/img/icon_scorpio.png>"+"<h1>Your Horoscope is Scorpio</h1>"+"Someone will challenge a belief that you've held for a very long time today—and they will say an…"
    }
    else if(input=="Nov") {
        document.getElementById("result").innerHTML = 
        "<img src =https://www.horoscopedates.com/img/icon_sagittarius.png>"+"<h1>Your Horoscope is Sagitarius</h1>"+"Someone in your life needs to step up and take on more responsibility—and you need to tell them to...."
    }
    else if(input=="Dec") {
        document.getElementById("result").innerHTML = 
        "<img src =https://www.horoscopedates.com/img/icon_capricorn.png>"+"<h1>Your Horoscope is Capricorn</h1>"+"Breaking the rules is not always a bad thing—especially if the rules limit your creativity."
    }
    else if(input=="Jan") {
        document.getElementById("result").innerHTML = 
        "<img src =https://www.horoscopedates.com/img/icon_aquarius.png>"+"<h1>Your Horoscope is Aquarius</h1>"+"Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great… "
    }
    else if(input=="Feb") {
        document.getElementById("result").innerHTML = 
        "<img src =https://www.horoscopedates.com/img/icon_pisces.png>"+"<h1>Your Horoscope is Pisces</h1>"+"Communication is very important today—written, spoken, and even nonverbal body language will all… "
    }


}