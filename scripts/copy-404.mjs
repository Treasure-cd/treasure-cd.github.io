// GitHub Pages serves 404.html for unknown paths; copying the SPA entry
// there lets deep links like /data survive a refresh.
import { copyFileSync } from "node:fs";

copyFileSync("docs/index.html", "docs/404.html");
