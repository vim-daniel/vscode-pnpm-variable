// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { exec } from "child_process";
import { dirname } from "path";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "pnpm-variables" is now active!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "pnpm-variables.root",
    (args) => {
      if (args.testFile === undefined) {
        throw new Error(
          `$\{pnpm-variables.root} requires a testFile property in the launch configuration`
        );
      }
      if (args.args?.length < 1) {
        args.args = [args.testFile];
      }

      const cwd = dirname(args.testFile);
      return new Promise((res, rej) => {
        exec(
          "pnpm root",
          {
            shell: vscode.env.shell,
            cwd,
          },
          (error, stdout, stderr) => {
            if (error) {
              rej(error);
            } else {
              res(stdout.replace("\n", ""));
            }
          }
        );
      });
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
