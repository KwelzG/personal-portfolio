import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import { useState } from "react";
import React from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Track mouse movement
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {/* Spotlight overlay */}
        <div
          style={{
            pointerEvents: "none",
            position: "fixed",
            left: 0,
            top: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 9999,
            background: `radial-gradient(circle 180px at ${mouse.x}px ${mouse.y}px, rgba(255,255,200,0.18) 0%, rgba(255,255,200,0.08) 60%, transparent 100%)`,
            transition: "background 0.1s",
            mixBlendMode: "lighten",
          }}
        />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
