import { EnumPriority, EnumStatus } from "../types";
import { SelectDropdown } from "./form-elements";

export type FIlterType = {
  priority: EnumPriority | undefined;
  status: EnumStatus | undefined;
};
interface FilterSectionProps {
  setFilter: (val: Partial<FIlterType>) => void;
}

const FilterSection = ({ setFilter }: FilterSectionProps) => {
  return (
    <div className="mb-8 flex items-center">
      <p className="w-1/4">Filter By:</p>
      <div className="flex-1 flex gap-x-3">
        <div className="flex-1">
          <label>Status</label>
          <SelectDropdown
            onChange={(val) => {
              setFilter({ status: val as EnumStatus });
            }}
            options={[
              { label: "All", value: "" },
              { label: "Pending", value: EnumStatus.PENDING },
              { label: "Ongoing", value: EnumStatus.ONGOING },
              { label: "Completed", value: EnumStatus.COMPLETED }
            ]}
          />
        </div>

        <div className="flex-1">
          <label>Priority Level</label>
          <SelectDropdown
            onChange={(val) => {
              setFilter({ priority: val as EnumPriority });
            }}
            options={[
              { label: "All", value: "" },
              { label: "High", value: EnumPriority.HIGH },
              { label: "Medium", value: EnumPriority.MEDIUM },
              { label: "Low", value: EnumPriority.LOW }
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
