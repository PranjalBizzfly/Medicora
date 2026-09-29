import HomePage from '../views/HomePage';

// Unknown URLs render the Home page, matching the previous catch-all route.
export default function NotFound() {
  return <HomePage />;
}
