import { ReactNode } from 'react';
import styles from '../styles/Home.module.sass'
import { useForm } from 'react-hook-form';

interface IInputProps {
    children: ReactNode,
    type: string,
    placeholder: string,
    name?: string,
    register?: any
}

export default function Input({ children, type, placeholder, name, register }: IInputProps) {
    return(
        <label className={styles.inputBox}>
            {children}
            <input type={type} placeholder={placeholder} className={styles.input} {...register(name)}/>
        </label>
    )
}