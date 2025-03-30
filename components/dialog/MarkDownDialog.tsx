"use client"

import React, { useState } from 'react'
import styles from './MarkDownDialog.module.scss'
import LabelCalendar from '../calendar/LabelCalendar'
import MDEditor from '@uiw/react-md-editor'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'
import { Separator } from "../ui/separator"


function MarkDownDialog() {
    const [contents, setContents] = useState<string | undefined>("Hello World!")
    return (
        <Dialog>
            <DialogTrigger asChild>
                <span className='font-normal text-gray-400 hover:text-gray-500 cursor-pointer'>추가하기</span>
            </DialogTrigger>
            <DialogContent className='!max-w-fit'>
                <DialogHeader>
                    <DialogTitle>
                        <div className={styles.dialog__titleBox}>
                            <Checkbox className='w-5 h-5' />
                            <input type="text" placeholder='Title 제목을 작성해주세요.' className={styles.dialog__titleBox__title} />
                        </div>
                    </DialogTitle>
                    {/* <DialogDescription></DialogDescription> */}
                    <div className={styles.dialog__calendarBox}>
                        <LabelCalendar label='From' />
                        <LabelCalendar label='To' />
                    </div>
                    <Separator />
                    <div className={styles.dialog__markdown}>
                        <MDEditor value={contents} height={100 + "%"} onChange={setContents}/>
                    </div>
                </DialogHeader>
                <DialogFooter>
                    <div className={styles.dialog__buttonBox}>
                        <DialogClose asChild>
                            <Button vocab={"ghost"} className='font-normal text-gray-400 hover:text-gray-500 hover:bg-gray-50 '>
                                취소
                            </Button>
                        </DialogClose>
                        <Button vocab={"submit"} className='font-normal border-orange-500 bg-orange-400 text-white hover:text-white hover:bg-orange-50 '>
                            추가
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default MarkDownDialog