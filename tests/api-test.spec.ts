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

    const body = await response.json();
    console.log(body);

});


test('get token from login', async ({ request }) => {
  const loginResponse = await request.post(
    'https://impak.app/processCentralLogin',
    {
      form: {
        email: 'cjbusa143@gmail.com',
        password: 'Password@123'
      }
    }
  );
  console.log(loginResponse.status());
  console.log(loginResponse.body());
});


test('GET Users API', async ({ request }) => {

  const response = await request.get('https://reqres.in/api/users?page=2');
  expect(response.status()).toBe(200);
  console.log('STATUS:', response.status());

  const body = await response.json();

  expect(response.status()).toBe(200);
  expect(body.data).toBeDefined();

});
