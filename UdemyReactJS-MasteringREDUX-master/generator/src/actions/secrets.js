//Lets setup the first action in our new meme generator project.
//Ths first action will be reponsible for grabbing the default list of memes from our API. Previously when
// we use the fetch function to grab API info in the recipefinder appn example, we had a REDUX action that'd just receive a array of items
// and set them into store. However, this logic abstracted the actual FETCH function outside of the redux function in itself. In a way won't it be more natural to  place this FETCH function
// outside of the components and in the actual REDUX logic, then the Grabbing of information seems like it should happen. So, what if we wanted a function that ad a FETCH function within it
//and returned the API information based on that. If we did so we'll face an issue. For (i) we can't really return functions in our action creators. Next (ii) this
//Fetch Function is asynchronous, meaning its not synchronous or allowable for us to place logic on top of it in orderly manner. Afterall , return value from the API is received to us in an foreseeable amount of time.
//Because. its an API it can take however long, it wants togive you your information depending on the internet connection or even the connection of the API Server. So question: Is it even possible to handle
//asynchronous Actions in REDUX and to return actions with functions within it. YES!!! just have to set up our actions in a new way, different from our previous examples
//So, let's create a new file within the actions folder which is index.js
const username = 'AMittal';
const password = 'Xyz_abc';

export { username, password };