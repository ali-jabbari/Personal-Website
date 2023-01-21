import React from "react"
import ProgressBar from "@/components/ui/ProgressBar"

const ResumeAndSkills = () => {
  //Styles
  const className = {
    wrapper: `bg-navy mt-24`,
    wrapperContainer: `container py-20`,
    title: `text-white text-2xl font-bold text-center inline-block`,
    description: `text-zinc-400 mt-5 mb-10`,
    skillsResumeWrapper: `grid grid-cols-1 gap-20 md:grid-cols-2 md:gap-32 xl:gap-56`,
    resumeItemCircle: `h-5 w-5 bg-zinc-600 rounded-full inline-block group-hover:bg-greenLight`,
    resumeItemDate: `bg-zinc-600 text-white rounded-full px-5 py-1 text-sm`,
    resumeItemNameContainer: `flex flex-col justify-start items-start gap-3 mr-10 mt-4`
  }

  return (
    <div className={className.wrapper} id="section_resume">
      <div className={className.wrapperContainer}>
        <h1 className={className.title}>رزومه و مهارت ها</h1>

        <p className={className.description}>
          برنامه نویسی رو با جاوا و اندروید شروع کردم، و بعد به سراغ تکلونوژی های جدید وب در Front-end رفتم، و بعد از اون کم کم Back-end رو هم تکمیل کردم، تقریبا دو سالی میشه برنامه نویسی میکنم و از این کار لذت میبرم، در حال حاضر سعی میکنم دانشم رو گسترش بدم و بروز باشم.
        </p>

        <div className={className.skillsResumeWrapper}>
          {/*Skills*/}
          <div>
            <h1 className={className.title}>مهارت ها</h1>

            <div className="w-[100%] 2xl:w-[80%]">
              <ProgressBar className="mt-8" title="HTML5" value="90" />
              <ProgressBar className="mt-10" title="JavaScript" value="80"/>
              <ProgressBar className="mt-8" title="React" value="80" />
              <ProgressBar className="mt-8" title="Next.js" value="80" />
              <ProgressBar className="mt-8" title="Node.js" value="70" />
              <ProgressBar className="mt-8" title="MongoDB" value="60" />
              <ProgressBar className="mt-8" title="Kotlin" value="80" />
              <ProgressBar className="mt-8" title="Android" value="90" />
              <ProgressBar className="mt-8" title="Machine Learning" value="10" />
            </div>

          </div>

          {/* Resume */}
          <div>
            <h1 className={className.title}>رزومه</h1>

            <div className="flex justify-start">
              <div className="border-r-2 border-zinc-600 py-10 mt-12">
                <div className="relative -right-3">

                  {/* Studying */}
                  <div className="mt-2 group">
                    <div className="flex items-center gap-4">
                      <span className={className.resumeItemCircle}></span>
                      <span className={className.resumeItemDate}>
                        1395 تا 1399
                      </span>
                    </div>

                    <div className={className.resumeItemNameContainer}>
                      <span className="text-white font-iranSansMedium text-sm">کارشناسی مهندسی نرم‌افزار</span>
                      <span className="text-zinc-400 text-sm">
                        دانشگاه باهنر شیراز
                      </span>
                    </div>
                  </div>

                  {/* App Development */}
                  <div className="mt-20 group">
                    <div className="flex items-center gap-4">
                      <span className={className.resumeItemCircle}></span>
                      <span className={className.resumeItemDate}>
                        1399 تا 1400
                      </span>
                    </div>

                    <div className={className.resumeItemNameContainer}>
                      <span className="text-white font-iranSansMedium text-sm">
                        Android Development
                      </span>
                      <span className="text-zinc-400 text-sm">فریلنسینگ</span>
                    </div>
                  </div>

                  {/* Web Development */}
                  <div className="mt-20 group">
                    <div className="flex items-center gap-4">
                      <span className={className.resumeItemCircle}></span>
                      <span className={className.resumeItemDate}>
                        1400 تا 1402
                      </span>
                    </div>

                    <div className={className.resumeItemNameContainer}>
                      <span className="text-white font-iranSansMedium text-sm">
                        Full-Stack Web Development
                      </span>
                      <span className="text-zinc-400 text-sm">فریلنسینگ</span>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeAndSkills
