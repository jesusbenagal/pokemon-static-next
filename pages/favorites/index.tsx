import { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";

export const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Favorites Page">
      <NoFavorites />
    </Layout>
  );
};

export default FavoritesPage;
