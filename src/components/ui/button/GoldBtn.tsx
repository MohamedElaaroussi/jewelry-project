import Image from 'next/image'
import React, { ReactNode } from 'react'

const GoldBtn = ({ label, setOpenModal }: { label: string, setOpenModal: React.Dispatch<React.SetStateAction<boolean>> }): ReactNode => {
    return (
        <div onClick={() => setOpenModal(prev => true)} className='flex justify-center items-center gap-2 h-[3.5rem] mt-[7px]
        p-3 bg-[color:var(--goldColor)] rounded-3xl hover:cursor-pointer outline-none'>
            <Image src={"/ajouter.svg"} alt='export logo' width={15} height={15}></Image>
            <span className='text-white text-sm'>{label}</span>
        </div>
    )
}

export default GoldBtn