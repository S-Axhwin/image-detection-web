import ObjectDetection from "@/components/object-detection";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen p-8">
      <h1 className="text-3xl font-extrabold tracking-tighter text-center gradient-title md:text-6xl lg:text-8xl md:px-6">
        Object Detection
      </h1>
      <ObjectDetection />
    </main>
  );
}
