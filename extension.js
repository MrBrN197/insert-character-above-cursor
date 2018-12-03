// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "insert-character-above-cursor" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.insertCharacterAboveCursor', function () {
        // current editor
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage("Open a file first to work with text");
            return;
        }
        // TODO: check for the empty line and the end of the string?
        // TODO: introduce the option to insert words instead of characters
        // the Position object gives you the line and character where the cursor is
        const position = editor.selection.active;
        // check if the current line is not the first one
        if (position.line) {
            // the position above the cursor
            const abovePosition = position.translate(-1, 0);
            const abovePositionNext = position.translate(-1, +1);
            const myRange = new vscode.Range(abovePosition, abovePositionNext);
            editor.edit((editBuilder) => {
                editBuilder.insert(position, editor.document.getText(myRange));
            }).then(() => {
                // console.log('Edit applied!');
            }, (err) => {
                console.log("Edit rejected!");
                console.error(err);
            });
        } else {
            console.log("There is no character above cursor");
        }
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;