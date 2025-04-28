import { useLocation, Link } from "wouter";
import useMobile from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface SidebarProps {
  mobileOpen?: boolean;
  onClose?: () => void;
}

const Sidebar = ({ mobileOpen = false, onClose }: SidebarProps) => {
  const isMobile = useMobile();
  const [location] = useLocation();

  const navItems = [
    {
      name: "Solar System",
      path: "/solar-system",
      icon: "fas fa-globe-americas",
    },
    {
      name: "Stars & Constellations",
      path: "/constellations",
      icon: "fas fa-star",
    },
    {
      name: "Night Sky Tonight",
      path: "/night-sky",
      icon: "fas fa-moon",
    },
    {
      name: "Space Missions",
      path: "/space-missions",
      icon: "fas fa-rocket",
    },
  ];

  const toolItems = [
    {
      name: "AR Sky View",
      path: "/ar-sky-view",
      icon: "fas fa-camera",
    },
    {
      name: "Astronomical Events",
      path: "/events",
      icon: "fas fa-calendar-alt",
    },
    {
      name: "Astronomy Calculator",
      path: "/calculator",
      icon: "fas fa-calculator",
    },
  ];

  if (isMobile && !mobileOpen) {
    return null;
  }

  return (
    <nav 
      className={cn(
        "flex flex-col w-64 space-card h-screen transition-all z-40",
        isMobile 
          ? "fixed top-0 left-0 w-3/4 p-6 pt-16 transform transition-transform duration-300" 
          : "sticky top-0 p-6"
      )}
    >
      <div className="flex items-center mb-10">
        <i className="fas fa-star text-space-purple mr-2"></i>
        <h1 className="font-space font-bold text-xl tracking-wider text-glow">CosmoExplorer</h1>
      </div>

      <div className="space-y-6 flex-1">
        <div className="space-y-3">
          <p className="text-xs text-gray-400 uppercase tracking-wider">Explore</p>
          {navItems.map((item) => (
            <div 
              key={item.path}
              className={cn(
                "flex items-center p-2 rounded-lg transition cursor-pointer",
                location === item.path
                  ? "bg-space-purple/20 text-space-purple font-medium"
                  : "hover:bg-white/5"
              )}
              onClick={() => {
                window.location.href = item.path;
                isMobile && onClose?.();
              }}
            >
              <i className={`${item.icon} mr-3`}></i>
              <span>{item.name}</span>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <p className="text-xs text-gray-400 uppercase tracking-wider">Tools</p>
          {toolItems.map((item) => (
            <div 
              key={item.path}
              className="flex items-center p-2 rounded-lg hover:bg-white/5 transition cursor-pointer"
              onClick={() => {
                window.location.href = item.path;
                isMobile && onClose?.();
              }}
            >
              <i className={`${item.icon} mr-3`}></i>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-card p-4 rounded-lg mt-4 bg-opacity-40">
        <p className="text-sm mb-2">Current Location</p>
        <div className="flex justify-between text-xs">
          <span>42.3601° N, 71.0589° W</span>
          <span className="text-space-blue cursor-pointer">Change</span>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
