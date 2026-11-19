// Single source of truth for cn() is @vui/vui-ui. Re-exported here so shadcn's
// "@/lib/utils" alias keeps resolving. Do not reintroduce a local clsx/tailwind-merge impl.
export { cn } from "@vui/vui-ui/utils";
