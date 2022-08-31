import React from "react";
import { useRouter } from "next/router";

type IAnimations = {
    id: string,
    animation: string,
    page: string
  }
  
const HandleOut = ({id, animation, page}: IAnimations) => {

    const navigate = useRouter()

    const container = document.getElementById(`${id}`)
    container?.classList.add('animate__animated', `${animation}`)
    setTimeout(() => {
      navigate.push(`/${page}`)
    }, 300);
  }

export default HandleOut