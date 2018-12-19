function wait(time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}


function fetching(username){
   return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': 'token '}})
        .then(parseJson)
       .then(getFirst)
       .then(evaluateFirst)
       .catch(errorData => {
        console.log("error", errorData);
    });
}
const parseJson = data => data.json();
const getFirst = data => data[1];
const evaluateFirst = first => {
    console.group(`Latest action on Github`);
    console.log(`User: `, first.actor.display_login);
    console.log(`Date of event: `, first.created_at);
    console.log(`Type of event: `, first.type);
    console.groupEnd()
};

fetching('ngumbs37');
wait(2000);