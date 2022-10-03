import Image from "next/image";
import NextLink from "next/link";
import { Text, useTheme, Spacer, Link } from "@nextui-org/react";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0 20px",
        backgroundColor: theme?.colors.gray100.value,
      }}
    >
      <NextLink href="/" passHref>
        <a style={{ display: "flex" }}>
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="icono app"
            width={70}
            height={70}
          />

          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okémon
          </Text>
        </a>
      </NextLink>

      <Spacer
        css={{
          flex: 1,
        }}
      />
      <NextLink href="/favorites" passHref>
        <a style={{ display: "flex" }}>
          <Text color="white">Favoritos</Text>
        </a>
      </NextLink>
    </div>
  );
};
