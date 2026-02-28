import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Storybook + shadcn/ui</h1>
        <p className="text-muted-foreground">
          Run <code className="bg-muted px-2 py-1 rounded text-sm">npm run storybook</code> to view components.
        </p>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

export default App;
