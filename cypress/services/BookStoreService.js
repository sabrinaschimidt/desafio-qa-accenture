class BookStoreService {
    constructor() {
        this.baseUrl = 'https://demoqa.com';
    }

    createUser(user, password) {
        return cy.request({
            method: 'POST',
            url: `${this.baseUrl}/Account/v1/User`,
            body: {
                userName: user,
                password: password,
            },
            failOnStatusCode: false
        });
    }
    generateToken(user, password) {
        return cy.request({
            method: 'POST',
            url: `${this.baseUrl}/Account/v1/GenerateToken`,
            body: {
                userName: user,
                password: password,
            },
            failOnStatusCode: false
        });
    }
    isAuthorized(user, password) {
        return cy.request({
            method: 'POST',
            url: `${this.baseUrl}/Account/v1/Authorized`,
            body: {
                userName: user,
                password: password,
            },
            failOnStatusCode: false
        });
    }
    getBooks() {
        return cy.request({
            method: 'GET',
            url: `${this.baseUrl}/BookStore/v1/Books`,
            failOnStatusCode: false
        });
    }
    rentBooks(userId, isbns, token) {
        return cy.request({
            method: 'POST',
            url: `${this.baseUrl}/BookStore/v1/Books`,
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: {
                userId: userId,
                collectionOfIsbns: isbns.map(isbn => ({ isbn }))
            },
            failOnStatusCode: false
        });
    }

    getUser(userId, token) {
        return cy.request({
            method: 'GET',
            url: `${this.baseUrl}/Account/v1/User/${userId}`,
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            failOnStatusCode: false,
            timeout: 60000
        });
    }
}

export default new BookStoreService();