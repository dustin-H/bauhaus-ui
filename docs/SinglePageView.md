# Single Page View
When this is activated the header, sidebar and search field are permanently hidden. Only the content of the current page is shown. It can be activated by setting the request `GET` parameter `singlePageView` to `1` or `true`.

For example the url to bauhaus-ui would look like:

```
http://localhost:8080/?singlePageView=1#/posts
```

... instead of ...


```
http://localhost:8080/#/posts
```
