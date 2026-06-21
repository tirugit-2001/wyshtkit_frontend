import { useNavigate } from "react-router-dom";

import { PaymentSuccessPopup } from "@/components/popups";
import {
  BuyItAgain,
  CommunityFavorites,
  QuickCategories,
} from "@/components/features/home";
import { useModal } from "@/hooks/useModal";
import type { Product } from "./data";
import styles from "./home.module.scss";

const Home = () => {
  const navigate = useNavigate();
  const paymentPopup = useModal();

  const handleAddProduct = (_product: Product) => {
    paymentPopup.open();
  };

  return (
    <div className={styles.home}>
      <div className={styles.inner}>
        <BuyItAgain onAdd={handleAddProduct} />
        <QuickCategories />
        <CommunityFavorites onAdd={handleAddProduct} />
      </div>

      <PaymentSuccessPopup
        isOpen={paymentPopup.isOpen}
        onClose={paymentPopup.close}
        onGoToInbox={() => navigate("/inbox")}
      />
    </div>
  );
};

export default Home;
