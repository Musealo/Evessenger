import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { formatRelative } from "date-fns";

export default function Room(props) {
  const router = useRouter();
  const { room_id } = router.query;

  return (
    <>
      <h1>aaa</h1>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
