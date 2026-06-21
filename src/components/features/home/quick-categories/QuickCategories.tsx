import {
  BasketIcon,
  CroissantIcon,
  FlowerIcon,
  GiftIcon,
  MonitorIcon,
  PawIcon,
  PharmaIcon,
  WrenchIcon,
} from "@/components/shared/icons/Icons";
import { categories } from "@/pages/home/data";
import styles from "./QuickCategories.module.scss";

const iconMap = {
  croissant: CroissantIcon,
  pharma: PharmaIcon,
  monitor: MonitorIcon,
  flower: FlowerIcon,
  paw: PawIcon,
  wrench: WrenchIcon,
  gift: GiftIcon,
  basket: BasketIcon,
};

const QuickCategories = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Quick Categories</h2>
      <div className={styles.grid}>
        {categories.map(({ id, label, icon }) => {
          const Icon = iconMap[icon as keyof typeof iconMap];
          return (
            <button key={id} type="button" className={styles.tile}>
              <Icon size={26} />
              <span>{label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default QuickCategories;
