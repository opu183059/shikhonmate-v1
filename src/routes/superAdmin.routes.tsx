import HomeDashboard from "../pages/dashboard/super-admin/home/HomeDashboard";
import ManageInstitutes from "../pages/dashboard/super-admin/institutes/ManageInstitutes";
import ManageUsers from "../pages/dashboard/super-admin/users/ManageUsers";
import ManageSubscriptions from "../pages/dashboard/super-admin/subscription/ManageSubscriptions";

export const superAdminPaths = [
  {
    name: "Dashboard",
    path: "/super-admin",
    element: <HomeDashboard />,
  },
  {
    name: "Manage Institutes",
    path: "/super-admin/manage-institutes",
    element: <ManageInstitutes />,
  },
  {
    name: "Manage Users",
    path: "/super-admin/manage-users",
    element: <ManageUsers />,
  },
  {
    name: "Manage Subscriptions",
    path: "/super-admin/manage-subscriptions",
    element: <ManageSubscriptions />,
  },

  // {
  //   name: 'Academic Management',
  //   children: [
  //     {
  //       name: 'Create A. Semester',
  //       path: 'create-academic-semester',
  //       element: <CreateAcademicSemester />,
  //     },
  //     {
  //       name: 'Academic Semester',
  //       path: 'academic-semester',
  //       element: <AcademicSemester />,
  //     },
  //     {
  //       name: 'Create A. Faculty',
  //       path: 'create-academic-faculty',
  //       element: <CreateAcademicFaculty />,
  //     },
  //     {
  //       name: 'Academic Faculty',
  //       path: 'academic-faculty',
  //       element: <AcademicFaculty />,
  //     },
  //     {
  //       name: 'Create A. Department',
  //       path: 'create-academic-department',
  //       element: <CreateAcademicDepartment />,
  //     },
  //     {
  //       name: 'Academic Department',
  //       path: 'academic-department',
  //       element: <AcademicDepartment />,
  //     },
  //   ],
  // },
];
