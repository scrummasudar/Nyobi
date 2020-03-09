var classes = ['A組', 'B組', 'C組', 'D組'];

for (var garade = 1; garade < 4; garade++) {
    for (var i = 0; i < classes.length; i++) {
        document.write('<p>' + garade + '年' + classes[i] + '</p>');
    }
}