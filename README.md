# file-hashmap

A CLI tool for creating a map of md5 hashes for all files in a given directory.

## Installation

```bash
npm install -g file-hashmap
```

## Usage

```bash
file-hashmap -d [input directory] -o [output filename]
```

## Example

📦my-project  
 ┣ 📂client  
 ┃ ┗ 📜index.html  
 ┃ ┗ 📜index.css  
 ┃ ┗ 📜app.js   
 ┣ 📂server  
 ┃ ┗ 📜index.js

Example usage for this directory
```bash
file-hashmap -d my-project -o my-project/hashmap.json
```
Creates hashmap.json with following content
```json
{
    "client/index.html": "a0d8d46f08faa281ee190277202622ed",
    "client/index.css": "7878c5099bfaa9f86ac20fc6e9ee5c9d",
    "client/app.js": "5b1a679190934e96b6e99a47ea4d6f39",
    "server/index.js": "c864a89d88a8c0c88f445d91e9470bfa"
}
```
