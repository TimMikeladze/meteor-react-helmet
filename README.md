# Install
`meteor add nfl:react-helmet`

This reusable React component will manage all of your changes to the document head with support for document title, meta, link, script, and base tags.

**Integrated with reactrouter:react-router-ssr for server-rendering SEO**

## Examples
```javascript
import React from "react";
import Helmet from "react-helmet";

export default class Application extends React.Component {
    render() {
        return (
            <div className="application">
                <Helmet title="My Title" />
                ...
            </div>
        );
    }
};
```

```javascript
import React from "react";
import Helmet from "react-helmet";

export default class Application extends React.Component {
    render() {
        return (
            <div className="application">
                <Helmet
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
