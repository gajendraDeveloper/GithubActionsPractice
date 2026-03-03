import { shopByCategory } from "../../constants";

const ShopByCategory = ({ activeCategory, onSelect }) => {
  return (
    <div className="px-4 py-16">
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold">
          SHOP BY CATEGORY
        </h1>

        <div className="flex gap-4 flex-wrap">
          {shopByCategory.map((item) => {
            const isActive = activeCategory === item.label;

            return (
              <button
                key={item.label}
                onClick={() => onSelect(item.label)}
                className={`
                  px-4 py-1 rounded-full border
                  transition-all duration-300
                  ${isActive
                    ? "bg-[#cab5eb] "
                    : "hover:bg-purple-100"}
                `}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
