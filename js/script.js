var request = new XMLHttpRequest();
function getjson(word, counter) {
    request.open('GET', 'https://api.riffsy.com/v1/search?key=LIVDSRZULELA&tag='+word+'&limit='+counter);
    request.onreadystatechange = function() {

        $('.img__search').remove();
        var myPicture = $('img').addClass('img__search');

        if (request.status === 200 && request.readyState === 4) {
            var resText = JSON.parse(request.responseText);

            for (var i = 0; i < counter; i++) {
                var imgSrc = resText.results[i].url;
                $('.image').append('<img src="'+imgSrc+'">').children().css({opacity: '1'});
                $('.error').css({display: 'none'});
            }
        } else if (request.status !== 200) {
            $('.error').css({display: 'block'});
        } 
    }
    request.send();
}

$('.btn').on('click', function() {
    var inputValue = $('.text__field').val();
    getjson(inputValue, 5);
})


function Human() {
    this.name = 'Vasya';
    this.age = 18;
    this.sex = 'male';
    this.height = 175;
    this.weight = 70;
};

function Worker() {
    this.job = 'worker';
    this.salary = 10000;
    this.doWork = function() {
        console.log('worker is working at his work during his working day');
    }
};
Worker.prototype = new Human();

function Student() {
    this.study = 'university';
    this.scholarship = 500;
    this.watchSeries = function() {
        console.log('student is watching TV all the time');
    }
};

Worker.prototype = new Human();
Student.prototype = new Human();

var newStudent = new Student();
console.log(newStudent);
var newStudent1 = new Student();
console.log('newStudent1.age', newStudent1.age);

var newWorker = new Worker();
console.log(newWorker);
console.log('newWorker.name', newWorker.name);