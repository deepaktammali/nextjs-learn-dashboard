// Any components that we import into the layout are part of the layout component
import SideNav from "../ui/dashboard/sidenav";

// The children value would change based on the route segment
// We can place it where we want the children/path to render the content into

// One benefit of using Layout components is that
// Whenver the sub path changes - the layout won't re-render this is called partial rendering.
const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    );
}

export default Layout;