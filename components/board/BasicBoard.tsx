import React from 'react'

import LabelCalendar from "@/components/calendar/LabelCalendar"

import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

import { ChevronUp } from 'lucide-react'
import styles from "./BasicBoard.module.scss"
import MarkDownDialog from '../dialog/MarkDownDialog'

function BasicBoard() {
    return (
        <div className={styles.container}>
            <div className={styles.container__header}>
                <div className={styles.container__header__titleBox}>
                    <Checkbox className='w-5 h-5' />
                    <span className={styles.title}>Title 제목을 작성해주세요.</span>
                </div>
                <Button variant={"ghost"}>
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                </Button>
            </div>
            <div className={styles.container__body}>
                <div className={styles.container__body__calendarBox}>
                    <LabelCalendar label="From" />
                    <LabelCalendar label="To" />
                </div>
                <div className={styles.container__body__buttonBox}>
                    <Button variant={"ghost"} className='font-normal text-gray-400 hover:bg-green-50 hover:text-green-500'>
                        복제
                    </Button>
                    <Button variant={"ghost"} className='font-normal text-gray-400 hover:bg-red-50 hover:text-red-500'>
                        삭제
                    </Button>
                </div>
            </div>
            <div className={styles.container__footer}>
                <MarkDownDialog />
            </div>
        </div>
    )
}

export default BasicBoard