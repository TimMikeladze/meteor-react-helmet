# Install
`meteor add nfl:react-helmet`

This reusable React component will manage all of your changes to the document head with support for document title, meta, link, script, and base tags. For full documentation visit the [react-helmet](https://github.com/nfl/react-helmet) repo.

**Integrated with reactrouter:react-router-ssr for server-rendering SEO**

## Examples
```javascript
Application = React.createClass({
    render() {
        return (
            <div className="application">
                <ReactHelmet title="My Title" />
                ...
            </div>
        );
    }
});
```

```javascript
Application = React.createClass({
    render() {
        return (
            <div className="application">
                <ReactHelmet
                    title="My Title"
                    titleTemplate="MySite.com - %s"
                    base={{"target": "_blank", "href": "http://mysite.com/"}}
                    meta={[
                        {"name": "description", "content": "Helmet application"},
                        {"property": "og:type", "content": "article"}
                    ]}
                    link={[
                        {"rel": "canonical", "href": "http://mysite.com/example"},
                        {"rel": "apple-touch-icon", "href": "http://mysite.com/img/apple-touch-icon-57x57.png"},
                        {"rel": "apple-touch-icon", "sizes": "72x72", "href": "http://mysite.com/img/apple-touch-icon-72x72.png"}
                    ]}
                    script={[
                      {"src": "http://include.com/pathtojs.js", "type": "text/javascript"}
                    ]}
                    onChangeClientState={(newState) => console.log(newState)}
                />
                ...
            </div>
        );
    }
};
```
