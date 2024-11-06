"use client";

import { usePathname } from "next/navigation";
import FormContainer from "../form/FormContainer";
import { toggleFavouriteAction } from "@/utils/actions";
import { CardSubmitButton } from "../form/Buttons";

type FavouriteToggleFormProps = {
  propertyId: string;
  favouriteId: string | null;
};

function FavouriteToggleForm({
  propertyId,
  favouriteId,
}: FavouriteToggleFormProps) {
  const pathname = usePathname();
  const toggleAction = toggleFavouriteAction.bind(null, {
    propertyId,
    favouriteId,
    pathname,
  });
  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavourite={favouriteId ? true : false} />
    </FormContainer>
  );
}
export default FavouriteToggleForm;
