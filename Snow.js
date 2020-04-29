const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

var snowList = [];
var numberID = 0;
var mouseX = 0;
var mouseY = 0;
var mouseRange = 5;

setInterval('gameTick()', 50)
setInterval('createSnow()', 20)

$('html').mousemove(function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
})

function gameTick() {
    snowList.forEach(function(item, index, array) {
        item.height += 2;
        // noinspection JSValidateTypes
        document.getElementById('TrackingNumber_' + item.id).style = 'background-color: ' + item.color + ';margin-top: ' + item.height + 'px; padding: ' + item.size + 'px; margin-left: ' + item.width + 'px;';
        if (item.height >= mouseY - mouseRange && item.height <= mouseY + mouseRange && item.width >= mouseX - mouseRange && item.width <= mouseX + mouseRange) {
            item.color = 'red'
            if (item.width < mouseX) {
                item.width += 4;
            } else {
                item.width -= 4;
            }
            if (item.height < mouseY) {
                item.height += 6;
            } else {
                item.height -= 4;
            }
        } else {
            //item.color = 'white'

        }

        if (item.height >= 770) {
            $('#TrackingNumber_' + item.id).fadeOut(1000, function() {
                $('#TrackingNumber_' + item.id).remove()
            });
            snowList.splice(index, 1)
        }
    })
}
function createSnow() {
    var Snow = new Object();
    Snow.width = Math.floor(Math.random() * screenWidth);
    Snow.size = Math.floor(Math.random() * 5) + 1;
    Snow.height = 0;
    Snow.id = numberID;
    Snow.color = 'white';
    snowList.push(Snow);
    $('<div>', {
        'style': 'margin-top: ' + Snow.height + 'px; padding:' + Snow.size + 'px; margin-left: ' + Snow.width + 'px;',
        'class': 'Snow',
        'id': 'TrackingNumber_' + numberID
    }).appendTo('body');
    numberID++
}

$('body').click(function(){
    
})