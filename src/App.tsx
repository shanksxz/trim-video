import { Toaster } from "@/components/ui/sonner";
import DragDrop from "@/features/drag-drop/components/drag-drop";
import FfmpegProvider from "@/hooks/use-ffmpeg";
import { ThemeProvider } from "next-themes";

export default function App() {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="dark"
			enableSystem={false}
			forcedTheme="dark"
		>
			<FfmpegProvider>
				<main>
					<DragDrop />
				</main>
			</FfmpegProvider>
			<Toaster />
		</ThemeProvider>
	);
}
