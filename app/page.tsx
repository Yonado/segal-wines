
import Image from 'next/image'
import Link from 'next/link'

import styles from './page.module.css'

export default function Home() {



  return (
    // <div >
    //   <div className="flex items-center justify-center w-full">
    //     <div className="hidden images md:flex flex-row h-[350px]">
    //       <div className="z-0"><img className="-translate-x-[380px]" src="red_wine_2.webp" alt="" /></div>
    //       <div className="z-10"><img className="translate-y-5 z-10" src="red_wine.webp" alt="" /></div>
    //       <div className="z-0"><img className="translate-x-[380px] z-1" src="white_wine.webp" alt="" /></div>

    //     </div>
    //     <div className="text translate-x-[290px] text-red-wine">
    //       <h4 className='font-medium text-6xl'>יינות סגל</h4>
    //       <h2 className="text-3xl tracking-widest text-center">מאז 1953</h2>
    //     </div>
    //   </div>
    // </div>
    <div className="">
      <div className="rounded w-full h-[1500px] md:h-[950px] bg-cover bg-no-repeat bg-main bg-opacity-50 bg-blend-overlay z-10 bg-[url('../public/fruit-vines.png')] mt-[-160px]">
        <div className="pt-[210px] px-8 w-full text-white">
          <div className='pt-10 md:pt-0 container w-full text-center mx-auto'>
            <div className="main-banner">
              <h2 className='text-8xl text-color leading-[130px]'>יינות סגל</h2>
              <p className='opacity-80 pt-5 font-[Tinos] tracking-[0.30em] text-2xl'>כרמים בגליל העליון</p>
              <p className="font-[Tinos] text-2xl md:text-3xl leading-[1.2em] w-[40%] mx-auto pt-8">היקבים שלנו הם מהותיקים ביותר בישראל ומסמלים דורות רבים של עיסוק ביין. </p>
            </div>
            <div className='pt-[100px] md:pt-10 cards w-[90%] mx-auto flex items-center flex-col md:flex-row gap-8 justify-center'>
              <Link className="cursor-pointer card flex items-center justify-center bg-center bg-opacity-30 bg-black bg-blend-overlay hover:bg-opacity-60 h-[390px] w-[90%] md:w-[30%] bg-cover bg-no-repeat rounded bg-[url('../public/white-wine-photo.jpg')]" href="/red-wine"><div className="">
                <h3 className='text-6xl font-bold'>יין אדום</h3>
              </div></Link>
              <Link className="cursor-pointer card flex items-center justify-center bg-center bg-opacity-30 bg-black bg-blend-overlay hover:bg-opacity-60 h-[390px] bg-cover bg-no-repeat w-[90%] md:w-[30%] rounded bg-[url('../public/red-wine-photo.jpg')]" href="/white-wine"><div className="">
                <h3 className='text-6xl font-bold'>יין לבן</h3>
              </div></Link>

            </div>
          </div>
        </div>
      </div>
      <div className="md:mt-0 mt-[280px] whyus flex flex-col mx-auto justify-center  bg-rounded items-center md:items-center bg-main-2 py-16 bg-[url('../public/red-wine-pouring-into-wine-glass.jpg')] md:bg-contain bg-cover bg-no-repeat bg-blend-overlay bg-opacity-60 md:bg-opacity-70">
        <h3 className="text-6xl text-color font-bold text-center">למה סגל?</h3>
        <p className="tracking-wide mt-3 w-[50%] text-2xl font-[Tinos] text-color text-center font-medium">שבעה דורות עברו מאז החל יענקל צבי הירש סגל לעסוק בייצור משקאות חריפים בשנת 1787 והתמקצע בכך.
          <br />
          עם העלייה לארץ ישראל, החליטה המשפחה להשתמש בידע הנצבר לייצור יין, ומאז עברו מעל ל-70 שנים של ייצור יין.
          <br /><br />
          ב-70 השנים הללו למדו, שיפרנו וספגנו את הידע הנחוץ לייצור הענבים הטובים ביותר ליין. הענבים הללו הם גולת הכותרת של יקבי סגל, ואנו גאים בהם מאוד.
        </p>
        <div className='mt-10 md:mt-4 flex flex-col md:flex-row items-center mx-auto justify-center gap-2 md:gap-4'>
          <div className="cursor-pointer w-[200px] h-[80px] text-3xl flex items-center justify-center border-2 text-color font-bold border-color">עוד עלינו</div>
          <div className="cursor-pointer w-[200px] h-[80px] text-3xl flex items-center justify-center border-2 text-color font-bold border-color">היינות שלנו</div>
        </div>
        <div className='mt-16 pt-16 bg-opacity-70 rounded bg-color text-black-white shadow-2xl'>
          <h2 className="text-center font-bold text-5xl text-color">הבסיס ליין איכותי</h2>
          <p className="font-[Tinos] mt-4 text-center text-2xl max-w-[40%] mx-auto text-color">כדי לעזור לכם להבין איך אנחנו בוחרים את היינות שלנו, קיבצנו את הידע שלנו לטבלה עם 12 הנקודות החשובות, עליהן אנו מסתמכים בזיהוי יין איכותי.</p>

          <div className='mt-6 mx-auto w-full container grid gap-6 font-[Tinos] grid-cols-1 md:grid-cols-4'>

            <div className="grid gap-6 border-2  max-w-[90%] mx-auto grid-rows-3 grid-color">
              <div>
                <h2 className='text-3xl pt-4 font-[Ktav] font-bold text-color text-center'>ודאות</h2>
                <h2 className="p-2 pr-4 font-bold text-xl font-[Ktav]">
                  מקור ידוע
                </h2>
                <p className="p-2 max-w-[80%] mx-auto">
                  ידיעת מקור הענבים מבטיחה עקביות ומאפשרת לטועמים לחקור ולגלות טעמים מדויקים.
                </p>
              </div>
              <div>
                <h2 className="p-2 pr-4 font-bold text-xl font-[Ktav]">
                  מגוון ביולוגי
                </h2>
                <p className="p-2 max-w-[80%] mx-auto">
                  מגוון ביולוגי הוא מרכיב עיקרי של מערכת אקולוגית מאוזנת ואיתנה, שמנוהלת היטב לאורך תקופת ייצור גבוהה.
                </p>
              </div>
              <div>
                <h2 className="p-2 pr-4 font-bold text-xl font-[Ktav]">
                  יצרני יין ברמה הגבוהה ביותר
                </h2>
                <p className="p-2 max-w-[80%] mx-auto">
                  ידיעת מקור הענב הוא דבר אחד, ידיעת המגדל הוא דבר אחר. מציאת אלו העובדים מתוך תשוקה הופכת את הענבים לטובים ביותר.
                </p>
              </div>
            </div>
            <div className="grid gap-6 grid-rows-3 border-2 max-w-[90%] mx-auto grid-color">
              <div>
                <h2 className='text-3xl pt-4 font-[Ktav] font-bold text-color text-center'>קיימות</h2>
                <h2 className="p-2 pr-4 font-bold text-xl font-[Ktav]">
                  אקולוגיה
                </h2>
                <p className="p-2 max-w-[80%] mx-auto">
                  סביבה המאפשרת את הגידול הטוב ביותר היא בדרך כלל שברירית ומצריכה תחזוקה גבוהה.
                </p>
              </div>
              <div>
                <h2 className="p-2 pr-4 font-bold text-xl font-[Ktav]">
                  חקלאות וקיימות
                </h2>
                <p className="p-2 max-w-[80%] mx-auto">
                  חקלאות הלוקחת את הקיימות בחשבון מאפשרת ייצור של ענבים מדהימים שנה אחר שנה, בלי ירידת איכות בעקבות אדמה עייפה.
                </p>
              </div>
              <div>
                <h2 className="p-2 pr-4 font-bold text-xl font-[Ktav]">
                  זיהום נמוך
                </h2>
                <p className="p-2 max-w-[80%] mx-auto">
                  מגדלי ענבים ויצרני יין, המביטים לעבר העתיד, ישתמשו באמצעי אנרגיה שונים, כמו אנרגיה אלטרנטיבית.
                </p>
              </div>
            </div>
            <div className="grid gap-6 grid-rows-3 border-2 max-w-[90%] mx-auto grid-color">
              <div>
                <h2 className='text-3xl pt-4 font-[Ktav] font-bold text-color text-center'>ייבול</h2>
                <h2 className="p-2 pr-4 font-bold text-xl font-[Ktav]">
                  גדילה
                </h2>
                <p className="p-2 max-w-[80%] mx-auto">
                  גדילה פראית מדי יכולה להוביל לעלים רבים מדי וליבול ברמה נמוכה.
                </p>
              </div>
              <div>
                <h2 className="p-2 pr-4 font-bold text-xl font-[Ktav]">
                  תנובה נמוכה
                </h2>
                <p className="p-2 max-w-[80%] mx-auto">
                  גפנים עם תנובה נמוכה מייצרים ענבים עם יותר טעם משום שהצמח יכול להתרכז במספר פירות נמוך. במובן זה, יותר הוא פחות.
                </p>
              </div>
              <div>
                <h2 className="p-2 pr-4 font-bold text-xl font-[Ktav]">
                  לחץ מים
                </h2>
                <p className="p-2 max-w-[80%] mx-auto">
                  הגפנים הנמצאים תחת מים מבטיחים כי הצמח לא מייצר חופה מיותרת אלא מתרכז בפירות.
                </p>
              </div>
            </div>
            <div className="grid gap-6 grid-rows-3 border-2 max-w-[90%] mx-auto grid-color">
              <div>
                <h2 className='text-3xl pt-4 font-[Ktav] font-bold text-color text-center'>ייצור</h2>
                <h2 className="p-2 font-bold text-xl font-[Ktav]">
                  ביודינמיקה
                </h2>
                <p className="p-2 max-w-[80%] mx-auto">
                  ביודינמיקה מבטיחה את שלמות תהליך ייצור היין.
                </p>
              </div>
              <div>
                <h2 className="p-2 pr-4 font-bold text-xl font-[Ktav]">
                  שלמות
                </h2>
                <p className="p-2 max-w-[80%] mx-auto">
                  יצרני יין מקצועיים מביטים בכל התהליך בשלמותו ומשנים את תהליך הייצור בהתאם לכל פרט.
                </p>
              </div>
              <div>
                <h2 className="p-2 pr-4 font-bold text-xl font-[Ktav]">
                  הקפדה ושמירה
                </h2>
                <p className="p-2 max-w-[80%] mx-auto">
                  מעל לכל, יין טוב הוא יין הנעשה בקפידה, יותר מאשר בכימיה. המיקום, האדמה, מזג האוויר, כולם מאפשרים ליצור יין שנשאר חי בתוך הבקבוק.
                </p>
              </div>
            </div>
          </div>
          <div className="my-32 flex flex-col md:flex-row gap-6 md:gap-20 justify-center items-center p-4 md:p-0">
            <div className="right flex flex-col md:max-w-[40%]">
              <div className='outline-[5px] outline-offset-4 outline outline-color border-separate border-spacing-1 bg-gradient-to-r from-black to-white w-full h-full'>
                <img className="" src="/yekevim.jpeg" alt="" />
              </div>
            </div>
            <div className="right flex flex-col gap-4 md:max-w-[40%] md:text-right text-center p-4 md:p-0">
              <h3 className="text-5xl font-bold text-color">מורשת ישנה,<br></br> אדמה חדשה</h3>
              <p className="text-2xl md:max-w-[75%] text-color">הענבים שלנו גדלים בגליל העליון כבר עשרות שנים. תנאי מזג האוויר באזור מאפשרים לענבים להיות איכותיים ביותר וכך מפיקים יין איכותי ביותר.</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}



// className="bg-cover w-full"