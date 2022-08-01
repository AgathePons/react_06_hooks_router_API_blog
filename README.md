# Blog React, notions :

Little React blog

## Hooks

- `useState()`
- `useParams()`

## React router

- `<BrowserRouter></BrowserRouter>`
- `<Routes></Routes>`
- `<Route path={} element={(...JSX...)} />`
- `<Route path="*" element={...404 component ...} />`
- `<Link to={...url...}></Link>`
- `<NavLink to={...url...} className={(props) => (...function...)}></NavLink>`

## Higher order component
  
## Pure function

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

-------------------

<details>
  <summary>Mode zen : Off</summary>

![Off](./docs/off.png)

</details>

<details>
  <summary>Mode zen : On</summary>

![On](./docs/on.png)

</details>
