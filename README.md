# Blog React, notions

Little React blog

## Pure function

A pure function has the following properties:

- the return values are identical for identical arguments
- the function application has no **side effects**

## Hooks

- `useState()` : return the local state value and a function to update it
- `useEffect()` : example :

```js
function myComponent() {
  const [thing, setThing] = useState('thing');
  const [otherThing, setotherThing] = useState('otherThing');

  // this effect will be executed after new render
  useEffect(() => {...});
  // this effect will be executed only after first render (= componentDidMount)
  useEffect(() => {...}, []);
  // this effect will be executed only if thing has changed
  useEffect(() => {...}, [thing]);
  // this effect will be executed only if thing OR otherThing has changed
  useEffect(() => {...}, [thing, otherThing]);
}
```

- `useParams()` : React Router specific hook returning an object of key/value of the dynamic params of the current URL

## React router

- `<BrowserRouter></BrowserRouter>`
- `<Routes></Routes>`
- `<Route path={} element={(...JSX...)} />`
- `<Route path="*" element={...404 component ...} />`
- `<Link to={...url...}></Link>`
- `<NavLink to={...url...} className={(props) => (...function...)}></NavLink>`

## Higher order component

## Remind promise / callback / async await

- [Callback function](https://developer.mozilla.org/fr/docs/Glossary/Callback_function)
- Promise --> [Using promises](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Using_promises), [Promise](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Async-Await](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/async_function)

## Axios

Get promise and manipulate it to fetch the API.

- With callback :

```js
const promise = axios.get('https://oclock-open-apis.vercel.app/api/blog/posts');

const result = promise
  .then((response) => {...})
  .catch((error) => {...})
  .finally(() => {...});
```

- With async/await :

```js
const handleLoadPosts = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://oclock-open-apis.vercel.app/api/blog/posts');
      setIsLoading(false);
      setPosts(response.data);
    }
    catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };
```

- Handle multi fetch with `Promise.all()`

```js
const response = await Promise.all([
  axios.get('https://oclock-open-apis.vercel.app/api/blog/posts'),
  axios.get('https://oclock-open-apis.vercel.app/api/blog/categories'),
]);
```

## Inner HTML with React in JSX : DOMPurify

We can use `dangerouslySetInnerHTML={{__html: 'First &middot; Second'}}` but like it is said, this is dangerous because it exposes users to a **XSS attack** (cross-site scripting).

The npm package **[DOMPurify](https://www.npmjs.com/package/dompurify)** cleans the HTML to insert in the DOM

```js
import DOMPurify from 'dompurify';
const cleanHTML = DOMPurify.sanitize(excerpt);
```

It can be configured to choose what HTML is allowed or not

- White list with `ALLOWED_TAGS`

```js
const configSanitize = {
    ALLOWED_TAGS: ['em', 'strong'],
  };
  const cleanHTML = DOMPurify.sanitize(excerpt, configSanitize);
```

- Black list with `FORBID_TAGS`

```js
const configSanitize = {
    FORBID_TAGS: ['script', 'a', 'img'],
  };
  const cleanHTML = DOMPurify.sanitize(excerpt, configSanitize);
```

See the [complete doc of DOMPurify](https://www.npmjs.com/package/dompurify) for more options.

-------------------

<details>
  <summary>Mode zen : Off</summary>

![Off](./docs/off.png)

</details>

<details>
  <summary>Mode zen : On</summary>

![On](./docs/on.png)

</details>
