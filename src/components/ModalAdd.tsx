import { FaWindowClose, FaTrashAlt } from "react-icons/fa";
import styles from "../styles/Home.module.sass";
import { useForm } from "react-hook-form";
import { useState } from "react";

const ModalAdd = () => {
  const { register, handleSubmit } = useForm();
  const [changeModalSection, setChangeModalSection] = useState<boolean>(false);

  return (
    <>
      <section className="fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center z-10 bg-[rgba(0,0,0,0.5)] backdrop-blur-[2px]">
        <div className="bg-boxcolor rounded-lg gap-6 flex flex-col items-center justify-center px-8 py-12 w-[403px]">
          <button className="text-primarycolor flex text-end w-[100%] justify-end">
            <FaWindowClose />
          </button>
          <nav className="text-2xl flex w-[100%]">
            <button
              className={`${
                changeModalSection ? "text-placeholder" : "text-primarycolor"
              } border-b-[3px] font-bold size text-2xl mb-5 w-[50%]`}
              onClick={() => setChangeModalSection(false)}
            >
              Add Games
            </button>
            <button
              className={`${
                changeModalSection ? "text-primarycolor " : "text-placeholder "
              } border-b-[3px] font-bold size text-2xl mb-5 w-[50%]`}
              onClick={() => setChangeModalSection(true)}
            >
              My Games
            </button>
          </nav>
          {changeModalSection ? (
            <ul className={`${styles.ulModal}`}>
              <li className={`${styles.liModal}`}>
                <p>Game name</p>
                <FaTrashAlt className="text-deletecolor text-[15px]" />
              </li>
              <li className={`${styles.liModal}`}>
                <p>Game name</p>
                <FaTrashAlt className="text-deletecolor text-[15px]" />
              </li>
              <li className={`${styles.liModal}`}>
                <p>Game name</p>
                <FaTrashAlt className="text-deletecolor text-[15px]" />
              </li>
              <li className={`${styles.liModal}`}>
                <p>Game name</p>
                <FaTrashAlt className="text-deletecolor text-[15px]" />
              </li>
              <li className={`${styles.liModal}`}>
                <p>Game name</p>
                <FaTrashAlt className="text-deletecolor text-[15px]" />
              </li>
              <li className={`${styles.liModal}`}>
                <p>Game name</p>
                <FaTrashAlt className="text-deletecolor text-[15px]" />
              </li>
              <li className={`${styles.liModal}`}>
                <p>Game name</p>
                <FaTrashAlt className="text-deletecolor text-[15px]" />
              </li>
            </ul>
          ) : (
            <>
              <form className="flex flex-col gap-4 w-[100%]">
                <input
                  type="text"
                  placeholder="name"
                  {...register("name")}
                  className="rounded-lg w-[100%] p-4 bg-inputbackground placeholder-placeholder shadow-md focus:outline-none text-text"
                />
                <input
                  type="text"
                  placeholder="category"
                  {...register("category")}
                  className="rounded-lg w-[100%] p-4 bg-inputbackground placeholder-placeholder shadow-md focus:outline-none text-text"
                />
                <input
                  type="text"
                  placeholder="imagem URL"
                  {...register("imagemURL")}
                  className="rounded-lg w-[100%] p-4 bg-inputbackground placeholder-placeholder shadow-md focus:outline-none text-text"
                />
                <button className={styles.buttonModal}>Add</button>
              </form>
            </>
          )}
        </div>
      </section>{" "}
    </>
  );
};
export default ModalAdd;
