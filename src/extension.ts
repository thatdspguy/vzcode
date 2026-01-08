import * as vscode from 'vscode';
import { logger } from './utils/logger';

/**
 * Called when the extension is activated.
 * The extension is activated the very first time a command is executed.
 */
export function activate(context: vscode.ExtensionContext): void {
  logger.info('Extension is now active');
  logger.debug('Extension context:', { extensionPath: context.extensionPath });

  // Register commands in the vzcode namespace
  registerCommands(context);

  logger.info('All commands registered successfully');
}

/**
 * Register all VZCode commands with the VS Code command palette.
 */
function registerCommands(context: vscode.ExtensionContext): void {
  // vzcode.helloWorld - Simple test command
  const helloWorldCommand = vscode.commands.registerCommand('vzcode.helloWorld', () => {
    logger.info('Hello World command executed');
    void vscode.window.showInformationMessage('Hello from VZCode!');
  });
  context.subscriptions.push(helloWorldCommand);

  // vzcode.showVersion - Display extension version
  const showVersionCommand = vscode.commands.registerCommand('vzcode.showVersion', () => {
    const extension = vscode.extensions.getExtension('thatdspguy.vzcode');
    const version: string =
      (extension?.packageJSON as { version?: string } | undefined)?.version ?? 'unknown';
    logger.info('Show Version command executed, version:', version);
    void vscode.window.showInformationMessage(`VZCode version ${version}`);
  });
  context.subscriptions.push(showVersionCommand);

  logger.debug('Registered commands: vzcode.helloWorld, vzcode.showVersion');
}

/**
 * Called when the extension is deactivated.
 * Clean up any resources here.
 */
export function deactivate(): void {
  logger.info('Extension is now deactivated');
  // Note: Disposables registered in context.subscriptions are automatically disposed by VS Code
}
