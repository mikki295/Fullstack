Excercise 0.4 New note diagram

We start by assuming the page html and javascript has already ran.

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note [{ "content": "The send new note", "date": "202X-X-X" }, ... ]
    activate server
  Note left of server: The banck-end handles saving the data to the database/server  
    server-->>browser: 302 Found Perform a new HTTP GET request for https://studies.cs.helsinki.fi/exampleapp/notes
    deactivate server

    

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML Document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "202X-X-X" }, ... ]
    deactivate server

  Note right of browser: The browser executes the callback function that renders the notes
```
