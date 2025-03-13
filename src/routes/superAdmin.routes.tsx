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
    path: "/",
    icon: <LuLayoutDashboard size={18} />,
    element: <HomeDashboard />,
  },
  {
    name: "Manage Institutes",
    path: "/manage-institutes",
    icon: <PiBuildingOffice size={18} />,
    element: <ManageInstitutes />,
  },
  {
    name: "Manage Users",
    path: "/manage-users",
    icon: <PiUsersFourBold size={18} />,
    element: <ManageUsers />,
  },
  {
    name: "Manage Subscriptions",
    path: "/manage-subscriptions",
    icon: <MdOutlinePriceChange size={18} />,
    element: <ManageSubscriptions />,
  },
  {
    name: "Children Routes",
    icon: <PiBuildingOffice size={18} />,
    children: [
      {
        name: "test1",
        path: "/test-1",
        icon: <LuLayoutDashboard size={18} />,
        element: <div className="flex justify-center text-5xl">test1</div>,
      },
      {
        name: "test2",
        path: "/test-2",
        icon: <PiUsersFourBold size={18} />,
        element: <div className="flex justify-center text-5xl">test2</div>,
      },
    ],
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
