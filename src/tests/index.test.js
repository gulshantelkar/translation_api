const supertest = require('supertest');
const request = supertest('http://localhost:3000');

describe('Translation', () => {

    test('Translate the text', async () => {
        const body = {
            text: "भेजना चाहते हैं हिंदी में मैसेज लेकिन नहीं आती टाइपिंग",
            toLang: "en",
            fromLang: "hi"
        };

        const response = await request
            .post('/api/translate')
            .send(body);

        expect(response.statusCode).toBe(200);

        const data = response.body;
        expect(data).toBeDefined();

        expect(data.fromLang).toBeDefined();
        expect(data.toLang).toBeDefined();
        expect(data.text).toBeDefined();
        expect(data.target).toBeDefined();
    });

});
