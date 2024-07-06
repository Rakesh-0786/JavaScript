// Imagine you are working for a social media com-any1 You have a list of all the users1 Your job is to create a 
// function that checks if a s-ecific username is in that list1 The function should take the username as in-ut and 
// tell you whether it's -resent in the list of users or not





const allUsers=[
    "rakesh",
    "shashwat",
    "tiwari",
    "shushant",
    "rishab",
    "parvej",
    "Mithun",

];
 function isUserPresent(user){
    if (allUsers.includes(user)){
        console.log(`Yes, ${user} is a valid user.`);
        return true;

    }else{
        console.log(`No,${user} is  not a valid user.`);
        return true;
    }
}
isUserPresent("Mithun");

// OUTPUT: Yes, Mithun is a valid user.

isUserPresent("Someone");

// OUTPUT: No, Someone is not a valid user.

 