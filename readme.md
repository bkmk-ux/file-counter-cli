# File Counter CLI

A simple command-line interface (CLI) tool built with **Node.js** that reads a text file and counts its **lines, words, and characters**.

This project is designed to practice working with command-line arguments, file handling, error handling, and exit codes in Node.js.

## Features

* Accepts a file path from the terminal.
* Counts:

  * Lines
  * Words
  * Characters

* Displays a friendly error when the file path is missing.
* Displays a friendly error when the file cannot be read.
* Sends errors to `stderr`.
* Uses a non-zero exit code when an error occurs.

## Requirements

* [Node.js](https://nodejs.org/) installed on your computer.

You can check your Node.js installation with:

```bash
node --version
```

## Project Structure

```text
file-counter/
│
├── file-counter.js
├── notes.txt
└── README.md
```

## Installation

Clone or download the project, then navigate to the project directory:

```bash
cd file-counter
```

No external dependencies are required.

## Input File

Create a file named `notes.txt` with the following content:

```text
Node makes CLI tools useful.
Files are common input.
```

## Usage

Run the CLI by providing a file path:

```bash
node file-counter.js notes.txt
```

Expected output:

```text
File: notes.txt
Lines: 2
Words: 9
Characters: 52
```

### File Does Not Exist

You can test the error handling with:

```bash
node file-counter.js missing.txt
```

Expected output:

```text
error: could not read file: missing.txt
```

The command should also return a non-zero exit code.

### No File Path

If you run the CLI without providing a file:

```bash
node file-counter.js
```

Expected output:

```text
error: please provide a file path
```

The error should be printed to `stderr` and the command should return a non-zero exit code.

## How It Works

The CLI gets the file path from Node.js command-line arguments:

```javascript
process.argv
```

The file is then read using Node.js's built-in `fs` module.

The content is analyzed to calculate:

* **Lines** — the number of lines in the file.
* **Words** — the number of words separated by whitespace.
* **Characters** — the total number of characters in the file.

No external npm packages are needed.

## Example

```bash
$ node file-counter.js notes.txt

File: notes.txt
Lines: 2
Words: 9
Characters: 52
```

## Error Handling

The CLI handles two main error cases.

### Missing File Path

```text
error: please provide a file path
```

### File Cannot Be Read

```text
error: could not read file: missing.txt
```

Errors are written to `stderr` instead of normal output (`stdout`), and the program exits with a non-zero status code.

## Learning Goals

This project helps practice:

* Node.js CLI applications
* `process.argv`
* File paths
* The Node.js `fs` module
* Reading files
* String manipulation
* Counting lines, words, and characters
* Error handling
* `stderr` and `stdout`
* Process exit codes
* Basic command-line tools

## License

This project is for learning and educational purposes.
## project url 
https://roadmap.sh/projects/nodejs-file-counter