import DashboardSkeleton from "../../ui/skeletons";

// There are two ways we can do streaming in React
// We can do at the page level/route level by adding - loading.tsx file
// We can do at a component level by making use of Suspense
export default async function Loading() {
    return <DashboardSkeleton />
}