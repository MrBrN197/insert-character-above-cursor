# Insert characters above cursor

## Features

This extension inserts a character which resides above the cursor to the current cursor position, allowing you to quickly duplicate some of the info from the previous line. "Insert character above cursor" extension adds a new command "Insert character above cursor" to the VSCode Command Palette with a dedicated keyboard hotkey `Shift-Cmd/Ctrl-P`.

\!\[Screenshot\]\(images/icac_example.gif\)

> "Insert character above cursor" extension mimics the similar functionality available in (g)Vim, where it is bound to the `Cmd/Ctrl-Y` keyboard hotkey in Insert mode: http://vimdoc.sourceforge.net/htmldoc/insert.html. 

## Known Issues

Nothing will be inserted if there is nothing above the cursor, for example:
* you are pressing `Cmd/Ctrl-Y` on the first line of the file;
* there is an empty line before the line where cursor resides;
* the previous line is quite short and there is nothing above the cursor;

## Release Notes


### 1.0.0

Initial release

-----------------------------------------------------------------------------------------------------------

## Working with Markdown

**Note:** You can author your README using Visual Studio Code.  Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux)
* Toggle preview (`Shift+CMD+V` on macOS or `Shift+Ctrl+V` on Windows and Linux)
* Press `Ctrl+Space` (Windows, Linux) or `Cmd+Space` (macOS) to see a list of Markdown snippets

### For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
