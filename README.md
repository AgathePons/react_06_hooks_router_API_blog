# Blog React, notions

Little React blog

## Pure function

A pure function has the following properties:

- the return values are identical for identical arguments
- the function application has no **side effects**

## Higher order component

A higher order component (HOC) is a function that takes a component and returns a new component.  
See the [Higher-Order Component](https://fr.reactjs.org/docs/higher-order-components.html#gatsby-focus-wrapper) article in the React doc.

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
- `useNavigate()` : React Router specific hook returning a function that lets us navigate programmatically

## React router

- Englobe the root component (`Root`, `App`, `Blog`...) in `<BrowserRouter></BrowserRouter>`
- Englobe the routes list in `<Routes></Routes>`
- Define a route : `<Route path={'myRoute'} element={(...JSX...)} />`
- Define a 404 : `<Route path="*" element={...404 component ...} />` (`*` is used for "all", and it is placed after all other routes, so if no route matches, it comes to  the last "all other routes").
- Define a route with parameter : `<Route path="/:myParams" element={(...JSX...)} />`
- Define links to navigate to another page (render a `<a>` element) : `<Link to={...url...}></Link>`
- Define navigation link that is special kind of link that allows to know if it is active or not : `<NavLink to={...url...} className={(props) => (...function...)}></NavLink>`

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
