const actionButton = document.querySelector("button");
actionButton.addEventListener("click", library);

const books = [
    { id: 1, author: "Фицджеральд", name: "Великий Гетсби", isReading: false, available: 3},
    { id: 2, author: "Толстой", name: "Анна Каренина", isReading: false, available: 5 },
    { id: 3, author: "Оруел", name: "1984", isReading: false, available: 1 },
    { id: 4, author: "Сервантес", name: "Дон Кихот", isReading: false, available: 2},
    {
      id: 5,
      author: "Достоевский",
      name: "Преступление и наказание",
      isReading: false,
      available: 7,
    },
  ];
  
  // Реализовать приложение, которое будет иммитировать терминал в библиотеке.
  // Пользователь сможет:
  // - взять любую уже существующую в базе книгу
  // - сдать книгу назад в библиотеку
  // - принести свою книгу и добаить ее в базу данных
  
  // База данных - массив книг, которые сожержатся в библиотеке
  
  // Свойства книги(модель):
  // - id: уникальный идентификатор
  // - author
  // - name
  // - isReading: содержит информацию о том, доступна ли книга
  
  // Взять книгу:
  // - пользователь вводит название книги, при этом ему показывается список
  //   доступных
  // - алгоритм должен проверить следующие параметры:
  //   - есть ли вообще такая книга в наличии
  //   - доступна ли она сейчас (isReading)
  // - если проверка прошла, то выдать книгу пользователю,
  //   изменив ее статус isReading на true и сообщив ее идентификатор
  
  // - если нет то сказать пользователю почему он не может взять книгу:
  //   - либо ее нет в базе данных
  //   - либо ее сейчас читает кто-то другой
  
  // Вернуть книгу:
  //  - пользователь вводит идентификатор книги, которую хочет вернуть
  //  - проверяем, существует ли книга с таким айди в базе данных
  //  - если да, книга в базе данных меняет свой статус на isReading: false
  //  - если нет - сообщаем что книги с таким айди не существует
  
  // Добавить книгу:
  //  - пользователь поочердно вводит данные книги: Автора и Название
  //  - книге присваивается уникальный идентификатор и она добавляется в базу
  //    данных со статусом isReading: false
  //  - сообщаем пользователю о том, что книга успешно добавлена

function library() {
  let action = prompt ('Action? \n ▸ take \n ▸ return \n ▸ add');

  if(action === null) {
    alert ('Bye');

    return;
  }

  action = action.toLowerCase().trim()

  switch (action) {
    case 'take':
      takeBook();
      break;
    case 'return':
      returnBook();
      break;
    case 'add':
      addBook();
      break;
    default:
      alert ('No action')
  }
};

const takeBook = () => {
    console.log('take');

    const avilableBooksNames = books
    .filter((book) => !book.isReading)
    .map((book) => ` ▸ "${book.name}" - ${book.author}`)
    .join ('\n')

  let desiredBookName = prompt (`Enter book name: \n${avilableBooksNames}`);

  if (!desiredBookName) {
    alert ('No book name');

    return;
  }

  desiredBookName = desiredBookName.trim().toLowerCase()

  const desiredBook = books.find((book) => {
    return (book.name.toLowerCase() === desiredBookName) || (book.author.toLowerCase() === desiredBookName)
  });

  if (!desiredBook) {
    alert ('No book with name');

    return;
  };

  if (desiredBook.available > 0) {
    Number(desiredBook.available = desiredBook.available - 1);
  } else {
    alert ('Sorry, this book at this moment not available.');
  
    return
  };

  if (desiredBook.available === 0) {
    desiredBook.isReading = true;
  };

  // console.log(`desiredBook`, desiredBook)


  alert( `Thanks! Your book id is ${desiredBook.id}`);

  console.log(`books`, books)
};

const returnBook = () => {
  const returningBookId = Number(prompt ('Enter id book:'));

  if (!returningBookId) {
    alert ("No book id");

    return
  };

  const currentBook = books.find((book) => book.id === returningBookId);

  if (!currentBook) {
    alert ('invalid book id')

    return
  };

  if (currentBook) {
      Number(currentBook.available = currentBook.available + 1)
      currentBook.isReading = false;
  } else {
    alert ('This book is not reading now')

    return
  };

  // console.log(`currentBook.available`, currentBook.available);

  alert (`Thanks, come adain! Do you like "${currentBook.name}"?`);
};

const addBook = () => {
  const name = prompt ('Book name?');
  const author = prompt ('Book author?');
  const amount = prompt ('Amount?');

  const newBook = {
    name: `${name}`,
    author: `${author}`,
    isReading: false,
    available: `${amount}`,
    id: generationBookID(),
  };

  if ((newBook.name && newBook.author) === (books.name && books.author)) {
    alert ('Thank you, but we already have such a book')
  } else {
    books.push(newBook);
    alert (`Book was added! Library id: ${newBook.id}`)
  };

  console.log(`newBook`, newBook);
  
};

function generationBookID () {
  let isBookWithIdExists = true;
  let generationId;

  do{
    generationId = Math.ceil(Math.random() * 100);
    console.log(`generationId`, generationId)
    isBookWithIdExists = Boolean(
      books.find((book) => book.id === generationBookID)
      );
      console.log(`isBookWithIdExists`,isBookWithIdExists)
  } while (isBookWithIdExists);

  return generationId;
};