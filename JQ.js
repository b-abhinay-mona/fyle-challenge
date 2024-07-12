$(".awardWinningHeading").css('color', '#ff3147');
$(".digiMarketingHeading").css({
    'font-weight': 'bold',
    'font-size': '40px'
});
$(".contact-us").css({
    'color': '#ffffff',
    'background-color': '#ff3147'
});
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    });
});
const bgProject = document.getElementById('bgProject');

function changeBackgroundImage(imageUrl) {
    bgProject.style.backgroundImage = `url('${imageUrl}')`;
}

const items = document.querySelectorAll('.item');

// Function to change item style on hover
function changeItemStyle(item, bgColor, textColor) {
    item.style.color = textColor;
    $(".place-layout").css({
        'background': bgColor
    });
}

// Change background image and item style on hover for each item
document.getElementById('item1').addEventListener('mouseover', function() {
    changeBackgroundImage('https://digitalsparkagency.netlify.app/Assets/images/japan1.jpg');
});

document.getElementById('item2').addEventListener('mouseover', function() {
    changeBackgroundImage('https://digitalsparkagency.netlify.app/Assets/images/image.png');
});

document.getElementById('item3').addEventListener('mouseover', function() {
    changeBackgroundImage('https://digitalsparkagency.netlify.app/Assets/images/japan3.jpg');
});

// Change item style on hover for all items
items.forEach(function(item) {
    item.addEventListener('mouseover', function() {
        changeItemStyle(item, '#ff3147', '#ffffff'); // Hover styles: background red, text white
    });

    item.addEventListener('mouseout', function() {
        changeItemStyle(item, '#f6f6f6', 'black'); // Reset styles on mouseout: background light grey, text black
    });
});
$('.contact-us').click(function() {
    $('#overlay2').fadeIn();
    $('#popup-form').fadeIn();
});

$('.close-btn, #overlay2').click(function() {
    $('#overlay2').fadeOut();
    $('#popup-form').fadeOut();
});

$('#contact-form').submit(function(e) {
    e.preventDefault();

    var fname = $('#fname').val();
    var email = $('#email').val();
    var agree = $('#agree:checked').length;

    if (fname === '' || email === '') {
        $('#agree-error').text('Please fill out First Name and Email.').fadeIn();
        return false;
    }

    if (!agree) {
        $('#agree-error').text('Please agree to terms and conditions.').fadeIn();
        return false;
    }

    // Clear any previous errors
    $('#agree-error').text('').fadeOut();

    // Submit the form if validation passes
    this.submit();
});
$(document).ready(function() {
    $(".contact-us").click(function() {
        $("#overlay2").fadeIn();
        $("#popup-form").fadeIn();
    });

    $(".close-btn, #overlay2").click(function() {
        $("#overlay2").fadeOut();
        $("#popup-form").fadeOut();
    });

    $("#contact-form").submit(function(event) {
        if (!$("#agree").is(":checked")) {
            event.preventDefault();
            $("#agree-error").css({
                'color': '#ff3174'
            });
            $("#agree-error").text("Please agree to the terms and conditions.");
        }
    });
});