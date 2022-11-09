import { AiOutlineBell } from "react-icons/ai"
import { GoSearch } from "react-icons/go"


const HeaderDashboard = ({ title }: {title: string}) => {
    return(
        <section className="text-defaulttextdark flex justify-between w-full">
            <h2 className="text-[45px] cursor-default font-bebas font-regular">{title}</h2>

            <div className="flex gap-2">
                <form className="flex items-center gap-3">
                    <GoSearch className="text-[24px]"/>
                    <input type="text" placeholder="Search..." className="bg-backgroundcolor placeholder:text-defaulttextdark"/>
                </form>
                <button className="bg-boxcolordark p-[6px] rounded-full">
                    <AiOutlineBell className="text-[32px]"/>
                </button>
            </div>
        </section>
    )
}

export default HeaderDashboard