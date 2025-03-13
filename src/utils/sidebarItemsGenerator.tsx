import { NavLink } from "react-router-dom";
import { TSidebarItem, TUserPath } from "../types/sidebar.type";

export const sidebarItemsGenerator = (items: TUserPath[], role: string) => {
  const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        icon: item?.icon,
        label: <NavLink to={"/" + role + item?.path}>{item?.name}</NavLink>,
      });
    }

    if (item.children && item.name) {
      acc.push({
        key: item.name,
        label: item.name,
        icon: item.icon,
        children: item.children.map((child) => {
          if (child.name) {
            return {
              key: child.name,
              icon: child?.icon,
              label: (
                <NavLink to={"/" + role + child?.path}>{child?.name}</NavLink>
              ),
            };
          }
        }),
      });
    }
    return acc;
  }, []);

  return sidebarItems;
};
