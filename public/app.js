//function constructor?

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

    var commentDiv = document.createElement('div');
    commentDiv.setAttribute('id', 'results._id');
    var commentText = document.createElement('p');
    var commentNode = document.createTextNode('result.text');
    var deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', i)
    commentText.appendChild(commentNode);
    commentDiv.appendChild(commentText);
    commentDiv.appendChild(deleteButton);
    document.getElementById('postedComments').appendChild(commentDiv);
    document.addEventListener('click', function (e) {
        if (e.target && e.target.id == i) {
            remove(e.target);
        }
    });


    //give comment a date/time


};






//delete function
function remove(id) {
    console.log('remove');
    var div = document.getElementById(id);
    div.parentNode.removeChild(div);
};

//onclick events

document.getElementById('submit').addEventListener('click', functionPlaceholder);

document.getElementById('delete').addEventListener('click', functionPlaceholder);


