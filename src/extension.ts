import * as vscode from 'vscode';

/**
 * Called when the extension is activated.
 * The extension is activated the very first time a command is executed.
 */
export function activate(_context: vscode.ExtensionContext): void {
  console.log('VZCode extension is now active');

  // Extension activation logic will be added here
  // See: https://github.com/thatdspguy/vzcode/issues for roadmap
}

/**
 * Called when the extension is deactivated.
 * Clean up any resources here.
 */
export function deactivate(): void {
  console.log('VZCode extension is now deactivated');
}
