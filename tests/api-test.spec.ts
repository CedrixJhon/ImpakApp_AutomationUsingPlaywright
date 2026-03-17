import {test, expect} from '@playwright/test';



test ('API Test for Get Request', async ({request}) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users');
    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log(body);

    expect(body.length).toBeGreaterThan(0);
});

test('API Test for Post Request', async ({request}) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/users', {
    data: {

        name: 'John Doe',
        email: 'pBwPp@example.com'
    }
    });
    expect(response.status()).toBe(201);

    // convert to JSON
    const body = await response.json();
    console.log(body);
    expect(body.name).toBe('John Doe');
    expect(body.email).toBe('pBwPp@example.com');
    
});


test('API Test for Put Request', async ({request}) => {
    const response = await request.put('https://jsonplaceholder.typicode.com/users/1', {
    data: {
        name: 'Jane Doe',
        email: 'pBwPp@example.com'
    }
    });
    expect(response.status()).toBe(200);
});