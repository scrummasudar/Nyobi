var classes = ['A組', 'B組', 'C組', 'D組'];

for (var garade = 1; garade < 4; garade++) {
    for (var i = 0; i < classes.length; i++) {
        document.write('<p>' + garade + '年' + classes[i] + '</p>');
    }
}

var chars = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ']

for (var i = 0; i < chars.length; i++) {
    for (var j = 0; j < chars.length; j++) {
        document.write('<p>' + chars[i] + chars[j] + '</p>')
    }
}