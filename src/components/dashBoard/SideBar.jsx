
import { FaBars } from "react-icons/fa";
import { Bell, Envelope, Gear, House, Magnifier, Person } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Link from "next/link";

export function SideBar() {
  const navItems = [
    { icon: House, href: "/dashBoard/recruiter", label: "Home" },
    { icon: Magnifier, href: "/dashBoard/recruiter/jobs", label: "Jobs" },
    { icon: Bell, href: "/dashBoard/recruiter/jobs/newJobs", label: "Post A Job" },
    { icon: Bell, href: "/dashBoard/recruiter/company", label: "Company Profile" },
    { icon: Envelope, href: "/messages", label: "Messages" },
    { icon: Person, href: "/profile", label: "Profile" },
    { icon: Gear, href: "/settings", label: "Settings" },
  ];

  const navContent = <nav className="flex flex-col gap-1">
    {navItems.map((item) => (
      <Link
        key={item.label}
        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
        href={item.href}
      >
        <item.icon className="size-5 text-muted" />
        {item.label}
      </Link>
    ))}
  </nav>


  return (
    <Drawer>
      <aside className="hidden lg:block mx-3">
        {navContent}
      </aside>
      <Button variant="secondary" className="flex lg:hidden">
        <FaBars />
        Menu
      </Button>
      <Drawer.Backdrop>
        <Drawer.Content placement="left">
          <Drawer.Dialog>
            <Drawer.CloseTrigger />
            <Drawer.Header>
              <Drawer.Heading>Navigation</Drawer.Heading>
            </Drawer.Header>
            <Drawer.Body>
              {navContent}
            </Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
}