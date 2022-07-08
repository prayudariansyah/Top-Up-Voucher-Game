import OverViewContent from "../../components/organisms/OverViewContent";
import Sidebar from "../../components/organisms/SideBar";

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <Sidebar activeMenu="overview" />
      <OverViewContent />
    </section>
  );
}
