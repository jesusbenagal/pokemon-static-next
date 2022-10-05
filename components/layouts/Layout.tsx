import { FC } from "react";

import Head from "next/head";

import { Navbar } from "../ui";

type Props = {
  children: JSX.Element | JSX.Element[];
  title?: string;
};

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Jesús Guerrero" />
        <meta
          name="description"
          content={`Información sobre el pokemon XXXXX ${title}`}
        />
        <meta
          name="keywords"
          content={`${title}, pokemon, pokedex, pokemons`}
        />
        <meta
          property="og:title"
          content={`Información sobre el pokemon ${title}`}
        />
        <meta
          property="og:description"
          content={`Esta es la pagina de ${title}`}
        />
        <meta property="og:image" content={`${origin}/imgs/banner.png`} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
