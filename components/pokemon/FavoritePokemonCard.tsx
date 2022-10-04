import { FC } from "react";
import { useRouter } from "next/router";
import { Card } from "@nextui-org/react";

interface Props {
  pokemonId: number;
}

export const FavoritePokemonCard: FC<Props> = ({ pokemonId }) => {
  const router = useRouter();

  const onFavoriteClick = () => {
    router.push(`/pokemon/${pokemonId}`);
  };

  return (
    <Card
      isHoverable
      isPressable
      onClick={onFavoriteClick}
      css={{
        padding: 10,
      }}
    >
      <Card.Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
        alt="Pokemon"
        width={"100%"}
        height={"100%"}
      />
    </Card>
  );
};
