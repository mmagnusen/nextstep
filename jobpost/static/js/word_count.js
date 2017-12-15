counter = function() {
    var value = $('#content_div').val();
    console.log(value.length);
    if (value.length == 0) {
        $('#wordCount').html(0);

        return;
    }

    var regex = /\s+/gi;
    var wordCount = value.trim().replace(regex, ' ').split(' ').length;
    var totalChars = value.length;
    var charCount = value.trim().length;
    var charCountNoSpace = value.replace(regex, '').length;

    $('#wordCount').html(wordCount);
    console.log(wordCount);

};

$(document).ready(function() {
    counter();

});
