"use client";

import { MessageSquarePlusIcon } from "lucide-react"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useToast } from "./ui/use-toast";
import LoadingSpinner from "./LoadingSpinner";
import {v4 as uuidv4 } from 'uuid';
import { serverTimestamp, setDoc } from "firebase/firestore";
import { addChatRef } from "@/lib/converters/ChatMembers";

function CreateChatIcon({isLarge}:{isLarge?: boolean}) {
  const router = useRouter();
  const {data: session} = useSession();
  const [loading, setLoading] = useState(false);
  const {toast} = useToast();


  const createNewChat = async() => {
    // all the chat logic
    if (!session?.user.id) return;

    setLoading(true);
    toast({
      title:'Create New Chat...',
      description:'Hold Tight While We Create Your New Chat...',
      duration:3000,
    });

    const chatId = uuidv4();

    await setDoc(addChatRef(chatId, session.user.id), {
      userId: session.user.id!,
      email: session.user.email!,
      timestamp: serverTimestamp(),
      isAdmin: true,
      chatId: chatId,
      image: session.user.image || "",
    })
      .then(() => {
        toast({
          title: "Success",
          description: "Your chat has been created!",
          className: "bg-green-600 text-white",
          duration: 2000,
        });
        router.push(`/chat/${chatId}`);
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "There was an error creating your chat!",
          variant: "destructive",
        });
      })
      .finally(() => setLoading(false));
  };


  if (isLarge)
  return(
    <div>
      <Button>
      {loading ? <LoadingSpinner /> : 'Create New Chat'}
      </Button>
    </div>
    )
  return (
    <Button
    variant={"ghost"}
    onClick={createNewChat}
    ><MessageSquarePlusIcon /></Button>
  )
}

export default CreateChatIcon;