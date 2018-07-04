import { username, password } from './secrets';

export const RECEIVE_MEMES = 'RECEIVE_MEMES';
export const NEW_MEME = 'NEW_MEME';

function receiveMemes(json) {
    const { memes } = json.data;  //passing this json into our function through our API and the memes will be stored in json data

    return {
        type: RECEIVE_MEMES,
        memes
    }
}

function fetchMemesJson() {
    return fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json())
}

//special REDUX logic for asynchronous function come in here
//Now have Asynchronous fetchMemesJson function nwhich can handle at any unforeseen amount of time.
//Redux allows us to create a function that returns a function itself with a dispatch parameter. this dispatch parameter, will actually dispatch our received info from FetchMemes.. at the moment of time that it receives it.
//So, within this inner function that has dispatch will return our data from the fetchMem.. at the moment of time

//Luckily we can use custom middleware to allow returning functions. Middleware in redux serves as intermediaries steps in the updating of the redux store. And it can be used for creating loggers and displaying more debugging info
//In our case Middleware will be used to allow asynchs actions that returns functions.
//Redux Thunk provides for us a Middleware that takes care of this whole Asynchronous beh.
export function fetchMemes() {
    return function(dispatch) {
        return fetchMemesJson()
            .then(json => dispatch(receiveMemes(json)))

    }
}

function newMeme(meme) {
//not exported now as it will not handle dispatching of our function.
    return {
        type: NEW_MEME,
        meme
    }
}

function postMemeJson(params) {
    params["username"] = username;
    params["password"] = password;

    const bodyParams = Object.keys(params).map(key => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
    }).join('&');

    console.log('bodyParams', bodyParams);

    return fetch('https://api.imgflip.com/caption_image',{
        method:"POST",
        headers: {                              //TO REMEMBER : not header 
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: bodyParams
    }).then(response => response.json());
}

export function createMeme(new_meme_object) {
    return function(dispatch) {
        return postMemeJson(new_meme_object)
            .then(new_meme => dispatch(newMeme(new_meme)))
    }
}