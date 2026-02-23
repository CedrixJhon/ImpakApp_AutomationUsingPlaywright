
export const Credentials =[
    {
        name: 'Valid Login',
        username: 'cjbusa143@gmail.com',
        password: 'Password@123',
        expectedURL: 'https://impak.app/dashboard',
        shouldError: false,
    },

    {
        name: 'Invalid Login - Wrong Password',
        username: 'tyreuyre@gmail.com',
        password: 'wrongpassword',
        expectedError: 'Whoops! Something went wrong.',
        shouldError: true,
    }

];

export const AddMember = {
    email: 'impak01@yopmail.com',
    fname: 'Soldier',
    lname: 'LastSoldier',
};
 
