# Insert characters above cursor

## Features

This extension inserts a character which resides above the cursor to the current cursor position, allowing you to quickly duplicate some of the info from the previous line. "Insert character above cursor" extension adds a new command "Insert character above cursor" to the VSCode Command Palette with a dedicated keyboard hotkey `Shift-Cmd/Ctrl-P`.

![Screenshot](/images/icac_example.gif)

> "Insert character above cursor" extension mimics the similar functionality available in (g)Vim, where it is bound to the `Cmd/Ctrl-Y` keyboard hotkey in Insert mode: http://vimdoc.sourceforge.net/htmldoc/insert.html. 

## Known Issues

Nothing will be inserted if there is nothing above the cursor, for example:
* you are pressing `Cmd/Ctrl-Y` on the first line of the file;
* there is an empty line before the line where cursor resides;
* the previous line is quite short and there is nothing above the cursor;

## Donate if you want to support the development

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GJBFSQWZSABAG)

## Release Notes

### 1.0.0

Initial release

### 1.0.1

Fixing the donation button

-----------------------------------------------------------------------------------------------------------

