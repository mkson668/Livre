var OpenLibrary = {
  search: function (author, title) {
    let endpoint = 'http://openlibrary.org/search.json?q=the+lord+of+the+rings';

    return fetch(endpoint, {headers: {}})
      .then(
        (response) => {
          // on success
          if (response.ok) {
            return response.json();
          }
          return new Error('fetch error 0: ' + response.status);
        },
        // on fail
        (error) => {
          throw new Error('fetch error 1: ' + error);
        },
      )
      .then(
        (jsonResponse) => {
          if ('numFound' in jsonResponse && jsonResponse.numFound > 0) {
            return jsonResponse.docs.map((book) => {
              let imageURL =
                'https://covers.openlibrary.org/w/id/' +
                book.cover_i +
                '-M.jpg';
              let filteredBook = {
                title: book.title || 'N/A',
                author: book.author_name[0] || 'N/A',
                image: imageURL,
              };
              return filteredBook;
            });
          }
        },
        (error) => {
          console.log('fetch error 2: ' + error);
        },
      );
  },
};

export default OpenLibrary;
