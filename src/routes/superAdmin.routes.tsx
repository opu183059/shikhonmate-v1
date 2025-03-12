import HomeDashboard from "../pages/dashboard/super-admin/home/HomeDashboard";
import ManageInstitutes from "../pages/dashboard/super-admin/institutes/ManageInstitutes";
import ManageUsers from "../pages/dashboard/super-admin/users/ManageUsers";
import ManageSubscriptions from "../pages/dashboard/super-admin/subscription/ManageSubscriptions";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiBuildingOffice, PiUsersFourBold } from "react-icons/pi";
import { MdOutlinePriceChange } from "react-icons/md";

export const superAdminPaths = [
  {
    name: "Dashboard",
    path: "/super-admin",
    icon: <LuLayoutDashboard size={18} />,
    element: <HomeDashboard />,
  },
  {
    name: "Manage Institutes",
    path: "/super-admin/manage-institutes",
    icon: <PiBuildingOffice size={18} />,
    element: <ManageInstitutes />,
  },
  {
    name: "Manage Users",
    path: "/super-admin/manage-users",
    icon: <PiUsersFourBold size={18} />,
    element: <ManageUsers />,
  },
  {
    name: "Manage Subscriptions",
    path: "/super-admin/manage-subscriptions",
    icon: <MdOutlinePriceChange size={18} />,
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
