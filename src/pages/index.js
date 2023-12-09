import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import QuestNameLabel from "@/components/QuestNameLabel";
import Layout from "@/components/Layout";
import QuestCardMaker from "@/components/QuestCardMaker";

const inter = Inter({ subsets: ["latin"] });

export default function WebQuest({ character }) {
  const [questName, setQuestName] = useState("Patrick's Quest");

  return (
    <Layout>
      <div className="flex flex-col gap-riley p-8 rounded-md glass-morphism">
        <h1 className="flex justify-center text-4xl font-bold">
          Patrick's Beer Quest
        </h1>

        <QuestCardMaker character={character}></QuestCardMaker>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // Fetch data from the local API route
  const response = await fetch(`${process.env.HOSTNAME}/api/quest`); // Update with your actual API route

  const character = await response.json();

  // Pass data as props to the component
  return {
    props: {
      character,
    },
  };
}
