"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { routes, protectedRoutes } from "@/resources";
import { Flex, Spinner, Button, Heading, Column, PasswordInput } from "@once-ui-system/core";
import NotFound from "@/app/not-found";

interface RouteGuardProps {
	children: React.ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const pathname = usePathname();
  const [isRouteEnabled, setIsRouteEnabled] = useState(false);
  const [isPasswordRequired, setIsPasswordRequired] = useState(false);
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const performChecks = async () => {
      setLoading(true);
      setIsRouteEnabled(false);
      setIsPasswordRequired(false);
      setIsAuthenticated(false);

      const checkRouteEnabled = () => {
        if (!pathname) return false;

        if (pathname in routes) {
          return routes[pathname as keyof typeof routes];
        }      const dynamicRoutes = ["/services", "/work"] as const;
      for (const route of dynamicRoutes) {
        if (pathname?.startsWith(route) && routes[route]) {
          return true;
        }
      }

        return false;
      };

      const routeEnabled = checkRouteEnabled();
      setIsRouteEnabled(routeEnabled);

      if (protectedRoutes[pathname as keyof typeof protectedRoutes]) {
        setIsPasswordRequired(true);

        // Check sessionStorage for existing authentication with timestamp
        const storedAuth = sessionStorage.getItem("isAuthenticated");
        const authTimestamp = sessionStorage.getItem("authTimestamp");
        const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes in milliseconds
        
        if (storedAuth === "true" && authTimestamp) {
          const timeElapsed = Date.now() - parseInt(authTimestamp);
          if (timeElapsed < SESSION_TIMEOUT) {
            setIsAuthenticated(true);
          } else {
            // Session expired, clear storage
            sessionStorage.removeItem("isAuthenticated");
            sessionStorage.removeItem("authTimestamp");
          }
        }
      }

      setLoading(false);
    };

    performChecks();
  }, [pathname]);

  // Additional security: Clear session on page visibility change (tab switch/minimize)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Clear authentication when tab becomes hidden
        sessionStorage.removeItem("isAuthenticated");
        sessionStorage.removeItem("authTimestamp");
        setIsAuthenticated(false);
      }
    };

    // Clear session on beforeunload (page refresh/close)
    const handleBeforeUnload = () => {
      sessionStorage.removeItem("isAuthenticated");
      sessionStorage.removeItem("authTimestamp");
    };

    // Set up periodic session check (every 5 minutes)
    const sessionCheckInterval = setInterval(() => {
      const authTimestamp = sessionStorage.getItem("authTimestamp");
      const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes
      
      if (authTimestamp) {
        const timeElapsed = Date.now() - parseInt(authTimestamp);
        if (timeElapsed >= SESSION_TIMEOUT) {
          sessionStorage.removeItem("isAuthenticated");
          sessionStorage.removeItem("authTimestamp");
          setIsAuthenticated(false);
        }
      }
    }, 5 * 60 * 1000); // Check every 5 minutes

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      clearInterval(sessionCheckInterval);
    };
  }, []);

  const handlePasswordSubmit = () => {
    // Simple hardcoded password check
    const correctPassword = "fof2025"; // Change this to your desired password
    
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setError(undefined);
      // Store authentication in sessionStorage with timestamp for session persistence
      sessionStorage.setItem("isAuthenticated", "true");
      sessionStorage.setItem("authTimestamp", Date.now().toString());
    } else {
      setError("Incorrect password");
    }
  };

  if (loading) {
    return (
      <Flex fillWidth paddingY="128" horizontal="center">
        <Spinner />
      </Flex>
    );
  }

  if (!isRouteEnabled) {
		return <NotFound />;
	}

  if (isPasswordRequired && !isAuthenticated) {
    return (
      <Column paddingY="128" maxWidth={24} gap="24" center>
        <Heading align="center" wrap="balance">
          This page is password protected
        </Heading>
        <Column fillWidth gap="8" horizontal="center">
          <PasswordInput
            id="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            errorMessage={error}
          />
          <Button onClick={handlePasswordSubmit}>Submit</Button>
        </Column>
      </Column>
    );
  }

  return <>{children}</>;
};

export { RouteGuard };
