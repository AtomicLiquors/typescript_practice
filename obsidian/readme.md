Creating a custom Obsidian plugin involves using TypeScript along with Obsidian’s Plugin API.   
Below is a practical step-by-step guide:

📦 1. Setup Environment
Install Node.js (https://nodejs.org)

Install Git (https://git-scm.com)

Install Obsidian (https://obsidian.md)

🛠️ 2. Initialize Plugin Template
Use Obsidian’s official sample plugin:

bash
복사
편집
git clone https://github.com/obsidianmd/obsidian-sample-plugin.git your-plugin-name
cd your-plugin-name
npm install
📄 3. Understand Key Files
main.ts: Your plugin logic.

manifest.json: Metadata like plugin ID, version, description.

styles.css: Optional styling for your plugin UI.

🧑‍💻 4. Develop Plugin (Example)
Edit main.ts:

typescript
복사
편집
import { Plugin } from 'obsidian';

export default class MyCustomPlugin extends Plugin {
  async onload() {
    console.log('MyCustomPlugin loaded');

    this.addRibbonIcon('dice', 'Click me', () => {
      new Notice('Hello from custom plugin!');
    });
  }

  onunload() {
    console.log('MyCustomPlugin unloaded');
  }
}
In this example:

Adds a ribbon icon (left sidebar button).

Shows a notice when clicked.

⚙️ 5. Build the Plugin
Compile TypeScript to JavaScript:

bash
복사
편집
npm run build
This generates a main.js file inside the dist/ folder.

📂 6. Load in Obsidian
Go to your Obsidian vault folder:

Create folder .obsidian/plugins/your-plugin-name/

Copy:

main.js

manifest.json

(Optional) styles.css

Open Obsidian → Settings → Community Plugins → Load your plugin.

🔁 7. Develop and Iterate
Modify code.

Run npm run build after changes.

Reload plugin in Obsidian.

📚 Additional Learning
Official API Docs

Community Discord: https://discord.gg/obsidianmd
