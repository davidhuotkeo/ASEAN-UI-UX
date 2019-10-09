$(function(){
    var ctx = document.getElementById('bar').getContext('2d');
    var label = ['Petrels', 'Ibises', 'Waterfools', 'Rails', 'Hawks', 'Owls', 'Crows', 'Thrushes', 'Honeyeaters', 'Finches']
    Chart.defaults.global.defaultFontColor = "#333333";
    var Bar = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: label,
            datasets: [{
                label: 'Loss of Birds in the Hawaiian Islands Since Human Arrival',
                data: [1, 2, 9, 12, 2, 4, 2, 1, 6, 38],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(227, 68, 152, 0.2)',
                    'rgba(158, 212, 20, 0.2)',
                    'rgba(13, 134, 134, 0.2)',
                    'rgba(198, 89, 157, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(227, 68, 152, 1)',
                    'rgba(158, 212, 20, 1)',
                    'rgba(13, 134, 134, 1)',
                    'rgba(198, 89, 157, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                labels: {
                    fontColor: '#333333'
                }
            },
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    console.log(Bar);
});

$(function(){
    var inp = $('input');
    $('.fas.fa-search, input').hover(function () {
        inp.css('width', '100px');
    },
    function () {
        if(!inp.is(':focus')) {
            inp.css('width', '0px');
        }
    });
    $('.stat div:odd').css({ 'background-color': '#F7F8F8'})
});

$(document).ready(function() {
    for(let i=0; i<1000; i++) {
        $('.fas.fa-caret-down').animate({ top: '+=20' }, 1000);
        $('.fas.fa-caret-down').animate({ top: '-=20' }, 1000);
    }
});

$(document).ready(function () {
    $('i.fas.fa-caret-down').click(function () {
        $('html, body').animate({
            scrollTop: $('nav').offset().top
        }, 1000);
    });
})

$(document).ready(function() {
    var showText = function (target, message, index, interval) {
        if (index < message.length) {
            $(target).append(message[index++]);
            setTimeout(function () { showText(target, message, index, interval); }, interval);
        }
    }
    $(function () {
        showText('div.question p', 'What is biodiversity?', 0, 50);
        showText("div.ask p.bio", "BIODIVERSITY", 0, 300);
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        $('img').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).animate({ 'opacity': '1' }, 2000);
            }
        });
    });
});