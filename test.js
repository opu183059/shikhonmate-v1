const adminroute = [
      {
        name: "Dashboard",
        path: "/",
        icon: "icon 1",
        element: "<HomeDashboard />",
      },
      {
        name: "Manage Institutes",
        path: "/manage-institutes",
        icon: "icon 2",
        element: "<ManageInstitutes />",
      },
      {
        name: "Manage Users",
        path: "/manage-users",
        icon: "icon 3",
        element: "<ManageUsers />",
      },
      {
        name: "Manage Subscriptions",
        path: "/manage-subscriptions",
        icon: "icon 4",
        element: "<ManageSubscriptions />",
      },
]

// route Generator ----------------------------------------------------------------------- 

const routeGenerator = (items, role) => {
    const routes = items.reduce((acc, item) => {
        if (item.path && item.element) {
      acc.push({
          path: "/"+role+item.path,
          // path: item.path,
          element: item.element,
        });
    }
    
    if (item.children) {
      item.children.forEach((child) => {
          acc.push({
            path: "/"+role+child.path,
            //   path: child.path,
            element: child.element,
        });
    });
}

return acc;
  }, []);
  
  return routes;
};
console.log(routeGenerator(adminroute,"super-admin"))

// sidebar Generator ----------------------------------------------------------------------- 

export const sidebarItemsGenerator = (items, role) => {
    console.log("Inside function: ",role)
  const sidebarItems = items.reduce((acc, item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        icon: item.icon,
        label: "/"+role+item.path,
      });
    }

    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => {
          if (child.name) {
            return {
              key: child.name,
              icon: item.icon,
              label: (
               "/"+role+child.path
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

console.log(sidebarItemsGenerator(adminroute, "super-admin"))
