import type { UIAdapterModule } from "./types";
import { claudeLocalUIAdapter } from "./claude-local";
import { codexLocalUIAdapter } from "./codex-local";
import { cursorLocalUIAdapter } from "./cursor";
import { geminiLocalUIAdapter } from "./gemini-local";
import { hermesLocalUIAdapter } from "./hermes-local";
import { openCodeLocalUIAdapter } from "./opencode-local";
import { piLocalUIAdapter } from "./pi-local";
import { openClawGatewayUIAdapter } from "./openclaw-gateway";
import { processUIAdapter } from "./process";
import { httpUIAdapter } from "./http";
import { copilotCliUIAdapter } from "./copilot-cli";

const uiAdapters: UIAdapterModule[] = [
  claudeLocalUIAdapter,
  codexLocalUIAdapter,
  geminiLocalUIAdapter,
  hermesLocalUIAdapter,
  openCodeLocalUIAdapter,
  piLocalUIAdapter,
  cursorLocalUIAdapter,
  openClawGatewayUIAdapter,
  copilotCliUIAdapter,
  processUIAdapter,
  httpUIAdapter,
];

const adaptersByType = new Map<string, UIAdapterModule>(
  uiAdapters.map((a) => [a.type, a]),
);

export function getUIAdapter(type: string): UIAdapterModule {
  return adaptersByType.get(type) ?? processUIAdapter;
}

export function registerUIAdapter(adapter: UIAdapterModule): void {
  adaptersByType.set(adapter.type, adapter);
}

export function listUIAdapters(): UIAdapterModule[] {
  return [...uiAdapters];
}
