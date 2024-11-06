import { IconType } from "react-icons";
import { MdCabin } from "react-icons/md";
import { FaUmbrellaBeach } from "react-icons/fa";
import { TbCaravan, TbTent, TbBuildingCottage } from "react-icons/tb";
import { GiWoodCabin, GiFamilyHouse } from "react-icons/gi";
import { PiLighthouse } from "react-icons/pi";

type Category = {
  label: CategoryLabel;
  icon: IconType;
};

export type CategoryLabel =
  | "cabins"
  | "tiny homes"
  | "camping"
  | "lodge"
  | "caravan"
  | "beachfront"
  | "mansions"
  | "cottage";

export const categories: Category[] = [
  {
    label: "cabins",
    icon: MdCabin,
  },
  {
    label: "tiny homes",
    icon: PiLighthouse,
  },
  {
    label: "camping",
    icon: TbTent,
  },
  {
    label: "lodge",
    icon: GiWoodCabin,
  },
  {
    label: "caravan",
    icon: TbCaravan,
  },
  {
    label: "beachfront",
    icon: FaUmbrellaBeach,
  },
  {
    label: "mansions",
    icon: GiFamilyHouse,
  },
  {
    label: "cottage",
    icon: TbBuildingCottage,
  },
];
