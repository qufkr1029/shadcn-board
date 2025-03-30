import Image from "next/image"
import LabelCalendar from "@/components/calendar/LabelCalendar"
import BasicBoard from "@/components/board/BasicBoard"

// shadcn ui
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

// css
import styles from "./page.module.scss"

function page() {
    return (
        <div className={styles.container}>
            <header className={styles.container__header}>
                <div className={styles.container__header__contents}>
                    <input type="text" placeholder="Enter Title Here" className={styles.input} />
                    <div className={styles.progressBar}>
                        <span className={styles.progressBar__status}>0/10 Completed</span>
                        {/* 프로그레스 바 UI */}
                        <Progress value={33} className="w-[30%] h-2" indicatorColor="bg-red-500" />
                    </div>
                    <div className={styles.calendaBox}>
                        <div className={styles.calendaBox__calendar}>
                            {/* 캘린더 UI */}
                            <LabelCalendar label="From" readonly={true} />
                            <LabelCalendar label="To" readonly={true} />
                        </div>
                        <Button variant="outline" className="w-[15%] border-orange-500 bg-orange-400 text-white hover:bg-orange-400 hover:text-white">
                            Add New Board
                        </Button>
                    </div>
                </div>
            </header>
            <main className={styles.container__body}>
                {/* <div className={styles.container__body__infoBox}>
                    <span className={styles.title}>There is no board yet.</span>
                    <span className={styles.subTitle}>Click the button and start flashing!</span>
                    <button className={styles.button}>
                        <Image src="/assets/images/button.svg" alt="round-button" width={100} height={100}></Image>
                    </button>
                </div> */}
                <BasicBoard />
            </main>
        </div>
    )
}

export default page