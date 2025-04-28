import { useLocation, Link } from "wouter";
import { cn } from "@/lib/utils";

const MobileNavbar = () => {
  const [location] = useLocation();

  const navItems = [
    {
      name: "Planets",
      path: "/solar-system",
      icon: "fas fa-globe-americas",
    },
    {
      name: "Stars",
      path: "/constellations",
      icon: "fas fa-star",
    },
    {
      name: "Tonight",
      path: "/night-sky",
      icon: "fas fa-moon",
    },
    {
      name: "Search",
      path: "/search",
      icon: "fas fa-search",
    },
    {
      name: "Profile",
      path: "/profile",
      icon: "fas fa-user-astronaut",
    },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 w-full space-card py-2 px-4 z-50">
      <div className="flex justify-around">
        {navItems.map((item) => (
          <Link key={item.path} href={item.path}>
            <a 
              className={cn(
                "flex flex-col items-center p-2",
                location === item.path ? "text-space-purple" : ""
              )}
            >
              <i className={`${item.icon} text-lg`}></i>
              <span className="text-xs mt-1">{item.name}</span>
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileNavbar;
