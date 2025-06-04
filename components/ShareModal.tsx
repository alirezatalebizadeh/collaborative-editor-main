'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


import { useSelf } from '@liveblocks/react/suspense';
import React, { useState } from 'react'
import { Button } from "./ui/button";
import Image from "next/image";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import UserTypeSelector from "./UserTypeSelector";
import Collaborator from "./Collaborator";
import { updateDocumentAccess } from "@/lib/actions/room.actions";

const ShareModal = ({ roomId, collaborators, creatorId, currentUserType }: ShareDocumentDialogProps) => {
  const user = useSelf();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState<UserType>('viewer');

  const shareDocumentHandler = async () => {
    setLoading(true);

    await updateDocumentAccess({
      roomId,
      email,
      userType: userType as UserType,
      updatedBy: user.info,
    });

    setLoading(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button className="gradient-blue flex h-9 gap-1 px-4" disabled={currentUserType !== 'editor'}>
          <p className="mr-1 hidden sm:block">
            انتشار
          </p>
          <Image
            src="/assets/icons/share.svg"
            alt="share"
            width={20}
            height={20}
            className="min-w-4 md:size-5"
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="shad-dialog">
        <DialogHeader>
          <DialogTitle>مدیریت افرادی که می‌توانند این پروژه را مشاهده کنند</DialogTitle>
          <DialogDescription>کاربرانی را انتخاب کنید که بتوانند این سند را مشاهده و ویرایش کنند</DialogDescription>
        </DialogHeader>

        <Label htmlFor="email" className="mt-6 text-blue-100">
          آدرس ایمیل
        </Label>
        <div className="flex items-center gap-3">
          <div className="flex flex-1 rounded-md bg-dark-400">
            <Input
              id="email"
              placeholder="آدرس ایمیل خود را وارد نمایید."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="share-input"
            />
            <UserTypeSelector
              userType={userType}
              setUserType={setUserType}
            />
          </div>
          <Button type="submit" onClick={shareDocumentHandler} className="gradient-blue flex h-full gap-1 px-5" disabled={loading}>
            {loading ? 'در حال ارسال...' : 'دعوت'}
          </Button>
        </div>

        <div className="my-2 space-y-2">
          <ul className="flex flex-col">
            {collaborators.map((collaborator) => (
              <Collaborator
                key={collaborator.id}
                roomId={roomId}
                creatorId={creatorId}
                email={collaborator.email}
                collaborator={collaborator}
                user={user.info}
              />
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ShareModal