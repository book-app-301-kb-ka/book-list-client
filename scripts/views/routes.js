
page ("/", () => app.Book.fetchAll(app.bookView.initIndexPage));
page("/api/vi/books/:id", ctx => app.bookView.initDetailPage(ctx));

page();