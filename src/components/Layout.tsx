import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { useLocation } from 'react-router-dom';

export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Update document title based on route
    const baseTitle = "School of Dropouts";
    let pageTitle = baseTitle;
    
    switch (pathname) {
      case "/":
        pageTitle = `${baseTitle} - Starting a business in Botswana`;
        break;
      case "/validate":
        pageTitle = `Validate | ${baseTitle}`;
        break;
      case "/register":
        pageTitle = `Register | ${baseTitle}`;
        break;
      case "/comply":
        pageTitle = `Comply | ${baseTitle}`;
        break;
      case "/fund":
        pageTitle = `Fund | ${baseTitle}`;
        break;
      case "/market":
        pageTitle = `Market | ${baseTitle}`;
        break;
      case "/grow":
        pageTitle = `Grow | ${baseTitle}`;
        break;
      case "/story":
        pageTitle = `The Story | ${baseTitle}`;
        break;
      case "/pricing":
        pageTitle = `Pricing | ${baseTitle}`;
        break;
    }
    
    document.title = pageTitle;
  }, [pathname]);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
