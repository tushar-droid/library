let myLibrary= [];
function Book(name, author, pages, read_status){
    this.name= name;
    this.author= author;
    this.pages= pages;
    this.read_status = read_status;

}

Book.prototype.info = function(){
    return (`${this.name} by ${this.author} with ${this.pages} is ${this.read_status}`);
}


EmptyCard();





function DisplayBooks(book){
    const container = document.querySelector('.main-content');
    const card = document.createElement('div');
    card.classList.add(`card`);
    card.setAttribute(`id`,`${myLibrary.length}`);
    const book_name= document.createElement('h2');
    const author_name = document.createElement('h4');
    const pages = document.createElement('p');
    const r_status = document.createElement('h2');  
    r_status.classList.add('read-status'); 
    book_name.textContent = book.name.toUpperCase();
    author_name.textContent= `:- ${book.author.toUpperCase()}`;
    pages.textContent = `Total pages: ${book.pages}`;
    r_status.textContent = book.read_status.toUpperCase();
    card.appendChild(book_name);
    card.appendChild(author_name);
    card.appendChild(pages);
    card.appendChild(r_status);

    //adding the delete button
    const delete_btn = document.createElement('button');
    delete_btn.textContent = 'DELETE';
    delete_btn.classList.add('delete-btn')
    delete_btn.addEventListener('click', function(){
        myLibrary.splice(card.id, 1);
        card.remove();
    });

    card.appendChild(delete_btn);
    container.appendChild(card);
    if(book.read_status.toUpperCase() == 'READ'){
        card.classList.add('green')
        r_status.classList.add('green-btn');
    }
    else{
        card.classList.add('red');
        r_status.classList.add('red-btn');
    }

    r_status.addEventListener('click', function(){
        let curr_status = r_status.textContent;
        let ind = card.id;
        console.log("id:  ", ind);
        if(curr_status == 'READ'){
            r_status.textContent = 'NOT READ';
            r_status.classList.remove('green-btn');
            r_status.classList.add('red-btn');
            card.classList.add('red');
            card.classList.remove('green');
            myLibrary[ind].read_status = 'NOT READ';
        }
        else{
            r_status.textContent = 'READ';
            r_status.classList.remove('red-btn');
            r_status.classList.add('green-btn');
            card.classList.add('green');
            card.classList.remove('red');
            myLibrary[ind].read_status = 'READ';
        }

        console.log(myLibrary)

    })





}


function EmptyCard(){
    const container = document.querySelector('.main-content');
    const card = document.createElement('div');
    card.classList.add('card', 'empty');
    const button = document.createElement('div')
    button.innerHTML = `<img src = 'Icons/add_icon.svg' alt='addicon' class='add-icon' id='add-card'/>`;
    card.appendChild(button);
    container.appendChild(card);
    

const addmore = document.querySelector('#add-card');
addmore.addEventListener('click', AddCard);

}

function AddCard(){
    const container = document.querySelector('.empty');
    container.textContent = '';
    //creating the form
    const newForm = document.createElement('Form');
    newForm.setAttribute("method", "post");
    newForm.setAttribute("action", "");

    //getting all the required pieces
    const bookname = document.createElement('input');
    const authorname = document.createElement('input');
    const totalpages = document.createElement('input');
    const readstatus = document.createElement('input');
    const submitbtn = document.createElement('input');
    const cancelbtn = document.createElement('input');

    //Setting the attributes for the Book Name
    bookname.setAttribute('type', 'text');
    bookname.setAttribute('name', 'bookname');
    bookname.setAttribute('placeholder','Book Name' );
    bookname.setAttribute('id','b-name' );

    //Setting the attributes for the author name
    authorname.setAttribute('type', 'text');
    authorname.setAttribute('name', 'authorname');
    authorname.setAttribute('placeholder','Author Name');
    authorname.setAttribute('id','a-name' );

    //setting the attributes for the pages
    totalpages.setAttribute('type', 'text');
    totalpages.setAttribute('name', 'pages');
    totalpages.setAttribute('placeholder','total # of pages' );
    totalpages.setAttribute('id','t-pages' );

    //setting the attributs for the read status
    readstatus.setAttribute('type', 'text');
    readstatus.setAttribute('name', 'readstatus');
    readstatus.setAttribute('placeholder','Read or Not Read' );
    readstatus.setAttribute('id', 'r-status');

    //Setting the attributes for the submit button
    submitbtn.setAttribute('type', 'submit');
    submitbtn.setAttribute('value', 'Submit');
    submitbtn.setAttribute('id', 'submit-btn');    

    //Setting the attributes for the cancel button
    cancelbtn.setAttribute('type', 'button');
    cancelbtn.setAttribute('value', 'Cancel'); 
    cancelbtn.setAttribute('id', 'cancel-btn');    

    //This will work on sumit click
    newForm.addEventListener('submit', AddBook);

    cancelbtn.addEventListener('click', function(event) {
        container.remove();
        EmptyCard();
    })
    newForm.appendChild(bookname);
    newForm.appendChild(authorname);
    newForm.appendChild(totalpages);
    newForm.appendChild(readstatus);
    newForm.appendChild(submitbtn);
    newForm.appendChild(cancelbtn);
    container.appendChild(newForm);
}


//This function will work to add new book when submit button is clicked

function AddBook(event){
    event.preventDefault();
    const book_name_input = document.querySelector('#b-name').value.trim().toUpperCase();
    const author_name_input = document.querySelector('#a-name').value.trim().toUpperCase();
    const pages_input = document.querySelector('#t-pages').value.trim().toUpperCase();
    const read_status_input = document.querySelector('#r-status').value.trim().toUpperCase();
    const newbook = new Book(book_name_input, author_name_input, pages_input, read_status_input);
    const container = document.querySelector('.empty');
    container.remove();
    DisplayBooks(newbook);
    EmptyCard();
    myLibrary.push(newbook);
}


