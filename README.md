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

## Donate if you want to support the development:

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="GJBFSQWZSABAG" />
<input type="image" src="https://www.paypalobjects.com/en_US/RU/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.paypal.com/en_RU/i/scr/pixel.gif" width="1" height="1" />
</form>



## Release Notes


### 1.0.0

Initial release

-----------------------------------------------------------------------------------------------------------

