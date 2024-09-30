Exercise 0.4 New note diagram

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


Exercise 0.5 Single page app diagram

Because it is the first download of the page the diagram looks really similar to the original/normal version of the page.

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document of the single page app
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file of the single page app
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "202X-X-X" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes
```

Exercise 0.6 New note in Single page app diagram

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note over browser: User creates a new note and submits it

    browser->>server: POST /new_note_spa
    activate server
    server-->>browser: 201 Created (JSON response)
    deactivate server

    Note right of browser: The browser updates the UI with the new note
```


