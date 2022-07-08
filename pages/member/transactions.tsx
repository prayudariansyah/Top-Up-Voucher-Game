import Sidebar from "../../components/organisms/SideBar"
import TransactionContent from "../../components/organisms/TransactionsContent";

export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <Sidebar activeMenu="transactions" />
      <TransactionContent />
    </section>
  );
}
