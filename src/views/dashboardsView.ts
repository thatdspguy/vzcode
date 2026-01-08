import * as vscode from 'vscode';

/**
 * Tree data provider for the Dashboards view
 */
export class DashboardsViewProvider implements vscode.TreeDataProvider<DashboardItem> {
	private _onDidChangeTreeData: vscode.EventEmitter<DashboardItem | undefined | null | void> = new vscode.EventEmitter<DashboardItem | undefined | null | void>();
	readonly onDidChangeTreeData: vscode.Event<DashboardItem | undefined | null | void> = this._onDidChangeTreeData.event;

	constructor() {}

	refresh(): void {
		this._onDidChangeTreeData.fire();
	}

	getTreeItem(element: DashboardItem): vscode.TreeItem {
		return element;
	}

	getChildren(element?: DashboardItem): Thenable<DashboardItem[]> {
		if (element) {
			// No children for now
			return Promise.resolve([]);
		} else {
			// Root level - placeholder item
			return Promise.resolve([
				new DashboardItem(
					'No dashboards yet',
					vscode.TreeItemCollapsibleState.None,
					'Create your first dashboard to get started'
				)
			]);
		}
	}
}

/**
 * Represents an item in the Dashboards tree view
 */
export class DashboardItem extends vscode.TreeItem {
	constructor(
		public readonly label: string,
		public readonly collapsibleState: vscode.TreeItemCollapsibleState,
		public readonly tooltip?: string
	) {
		super(label, collapsibleState);
		this.tooltip = tooltip;
	}
}
