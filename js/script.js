var reviews_page = 1;

function getColorToStrip(page) {
    switch (page) {
        case 2:
            document.getElementById('strips').innerHTML = '<div class="reviews__strip" id="strip1">⠀</div>           <div class="reviews__strip_active" id="strip2">⠀</div>         <div class="reviews__strip" id="strip3">⠀</div>                <div class="reviews__strip" id="strip4">⠀</div>';
            document.getElementById('first-div').innerHTML = ' <div class="infoblock__contact"><div class="infoblock__picture"><img src="img/rewiews/man1.png" alt=""></div><div class="infoblock__name-and-city"><div class="infoblock__name">Jonathan Vallem</div><div class="infoblock__city">New york</div></div></div> <div class="infoblock__message"> We are on second page, WOW! We are on second page, WOW!We are on second page, WOW!We are on second page, WOW!We are on second page, WOW!</div> ';
            document.getElementById('second-div').innerHTML = ' <div class="infoblock__contact"><div class="infoblock__picture"><img src="img/rewiews/man1.png" alt=""></div><div class="infoblock__name-and-city"><div class="infoblock__name">Jonathan Vallem</div><div class="infoblock__city">New york</div></div></div> <div class="infoblock__message"> Oh god we really are on the second page! cool!! I want to stay here longer</div> ';
            break;
        case 3:
            document.getElementById('strips').innerHTML = '<div class="reviews__strip" id="strip1"></div>           <div class="reviews__strip" id="strip2"> </div>                 <div class="reviews__strip_active" id="strip3">⠀</div>       <div class="reviews__strip" id="strip4"> </div>';
            document.getElementById('first-div').innerHTML = ' <div class="infoblock__contact"><div class="infoblock__picture"><img src="img/rewiews/man2.png" alt=""></div><div class="infoblock__name-and-city"><div class="infoblock__name">Jonathan Vallem</div><div class="infoblock__city">New york</div></div></div> <div class="infoblock__message"> Перестаньте шутить. Я хотела серьезно поговорить с вами. Знаете, я недовольна вашим меньшим сыном. Между нами будь сказано </div> ';
            document.getElementById('second-div').innerHTML = ' <div class="infoblock__contact"><div class="infoblock__picture"><img src="img/rewiews/man2.png" alt=""></div><div class="infoblock__name-and-city"><div class="infoblock__name">Jonathan Vallem</div><div class="infoblock__city">New york</div></div></div> <div class="infoblock__message"> Перестаньте шутить. Я хотела серьезно поговорить с вами. Знаете, я недовольна вашим меньшим сыном. Между нами будь сказано </div> ';
            break;
        case 4:
            document.getElementById('strips').innerHTML = '<div class="reviews__strip" id="strip1">⠀</div>           <div class="reviews__strip" id="strip2">⠀</div>                   <div class="reviews__strip" id="strip3">⠀</div>              <div class="reviews__strip_active" id="strip4">⠀</div>';
            document.getElementById('first-div').innerHTML = ' <div class="infoblock__contact"><div class="infoblock__picture"><img src="img/rewiews/man2.png" alt=""></div><div class="infoblock__name-and-city"><div class="infoblock__name">Jonathan Vallem</div><div class="infoblock__city">New york</div></div></div> <div class="infoblock__message"> We are on second page, WOW! We are on second page, WOW!We are on second page, WOW!We are on second page, WOW!We are on second page, WOW!</div> ';
            document.getElementById('second-div').innerHTML = ' <div class="infoblock__contact"><div class="infoblock__picture"><img src="img/rewiews/man1.png" alt=""></div><div class="infoblock__name-and-city"><div class="infoblock__name">Jonathan Vallem</div><div class="infoblock__city">New york</div></div></div> <div class="infoblock__message"> Last page? Nothing interesting( -___- Last page? Nothing interesting( -___-Last page? Nothing interesting( -___-</div> ';
            break;
        case 1:
            document.getElementById('strips').innerHTML = '<div class="reviews__strip_active" id="strip1">⠀</div>    <div class="reviews__strip" id="strip2">⠀</div>                            <div class="reviews__strip" id="strip3">⠀</div>                <div class="reviews__strip" id="strip4">⠀</div>';
            document.getElementById('first-div').innerHTML = ' <div class="infoblock__contact"><div class="infoblock__picture"><img src="img/rewiews/man1.png" alt=""></div><div class="infoblock__name-and-city"><div class="infoblock__name">Jonathan Vallem</div><div class="infoblock__city">New york</div></div></div> <div class="infoblock__message"> I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working</div> ';
            document.getElementById('second-div').innerHTML = ' <div class="infoblock__contact"><div class="infoblock__picture"><img src="img/rewiews/man2.png" alt=""></div><div class="infoblock__name-and-city"><div class="infoblock__name">Jonathan Vallem</div><div class="infoblock__city">New york</div></div></div> <div class="infoblock__message"> I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working</div> ';
            break;
    }

}

var right = document.getElementById("arrow-right");
right.addEventListener('click', function () {

    switch (reviews_page) {
        case 1:
            reviews_page = 2;
            getColorToStrip(reviews_page);
            break;
        case 2:
            reviews_page = 3;
            getColorToStrip(reviews_page);
            break;
        case 3:
            reviews_page = 4;
            getColorToStrip(reviews_page);
            break;
        case 4:
            reviews_page = 1;
            getColorToStrip(reviews_page);
            break;
    }

});

var left = document.getElementById("arrow-left");
left.addEventListener('click', function () {

    switch (reviews_page) {
        case 1:
            reviews_page = 4;
            getColorToStrip(reviews_page);
            break;
        case 2:
            reviews_page = 1;
            getColorToStrip(reviews_page);
            break;
        case 3:
            reviews_page = 2;
            getColorToStrip(reviews_page);
            break;
        case 4:
            reviews_page = 3;
            getColorToStrip(reviews_page);
            break;
    }

});

var strip1 = document.getElementById("strip1");
strip1.addEventListener('click', function () {
    //alert("11");
    reviews_page = 2;
    getColorToStrip(reviews_page);

});
var strip2 = document.getElementById("strip2");
strip2.addEventListener('click', function () {
    //alert("11");
    reviews_page = 2;
    getColorToStrip(reviews_page);

});
var strip3 = document.getElementById("strip3");
strip3.addEventListener('click', function () {
    //alert("11");
    reviews_page = 3;
    getColorToStrip(reviews_page);

});
var strip4 = document.getElementById("strip4");
strip4.addEventListener('click', function () {
    //alert("11");
    reviews_page = 4;
    getColorToStrip(reviews_page);

});

// questblock__icon
// questblock__answer

var accItem = document.getElementsByClassName('questblock');
var accHD = document.getElementsByClassName('questblock__visible');


for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var itemClass = this.parentNode.className;

    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'questions__questblock questblock close';

        //document.querySelector('.questblock__icon').innerHTML = '<img src="img/Quest+.svg" alt="">';
    }

    if (itemClass == 'questions__questblock questblock close') {
        this.parentNode.className = 'questions__questblock questblock open';

        //document.querySelector('.questblock__icon').innerHTML = '<img src="img/Quest-.svg" alt="">';
    }
}

function choose(el) {
    //alert("А да");
    //document.getElementById("blocks__element elementblock").className = document.getElementById("blocks__element elementblock").className.replace(/(?:^|\s)MyClass(?!\S)/g, '');

    //el.className = "blocks__element elementblock";




    //let elem = document.querySelector("elementblock")

    //Выведем классы
    //console.log(elem.classList);





    //classList.choose("")
    //document.getElementById("elementblock").className = "blocks__element elementblock";
    //Ето работает!
    el.classList.add("activeblock");
}

// function choose(el) {
//     //alert("А да");
//     $(el).addClass("activeblock");
// }

// var accIt = document.getElementsByClassName('questblock');
// var accHDa = document.getElementsByClassName('questblock__visible');


// for (i = 0; i < accHDa.length; i++) {
//     accHDa[i].addEventListener('click', toggleItem, false);
// }
// function toggleItem() {
//     var itemClass = this.parentNode.className;

//     for (i = 0; i < accIt.length; i++) {
//         accIt[i].className = 'questions__questblock questblock close';

//         //document.querySelector('.questblock__icon').innerHTML = '<img src="img/Quest+.svg" alt="">';
//     }

//     if (itemClass == 'questions__questblock questblock close') {
//         this.parentNode.className = 'questions__questblock questblock open';

//         //document.querySelector('.questblock__icon').innerHTML = '<img src="img/Quest-.svg" alt="">';
//     }
// }