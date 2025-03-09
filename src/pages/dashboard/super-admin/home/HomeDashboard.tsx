import { GetProps, Input } from "antd";
import DashboardCardOne from "../../../../components/cards/DashboardCardOne";

const { Search } = Input;
type SearchProps = GetProps<typeof Input.Search>;

const HomeDashboard = () => {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) => {
    console.log(info?.source, value);
  };

  return (
    <div>
      <Search
        placeholder="Search by Institute, Status...."
        allowClear
        onSearch={onSearch}
        style={{ width: 368 }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-7">
        <DashboardCardOne />
        <DashboardCardOne />
        <DashboardCardOne />
        <DashboardCardOne />
      </div>
    </div>
  );
};

export default HomeDashboard;
