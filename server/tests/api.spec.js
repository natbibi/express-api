const request = require('supertest');
// import server
const server = require('../app');

describe('API server', () => {
    let api;
    let testFilm = {
        name: 'Gladiator',
        director: 'Ridley Scott',
    };

    beforeAll(() => {
        // start the server and store it in the api variable
        api = server.listen(5000, () =>
            console.log('Test server running on port 5000')
        );
    });

    afterAll((done) => {
        // close the server, then run done
        console.log('Gracefully stopping test server');
        api.close(done);
    });

    it('responds to get / with status 200', (done) => {
        request(api).get('/').expect(200, done);
    });

    it('responds to get /films with status 200', (done) => {
        request(api).get('/films').expect(200, done);
    });

    it('responds to post /films with status 201', (done) => {
        request(api)
            .post('/films')
            .send(testFilm)
            .expect(201)
            .expect({ id: 4, ...testFilm }, done);
    });

    it('retrieves a film by id', (done) => {
        request(api)
            .get('/films/3')
            .expect(200)
            .expect({ id: 3, name: 'Robocop' }, done);
    });

    it('responds to a unknown film id with a 404', (done) => {
        request(api).get('/films/42').expect(404).expect({}, done);
    });

    it('responds to delete /films/:id with status 204', async () => {
        await request(api).delete('/films/4').expect(204);

        const updatedFilms = await request(api).get('/films');

        expect(updatedFilms.body.length).toBe(3);
    });

    it('responds to non existing paths with 404', (done) => {
        request(api).get('/no').expect(404, done);
    });

    it('responds to invalid method request with 405', (done) => {
        request(api).post('/').expect(405, done);
    });
});