import { Suspense, lazy } from 'react';
import {
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';
import { NavBar } from './components/NavBar';
import { getPostBySlug, getPosts } from './data/posts';
import { PageLoader } from './components/PageLoader';
import { ErrorPanel } from './components/ErrorPanel';

const HomePage = lazy(() => import('./pages/Home'));
const BlogDetailsPage = lazy(() => import('./pages/BlogDetails'));
const NotFoundPage = lazy(() => import('./pages/notFound'));
const AboutPage = lazy(() => import('./pages/About'));

const rootRoute = createRootRoute({
  component: RootLayout,
  notFoundComponent: () => (
    <Suspense fallback={<PageLoader label="Finding page" />}>
      <NotFoundPage />
    </Suspense>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  loader: () => getPosts(),
  component: HomeRoute,
});

const postRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/posts/$slug',
  loader: ({ params }) => getPostBySlug(params.slug),
  component: PostRoute,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutRoute,
});

const routeTree = rootRoute.addChildren([homeRoute, postRoute, aboutRoute]);

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultPendingComponent: () => <PageLoader label="Loading" />,
  defaultErrorComponent: ({ error }) => (
    <ErrorPanel title="Something broke" message={String(error?.message ?? error)}
    />
  ),
});

function RootLayout() {
  return (
    <div className="page-shell">
      <NavBar />
      <Outlet />
      <footer className="footer">Ebube.writes · AltSchool assessment · February 2026</footer>
    </div>
  );
}

function HomeRoute() {
  const posts = homeRoute.useLoaderData();

  return (
    <Suspense fallback={<PageLoader label="Loading stories" />}>
      <HomePage posts={posts} />
    </Suspense>
  );
}

function PostRoute() {
  const post = postRoute.useLoaderData();

  return (
    <Suspense fallback={<PageLoader label="Opening post" />}>
      <BlogDetailsPage post={post} />
    </Suspense>
  );
}

function AboutRoute() {
  return (
    <Suspense fallback={<PageLoader label="Loading about" />}>
      <AboutPage />
    </Suspense>
  );
}