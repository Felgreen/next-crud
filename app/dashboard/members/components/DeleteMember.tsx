"use client";
import React, { useTransition } from "react";
import { TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { deleteMemberById } from "../actions";
import { toast } from "@/components/ui/use-toast";

export default function DeleteMember({ user_id }: { user_id: string }) {
    const [isPending, startTransition] = useTransition();

    const onSubmit = () => {
        startTransition(async () => {
            const result = JSON.parse(await deleteMemberById(user_id));
            if (result?.error?.message) {
                toast({
                    title: "Delete failed",
                });
            } else {
                toast({
                    title: "Delete successfully",
                });
            }
        });
    };

    return (
        <form action={onSubmit}>
            <Button variant="outline">
                <TrashIcon />
                Delete
            </Button>
        </form>
    );
}
