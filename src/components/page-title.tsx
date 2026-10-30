import Head from "expo-router/head";

const APP_NAME = "Meals";

type PageTitleProps = {
  title?: string;
};

export function PageTitle({ title }: PageTitleProps) {
  return (
    <Head>
      <title>{title ? `${title} · ${APP_NAME}` : APP_NAME}</title>
    </Head>
  );
}
