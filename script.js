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


const book1 = new Book('Book1', 'author1', '123', 'Read');
const book2 = new Book('Book2', 'author2', '233', 'Not Read');
const book3 = new Book('Book3', 'author3', '12d3', 'Read');
const book4 = new Book('Book4', 'author4', '122133', 'Not Read');


// myLibrary = [book1, book2, book3, book4];

// myLibrary.forEach(book => {
//     DisplayBooks(book);
// });


EmptyCard();





function DisplayBooks(book){
    const container = document.querySelector('.main-content');
    const card = document.createElement('div');
    card.classList.add(`card`);
    card.setAttribute(`id`,`${myLibrary.length}`);
    const book_name= document.createElement('h2');
    const author_name = document.createElement('h4');
    const pages = document.createElement('p');
    const r_status = document.createElement('p');   
    book_name.textContent = book.name;
    author_name.textContent= `:- ${book.author}`;
    pages.textContent = `Total pages: ${book.pages}`;
    r_status.textContent = book.read_status;
    card.appendChild(book_name);
    card.appendChild(author_name);
    card.appendChild(pages);
    card.appendChild(r_status);
    //adding the delete and read toggle button
    const delete_btn = document.createElement('button');
    delete_btn.textContent = 'Delete';
    delete_btn.classList.add('delete-btn')
    delete_btn.addEventListener('click', function(event){
        myLibrary.splice(card.id, 1);
        card.remove();
    });
    const status_btn = document.createElement('button');
    status_btn.textContent = 'Toggle read Status';
    status_btn.classList.add('status-btn');
    card.appendChild(status_btn);
    card.appendChild(delete_btn);
    container.appendChild(card);
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
    const book_name_input = document.querySelector('#b-name').value;
    const author_name_input = document.querySelector('#a-name').value;
    const pages_input = document.querySelector('#t-pages').value;
    const read_status_input = document.querySelector('#r-status').value;
    const newbook = new Book(book_name_input, author_name_input, pages_input, read_status_input);
    const container = document.querySelector('.empty');
    container.remove();
    DisplayBooks(newbook);
    EmptyCard();
    myLibrary.push(newbook);
}


