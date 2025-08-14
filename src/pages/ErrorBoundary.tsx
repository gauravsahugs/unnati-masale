import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';

const ErrorBoundary = () => {
  const error = useRouteError() as any;

  // Determine error type and message
  const getErrorInfo = () => {
    if (error?.status) {
      switch (error.status) {
        case 404:
          return {
            title: '404 - Page Not Found',
            message: 'The page you are looking for does not exist.',
            icon: AlertTriangle,
          };
        case 403:
          return {
            title: '403 - Forbidden',
            message: 'You do not have permission to access this resource.',
            icon: AlertTriangle,
          };
        case 500:
          return {
            title: '500 - Server Error',
            message: 'Something went wrong on our end. Please try again later.',
            icon: AlertTriangle,
          };
        default:
          return {
            title: `${error.status} - Error`,
            message: error.statusText || 'An unexpected error occurred.',
            icon: AlertTriangle,
          };
      }
    }
    
    return {
      title: 'Something went wrong',
      message: 'An unexpected error occurred. Please try refreshing the page.',
      icon: AlertTriangle,
    };
  };

  const { title, message, icon: Icon } = getErrorInfo();

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/50 to-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Error Icon */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-destructive/20 to-accent/20 rounded-full blur-3xl"></div>
          <div className="relative bg-card/80 backdrop-blur-sm rounded-full p-6 border border-border/30 shadow-elegant inline-block">
            <Icon className="w-12 h-12 text-destructive animate-pulse" />
          </div>
        </div>

        {/* Error Content */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 font-merriweather">
              {title}
            </h1>
            <p className="text-muted-foreground text-lg">
              {message}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Link to="/#home">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </Button>
            
            <Button
              variant="outline"
              onClick={handleRefresh}
              className="border-border hover:bg-muted transition-all duration-300"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
          </div>

          {/* Additional Help */}
          <div className="text-sm text-muted-foreground">
            <p>If the problem persists, please contact us at:</p>
            <a 
              href="mailto:unnatimasaleguna@gmail.com" 
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              unnatimasaleguna@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorBoundary;