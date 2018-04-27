
page ("/", () => app.Book.fetchAll(app.bookView.initIndexPage));
page("/api/v1/books/:id", ctx => app.bookView.initDetailPage(ctx));
page("/api/v1/books/add", ctx => app.bookView.initAddPage(ctx));

page();