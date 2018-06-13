var i = 0;

//grab text from input
function save() {
    i++
    var textGrab = document.getElementById('commentBox').value;
    console.log(textGrab);

    //turn it in to a JSON string
    JSON.stringify({ comment: textGrab });

    //send to mongo

    //return from mongo 'comment-like' post

    //place comment in to a div element on page  




    //give comment a date/time


};


function remove(element) {
    var id = element.parentNode.id;
    axios.delete('/note/' + id).then(function (response) {
        displayNotes();
    });

};

var displayNotes = function () {

    document.getElementById('postedComments').innerHTML = '';

    axios.get('/notes').then(function (response) {

        console.log(response.data);

        for (var i = 0; i < response.data.length; i++) {

            var commentDiv = document.createElement('div');

            commentDiv.setAttribute('id', response.data[i]._id);

            var commentText = document.createElement('p');

            var commentNode = document.createTextNode(response.data[i].text);

            var deleteButton = document.createElement('button');

            deleteButton.setAttribute('onclick', 'remove(this)')

            var buttonText = document.createTextNode('Delete Post');

            deleteButton.appendChild(buttonText);

            commentText.appendChild(commentNode);

            commentDiv.appendChild(commentText);

            commentDiv.appendChild(deleteButton);

            document.getElementById('postedComments').appendChild(commentDiv);

        };

    });

};

displayNotes();







