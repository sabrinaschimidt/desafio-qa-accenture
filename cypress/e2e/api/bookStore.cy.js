import BookStoreService from '../../services/BookStoreService';

describe('API - Bookstore', () => {
    const id = Date.now();
    const user = `user_${id}`;
    const pwd = `Pass@${id}`;

    it('valida fluxo completo APIs', () => {
        BookStoreService.createUser(user, pwd).then(res => {
            expect(res.status).to.eq(201);
            const userId = res.body.userID;

            BookStoreService.generateToken(user, pwd).then(res => {
                expect(res.status).to.eq(200);
                const token = res.body.token;

                BookStoreService.isAuthorized(user, pwd).then(res => {
                    expect(res.status).to.eq(200);
                    expect(res.body).to.be.true;

                    BookStoreService.getBooks().then(res => {
                        expect(res.status).to.eq(200);
                        const selectedBooks = [
                            res.body.books[0].isbn,
                            res.body.books[1].isbn
                        ];

                        BookStoreService.rentBooks(userId, selectedBooks, token).then(res => {
                            expect(res.status).to.eq(201);

                            BookStoreService.getUser(userId, token).then(res => {
                                expect(res.status).to.eq(200);
                                expect(res.body.userId).to.eq(userId);
                                expect(res.body.books).to.have.length(2);

                                const userIsbns = res.body.books.map(b => b.isbn);
                                expect(userIsbns).to.deep.equal(selectedBooks);
                            });
                        });
                    });
                });
            });
        });
    });
});