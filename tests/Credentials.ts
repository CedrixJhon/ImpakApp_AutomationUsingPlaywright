
export const CredentialData = [

    {
        "id": "Creds01_Valid",
        "username": "cjbusa143@gmail.com",
        "password": "Password@123",
        "ExpectedURL": "https://impak.app/dashboard",
        "IsError": false
    },
     {

    
        "id": "Creds02_Inalid",
        "username": "cj@gmail.com",
        "password": "Password@123",
        "ExpectedError": "Invalid username or password entered.",
        "IsError": true
     }

];

interface InviteEmailData{
    userEmail : string
    userFirstName: string
    userLastName: string
    SecondUserEmail : string
    SecondUserFirstName: string
    SecondUserLastName: string
}

export const InviteCreds: InviteEmailData = {
    userEmail: "impak01@yopmail.com",
    userFirstName: "James",
    userLastName: "Yap",

    SecondUserEmail: "impak02@yopmail.com",
    SecondUserFirstName: "James2",
    SecondUserLastName: "Yap2",
}
